import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft, Plus, Trash2, UserPlus } from "lucide-react";
import DashboardLayout from "@/components/DashboardLayout";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { supabase } from "@/integrations/supabase/client";
import {
  getProgramAssignments, addAssignment, removeAssignment,
  getProgramTasks, addTask, updateTask, deleteTask,
  type Program, type ProgramAssignment, type Task, type TaskStatus, type TaskPriority,
} from "@/lib/programs-data";
import { getStaff, type StaffMember } from "@/lib/staff-data";
import { toast } from "sonner";
import { motion } from "framer-motion";
import { useUserRole } from "@/hooks/useUserRole";

const statusColors: Record<string, string> = {
  planning: "bg-info/10 text-info border-info/20",
  active: "bg-success/10 text-success border-success/20",
  completed: "bg-muted text-muted-foreground border-border",
  on_hold: "bg-warning/10 text-warning border-warning/20",
};

const priorityColors: Record<string, string> = {
  low: "bg-muted text-muted-foreground",
  medium: "bg-warning/10 text-warning",
  high: "bg-destructive/10 text-destructive",
};

const taskStatusColors: Record<string, string> = {
  todo: "bg-muted text-muted-foreground",
  in_progress: "bg-info/10 text-info",
  completed: "bg-success/10 text-success",
};

export default function ProgramDetailPage() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { role } = useUserRole();
  const canEdit = role === "admin" || role === "director";
  const [program, setProgram] = useState<Program | null>(null);
  const [assignments, setAssignments] = useState<ProgramAssignment[]>([]);
  const [tasks, setTasks] = useState<Task[]>([]);
  const [staff, setStaff] = useState<StaffMember[]>([]);
  const [loading, setLoading] = useState(true);

  // Dialogs
  const [assignDialogOpen, setAssignDialogOpen] = useState(false);
  const [taskDialogOpen, setTaskDialogOpen] = useState(false);
  const [selectedStaff, setSelectedStaff] = useState("");
  const [assignRole, setAssignRole] = useState("Member");
  const [taskForm, setTaskForm] = useState({ title: "", description: "", assignedTo: "", priority: "medium" as TaskPriority, dueDate: "" });

  const load = async () => {
    if (!id) return;
    try {
      const { data, error } = await supabase.from("programs").select("*").eq("id", id).single();
      if (error) throw error;
      setProgram({
        id: data.id, name: data.name, description: data.description || "",
        type: data.type as any, status: data.status as any,
        startDate: data.start_date, endDate: data.end_date,
        budget: data.budget, location: data.location,
      });
      const [a, t, s] = await Promise.all([
        getProgramAssignments(id),
        getProgramTasks(id),
        getStaff(),
      ]);
      setAssignments(a);
      setTasks(t);
      setStaff(s);
    } catch (err: any) {
      toast.error(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => { load(); }, [id]);

  const handleAddAssignment = async () => {
    if (!selectedStaff || !id) return;
    try {
      await addAssignment(id, selectedStaff, assignRole);
      toast.success("Staff assigned");
      setAssignDialogOpen(false);
      setSelectedStaff("");
      setAssignRole("Member");
      load();
    } catch (err: any) {
      toast.error(err.message);
    }
  };

  const handleAddTask = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!id) return;
    try {
      await addTask({
        programId: id,
        title: taskForm.title,
        description: taskForm.description || null,
        assignedTo: taskForm.assignedTo || null,
        status: "todo",
        priority: taskForm.priority,
        dueDate: taskForm.dueDate || null,
      });
      toast.success("Task added");
      setTaskDialogOpen(false);
      setTaskForm({ title: "", description: "", assignedTo: "", priority: "medium", dueDate: "" });
      load();
    } catch (err: any) {
      toast.error(err.message);
    }
  };

  const handleTaskStatusChange = async (taskId: string, status: TaskStatus) => {
    try {
      await updateTask(taskId, { status });
      setTasks(prev => prev.map(t => t.id === taskId ? { ...t, status } : t));
    } catch (err: any) {
      toast.error(err.message);
    }
  };

  if (loading) {
    return <DashboardLayout><div className="flex justify-center py-16"><div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary" /></div></DashboardLayout>;
  }

  if (!program) {
    return <DashboardLayout><p className="text-muted-foreground">Program not found.</p></DashboardLayout>;
  }

  const assignedStaffIds = new Set(assignments.map(a => a.staffId));
  const availableStaff = staff.filter(s => !assignedStaffIds.has(s.id));

  return (
    <DashboardLayout>
      <Button variant="ghost" className="mb-4" onClick={() => navigate("/programs")}>
        <ArrowLeft className="h-4 w-4 mr-2" /> Back to Programs
      </Button>

      <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}>
        <div className="flex items-start justify-between mb-6">
          <div>
            <div className="flex items-center gap-3 mb-1">
              <h1 className="text-2xl font-bold text-foreground">{program.name}</h1>
              <Badge variant="outline" className={`text-xs capitalize ${statusColors[program.status]}`}>
                {program.status.replace("_", " ")}
              </Badge>
            </div>
            <p className="text-muted-foreground">{program.description || "No description"}</p>
          </div>
        </div>

        <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-8">
          <span>Type: <strong className="text-foreground capitalize">{program.type.replace("_", " ")}</strong></span>
          {program.startDate && <span>Start: <strong className="text-foreground">{program.startDate}</strong></span>}
          {program.endDate && <span>End: <strong className="text-foreground">{program.endDate}</strong></span>}
          {program.budget && <span>Budget: <strong className="text-foreground">${program.budget.toLocaleString()}</strong></span>}
          {program.location && <span>Location: <strong className="text-foreground">{program.location}</strong></span>}
        </div>

        {/* Assigned Staff */}
        <div className="rounded-xl border border-border bg-card p-6 shadow-sm mb-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-heading font-semibold">Assigned Staff ({assignments.length})</h2>
            {canEdit && (
              <Button size="sm" onClick={() => setAssignDialogOpen(true)}>
                <UserPlus className="h-4 w-4 mr-2" /> Assign Staff
              </Button>
            )}
          </div>
          {assignments.length === 0 ? (
            <p className="text-sm text-muted-foreground">No staff assigned yet.</p>
          ) : (
            <div className="space-y-2">
              {assignments.map(a => (
                <div key={a.id} className="flex items-center justify-between py-2 px-3 rounded-lg bg-muted/30">
                  <div>
                    <span className="font-medium text-foreground">{a.staffName}</span>
                    <span className="text-sm text-muted-foreground ml-2">— {a.roleInProgram}</span>
                  </div>
                  {canEdit && (
                    <Button variant="ghost" size="icon" className="h-8 w-8 text-destructive" onClick={async () => {
                      await removeAssignment(a.id);
                      toast.success("Staff removed from program");
                      load();
                    }}>
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Tasks */}
        <div className="rounded-xl border border-border bg-card p-6 shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-heading font-semibold">Tasks ({tasks.length})</h2>
            {canEdit && (
              <Button size="sm" onClick={() => setTaskDialogOpen(true)}>
                <Plus className="h-4 w-4 mr-2" /> Add Task
              </Button>
            )}
          </div>
          {tasks.length === 0 ? (
            <p className="text-sm text-muted-foreground">No tasks yet.</p>
          ) : (
            <div className="space-y-2">
              {tasks.map(t => (
                <div key={t.id} className="flex items-center justify-between py-3 px-3 rounded-lg bg-muted/30">
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <span className="font-medium text-foreground">{t.title}</span>
                      <Badge variant="outline" className={`text-xs ${priorityColors[t.priority]}`}>{t.priority}</Badge>
                    </div>
                    <div className="flex items-center gap-3 text-xs text-muted-foreground mt-1">
                      {t.assignedName && <span>Assigned: {t.assignedName}</span>}
                      {t.dueDate && <span>Due: {t.dueDate}</span>}
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Select value={t.status} onValueChange={(v) => handleTaskStatusChange(t.id, v as TaskStatus)}>
                      <SelectTrigger className="w-32 h-8 text-xs">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="todo">To Do</SelectItem>
                        <SelectItem value="in_progress">In Progress</SelectItem>
                        <SelectItem value="completed">Completed</SelectItem>
                      </SelectContent>
                    </Select>
                    {canEdit && (
                      <Button variant="ghost" size="icon" className="h-8 w-8 text-destructive" onClick={async () => {
                        await deleteTask(t.id);
                        toast.success("Task deleted");
                        load();
                      }}>
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </motion.div>

      {/* Assign Staff Dialog */}
      <Dialog open={assignDialogOpen} onOpenChange={v => !v && setAssignDialogOpen(false)}>
        <DialogContent className="sm:max-w-sm">
          <DialogHeader><DialogTitle>Assign Staff</DialogTitle></DialogHeader>
          <div className="space-y-4 mt-2">
            <div>
              <Label>Staff Member</Label>
              <Select value={selectedStaff} onValueChange={setSelectedStaff}>
                <SelectTrigger><SelectValue placeholder="Select staff" /></SelectTrigger>
                <SelectContent>
                  {availableStaff.map(s => <SelectItem key={s.id} value={s.id}>{s.name}</SelectItem>)}
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label htmlFor="arole">Role in Program</Label>
              <Input id="arole" value={assignRole} onChange={e => setAssignRole(e.target.value)} />
            </div>
            <div className="flex justify-end gap-2">
              <Button variant="outline" onClick={() => setAssignDialogOpen(false)}>Cancel</Button>
              <Button onClick={handleAddAssignment} disabled={!selectedStaff}>Assign</Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      {/* Add Task Dialog */}
      <Dialog open={taskDialogOpen} onOpenChange={v => !v && setTaskDialogOpen(false)}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader><DialogTitle>Add Task</DialogTitle></DialogHeader>
          <form onSubmit={handleAddTask} className="space-y-4 mt-2">
            <div>
              <Label htmlFor="ttitle">Title</Label>
              <Input id="ttitle" required value={taskForm.title} onChange={e => setTaskForm({ ...taskForm, title: e.target.value })} />
            </div>
            <div>
              <Label htmlFor="tdesc">Description</Label>
              <Input id="tdesc" value={taskForm.description} onChange={e => setTaskForm({ ...taskForm, description: e.target.value })} />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label>Assign To</Label>
                <Select value={taskForm.assignedTo} onValueChange={v => setTaskForm({ ...taskForm, assignedTo: v })}>
                  <SelectTrigger><SelectValue placeholder="Unassigned" /></SelectTrigger>
                  <SelectContent>
                    {staff.map(s => <SelectItem key={s.id} value={s.id}>{s.name}</SelectItem>)}
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label>Priority</Label>
                <Select value={taskForm.priority} onValueChange={v => setTaskForm({ ...taskForm, priority: v as TaskPriority })}>
                  <SelectTrigger><SelectValue /></SelectTrigger>
                  <SelectContent>
                    <SelectItem value="low">Low</SelectItem>
                    <SelectItem value="medium">Medium</SelectItem>
                    <SelectItem value="high">High</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div>
              <Label htmlFor="tdue">Due Date</Label>
              <Input id="tdue" type="date" value={taskForm.dueDate} onChange={e => setTaskForm({ ...taskForm, dueDate: e.target.value })} />
            </div>
            <div className="flex justify-end gap-2">
              <Button type="button" variant="outline" onClick={() => setTaskDialogOpen(false)}>Cancel</Button>
              <Button type="submit">Add Task</Button>
            </div>
          </form>
        </DialogContent>
      </Dialog>
    </DashboardLayout>
  );
}

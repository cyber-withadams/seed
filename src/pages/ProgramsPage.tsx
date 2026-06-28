import { useEffect, useState } from "react";
import { Plus, FolderOpen, GraduationCap, Search } from "lucide-react";
import DashboardLayout from "@/components/DashboardLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { getPrograms, deleteProgram, type Program } from "@/lib/programs-data";
import ProgramFormDialog from "@/components/ProgramFormDialog";
import { toast } from "sonner";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useUserRole } from "@/hooks/useUserRole";

const statusColors: Record<string, string> = {
  planning: "bg-info/10 text-info border-info/20",
  active: "bg-success/10 text-success border-success/20",
  completed: "bg-muted text-muted-foreground border-border",
  on_hold: "bg-warning/10 text-warning border-warning/20",
};

export default function ProgramsPage() {
  const navigate = useNavigate();
  const { role } = useUserRole();
  const canEdit = role === "admin" || role === "director";
  const [programs, setPrograms] = useState<Program[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [dialogOpen, setDialogOpen] = useState(false);
  const [editing, setEditing] = useState<Program | null>(null);

  const load = async () => {
    try {
      setPrograms(await getPrograms());
    } catch (err: any) {
      toast.error(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => { load(); }, []);

  const filtered = programs.filter(p => {
    const matchSearch = p.name.toLowerCase().includes(search.toLowerCase()) ||
      p.description.toLowerCase().includes(search.toLowerCase());
    const matchStatus = statusFilter === "all" || p.status === statusFilter;
    return matchSearch && matchStatus;
  });

  const handleDelete = async (id: string) => {
    try {
      await deleteProgram(id);
      setPrograms(prev => prev.filter(p => p.id !== id));
      toast.success("Program deleted");
    } catch (err: any) {
      toast.error(err.message);
    }
  };

  return (
    <DashboardLayout>
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6">
        <div>
          <h1 className="text-2xl font-bold text-foreground">Programs</h1>
          <p className="text-muted-foreground mt-1">{programs.length} programs</p>
        </div>
        {canEdit && (
          <Button onClick={() => { setEditing(null); setDialogOpen(true); }}>
            <Plus className="h-4 w-4 mr-2" /> New Program
          </Button>
        )}
      </div>

      <div className="flex flex-col sm:flex-row gap-3 mb-6">
        <div className="relative flex-1 sm:max-w-sm">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input placeholder="Search programs..." className="pl-9" value={search} onChange={e => setSearch(e.target.value)} />
        </div>
        <Select value={statusFilter} onValueChange={setStatusFilter}>
          <SelectTrigger className="w-40">
            <SelectValue placeholder="Status" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Status</SelectItem>
            <SelectItem value="planning">Planning</SelectItem>
            <SelectItem value="active">Active</SelectItem>
            <SelectItem value="completed">Completed</SelectItem>
            <SelectItem value="on_hold">On Hold</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {loading ? (
        <div className="flex justify-center py-16"><div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary" /></div>
      ) : filtered.length === 0 ? (
        <div className="text-center py-16 text-muted-foreground">
          <p className="text-lg font-medium">No programs found</p>
          <p className="text-sm mt-1">Create a new program to get started.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
          {filtered.map((program, i) => (
            <motion.div
              key={program.id}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
              className="rounded-xl border border-border bg-card p-5 shadow-sm hover:shadow-md transition-shadow cursor-pointer"
              onClick={() => navigate(`/programs/${program.id}`)}
            >
              <div className="flex items-start justify-between mb-3">
                <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  {program.type === "training" ? (
                    <GraduationCap className="h-5 w-5 text-primary" />
                  ) : (
                    <FolderOpen className="h-5 w-5 text-primary" />
                  )}
                </div>
                <Badge variant="outline" className={`text-xs capitalize ${statusColors[program.status]}`}>
                  {program.status.replace("_", " ")}
                </Badge>
              </div>
              <h3 className="font-heading font-semibold text-foreground mb-1">{program.name}</h3>
              <p className="text-sm text-muted-foreground line-clamp-2 mb-3">{program.description || "No description"}</p>
              <div className="flex items-center gap-3 text-xs text-muted-foreground">
                {program.startDate && <span>{new Date(program.startDate).toLocaleDateString("en-US", { month: "short", year: "numeric" })}</span>}
                {program.budget && <span>Budget: ${program.budget.toLocaleString()}</span>}
                {program.location && <span>{program.location}</span>}
              </div>
            </motion.div>
          ))}
        </div>
      )}

      <ProgramFormDialog
        open={dialogOpen}
        onClose={() => { setDialogOpen(false); setEditing(null); }}
        onSaved={load}
        initial={editing}
      />
    </DashboardLayout>
  );
}

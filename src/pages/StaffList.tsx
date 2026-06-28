import { useState, useEffect, useMemo } from "react";
import { Search, Plus } from "lucide-react";
import { motion } from "framer-motion";
import { getStaff, deleteStaffMember, updateStaffMember, addStaffMember, type StaffMember } from "@/lib/staff-data";
import DashboardLayout from "@/components/DashboardLayout";
import StaffTable from "@/components/StaffTable";
import StaffFormDialog from "@/components/StaffFormDialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "sonner";
import { useUserRole } from "@/hooks/useUserRole";

export default function StaffList() {
  const { role } = useUserRole();
  const canEdit = role === "admin" || role === "director";
  const [staff, setStaff] = useState<StaffMember[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [editing, setEditing] = useState<StaffMember | null>(null);
  const [dialogOpen, setDialogOpen] = useState(false);

  const load = async () => {
    try {
      setStaff(await getStaff());
    } catch (err: any) {
      toast.error(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => { load(); }, []);

  const filtered = useMemo(() => {
    return staff.filter(s => {
      const matchSearch = s.name.toLowerCase().includes(search.toLowerCase()) ||
        s.email.toLowerCase().includes(search.toLowerCase()) ||
        s.role.toLowerCase().includes(search.toLowerCase());
      const matchStatus = statusFilter === "all" || s.status === statusFilter;
      return matchSearch && matchStatus;
    });
  }, [staff, search, statusFilter]);

  const handleDelete = async (id: string) => {
    try {
      await deleteStaffMember(id);
      setStaff(prev => prev.filter(s => s.id !== id));
      toast.success("Staff member removed");
    } catch (err: any) {
      toast.error(err.message);
    }
  };

  const handleEdit = (member: StaffMember) => {
    setEditing(member);
    setDialogOpen(true);
  };

  const handleSave = async (data: Omit<StaffMember, "id">) => {
    try {
      if (editing) {
        await updateStaffMember(editing.id, data);
        toast.success("Staff member updated");
      } else {
        await addStaffMember(data);
        toast.success("Staff member added");
      }
      setEditing(null);
      load();
    } catch (err: any) {
      toast.error(err.message);
    }
  };

  return (
    <DashboardLayout>
      <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6">
        <div>
          <h1 className="text-2xl font-bold text-foreground">Staff Directory</h1>
          <p className="text-muted-foreground mt-1">{staff.length} team members</p>
        </div>
        {canEdit && (
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <Button onClick={() => { setEditing(null); setDialogOpen(true); }}>
            <Plus className="h-4 w-4 mr-2" /> Add Staff
          </Button>
          </motion.div>
        )}
      </div>

      <div className="flex flex-col sm:flex-row gap-3 mb-6">
        <div className="relative flex-1 sm:max-w-sm">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input placeholder="Search staff..." className="pl-9" value={search} onChange={e => setSearch(e.target.value)} />
        </div>
        <Select value={statusFilter} onValueChange={setStatusFilter}>
          <SelectTrigger className="w-40">
            <SelectValue placeholder="Status" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Status</SelectItem>
            <SelectItem value="active">Active</SelectItem>
            <SelectItem value="on-leave">On Leave</SelectItem>
            <SelectItem value="inactive">Inactive</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {loading ? (
        <div className="flex justify-center py-16"><div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary" /></div>
      ) : (
        <StaffTable staff={filtered} onEdit={canEdit ? handleEdit : undefined} onDelete={canEdit ? handleDelete : undefined} />
      )}

      <StaffFormDialog
        open={dialogOpen}
        onClose={() => { setDialogOpen(false); setEditing(null); }}
        onSave={handleSave}
        initial={editing}
      />
      </motion.div>
    </DashboardLayout>
  );
}

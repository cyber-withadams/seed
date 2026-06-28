import { useState } from "react";
import { useNavigate } from "react-router-dom";
import DashboardLayout from "@/components/DashboardLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { addStaffMember, type StaffRole, type Department, type StaffStatus } from "@/lib/staff-data";
import { toast } from "sonner";
import { motion } from "framer-motion";

const roles: StaffRole[] = ["Program Manager", "Field Officer", "Finance", "Admin", "Volunteer Coordinator", "Communications"];
const departments: Department[] = ["Programs", "Operations", "Finance", "Communications", "Field Operations"];

export default function AddStaff() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: "", email: "", phone: "",
    role: "Field Officer" as StaffRole,
    department: "Programs" as Department,
    status: "active" as StaffStatus,
    joinDate: new Date().toISOString().split("T")[0],
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      await addStaffMember(form);
      toast.success(`${form.name} has been added to the team!`);
      navigate("/staff");
    } catch (err: any) {
      toast.error(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <DashboardLayout>
      <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} className="max-w-2xl">
        <h1 className="text-2xl font-bold text-foreground mb-1">Add Staff Member</h1>
        <p className="text-muted-foreground mb-6">Fill in the details below to add a new team member.</p>

        <form onSubmit={handleSubmit} className="rounded-xl border border-border bg-card p-6 shadow-sm space-y-5">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="sm:col-span-2">
              <Label htmlFor="name">Full Name</Label>
              <Input id="name" required value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} />
            </div>
            <div>
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" required value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} />
            </div>
            <div>
              <Label htmlFor="phone">Phone</Label>
              <Input id="phone" value={form.phone} onChange={e => setForm({ ...form, phone: e.target.value })} />
            </div>
            <div>
              <Label>Role</Label>
              <Select value={form.role} onValueChange={v => setForm({ ...form, role: v as StaffRole })}>
                <SelectTrigger><SelectValue /></SelectTrigger>
                <SelectContent>{roles.map(r => <SelectItem key={r} value={r}>{r}</SelectItem>)}</SelectContent>
              </Select>
            </div>
            <div>
              <Label>Department</Label>
              <Select value={form.department} onValueChange={v => setForm({ ...form, department: v as Department })}>
                <SelectTrigger><SelectValue /></SelectTrigger>
                <SelectContent>{departments.map(d => <SelectItem key={d} value={d}>{d}</SelectItem>)}</SelectContent>
              </Select>
            </div>
            <div>
              <Label htmlFor="joinDate">Join Date</Label>
              <Input id="joinDate" type="date" value={form.joinDate} onChange={e => setForm({ ...form, joinDate: e.target.value })} />
            </div>
          </div>
          <div className="flex gap-3 pt-2">
            <Button type="submit" disabled={loading}>{loading ? "Adding..." : "Add Member"}</Button>
            <Button type="button" variant="outline" onClick={() => navigate("/staff")}>Cancel</Button>
          </div>
        </form>
      </motion.div>
    </DashboardLayout>
  );
}

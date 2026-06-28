import { useEffect, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import type { StaffMember, StaffRole, Department, StaffStatus } from "@/lib/staff-data";

const roles: StaffRole[] = ["Program Manager", "Field Officer", "Finance", "Admin", "Volunteer Coordinator", "Communications"];
const departments: Department[] = ["Programs", "Operations", "Finance", "Communications", "Field Operations"];
const statuses: StaffStatus[] = ["active", "on-leave", "inactive"];

interface Props {
  open: boolean;
  onClose: () => void;
  onSave: (data: Omit<StaffMember, "id">) => void;
  initial?: StaffMember | null;
}

export default function StaffFormDialog({ open, onClose, onSave, initial }: Props) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    role: "Field Officer" as StaffRole,
    department: "Programs" as Department,
    status: "active" as StaffStatus,
    joinDate: new Date().toISOString().split("T")[0],
  });

  useEffect(() => {
    if (initial) {
      setForm({
        name: initial.name,
        email: initial.email,
        phone: initial.phone,
        role: initial.role,
        department: initial.department,
        status: initial.status,
        joinDate: initial.joinDate,
      });
    } else {
      setForm({
        name: "",
        email: "",
        phone: "",
        role: "Field Officer",
        department: "Programs",
        status: "active",
        joinDate: new Date().toISOString().split("T")[0],
      });
    }
  }, [initial, open]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(form);
    onClose();
  };

  return (
    <Dialog open={open} onOpenChange={(v) => !v && onClose()}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="font-heading">{initial ? "Edit Staff Member" : "Add Staff Member"}</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4 mt-2">
          <div className="grid grid-cols-2 gap-4">
            <div className="col-span-2">
              <Label htmlFor="name">Full Name</Label>
              <Input id="name" required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
            </div>
            <div>
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" required value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />
            </div>
            <div>
              <Label htmlFor="phone">Phone</Label>
              <Input id="phone" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} />
            </div>
            <div>
              <Label>Role</Label>
              <Select value={form.role} onValueChange={(v) => setForm({ ...form, role: v as StaffRole })}>
                <SelectTrigger><SelectValue /></SelectTrigger>
                <SelectContent>
                  {roles.map(r => <SelectItem key={r} value={r}>{r}</SelectItem>)}
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label>Department</Label>
              <Select value={form.department} onValueChange={(v) => setForm({ ...form, department: v as Department })}>
                <SelectTrigger><SelectValue /></SelectTrigger>
                <SelectContent>
                  {departments.map(d => <SelectItem key={d} value={d}>{d}</SelectItem>)}
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label>Status</Label>
              <Select value={form.status} onValueChange={(v) => setForm({ ...form, status: v as StaffStatus })}>
                <SelectTrigger><SelectValue /></SelectTrigger>
                <SelectContent>
                  {statuses.map(s => <SelectItem key={s} value={s} className="capitalize">{s.replace("-", " ")}</SelectItem>)}
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label htmlFor="joinDate">Join Date</Label>
              <Input id="joinDate" type="date" value={form.joinDate} onChange={(e) => setForm({ ...form, joinDate: e.target.value })} />
            </div>
          </div>
          <div className="flex justify-end gap-2 pt-2">
            <Button type="button" variant="outline" onClick={onClose}>Cancel</Button>
            <Button type="submit">{initial ? "Save Changes" : "Add Member"}</Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}

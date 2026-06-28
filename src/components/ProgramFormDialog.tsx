import { useEffect, useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { addProgram, updateProgram, type Program, type ProgramType, type ProgramStatus } from "@/lib/programs-data";
import { toast } from "sonner";

interface Props {
  open: boolean;
  onClose: () => void;
  onSaved: () => void;
  initial?: Program | null;
}

export default function ProgramFormDialog({ open, onClose, onSaved, initial }: Props) {
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: "",
    description: "",
    type: "community_project" as ProgramType,
    status: "planning" as ProgramStatus,
    startDate: "",
    endDate: "",
    budget: "",
    location: "",
  });

  useEffect(() => {
    if (initial) {
      setForm({
        name: initial.name,
        description: initial.description,
        type: initial.type,
        status: initial.status,
        startDate: initial.startDate || "",
        endDate: initial.endDate || "",
        budget: initial.budget?.toString() || "",
        location: initial.location || "",
      });
    } else {
      setForm({ name: "", description: "", type: "community_project", status: "planning", startDate: "", endDate: "", budget: "", location: "" });
    }
  }, [initial, open]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const data = {
        name: form.name,
        description: form.description,
        type: form.type,
        status: form.status,
        startDate: form.startDate || null,
        endDate: form.endDate || null,
        budget: form.budget ? parseFloat(form.budget) : null,
        location: form.location || null,
      };
      if (initial) {
        await updateProgram(initial.id, data);
        toast.success("Program updated");
      } else {
        await addProgram(data);
        toast.success("Program created");
      }
      onSaved();
      onClose();
    } catch (err: any) {
      toast.error(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={(v) => !v && onClose()}>
      <DialogContent className="sm:max-w-lg">
        <DialogHeader>
          <DialogTitle className="font-heading">{initial ? "Edit Program" : "New Program"}</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4 mt-2">
          <div>
            <Label htmlFor="pname">Program Name</Label>
            <Input id="pname" required value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} />
          </div>
          <div>
            <Label htmlFor="pdesc">Description</Label>
            <Textarea id="pdesc" rows={3} value={form.description} onChange={e => setForm({ ...form, description: e.target.value })} />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label>Type</Label>
              <Select value={form.type} onValueChange={v => setForm({ ...form, type: v as ProgramType })}>
                <SelectTrigger><SelectValue /></SelectTrigger>
                <SelectContent>
                  <SelectItem value="community_project">Community Project</SelectItem>
                  <SelectItem value="training">Training</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label>Status</Label>
              <Select value={form.status} onValueChange={v => setForm({ ...form, status: v as ProgramStatus })}>
                <SelectTrigger><SelectValue /></SelectTrigger>
                <SelectContent>
                  <SelectItem value="planning">Planning</SelectItem>
                  <SelectItem value="active">Active</SelectItem>
                  <SelectItem value="completed">Completed</SelectItem>
                  <SelectItem value="on_hold">On Hold</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label htmlFor="sdate">Start Date</Label>
              <Input id="sdate" type="date" value={form.startDate} onChange={e => setForm({ ...form, startDate: e.target.value })} />
            </div>
            <div>
              <Label htmlFor="edate">End Date</Label>
              <Input id="edate" type="date" value={form.endDate} onChange={e => setForm({ ...form, endDate: e.target.value })} />
            </div>
            <div>
              <Label htmlFor="budget">Budget ($)</Label>
              <Input id="budget" type="number" step="0.01" value={form.budget} onChange={e => setForm({ ...form, budget: e.target.value })} />
            </div>
            <div>
              <Label htmlFor="location">Location</Label>
              <Input id="location" value={form.location} onChange={e => setForm({ ...form, location: e.target.value })} />
            </div>
          </div>
          <div className="flex justify-end gap-2 pt-2">
            <Button type="button" variant="outline" onClick={onClose}>Cancel</Button>
            <Button type="submit" disabled={loading}>{loading ? "Saving..." : initial ? "Save Changes" : "Create Program"}</Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}

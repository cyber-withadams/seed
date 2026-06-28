import { useState, useEffect } from "react";
import DashboardLayout from "@/components/DashboardLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import { motion } from "framer-motion";
import { UserPlus, Trash2, Shield, Users, Crown } from "lucide-react";

interface ManagedUser {
  id: string;
  email: string;
  display_name: string;
  role: string;
  created_at: string;
  last_sign_in_at: string | null;
}

const roleInfo: Record<string, { label: string; color: string; icon: any; description: string }> = {
  admin: {
    label: "System Admin",
    color: "bg-red-500/10 text-red-600 border-red-500/20",
    icon: Shield,
    description: "Full system access. Can create/manage all users, configure settings, and manage all data.",
  },
  director: {
    label: "Director",
    color: "bg-amber-500/10 text-amber-600 border-amber-500/20",
    icon: Crown,
    description: "Can manage staff, programs, tasks, and calendar. Cannot manage users or system settings.",
  },
  user: {
    label: "User",
    color: "bg-blue-500/10 text-blue-600 border-blue-500/20",
    icon: Users,
    description: "View-only access to staff, programs, and calendar. Limited editing capabilities.",
  },
};

export default function AdminUsersPage() {
  const [users, setUsers] = useState<ManagedUser[]>([]);
  const [loading, setLoading] = useState(true);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [creating, setCreating] = useState(false);
  const [form, setForm] = useState({ email: "", password: "", display_name: "", role: "user" });

  const fetchUsers = async () => {
    setLoading(true);
    const { data, error } = await supabase.functions.invoke("manage-users", {
      body: { action: "list_users" },
    });
    if (error) {
      toast.error("Failed to load users");
    } else {
      setUsers(data.users || []);
    }
    setLoading(false);
  };

  useEffect(() => { fetchUsers(); }, []);

  const handleCreate = async (e: React.FormEvent) => {
    e.preventDefault();
    if (form.password.length < 6) {
      toast.error("Password must be at least 6 characters");
      return;
    }
    setCreating(true);
    const { data, error } = await supabase.functions.invoke("manage-users", {
      body: { action: "create_user", ...form },
    });
    if (error || data?.error) {
      toast.error(data?.error || "Failed to create user");
    } else {
      toast.success(`Account created for ${form.email}`);
      setForm({ email: "", password: "", display_name: "", role: "user" });
      setDialogOpen(false);
      fetchUsers();
    }
    setCreating(false);
  };

  const handleDelete = async (userId: string, email: string) => {
    if (!confirm(`Delete user ${email}? This cannot be undone.`)) return;
    const { data, error } = await supabase.functions.invoke("manage-users", {
      body: { action: "delete_user", user_id: userId },
    });
    if (error || data?.error) {
      toast.error(data?.error || "Failed to delete user");
    } else {
      toast.success("User deleted");
      fetchUsers();
    }
  };

  const handleRoleChange = async (userId: string, newRole: string) => {
    const { data, error } = await supabase.functions.invoke("manage-users", {
      body: { action: "update_role", user_id: userId, role: newRole },
    });
    if (error || data?.error) {
      toast.error(data?.error || "Failed to update role");
    } else {
      toast.success("Role updated");
      fetchUsers();
    }
  };

  return (
    <DashboardLayout>
      <div className="mb-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-foreground">User Management</h1>
          <p className="text-muted-foreground text-sm mt-1">Create and manage user accounts & roles</p>
        </div>
        <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
          <DialogTrigger asChild>
            <Button className="gap-2">
              <UserPlus className="h-4 w-4" /> Create Account
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Create New User Account</DialogTitle>
            </DialogHeader>
            <form onSubmit={handleCreate} className="space-y-4 mt-2">
              <div>
                <Label>Display Name</Label>
                <Input
                  placeholder="e.g. John Doe"
                  value={form.display_name}
                  onChange={(e) => setForm({ ...form, display_name: e.target.value })}
                  required
                />
              </div>
              <div>
                <Label>Email</Label>
                <Input
                  type="email"
                  placeholder="user@seedmove.org"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  required
                />
              </div>
              <div>
                <Label>Password</Label>
                <Input
                  type="password"
                  placeholder="Min 6 characters"
                  value={form.password}
                  onChange={(e) => setForm({ ...form, password: e.target.value })}
                  required
                  minLength={6}
                />
              </div>
              <div>
                <Label>Role</Label>
                <Select value={form.role} onValueChange={(v) => setForm({ ...form, role: v })}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="user">User — View access</SelectItem>
                    <SelectItem value="director">Director — Manage staff & programs</SelectItem>
                    <SelectItem value="admin">Admin — Full system access</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <Button type="submit" className="w-full" disabled={creating}>
                {creating ? "Creating..." : "Create Account"}
              </Button>
            </form>
          </DialogContent>
        </Dialog>
      </div>

      {/* Role legend */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
        {Object.entries(roleInfo).map(([key, info], i) => {
          const Icon = info.icon;
          return (
            <motion.div
              key={key}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="rounded-xl border border-border bg-card p-4 shadow-sm"
            >
              <div className="flex items-center gap-2 mb-2">
                <Icon className="h-4 w-4 text-muted-foreground" />
                <Badge variant="outline" className={info.color}>{info.label}</Badge>
              </div>
              <p className="text-xs text-muted-foreground">{info.description}</p>
            </motion.div>
          );
        })}
      </div>

      {/* Users list */}
      {loading ? (
        <div className="flex justify-center py-16">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary" />
        </div>
      ) : (
        <div className="space-y-3">
          {users.map((u, i) => {
            const info = roleInfo[u.role] || roleInfo.user;
            const Icon = info.icon;
            return (
              <motion.div
                key={u.id}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.05 }}
                className="rounded-xl border border-border bg-card p-4 shadow-sm flex flex-col sm:flex-row sm:items-center gap-4"
              >
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <Icon className="h-4 w-4 text-muted-foreground shrink-0" />
                    <span className="font-medium text-foreground truncate">{u.display_name}</span>
                    <Badge variant="outline" className={`${info.color} text-xs`}>{info.label}</Badge>
                  </div>
                  <p className="text-sm text-muted-foreground truncate">{u.email}</p>
                  <p className="text-xs text-muted-foreground mt-1">
                    Last sign-in: {u.last_sign_in_at ? new Date(u.last_sign_in_at).toLocaleDateString() : "Never"}
                  </p>
                </div>
                <div className="flex items-center gap-2 shrink-0">
                  <Select value={u.role} onValueChange={(v) => handleRoleChange(u.id, v)}>
                    <SelectTrigger className="w-32">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="user">User</SelectItem>
                      <SelectItem value="director">Director</SelectItem>
                      <SelectItem value="admin">Admin</SelectItem>
                    </SelectContent>
                  </Select>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="text-destructive hover:text-destructive hover:bg-destructive/10"
                    onClick={() => handleDelete(u.id, u.email)}
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </motion.div>
            );
          })}
          {users.length === 0 && (
            <p className="text-center text-muted-foreground py-8">No users found.</p>
          )}
        </div>
      )}
    </DashboardLayout>
  );
}

import { useEffect, useState } from "react";
import { Users, UserCheck, UserX, Clock, FolderOpen, CheckSquare } from "lucide-react";
import { getStaff, type StaffMember } from "@/lib/staff-data";
import { getPrograms, type Program } from "@/lib/programs-data";
import DashboardLayout from "@/components/DashboardLayout";
import StatCard from "@/components/StatCard";
import { motion } from "framer-motion";
import { toast } from "sonner";

export default function Dashboard() {
  const [staff, setStaff] = useState<StaffMember[]>([]);
  const [programs, setPrograms] = useState<Program[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    Promise.all([getStaff(), getPrograms()])
      .then(([s, p]) => { setStaff(s); setPrograms(p); })
      .catch(err => toast.error(err.message))
      .finally(() => setLoading(false));
  }, []);

  const stats = {
    total: staff.length,
    active: staff.filter(s => s.status === "active").length,
    onLeave: staff.filter(s => s.status === "on-leave").length,
    inactive: staff.filter(s => s.status === "inactive").length,
  };

  const activePrograms = programs.filter(p => p.status === "active").length;

  const deptCounts = (() => {
    const counts: Record<string, number> = {};
    staff.forEach(s => { counts[s.department] = (counts[s.department] || 0) + 1; });
    return Object.entries(counts).sort((a, b) => b[1] - a[1]);
  })();

  if (loading) {
    return <DashboardLayout><div className="flex justify-center py-16"><div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary" /></div></DashboardLayout>;
  }

  return (
    <DashboardLayout>
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-foreground">Dashboard</h1>
        <p className="text-muted-foreground mt-1">Overview of SeedMove staff & programs</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-5 mb-8">
        <StatCard title="Total Staff" value={stats.total} icon={Users} colorVar="--stat-1" delay={0} />
        <StatCard title="Active" value={stats.active} icon={UserCheck} colorVar="--stat-2" delay={0.1} />
        <StatCard title="On Leave" value={stats.onLeave} icon={Clock} colorVar="--stat-3" delay={0.2} />
        <StatCard title="Inactive" value={stats.inactive} icon={UserX} colorVar="--stat-4" delay={0.3} />
        <StatCard title="Programs" value={programs.length} icon={FolderOpen} colorVar="--stat-1" delay={0.4} />
        <StatCard title="Active Programs" value={activePrograms} icon={CheckSquare} colorVar="--stat-2" delay={0.5} />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="rounded-xl border border-border bg-card p-6 shadow-sm"
      >
        <h2 className="text-lg font-heading font-semibold mb-4">Staff by Department</h2>
        {deptCounts.length === 0 ? (
          <p className="text-sm text-muted-foreground">No staff data yet.</p>
        ) : (
          <div className="space-y-3">
            {deptCounts.map(([dept, count]) => (
              <div key={dept} className="flex items-center gap-4">
                <span className="text-sm w-40 text-foreground font-medium">{dept}</span>
                <div className="flex-1 h-3 bg-muted rounded-full overflow-hidden">
                  <div
                    className="h-full bg-primary rounded-full transition-all"
                    style={{ width: `${(count / stats.total) * 100}%` }}
                  />
                </div>
                <span className="text-sm text-muted-foreground font-medium w-8 text-right">{count}</span>
              </div>
            ))}
          </div>
        )}
      </motion.div>
    </DashboardLayout>
  );
}

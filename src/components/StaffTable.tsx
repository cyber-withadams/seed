import { StaffMember } from "@/lib/staff-data";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Pencil, Trash2 } from "lucide-react";
import { motion } from "framer-motion";

const statusStyles: Record<string, string> = {
  active: "bg-success/10 text-success border-success/20",
  "on-leave": "bg-warning/10 text-warning border-warning/20",
  inactive: "bg-muted text-muted-foreground border-border",
};

interface Props {
  staff: StaffMember[];
  onEdit?: (member: StaffMember) => void;
  onDelete?: (id: string) => void;
}

export default function StaffTable({ staff, onEdit, onDelete }: Props) {
  if (staff.length === 0) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="text-center py-16 text-muted-foreground"
      >
        <p className="text-lg font-medium">No staff members found</p>
        <p className="text-sm mt-1">Try adjusting your search or add a new member.</p>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="overflow-x-auto rounded-xl border border-border bg-card"
    >
      <table className="w-full min-w-[640px] text-sm">
        <thead>
          <tr className="border-b border-border bg-muted/50">
            <th className="text-left px-5 py-3 font-semibold text-muted-foreground">Name</th>
            <th className="text-left px-5 py-3 font-semibold text-muted-foreground">Role</th>
            <th className="text-left px-5 py-3 font-semibold text-muted-foreground">Department</th>
            <th className="text-left px-5 py-3 font-semibold text-muted-foreground">Status</th>
            <th className="text-left px-5 py-3 font-semibold text-muted-foreground">Joined</th>
            {(onEdit || onDelete) && <th className="text-right px-5 py-3 font-semibold text-muted-foreground">Actions</th>}
          </tr>
        </thead>
        <tbody>
          {staff.map((member, i) => (
            <motion.tr
              key={member.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.04, duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ backgroundColor: "hsl(var(--muted) / 0.4)" }}
              className="border-b border-border last:border-0 transition-colors"
            >
              <td className="px-5 py-4">
                <div>
                  <p className="font-semibold text-foreground">{member.name}</p>
                  <p className="text-xs text-muted-foreground">{member.email}</p>
                </div>
              </td>
              <td className="px-5 py-4 text-foreground">{member.role}</td>
              <td className="px-5 py-4 text-foreground">{member.department}</td>
              <td className="px-5 py-4">
                <Badge variant="outline" className={`text-xs capitalize ${statusStyles[member.status]}`}>
                  {member.status.replace("-", " ")}
                </Badge>
              </td>
              <td className="px-5 py-4 text-muted-foreground">
                {new Date(member.joinDate).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}
              </td>
              {(onEdit || onDelete) && (
              <td className="px-5 py-4 text-right">
                <div className="flex justify-end gap-1">
                  {onEdit && (
                  <motion.div whileHover={{ scale: 1.15 }} whileTap={{ scale: 0.9 }}>
                    <Button variant="ghost" size="icon" className="h-8 w-8" onClick={() => onEdit(member)}>
                      <Pencil className="h-4 w-4" />
                    </Button>
                  </motion.div>
                  )}
                  {onDelete && (
                  <motion.div whileHover={{ scale: 1.15 }} whileTap={{ scale: 0.9 }}>
                    <Button variant="ghost" size="icon" className="h-8 w-8 text-destructive hover:text-destructive" onClick={() => onDelete(member.id)}>
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </motion.div>
                  )}
                </div>
              </td>
              )}
            </motion.tr>
          ))}
        </tbody>
      </table>
    </motion.div>
  );
}

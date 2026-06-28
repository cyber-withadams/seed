import { LucideIcon } from "lucide-react";
import { motion } from "framer-motion";

interface StatCardProps {
  title: string;
  value: number;
  icon: LucideIcon;
  colorVar: string;
  delay?: number;
}

export default function StatCard({ title, value, icon: Icon, colorVar, delay = 0 }: StatCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.5, delay, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -4, scale: 1.02, transition: { duration: 0.2 } }}
      className="rounded-xl border border-border bg-card p-6 shadow-sm hover:shadow-md transition-shadow cursor-default"
    >
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm text-muted-foreground font-medium">{title}</p>
          <motion.p
            className="text-3xl font-heading font-bold mt-1"
            style={{ color: `hsl(var(${colorVar}))` }}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: delay + 0.3, duration: 0.4, type: "spring", stiffness: 200 }}
          >
            {value}
          </motion.p>
        </div>
        <motion.div
          className="h-12 w-12 rounded-xl flex items-center justify-center"
          style={{ backgroundColor: `hsl(var(${colorVar}) / 0.12)` }}
          whileHover={{ rotate: 15, scale: 1.1 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <Icon className="h-6 w-6" style={{ color: `hsl(var(${colorVar}))` }} />
        </motion.div>
      </div>
    </motion.div>
  );
}

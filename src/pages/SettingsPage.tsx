import DashboardLayout from "@/components/DashboardLayout";
import { motion } from "framer-motion";
import seedmoveLogo from "@/assets/seedmove-logo.png";

export default function SettingsPage() {
  return (
    <DashboardLayout>
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-2xl"
      >
        <h1 className="text-2xl font-bold text-foreground mb-1">Settings</h1>
        <p className="text-muted-foreground mb-6">
          Organization settings and preferences
        </p>

        <div className="rounded-xl border border-border bg-card p-6 shadow-sm">
          <div className="flex items-center gap-4 mb-6">
            <img
              src={seedmoveLogo}
              alt="SeedMove"
              className="h-16 w-16 rounded-xl bg-muted p-2 object-contain"
            />
            <div>
              <h2 className="text-lg font-heading font-semibold">
                SeedMove NGO
              </h2>
              <p className="text-sm text-muted-foreground">
                Staff Management System
              </p>
            </div>
          </div>
          <div className="space-y-4 text-sm">
            <div className="flex justify-between py-2 border-b border-border">
              <span className="text-muted-foreground">Organization</span>
              <span className="font-medium text-foreground">SeedMove</span>
            </div>
            <div className="flex justify-between py-2 border-b border-border">
              <span className="text-muted-foreground">Data Storage</span>
              <span className="font-medium text-foreground">
                Local (Browser)
              </span>
            </div>
            <div className="flex justify-between py-2">
              <span className="text-muted-foreground">Version</span>
              <span className="font-medium text-foreground">1.0.0</span>
            </div>
          </div>
        </div>
      </motion.div>
    </DashboardLayout>
  );
}

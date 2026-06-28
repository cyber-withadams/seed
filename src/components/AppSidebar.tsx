import { useState } from "react";
import { LayoutDashboard, Users, UserPlus, Settings, FolderOpen, LogOut, CalendarDays, Menu, ShieldCheck } from "lucide-react";
import { NavLink } from "react-router-dom";
import { useAuth } from "@/hooks/useAuth";
import { useUserRole } from "@/hooks/useUserRole";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import seedmoveLogo from "@/assets/seedmove-logo-new.png";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

interface NavItem {
  to: string;
  icon: any;
  label: string;
  adminOnly?: boolean;
  hideForUser?: boolean;
}

const allNavItems: NavItem[] = [
  { to: "/", icon: LayoutDashboard, label: "Dashboard" },
  { to: "/staff", icon: Users, label: "Staff" },
  { to: "/add-staff", icon: UserPlus, label: "Add Staff", hideForUser: true },
  { to: "/programs", icon: FolderOpen, label: "Programs" },
  { to: "/calendar", icon: CalendarDays, label: "Calendar" },
  { to: "/admin/users", icon: ShieldCheck, label: "User Management", adminOnly: true },
  { to: "/settings", icon: Settings, label: "Settings" },
];

function SidebarContent({ onNavigate }: { onNavigate?: () => void }) {
  const { signOut, user } = useAuth();
  const { role, isAdmin } = useUserRole();

  const navItems = allNavItems.filter((item) => {
    if (item.adminOnly && !isAdmin) return false;
    if (item.hideForUser && role === "user") return false;
    return true;
  });

  return (
    <div className="flex flex-col h-full bg-sidebar text-sidebar-foreground">
      <motion.div
        className="flex items-center gap-3 px-6 py-6 border-b border-sidebar-border"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.4 }}
      >
        <motion.img
          src={seedmoveLogo}
          alt="SeedMove"
          className="h-10 w-10 rounded-lg bg-sidebar-foreground/10 p-1 object-contain"
          whileHover={{ rotate: 10, scale: 1.1 }}
          transition={{ type: "spring", stiffness: 300 }}
        />
        <div>
          <h1 className="text-lg font-heading font-bold text-sidebar-foreground">SeedMove</h1>
          <p className="text-xs text-sidebar-foreground/60">Staff & Programs</p>
        </div>
      </motion.div>

      <nav className="flex-1 px-3 py-4 space-y-1 overflow-y-auto">
        {navItems.map(({ to, icon: Icon, label }, i) => (
          <motion.div
            key={to}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 + i * 0.05, duration: 0.3 }}
          >
            <NavLink
              to={to}
              end={to === "/"}
              onClick={onNavigate}
              className={({ isActive }) =>
                `flex items-center gap-3 px-4 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 ${
                  isActive
                    ? "bg-sidebar-accent text-sidebar-primary shadow-sm"
                    : "text-sidebar-foreground/70 hover:bg-sidebar-accent/50 hover:text-sidebar-foreground hover:translate-x-1"
                }`
              }
            >
              <Icon className="h-5 w-5" />
              {label}
            </NavLink>
          </motion.div>
        ))}
      </nav>

      <motion.div
        className="px-4 py-4 border-t border-sidebar-border space-y-3"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        {user && (
          <p className="text-xs text-sidebar-foreground/60 truncate">{user.email}</p>
        )}
        <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
          <Button
            variant="ghost"
            size="sm"
            className="w-full justify-start text-sidebar-foreground/70 hover:text-sidebar-foreground hover:bg-sidebar-accent/50"
            onClick={signOut}
          >
            <LogOut className="h-4 w-4 mr-2" /> Sign Out
          </Button>
        </motion.div>
        <p className="text-xs text-sidebar-foreground/40 text-center">© 2026 SeedMove NGO</p>
      </motion.div>
    </div>
  );
}

export function MobileHeader() {
  const [open, setOpen] = useState(false);

  return (
    <div className="md:hidden fixed top-0 left-0 right-0 z-50 h-14 bg-sidebar border-b border-sidebar-border flex items-center px-4">
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger asChild>
          <Button variant="ghost" size="icon" className="text-sidebar-foreground">
            <Menu className="h-5 w-5" />
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="p-0 w-72 bg-sidebar border-sidebar-border">
          <SidebarContent onNavigate={() => setOpen(false)} />
        </SheetContent>
      </Sheet>
      <div className="flex items-center gap-2 ml-2">
        <img src={seedmoveLogo} alt="SeedMove" className="h-7 w-7 rounded-md object-contain" />
        <span className="font-heading font-bold text-sidebar-foreground text-sm">SeedMove</span>
      </div>
    </div>
  );
}

export default function AppSidebar() {
  return (
    <aside className="hidden md:flex fixed left-0 top-0 z-40 h-screen w-64 flex-col">
      <SidebarContent />
    </aside>
  );
}

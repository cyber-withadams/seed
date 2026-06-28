import { ReactNode } from "react";
import AppSidebar, { MobileHeader } from "./AppSidebar";

export default function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-background">
      <AppSidebar />
      <MobileHeader />
      <main className="md:ml-64 pt-14 md:pt-0 p-4 sm:p-6 md:p-8">{children}</main>
    </div>
  );
}

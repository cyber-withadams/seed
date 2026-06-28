import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { HashRouter, Routes, Route } from "react-router-dom";
import { AuthProvider, RequireAuth } from "@/hooks/useAuth";
import { RequireRole } from "@/components/RequireRole";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import EventsPage from "./pages/EventsPage";
import ServicesPage from "./pages/ServicesPage";
import SupportPage from "./pages/SupportPage";
import JoinPage from "./pages/JoinPage";
import LoginPage from "./pages/LoginPage";
import Dashboard from "./pages/Dashboard";
import StaffList from "./pages/StaffList";
import AddStaff from "./pages/AddStaff";
import ProgramsPage from "./pages/ProgramsPage";
import ProgramDetailPage from "./pages/ProgramDetailPage";
import SettingsPage from "./pages/SettingsPage";
import CalendarPage from "./pages/CalendarPage";
import AdminUsersPage from "./pages/AdminUsersPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => {
  console.log("App: Rendering");

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <HashRouter>
          <AuthProvider>
            <Routes>
              {/* Public Routes */}
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/events" element={<EventsPage />} />
              <Route path="/services" element={<ServicesPage />} />
              <Route path="/support" element={<SupportPage />} />
              <Route path="/join" element={<JoinPage />} />

              {/* Staff Portal Routes */}
              <Route path="/login" element={<LoginPage />} />
              <Route
                path="/dashboard"
                element={
                  <RequireAuth>
                    <Dashboard />
                  </RequireAuth>
                }
              />
              <Route
                path="/staff"
                element={
                  <RequireAuth>
                    <StaffList />
                  </RequireAuth>
                }
              />
              <Route
                path="/add-staff"
                element={
                  <RequireAuth>
                    <RequireRole allowed={["admin", "director"]}>
                      <AddStaff />
                    </RequireRole>
                  </RequireAuth>
                }
              />
              <Route
                path="/programs"
                element={
                  <RequireAuth>
                    <ProgramsPage />
                  </RequireAuth>
                }
              />
              <Route
                path="/programs/:id"
                element={
                  <RequireAuth>
                    <ProgramDetailPage />
                  </RequireAuth>
                }
              />
              <Route
                path="/calendar"
                element={
                  <RequireAuth>
                    <CalendarPage />
                  </RequireAuth>
                }
              />
              <Route
                path="/settings"
                element={
                  <RequireAuth>
                    <RequireRole allowed={["admin", "director"]}>
                      <SettingsPage />
                    </RequireRole>
                  </RequireAuth>
                }
              />
              <Route
                path="/admin/users"
                element={
                  <RequireAuth>
                    <RequireRole allowed={["admin"]}>
                      <AdminUsersPage />
                    </RequireRole>
                  </RequireAuth>
                }
              />

              {/* 404 Route */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </AuthProvider>
        </HashRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;

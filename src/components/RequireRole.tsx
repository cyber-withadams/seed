import { useEffect, ReactNode } from "react";
import { useNavigate } from "react-router-dom";
import { useUserRole, type AppRole } from "@/hooks/useUserRole";

export function RequireRole({ children, allowed }: { children: ReactNode; allowed: AppRole[] }) {
  const { role, loading } = useUserRole();
  const navigate = useNavigate();

  useEffect(() => {
    if (!loading && role && !allowed.includes(role)) {
      navigate("/", { replace: true });
    }
  }, [role, loading, allowed, navigate]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary" />
      </div>
    );
  }

  if (!role || !allowed.includes(role)) return null;
  return <>{children}</>;
}

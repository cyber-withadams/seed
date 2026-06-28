import { supabase } from "@/integrations/supabase/client";

export type StaffRole = "Program Manager" | "Field Officer" | "Finance" | "Admin" | "Volunteer Coordinator" | "Communications";
export type StaffStatus = "active" | "on-leave" | "inactive";
export type Department = "Programs" | "Operations" | "Finance" | "Communications" | "Field Operations";

export interface StaffMember {
  id: string;
  name: string;
  email: string;
  phone: string;
  role: StaffRole;
  department: Department;
  status: StaffStatus;
  joinDate: string;
  avatar?: string;
}

// Convert DB row to StaffMember
function toStaffMember(row: any): StaffMember {
  return {
    id: row.id,
    name: row.name,
    email: row.email,
    phone: row.phone || "",
    role: row.role as StaffRole,
    department: row.department as Department,
    status: row.status as StaffStatus,
    joinDate: row.join_date || "",
    avatar: row.avatar_url,
  };
}

export async function getStaff(): Promise<StaffMember[]> {
  const { data, error } = await supabase.from("staff_members").select("*").order("name");
  if (error) throw error;
  return (data || []).map(toStaffMember);
}

export async function addStaffMember(member: Omit<StaffMember, "id">): Promise<StaffMember> {
  const { data, error } = await supabase
    .from("staff_members")
    .insert({
      name: member.name,
      email: member.email,
      phone: member.phone,
      role: member.role,
      department: member.department,
      status: member.status,
      join_date: member.joinDate || null,
    })
    .select()
    .single();
  if (error) throw error;
  return toStaffMember(data);
}

export async function updateStaffMember(id: string, member: Partial<StaffMember>): Promise<void> {
  const update: any = {};
  if (member.name !== undefined) update.name = member.name;
  if (member.email !== undefined) update.email = member.email;
  if (member.phone !== undefined) update.phone = member.phone;
  if (member.role !== undefined) update.role = member.role;
  if (member.department !== undefined) update.department = member.department;
  if (member.status !== undefined) update.status = member.status;
  if (member.joinDate !== undefined) update.join_date = member.joinDate;

  const { error } = await supabase.from("staff_members").update(update).eq("id", id);
  if (error) throw error;
}

export async function deleteStaffMember(id: string): Promise<void> {
  const { error } = await supabase.from("staff_members").delete().eq("id", id);
  if (error) throw error;
}

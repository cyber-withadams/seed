import { supabase } from "@/integrations/supabase/client";

export type ProgramType = "community_project" | "training";
export type ProgramStatus = "planning" | "active" | "completed" | "on_hold";

export interface Program {
  id: string;
  name: string;
  description: string;
  type: ProgramType;
  status: ProgramStatus;
  startDate: string | null;
  endDate: string | null;
  budget: number | null;
  location: string | null;
}

export interface ProgramAssignment {
  id: string;
  programId: string;
  staffId: string;
  roleInProgram: string;
  assignedAt: string;
  staffName?: string;
}

export type TaskStatus = "todo" | "in_progress" | "completed";
export type TaskPriority = "low" | "medium" | "high";

export interface Task {
  id: string;
  programId: string;
  assignedTo: string | null;
  title: string;
  description: string | null;
  status: TaskStatus;
  priority: TaskPriority;
  dueDate: string | null;
  assignedName?: string;
}

function toProgram(row: any): Program {
  return {
    id: row.id,
    name: row.name,
    description: row.description || "",
    type: row.type,
    status: row.status,
    startDate: row.start_date,
    endDate: row.end_date,
    budget: row.budget,
    location: row.location,
  };
}

export async function getPrograms(): Promise<Program[]> {
  const { data, error } = await supabase.from("programs").select("*").order("created_at", { ascending: false });
  if (error) throw error;
  return (data || []).map(toProgram);
}

export async function addProgram(program: Omit<Program, "id">): Promise<Program> {
  const { data, error } = await supabase
    .from("programs")
    .insert({
      name: program.name,
      description: program.description || null,
      type: program.type,
      status: program.status,
      start_date: program.startDate || null,
      end_date: program.endDate || null,
      budget: program.budget || null,
      location: program.location || null,
    })
    .select()
    .single();
  if (error) throw error;
  return toProgram(data);
}

export async function updateProgram(id: string, updates: Partial<Program>): Promise<void> {
  const update: any = {};
  if (updates.name !== undefined) update.name = updates.name;
  if (updates.description !== undefined) update.description = updates.description;
  if (updates.type !== undefined) update.type = updates.type;
  if (updates.status !== undefined) update.status = updates.status;
  if (updates.startDate !== undefined) update.start_date = updates.startDate;
  if (updates.endDate !== undefined) update.end_date = updates.endDate;
  if (updates.budget !== undefined) update.budget = updates.budget;
  if (updates.location !== undefined) update.location = updates.location;

  const { error } = await supabase.from("programs").update(update).eq("id", id);
  if (error) throw error;
}

export async function deleteProgram(id: string): Promise<void> {
  const { error } = await supabase.from("programs").delete().eq("id", id);
  if (error) throw error;
}

// Assignments
export async function getProgramAssignments(programId: string): Promise<ProgramAssignment[]> {
  const { data, error } = await supabase
    .from("program_assignments")
    .select("*, staff_members(name)")
    .eq("program_id", programId);
  if (error) throw error;
  return (data || []).map((row: any) => ({
    id: row.id,
    programId: row.program_id,
    staffId: row.staff_id,
    roleInProgram: row.role_in_program,
    assignedAt: row.assigned_at,
    staffName: row.staff_members?.name,
  }));
}

export async function addAssignment(programId: string, staffId: string, role: string): Promise<void> {
  const { error } = await supabase
    .from("program_assignments")
    .insert({ program_id: programId, staff_id: staffId, role_in_program: role });
  if (error) throw error;
}

export async function removeAssignment(id: string): Promise<void> {
  const { error } = await supabase.from("program_assignments").delete().eq("id", id);
  if (error) throw error;
}

// Tasks
export async function getProgramTasks(programId: string): Promise<Task[]> {
  const { data, error } = await supabase
    .from("tasks")
    .select("*, staff_members(name)")
    .eq("program_id", programId)
    .order("created_at", { ascending: false });
  if (error) throw error;
  return (data || []).map((row: any) => ({
    id: row.id,
    programId: row.program_id,
    assignedTo: row.assigned_to,
    title: row.title,
    description: row.description,
    status: row.status,
    priority: row.priority,
    dueDate: row.due_date,
    assignedName: row.staff_members?.name,
  }));
}

export async function addTask(task: Omit<Task, "id" | "assignedName">): Promise<void> {
  const { error } = await supabase.from("tasks").insert({
    program_id: task.programId,
    assigned_to: task.assignedTo || null,
    title: task.title,
    description: task.description || null,
    status: task.status,
    priority: task.priority,
    due_date: task.dueDate || null,
  });
  if (error) throw error;
}

export async function updateTask(id: string, updates: Partial<Task>): Promise<void> {
  const update: any = {};
  if (updates.title !== undefined) update.title = updates.title;
  if (updates.description !== undefined) update.description = updates.description;
  if (updates.status !== undefined) update.status = updates.status;
  if (updates.priority !== undefined) update.priority = updates.priority;
  if (updates.assignedTo !== undefined) update.assigned_to = updates.assignedTo;
  if (updates.dueDate !== undefined) update.due_date = updates.dueDate;

  const { error } = await supabase.from("tasks").update(update).eq("id", id);
  if (error) throw error;
}

export async function deleteTask(id: string): Promise<void> {
  const { error } = await supabase.from("tasks").delete().eq("id", id);
  if (error) throw error;
}

import { useEffect, useState, useMemo } from "react";
import { format, startOfMonth, endOfMonth, eachDayOfInterval, isSameDay, isSameMonth, addMonths, subMonths, isToday } from "date-fns";
import { ChevronLeft, ChevronRight, CalendarDays, Clock, CheckCircle2, AlertCircle } from "lucide-react";
import DashboardLayout from "@/components/DashboardLayout";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import { motion, AnimatePresence } from "framer-motion";

interface CalendarEvent {
  id: string;
  title: string;
  date: string;
  type: "program_start" | "program_end" | "task_due";
  status?: string;
  priority?: string;
  programName?: string;
}

const eventTypeConfig = {
  program_start: { label: "Starts", icon: CalendarDays, color: "bg-success/15 text-success border-success/30" },
  program_end: { label: "Ends", icon: Clock, color: "bg-warning/15 text-warning border-warning/30" },
  task_due: { label: "Due", icon: AlertCircle, color: "bg-info/15 text-info border-info/30" },
};

const priorityDot: Record<string, string> = {
  high: "bg-destructive",
  medium: "bg-warning",
  low: "bg-muted-foreground",
};

export default function CalendarPage() {
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [events, setEvents] = useState<CalendarEvent[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [direction, setDirection] = useState(0);

  useEffect(() => {
    const load = async () => {
      try {
        const [{ data: programs }, { data: tasks }] = await Promise.all([
          supabase.from("programs").select("id, name, start_date, end_date, status"),
          supabase.from("tasks").select("id, title, due_date, status, priority, program_id, programs(name)"),
        ]);

        const evts: CalendarEvent[] = [];

        (programs || []).forEach((p: any) => {
          if (p.start_date) evts.push({ id: `ps-${p.id}`, title: p.name, date: p.start_date, type: "program_start", status: p.status });
          if (p.end_date) evts.push({ id: `pe-${p.id}`, title: p.name, date: p.end_date, type: "program_end", status: p.status });
        });

        (tasks || []).forEach((t: any) => {
          if (t.due_date) {
            evts.push({
              id: `t-${t.id}`, title: t.title, date: t.due_date, type: "task_due",
              status: t.status, priority: t.priority, programName: t.programs?.name,
            });
          }
        });

        setEvents(evts);
      } catch (err: any) {
        toast.error(err.message);
      } finally {
        setLoading(false);
      }
    };
    load();
  }, []);

  const monthStart = startOfMonth(currentMonth);
  const monthEnd = endOfMonth(currentMonth);
  const days = eachDayOfInterval({ start: monthStart, end: monthEnd });

  // Pad days to start on Monday
  const startDay = monthStart.getDay();
  const paddingDays = startDay === 0 ? 6 : startDay - 1;

  const eventsForDate = (date: Date) =>
    events.filter((e) => isSameDay(new Date(e.date), date));

  const selectedEvents = selectedDate ? eventsForDate(selectedDate) : [];

  const navigate = (dir: number) => {
    setDirection(dir);
    setCurrentMonth(dir > 0 ? addMonths(currentMonth, 1) : subMonths(currentMonth, 1));
    setSelectedDate(null);
  };

  const totalThisMonth = useMemo(() => {
    return events.filter((e) => {
      const d = new Date(e.date);
      return isSameMonth(d, currentMonth);
    }).length;
  }, [events, currentMonth]);

  if (loading) {
    return (
      <DashboardLayout>
        <div className="flex justify-center py-16">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary" />
        </div>
      </DashboardLayout>
    );
  }

  return (
    <DashboardLayout>
      <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-2xl font-bold text-foreground">Calendar</h1>
            <p className="text-muted-foreground mt-1">{totalThisMonth} events this month</p>
          </div>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-[1fr_320px] gap-6">
          {/* Calendar Grid */}
          <div className="rounded-xl border border-border bg-card shadow-sm overflow-hidden">
            {/* Month Nav */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-border">
              <Button variant="ghost" size="icon" onClick={() => navigate(-1)}>
                <ChevronLeft className="h-5 w-5" />
              </Button>
              <AnimatePresence mode="wait">
                <motion.h2
                  key={currentMonth.toISOString()}
                  initial={{ opacity: 0, x: direction * 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -direction * 20 }}
                  transition={{ duration: 0.2 }}
                  className="text-lg font-heading font-semibold"
                >
                  {format(currentMonth, "MMMM yyyy")}
                </motion.h2>
              </AnimatePresence>
              <Button variant="ghost" size="icon" onClick={() => navigate(1)}>
                <ChevronRight className="h-5 w-5" />
              </Button>
            </div>

            {/* Day Headers */}
            <div className="grid grid-cols-7 border-b border-border">
              {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((d) => (
                <div key={d} className="text-center text-xs font-semibold text-muted-foreground py-3">
                  {d}
                </div>
              ))}
            </div>

            {/* Day Cells */}
            <AnimatePresence mode="wait">
              <motion.div
                key={currentMonth.toISOString()}
                initial={{ opacity: 0, x: direction * 30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -direction * 30 }}
                transition={{ duration: 0.25 }}
                className="grid grid-cols-7"
              >
                {Array.from({ length: paddingDays }).map((_, i) => (
                  <div key={`pad-${i}`} className="h-16 sm:h-24 border-b border-r border-border bg-muted/20" />
                ))}
                {days.map((day, i) => {
                  const dayEvents = eventsForDate(day);
                  const isSelected = selectedDate && isSameDay(day, selectedDate);
                  const today = isToday(day);

                  return (
                    <motion.div
                      key={day.toISOString()}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: i * 0.01, duration: 0.2 }}
                      onClick={() => setSelectedDate(day)}
                      className={`h-16 sm:h-24 border-b border-r border-border p-1 sm:p-1.5 cursor-pointer transition-colors hover:bg-accent/30
                        ${isSelected ? "bg-accent/50 ring-2 ring-primary/30" : ""}
                        ${today ? "bg-primary/5" : ""}
                      `}
                    >
                      <div className={`text-xs font-medium mb-1 w-6 h-6 flex items-center justify-center rounded-full
                        ${today ? "bg-primary text-primary-foreground" : "text-foreground"}
                      `}>
                        {format(day, "d")}
                      </div>
                      <div className="space-y-0.5 overflow-hidden">
                        {dayEvents.slice(0, 2).map((evt) => (
                          <motion.div
                            key={evt.id}
                            initial={{ opacity: 0, x: -5 }}
                            animate={{ opacity: 1, x: 0 }}
                            className={`text-[10px] leading-tight px-1 py-0.5 rounded truncate border ${eventTypeConfig[evt.type].color}`}
                          >
                            {evt.title}
                          </motion.div>
                        ))}
                        {dayEvents.length > 2 && (
                          <span className="text-[10px] text-muted-foreground pl-1">+{dayEvents.length - 2} more</span>
                        )}
                      </div>
                    </motion.div>
                  );
                })}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Sidebar - Selected Day Events */}
          <div className="rounded-xl border border-border bg-card shadow-sm p-5">
            <AnimatePresence mode="wait">
              {selectedDate ? (
                <motion.div
                  key={selectedDate.toISOString()}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.25 }}
                >
                  <h3 className="font-heading font-semibold text-foreground mb-1">
                    {format(selectedDate, "EEEE, MMMM d")}
                  </h3>
                  <p className="text-xs text-muted-foreground mb-4">{selectedEvents.length} event{selectedEvents.length !== 1 ? "s" : ""}</p>

                  {selectedEvents.length === 0 ? (
                    <div className="text-center py-8">
                      <CalendarDays className="h-10 w-10 text-muted-foreground/30 mx-auto mb-2" />
                      <p className="text-sm text-muted-foreground">No events on this day</p>
                    </div>
                  ) : (
                    <div className="space-y-3">
                      {selectedEvents.map((evt, i) => {
                        const config = eventTypeConfig[evt.type];
                        const Icon = config.icon;
                        return (
                          <motion.div
                            key={evt.id}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: i * 0.08 }}
                            className="rounded-lg border border-border p-3 bg-muted/20 hover:bg-muted/40 transition-colors"
                          >
                            <div className="flex items-start gap-2.5">
                              <div className={`mt-0.5 h-7 w-7 rounded-md flex items-center justify-center shrink-0 ${config.color}`}>
                                <Icon className="h-3.5 w-3.5" />
                              </div>
                              <div className="min-w-0 flex-1">
                                <p className="text-sm font-medium text-foreground truncate">{evt.title}</p>
                                <div className="flex items-center gap-2 mt-1">
                                  <Badge variant="outline" className={`text-[10px] ${config.color}`}>
                                    {config.label}
                                  </Badge>
                                  {evt.priority && (
                                    <span className="flex items-center gap-1 text-[10px] text-muted-foreground">
                                      <span className={`inline-block h-1.5 w-1.5 rounded-full ${priorityDot[evt.priority] || ""}`} />
                                      {evt.priority}
                                    </span>
                                  )}
                                  {evt.status && (
                                    <span className="text-[10px] text-muted-foreground capitalize">
                                      {evt.status === "completed" && <CheckCircle2 className="inline h-3 w-3 text-success mr-0.5" />}
                                      {evt.status.replace("_", " ")}
                                    </span>
                                  )}
                                </div>
                                {evt.programName && (
                                  <p className="text-[10px] text-muted-foreground mt-1 truncate">Program: {evt.programName}</p>
                                )}
                              </div>
                            </div>
                          </motion.div>
                        );
                      })}
                    </div>
                  )}
                </motion.div>
              ) : (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-center py-12"
                >
                  <CalendarDays className="h-12 w-12 text-muted-foreground/20 mx-auto mb-3" />
                  <p className="text-sm text-muted-foreground">Select a day to view events</p>
                  <p className="text-xs text-muted-foreground mt-1">
                    Program dates & task deadlines appear here
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </motion.div>
    </DashboardLayout>
  );
}

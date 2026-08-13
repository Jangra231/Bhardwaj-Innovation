"use client";

import { useState } from "react";
import {
  Activity,
  ArrowUpRight,
  Award,
  BatteryCharging,
  CheckCircle2,
  Clock3,
  Gauge,
  RadioTower,
  ShieldCheck,
  Truck,
  Users,
  CalendarDays,
} from "lucide-react";
import { AnimatePresence, motion } from "motion/react";

type MetricId = "projects" | "clients" | "experience" | "support";
type OperationMode = "fleet" | "energy" | "security";

const metrics = [
  {
    id: "projects" as const,
    label: "Active Projects",
    value: "15+",
    icon: Award,
    title: "Deployment experience that works in the field.",
    text: "GPS installations, software rollouts, and connected operations planned around dependable execution.",
  },
  {
    id: "clients" as const,
    label: "Happy Clients",
    value: "500+",
    icon: Users,
    title: "Partnerships that stay connected.",
    text: "Implementation and support teams work alongside customers from requirements through long-term use.",
  },
  {
    id: "experience" as const,
    label: "Years Experience",
    value: "2+",
    icon: CalendarDays,
    title: "Experience across the full operating lifecycle.",
    text: "Hardware, telemetry, compliance, and software expertise for complex visibility challenges.",
  },
  {
    id: "support" as const,
    label: "Customer Support",
    value: "24/7",
    icon: Clock3,
    title: "When an operation moves, support stays available.",
    text: "Remote diagnostics, configuration guidance, and field coordination for critical systems.",
  },
] as const;

const operations = {
  fleet: {
    label: "Fleet",
    icon: Truck,
    title: "Fleet command, at a glance.",
    text: "Routes, idling, driver events, and exceptions.",
    values: ["1,264", "142", "12s"],
    labels: ["events/min", "vehicles live", "last ping"],
  },
  energy: {
    label: "Energy",
    icon: BatteryCharging,
    title: "Energy systems, under control.",
    text: "Battery health, charging, temperature, and cell signals.",
    values: ["98.4%", "38", "4G"],
    labels: ["cell balance", "packs online", "telemetry"],
  },
  security: {
    label: "Security",
    icon: ShieldCheck,
    title: "Cargo security, always visible.",
    text: "Seals, locks, alerts, and location intelligence.",
    values: ["0", "27", "24/7"],
    labels: ["breaches", "sealed loads", "monitoring"],
  },
} as const;

export default function UnifiedOperationsConsole() {
  const [activeMetric, setActiveMetric] = useState<MetricId>("projects");
  const [activeMode, setActiveMode] = useState<OperationMode>("fleet");
  const metric = metrics.find((item) => item.id === activeMetric) ?? metrics[0];
  const operation = operations[activeMode];
  const MetricIcon = metric.icon;
  const OperationIcon = operation.icon;

  return (
    <section className="relative overflow-hidden border-y border-slate-800 bg-slate-950 py-10 text-white md:py-12">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-40 top-0 h-72 w-72 rounded-full bg-sky-500/15 blur-3xl" />
        <div className="absolute -right-40 bottom-0 h-72 w-72 rounded-full bg-blue-700/15 blur-3xl" />
        <div className="absolute inset-0 opacity-15 bg-[linear-gradient(rgba(148,163,184,0.12)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.12)_1px,transparent_1px)] bg-size-[40px_40px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <span className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.22em] text-sky-300">
              <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
              Live Operations Console
            </span>
            <h2 className="mt-1 text-2xl font-extrabold tracking-tight md:text-3xl">The numbers behind the signal.</h2>
          </div>
          <div className="inline-flex w-fit items-center gap-2 rounded-lg border border-emerald-300/20 bg-emerald-300/10 px-2.5 py-1.5 text-[10px] font-bold uppercase tracking-wider text-emerald-200">
            <RadioTower className="h-3.5 w-3.5" /> Network healthy
          </div>
        </div>

        <div className="mt-5 grid grid-cols-2 gap-2.5 md:grid-cols-4">
          {metrics.map((item) => {
            const Icon = item.icon;
            const isActive = item.id === activeMetric;
            return (
              <motion.button
                key={item.id}
                type="button"
                onClick={() => setActiveMetric(item.id)}
                onMouseEnter={() => setActiveMetric(item.id)}
                whileTap={{ scale: 0.98 }}
                className={`group relative rounded-xl border px-3 py-2.5 text-left transition-all duration-300 sm:px-4 ${
                  isActive
                    ? "border-sky-500 bg-sky-500 text-white shadow-lg shadow-sky-950/30"
                    : "border-white/10 bg-white/6 text-slate-300 hover:border-sky-300/50 hover:bg-white/10"
                }`}
                aria-pressed={isActive}
              >
                <div className="flex items-center justify-between gap-2">
                  <span className={`flex h-7 w-7 items-center justify-center rounded-lg ${isActive ? "bg-white/20" : "bg-sky-400/10 text-sky-300"}`}>
                    <Icon className="h-3.5 w-3.5" />
                  </span>
                  <ArrowUpRight className={`h-3.5 w-3.5 ${isActive ? "text-white" : "text-slate-500 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"}`} />
                </div>
                <p className="mt-2 text-xl font-black tracking-tight sm:text-2xl">{item.value}</p>
                <p className={`mt-0.5 text-[8px] font-bold uppercase tracking-wider sm:text-[9px] ${isActive ? "text-white/80" : "text-slate-400"}`}>
                  {item.label}
                </p>
              </motion.button>
            );
          })}
        </div>

        <div className="mt-3 grid gap-3 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="rounded-2xl border border-white/10 bg-white/6 p-3 backdrop-blur-sm md:p-4">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <div className="flex items-center gap-2.5">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-sky-400/15 text-sky-300">
                  <OperationIcon className="h-4 w-4" />
                </div>
                <div>
                  <p className="text-[9px] font-bold uppercase tracking-[0.18em] text-sky-300">{operation.label} layer</p>
                  <p className="text-xs font-bold text-white">Live telemetry view</p>
                </div>
              </div>
              <div className="flex gap-1 rounded-lg border border-white/10 bg-slate-950/70 p-1" role="tablist" aria-label="Live operation layers">
                {(Object.keys(operations) as OperationMode[]).map((mode) => {
                  const ModeIcon = operations[mode].icon;
                  return (
                    <button
                      key={mode}
                      type="button"
                      role="tab"
                      aria-selected={activeMode === mode}
                      onClick={() => setActiveMode(mode)}
                      className={`inline-flex items-center gap-1 rounded-md px-2 py-1.5 text-[9px] font-bold transition-colors ${activeMode === mode ? "bg-sky-500 text-white" : "text-slate-400 hover:text-white"}`}
                    >
                      <ModeIcon className="h-3 w-3" />
                      {operations[mode].label}
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="relative mt-3 h-28 overflow-hidden rounded-xl border border-sky-300/10 bg-slate-950/90 sm:h-32">
              <div className="absolute inset-0 opacity-35 bg-[linear-gradient(rgba(56,189,248,0.12)_1px,transparent_1px),linear-gradient(90deg,rgba(56,189,248,0.12)_1px,transparent_1px)] bg-size-[30px_30px]" />
              <div className="absolute left-[18%] top-[28%] h-1.5 w-1.5 rounded-full bg-sky-300 shadow-[0_0_14px_5px_rgba(56,189,248,0.35)]" />
              <div className="absolute right-[22%] top-[44%] h-1.5 w-1.5 rounded-full bg-emerald-300 shadow-[0_0_14px_5px_rgba(52,211,153,0.25)]" />
              <div className="absolute bottom-[22%] left-[38%] h-1.5 w-1.5 rounded-full bg-indigo-300 shadow-[0_0_14px_5px_rgba(129,140,248,0.25)]" />
              <svg className="absolute inset-0 h-full w-full opacity-55" viewBox="0 0 600 160" fill="none" aria-hidden="true">
                <path d="M70 52C150 80 210 42 280 85C365 128 420 72 530 110" stroke="#38bdf8" strokeWidth="2" strokeDasharray="7 10" />
                <path d="M125 140C190 110 245 122 300 84C350 48 430 70 500 30" stroke="#818cf8" strokeWidth="2" strokeDasharray="7 10" />
              </svg>
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeMode}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -6 }}
                  transition={{ duration: 0.25 }}
                  className="absolute inset-x-3 bottom-3 rounded-lg border border-white/10 bg-slate-900/90 p-2 backdrop-blur-md"
                >
                  <div className="grid grid-cols-3 gap-1.5 text-center">
                    {operation.values.map((value, index) => (
                      <div key={operation.labels[index]} className="rounded-md bg-white/6 px-1.5 py-1.5">
                        <p className="text-base font-black text-white">{value}</p>
                        <p className="mt-0.5 text-[7px] font-bold uppercase tracking-wider text-slate-400">{operation.labels[index]}</p>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          <div className="rounded-2xl border border-white/10 bg-slate-900/80 p-4">
            <AnimatePresence mode="wait">
              <motion.div
                key={`${activeMetric}-${activeMode}`}
                initial={{ opacity: 0, x: 8 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -6 }}
                transition={{ duration: 0.25 }}
              >
                <div className="flex items-center gap-2 text-[9px] font-bold uppercase tracking-[0.18em] text-sky-300">
                  <MetricIcon className="h-3.5 w-3.5" /> Selected insight
                </div>
                <h3 className="mt-2 text-lg font-extrabold leading-tight text-white">{metric.title}</h3>
                <p className="mt-2 text-xs leading-relaxed text-slate-300">{metric.text}</p>
                <div className="mt-3 grid gap-1.5 text-[10px] font-semibold text-slate-200">
                  <div className="flex items-center gap-2"><CheckCircle2 className="h-3.5 w-3.5 shrink-0 text-sky-300" /> {operation.title}</div>
                  <div className="flex items-center gap-2"><Gauge className="h-3.5 w-3.5 shrink-0 text-sky-300" /> {operation.text}</div>
                </div>
              </motion.div>
            </AnimatePresence>
            <div className="mt-3 flex items-center justify-between border-t border-white/10 pt-3 text-[9px] text-slate-400">
              <span>Hover or tap a metric to explore.</span>
              <Activity className="h-3.5 w-3.5 text-sky-300" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

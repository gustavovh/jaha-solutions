import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Cpu, Workflow, Plug } from "lucide-react";
import { Button } from "@/components/ui/button";

const trust = [
  { icon: Cpu, label: "Custom Software Development" },
  { icon: Sparkles, label: "Artificial Intelligence" },
  { icon: Workflow, label: "Process Automation" },
  { icon: Plug, label: "Enterprise Integrations" },
];

export function Hero() {
  return (
    <section id="top" className="gradient-hero relative overflow-hidden">
      <div className="container-page pt-16 pb-20 md:pt-24 md:pb-28">
        <div className="grid lg:grid-cols-[1.1fr_1fr] gap-12 lg:gap-16 items-center">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1.5 text-xs font-medium text-muted-foreground mb-6"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-brand-green" /> Now expanding to the U.S. market
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.05 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.05] text-foreground"
            >
              Technology Solutions That <span className="text-gradient-brand">Drive Business Growth</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.15 }}
              className="mt-6 text-lg text-muted-foreground max-w-xl"
            >
              Jaha Solutions helps organizations streamline operations, automate processes, and accelerate
              growth through custom software, artificial intelligence, and digital transformation services.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.25 }}
              className="mt-8 flex flex-col sm:flex-row gap-3"
            >
              <Button size="lg" asChild>
                <a href="#contact">Schedule a Consultation <ArrowRight className="ml-1 h-4 w-4" /></a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="#contact">Request a Demo</a>
              </Button>
            </motion.div>
            <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-3 max-w-xl">
              {trust.map((t, i) => (
                <motion.div
                  key={t.label}
                  initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: 0.3 + i * 0.05 }}
                  className="flex items-center gap-2 rounded-lg border border-border/70 bg-card/60 px-3 py-2"
                >
                  <t.icon className="h-4 w-4 text-primary shrink-0" />
                  <span className="text-xs font-medium text-foreground">{t.label}</span>
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7, delay: 0.1 }}
            className="relative"
          >
            <DashboardMock />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function DashboardMock() {
  return (
    <div className="relative">
      <div className="absolute -inset-6 bg-gradient-to-tr from-primary/20 via-transparent to-brand-green/20 blur-3xl rounded-full" />
      <div className="relative rounded-2xl border border-border bg-card shadow-2xl overflow-hidden">
        <div className="flex items-center gap-1.5 px-4 py-3 border-b border-border bg-surface">
          <span className="h-2.5 w-2.5 rounded-full bg-destructive/70" />
          <span className="h-2.5 w-2.5 rounded-full bg-yellow-400" />
          <span className="h-2.5 w-2.5 rounded-full bg-brand-green" />
          <span className="ml-3 text-xs text-muted-foreground font-mono">jaha-solutions / dashboard</span>
        </div>
        <div className="p-5 grid grid-cols-3 gap-3">
          {[
            { l: "Active Workflows", v: "248", d: "+12%" },
            { l: "Automations", v: "1.2k", d: "+24%" },
            { l: "Efficiency", v: "94%", d: "+8%" },
          ].map((s) => (
            <div key={s.l} className="rounded-lg border border-border p-3">
              <div className="text-[10px] uppercase tracking-wider text-muted-foreground">{s.l}</div>
              <div className="mt-1 text-xl font-bold text-foreground">{s.v}</div>
              <div className="text-[11px] text-brand-green font-semibold">{s.d}</div>
            </div>
          ))}
        </div>
        <div className="px-5 pb-5">
          <div className="rounded-lg border border-border p-4">
            <div className="flex items-center justify-between mb-3">
              <div className="text-sm font-semibold">Operations Overview</div>
              <div className="text-xs text-muted-foreground">Last 30 days</div>
            </div>
            <div className="flex items-end gap-1.5 h-24">
              {[40, 55, 38, 70, 60, 82, 65, 90, 75, 95, 80, 100].map((h, i) => (
                <motion.div
                  key={i}
                  initial={{ height: 0 }} animate={{ height: `${h}%` }} transition={{ duration: 0.6, delay: 0.4 + i * 0.04 }}
                  className="flex-1 rounded-t bg-gradient-to-t from-primary to-brand-green/80"
                />
              ))}
            </div>
          </div>
          <div className="mt-3 grid grid-cols-2 gap-3">
            <div className="rounded-lg border border-border p-3">
              <div className="text-[10px] uppercase tracking-wider text-muted-foreground">AI Assistant</div>
              <div className="mt-1 text-sm font-medium">12 tasks completed</div>
            </div>
            <div className="rounded-lg border border-border p-3">
              <div className="text-[10px] uppercase tracking-wider text-muted-foreground">Integrations</div>
              <div className="mt-1 text-sm font-medium">8 systems connected</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

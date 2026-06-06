import { SectionHeader, FadeIn } from "./Section";
import { Target, Gauge, Bot, Layers, LineChart, Sparkles, Handshake, ShieldCheck } from "lucide-react";

const benefits = [
  { icon: Target, title: "Tailored Business Solutions", stat: "100%", statLabel: "purpose-built" },
  { icon: Gauge, title: "Faster Operations", stat: "3×", statLabel: "average speed gain" },
  { icon: Bot, title: "Reduced Manual Work", stat: "60%", statLabel: "tasks automated" },
  { icon: Layers, title: "Scalable Architecture", stat: "∞", statLabel: "growth-ready" },
  { icon: LineChart, title: "Real-Time Business Insights", stat: "24/7", statLabel: "live dashboards" },
  { icon: Sparkles, title: "AI-Powered Innovation", stat: "GPT", statLabel: "class models" },
  { icon: Handshake, title: "Long-Term Partnership", stat: "10+", statLabel: "years experience" },
  { icon: ShieldCheck, title: "Enterprise-Level Security", stat: "SOC", statLabel: "best practices" },
];

export function WhyUs() {
  return (
    <section id="why" className="py-20 md:py-28">
      <div className="container-page">
        <SectionHeader eyebrow="Why us" title="Why Organizations Choose Jaha Solutions" />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {benefits.map((b, i) => (
            <FadeIn key={b.title} delay={i * 0.04}>
              <div className="h-full rounded-2xl border border-border bg-card p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="h-10 w-10 rounded-lg bg-primary-soft text-primary flex items-center justify-center">
                    <b.icon className="h-5 w-5" />
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-gradient-brand leading-none">{b.stat}</div>
                    <div className="text-[10px] uppercase tracking-wider text-muted-foreground mt-1">{b.statLabel}</div>
                  </div>
                </div>
                <div className="font-semibold text-sm">{b.title}</div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

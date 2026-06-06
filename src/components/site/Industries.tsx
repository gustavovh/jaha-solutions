import { GraduationCap, HeartPulse, Briefcase, ShoppingBag, Users, Wrench, Factory, Building2 } from "lucide-react";
import { SectionHeader, FadeIn } from "./Section";

const industries = [
  { icon: GraduationCap, title: "Education", desc: "Modernize operations and improve learning experiences for schools, colleges, and training centers." },
  { icon: HeartPulse, title: "Healthcare", desc: "Digital solutions for clinics, healthcare providers, and medical organizations." },
  { icon: Briefcase, title: "Professional Services", desc: "Platforms that improve productivity and client management." },
  { icon: ShoppingBag, title: "Retail & Commerce", desc: "Optimize sales, operations, customer engagement, and reporting." },
  { icon: Users, title: "Associations & Membership", desc: "Membership management, communication, billing, and operations." },
  { icon: Wrench, title: "Service-Based Businesses", desc: "Workflow automation and operational management systems." },
  { icon: Factory, title: "Manufacturing & Industrial", desc: "Process optimization, monitoring, and business intelligence." },
  { icon: Building2, title: "Corporate Enterprises", desc: "Enterprise-grade digital transformation initiatives." },
];

export function Industries() {
  return (
    <section id="industries" className="py-20 md:py-28 bg-surface border-y border-border">
      <div className="container-page">
        <SectionHeader eyebrow="Industries" title="Industry-Focused Solutions" description="Domain expertise across the sectors driving the U.S. economy." />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {industries.map((it, i) => (
            <FadeIn key={it.title} delay={i * 0.04}>
              <div className="h-full rounded-xl border border-border bg-card p-5 hover:border-primary/40 hover:-translate-y-1 transition-all">
                <it.icon className="h-6 w-6 text-primary mb-3" />
                <div className="font-semibold">{it.title}</div>
                <p className="text-xs text-muted-foreground mt-1.5 leading-relaxed">{it.desc}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

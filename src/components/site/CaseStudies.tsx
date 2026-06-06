import { SectionHeader, FadeIn } from "./Section";
import { ArrowUpRight } from "lucide-react";

const cases = [
  { tag: "Marketing Tech", title: "JAHA Deals", desc: "Instant, on-demand digital coupon platform empowering merchants to drive foot traffic in real time.", metric: "Flagship product" },
  { tag: "Automation", title: "JOHEI — Self-Service Laundry", desc: "End-to-end automation and customer self-service platform for unattended laundry operations.", metric: "100% self-service" },
  { tag: "CRM", title: "Sales & Customer Platforms", desc: "Custom CRM and business management platforms unifying sales, customers, and operations.", metric: "+40% pipeline visibility" },
  { tag: "Enterprise", title: "Administrative Systems", desc: "Financial, operational, and management systems for mid-market and enterprise clients.", metric: "Mission-critical" },
  { tag: "Automation", title: "Business Process Automation", desc: "Workflow optimization initiatives that eliminate repetitive work and accelerate cycle times.", metric: "60% time saved" },
  { tag: "Integration", title: "System Integration Projects", desc: "Connecting ERPs, CRMs, e-commerce, and accounting tools into one unified ecosystem.", metric: "Single source of truth" },
];

export function CaseStudies() {
  return (
    <section id="case-studies" className="py-20 md:py-28 bg-surface border-y border-border">
      <div className="container-page">
        <SectionHeader eyebrow="Case studies" title="Real Solutions for Real Business Challenges" />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {cases.map((c, i) => (
            <FadeIn key={c.title} delay={i * 0.05}>
              <article className="group h-full rounded-2xl border border-border bg-card p-6 hover:border-primary/40 transition-all">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[10px] font-semibold uppercase tracking-[0.16em] text-primary bg-primary-soft px-2 py-1 rounded">{c.tag}</span>
                  <ArrowUpRight className="h-4 w-4 text-muted-foreground group-hover:text-primary group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all" />
                </div>
                <h3 className="text-lg font-semibold">{c.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{c.desc}</p>
                <div className="mt-5 pt-4 border-t border-border text-xs font-medium text-foreground">{c.metric}</div>
              </article>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

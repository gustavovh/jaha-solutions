import { SectionHeader, FadeIn } from "./Section";
import { CheckCircle2 } from "lucide-react";

const points = [
  "Custom software built around your processes",
  "AI and automation that compounds efficiency",
  "Integrations across the systems you already use",
  "Long-term partnership, not one-off projects",
];

export function About() {
  return (
    <section id="about" className="py-20 md:py-28 bg-surface border-y border-border">
      <div className="container-page grid lg:grid-cols-2 gap-12 items-center">
        <FadeIn>
          <span className="inline-block text-xs font-semibold uppercase tracking-[0.18em] text-primary mb-3">About Jaha Solutions</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">Your Technology Partner for <span className="text-gradient-brand">Digital Transformation</span></h2>
          <p className="mt-5 text-muted-foreground text-lg leading-relaxed">
            At Jaha Solutions, we help organizations solve complex operational challenges through innovative
            technology. From custom software and mobile applications to AI-powered automation and enterprise
            integrations, we help businesses improve efficiency, reduce costs, and create scalable systems that
            support long-term growth.
          </p>
          <p className="mt-4 text-muted-foreground">
            We don't just build software—we build solutions that create measurable business impact.
          </p>
        </FadeIn>
        <FadeIn delay={0.1}>
          <div className="rounded-2xl border border-border bg-card p-8 shadow-sm">
            <div className="grid grid-cols-3 gap-6 mb-8 pb-8 border-b border-border">
              {[
                { v: "10+", l: "Years of experience" },
                { v: "50+", l: "Projects delivered" },
                { v: "8", l: "Industries served" },
              ].map((s) => (
                <div key={s.l}>
                  <div className="text-3xl font-bold text-gradient-brand">{s.v}</div>
                  <div className="text-xs text-muted-foreground mt-1">{s.l}</div>
                </div>
              ))}
            </div>
            <ul className="space-y-3">
              {points.map((p) => (
                <li key={p} className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-brand-green shrink-0 mt-0.5" />
                  <span className="text-sm text-foreground">{p}</span>
                </li>
              ))}
            </ul>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

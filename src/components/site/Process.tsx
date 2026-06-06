import { SectionHeader, FadeIn } from "./Section";
import { Search, PenTool, Code, Rocket, TrendingUp } from "lucide-react";

const steps = [
  { icon: Search, title: "Discovery & Analysis", desc: "Understanding your business goals, challenges, and opportunities." },
  { icon: PenTool, title: "Solution Design", desc: "Creating a tailored strategy and technical architecture." },
  { icon: Code, title: "Development", desc: "Building scalable, secure, and efficient solutions." },
  { icon: Rocket, title: "Implementation", desc: "Deploying and integrating the solution into your operations." },
  { icon: TrendingUp, title: "Support & Growth", desc: "Continuous improvement, optimization, and partnership." },
];

export function Process() {
  return (
    <section id="process" className="py-20 md:py-28">
      <div className="container-page">
        <SectionHeader eyebrow="How we work" title="How We Deliver Results" />
        <div className="relative">
          <div className="hidden lg:block absolute top-7 left-[10%] right-[10%] h-px bg-gradient-to-r from-transparent via-border to-transparent" />
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {steps.map((s, i) => (
              <FadeIn key={s.title} delay={i * 0.08}>
                <div className="relative text-center">
                  <div className="relative mx-auto h-14 w-14 rounded-2xl bg-card border border-border shadow-sm flex items-center justify-center text-primary">
                    <s.icon className="h-6 w-6" />
                    <span className="absolute -top-2 -right-2 h-6 w-6 rounded-full bg-primary text-primary-foreground text-xs font-bold flex items-center justify-center">{i + 1}</span>
                  </div>
                  <h3 className="mt-4 font-semibold text-sm">{s.title}</h3>
                  <p className="mt-1.5 text-xs text-muted-foreground leading-relaxed">{s.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

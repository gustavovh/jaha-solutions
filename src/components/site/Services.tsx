import { Code2, Smartphone, Workflow, Brain, Plug, Compass } from "lucide-react";
import { SectionHeader, FadeIn } from "./Section";

const services = [
  { icon: Code2, title: "Custom Software Development", desc: "Build software tailored to your unique business processes and operational needs." },
  { icon: Smartphone, title: "Web & Mobile Applications", desc: "Create modern digital experiences for customers, employees, and stakeholders." },
  { icon: Workflow, title: "Process Automation", desc: "Eliminate repetitive tasks and increase efficiency through intelligent automation." },
  { icon: Brain, title: "Artificial Intelligence Solutions", desc: "AI-powered assistants, document automation, intelligent workflows, and productivity tools." },
  { icon: Plug, title: "Systems Integration", desc: "Connect ERPs, CRMs, accounting systems, e-commerce platforms, and third-party apps." },
  { icon: Compass, title: "Technology Consulting", desc: "Digital strategies and technology roadmaps that align with your business goals." },
];

export function Services() {
  return (
    <section id="services" className="py-20 md:py-28">
      <div className="container-page">
        <SectionHeader
          eyebrow="What we do"
          title="Services Designed to Accelerate Growth"
          description="End-to-end technology services that turn operational complexity into competitive advantage."
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((s, i) => (
            <FadeIn key={s.title} delay={i * 0.05}>
              <div className="group h-full rounded-2xl border border-border bg-card p-6 hover:border-primary/40 hover:shadow-lg transition-all">
                <div className="inline-flex items-center justify-center h-11 w-11 rounded-xl bg-primary-soft text-primary mb-5 group-hover:scale-110 transition-transform">
                  <s.icon className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-semibold text-foreground">{s.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

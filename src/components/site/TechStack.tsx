import { SectionHeader, FadeIn } from "./Section";

const tech = ["Laravel", "PHP", "React", "Flutter", "Node.js", "PostgreSQL", "MySQL", "AWS", "Azure", "OpenAI", "REST APIs", "Docker", "Cloud Infrastructure"];

export function TechStack() {
  return (
    <section className="py-20 md:py-28 bg-surface border-y border-border">
      <div className="container-page">
        <SectionHeader
          eyebrow="Technology"
          title="Built with Modern Technologies"
          description="We leverage proven technologies to build reliable, scalable, and future-ready solutions."
        />
        <FadeIn>
          <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
            {tech.map((t) => (
              <span key={t} className="px-4 py-2 rounded-full border border-border bg-card text-sm font-medium text-foreground hover:border-primary hover:text-primary transition-colors">
                {t}
              </span>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

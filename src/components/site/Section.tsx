import { motion } from "framer-motion";
import type { ReactNode } from "react";

export function SectionHeader({
  eyebrow, title, description, align = "center",
}: { eyebrow?: string; title: string; description?: string; align?: "center" | "left" }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5 }}
      className={`max-w-3xl ${align === "center" ? "mx-auto text-center" : ""} mb-12 md:mb-16`}
    >
      {eyebrow && (
        <span className="inline-block text-xs font-semibold uppercase tracking-[0.18em] text-primary mb-3">
          {eyebrow}
        </span>
      )}
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">{title}</h2>
      {description && <p className="mt-4 text-base md:text-lg text-muted-foreground">{description}</p>}
    </motion.div>
  );
}

export function FadeIn({ children, delay = 0 }: { children: ReactNode; delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay }}
    >
      {children}
    </motion.div>
  );
}

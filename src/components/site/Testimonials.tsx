import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { SectionHeader } from "./Section";

const testimonials = [
  { quote: "Jaha Solutions rebuilt our core operations platform and cut manual workload by more than half. The team feels like an extension of ours.", name: "Director of Operations", role: "Education Institution" },
  { quote: "Their AI automation transformed how we process documents and handle client onboarding. ROI was clear within the first quarter.", name: "COO", role: "Professional Services Firm" },
  { quote: "From discovery to deployment, the execution was first-class. They understood our business as well as the technology.", name: "CTO", role: "Healthcare Organization" },
];

export function Testimonials() {
  const [i, setI] = useState(0);
  const next = () => setI((p) => (p + 1) % testimonials.length);
  const prev = () => setI((p) => (p - 1 + testimonials.length) % testimonials.length);
  const t = testimonials[i];
  return (
    <section className="py-20 md:py-28">
      <div className="container-page">
        <SectionHeader eyebrow="Testimonials" title="What Our Clients Say" />
        <div className="relative max-w-3xl mx-auto">
          <div className="rounded-3xl border border-border bg-card p-8 md:p-12 shadow-sm">
            <Quote className="h-8 w-8 text-primary/40 mb-6" />
            <AnimatePresence mode="wait">
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.3 }}
              >
                <p className="text-xl md:text-2xl text-foreground leading-relaxed font-medium">"{t.quote}"</p>
                <div className="mt-6 pt-6 border-t border-border">
                  <div className="font-semibold">{t.name}</div>
                  <div className="text-sm text-muted-foreground">{t.role}</div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
          <div className="mt-6 flex items-center justify-center gap-3">
            <button onClick={prev} aria-label="Previous" className="h-10 w-10 rounded-full border border-border bg-card hover:border-primary hover:text-primary flex items-center justify-center transition-colors">
              <ChevronLeft className="h-4 w-4" />
            </button>
            <div className="flex gap-1.5">
              {testimonials.map((_, idx) => (
                <button key={idx} onClick={() => setI(idx)} aria-label={`Testimonial ${idx + 1}`} className={`h-1.5 rounded-full transition-all ${idx === i ? "w-8 bg-primary" : "w-1.5 bg-border"}`} />
              ))}
            </div>
            <button onClick={next} aria-label="Next" className="h-10 w-10 rounded-full border border-border bg-card hover:border-primary hover:text-primary flex items-center justify-center transition-colors">
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

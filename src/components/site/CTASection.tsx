import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

export function CTASection() {
  const [form, setForm] = useState({ name: "", email: "", company: "", message: "" });
  const [loading, setLoading] = useState(false);

  function submit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setForm({ name: "", email: "", company: "", message: "" });
      toast.success("Thanks — we'll be in touch within one business day.");
    }, 600);
  }

  return (
    <section id="contact" className="py-20 md:py-28 bg-gradient-to-br from-primary to-[oklch(0.28_0.13_258)] text-primary-foreground relative overflow-hidden">
      <div className="absolute inset-0 opacity-20 pointer-events-none" style={{ backgroundImage: "radial-gradient(600px 300px at 80% 20%, var(--brand-green), transparent 60%)" }} />
      <div className="container-page relative grid lg:grid-cols-[1.1fr_1fr] gap-12 items-center">
        <div>
          <h2 className="text-3xl md:text-5xl font-bold leading-tight">Ready to Accelerate Your Digital Transformation?</h2>
          <p className="mt-5 text-lg text-primary-foreground/80 max-w-xl">
            Let's discuss your goals and explore how technology can help your organization operate smarter, grow faster, and create lasting competitive advantages.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <Button size="lg" variant="secondary" asChild>
              <a href="mailto:hello@jahasolutions.com">Schedule a Consultation <ArrowRight className="ml-1 h-4 w-4" /></a>
            </Button>
            <Button size="lg" variant="outline" className="bg-transparent text-primary-foreground border-primary-foreground/30 hover:bg-primary-foreground/10 hover:text-primary-foreground" asChild>
              <a href="mailto:hello@jahasolutions.com">Request a Demo</a>
            </Button>
          </div>
        </div>
        <form onSubmit={submit} className="rounded-2xl bg-background text-foreground p-6 md:p-8 shadow-2xl border border-border/30">
          <h3 className="text-lg font-semibold mb-1">Talk to our team</h3>
          <p className="text-sm text-muted-foreground mb-5">Tell us about your project. We respond within one business day.</p>
          <div className="space-y-3">
            <input required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder="Full name" className="w-full h-11 px-3 rounded-lg border border-border bg-card text-sm focus:outline-none focus:ring-2 focus:ring-ring" />
            <input required type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} placeholder="Work email" className="w-full h-11 px-3 rounded-lg border border-border bg-card text-sm focus:outline-none focus:ring-2 focus:ring-ring" />
            <input value={form.company} onChange={(e) => setForm({ ...form, company: e.target.value })} placeholder="Company" className="w-full h-11 px-3 rounded-lg border border-border bg-card text-sm focus:outline-none focus:ring-2 focus:ring-ring" />
            <textarea value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} placeholder="How can we help?" rows={3} className="w-full px-3 py-2.5 rounded-lg border border-border bg-card text-sm focus:outline-none focus:ring-2 focus:ring-ring resize-none" />
            <Button type="submit" disabled={loading} className="w-full" size="lg">
              {loading ? "Sending…" : "Get in touch"}
            </Button>
          </div>
        </form>
      </div>
    </section>
  );
}

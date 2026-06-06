import { SectionHeader, FadeIn } from "./Section";
import { Button } from "@/components/ui/button";
import { ArrowRight, Check, Plus } from "lucide-react";
import jahaDealsLogo from "@/assets/jaha-deals-logo.png.asset.json";

const features = [
  "Instant on-demand coupon creation",
  "Flexible discount structures",
  "Merchant dashboard & analytics",
  "Mobile-first consumer experience",
  "Dedicated account management",
  "Low-cost marketing alternative",
  "24/7 customer support",
];

export function Products() {
  return (
    <section id="products" className="py-20 md:py-28">
      <div className="container-page">
        <SectionHeader
          eyebrow="Products"
          title="Products That Power Organizations"
          description="Production-grade software products built and supported by Jaha Solutions."
        />

        <FadeIn>
          <div className="grid lg:grid-cols-[1.1fr_1fr] gap-0 rounded-3xl overflow-hidden border border-border bg-card shadow-xl">
            <div className="p-8 md:p-12">
              <div className="inline-flex items-center gap-2 rounded-full bg-brand-green/10 text-brand-green px-3 py-1 text-xs font-semibold mb-5">
                <span className="h-1.5 w-1.5 rounded-full bg-brand-green" /> Flagship Product
              </div>
              <h3 className="text-3xl md:text-4xl font-bold">JAHA Deals</h3>
              <p className="mt-4 text-muted-foreground text-lg">
                Discounts your way, when they make sense for you. Jaha Deals gives business owners the ability
                to create instant, on-demand coupons that respond to market conditions—right now, today, immediately.
              </p>
              <ul className="mt-6 grid sm:grid-cols-2 gap-x-6 gap-y-2.5">
                {features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm">
                    <Check className="h-4 w-4 text-brand-green shrink-0 mt-0.5" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                <Button asChild>
                  <a href="https://jahadeals.com" target="_blank" rel="noopener noreferrer">
                    Learn More About JAHA Deals <ArrowRight className="ml-1 h-4 w-4" />
                  </a>
                </Button>
                <Button variant="outline" asChild>
                  <a href="#contact">Request a Demo</a>
                </Button>
              </div>
            </div>
            <div className="relative bg-[oklch(0.62_0.17_145)] flex items-center justify-center p-8 min-h-[280px]">
              <img src={jahaDealsLogo.url} alt="Jaha Deals" className="max-w-3xl w-full h-auto drop-shadow-2xl" />
            </div>
          </div>
        </FadeIn>

        <FadeIn delay={0.1}>
          <div className="mt-6 grid md:grid-cols-2 gap-5">
            <div className="rounded-2xl border border-dashed border-border bg-surface p-6 flex items-center gap-4">
              <div className="h-12 w-12 rounded-xl bg-primary-soft text-primary flex items-center justify-center">
                <Plus className="h-5 w-5" />
              </div>
              <div>
                <div className="font-semibold">More products coming soon</div>
                <p className="text-sm text-muted-foreground">JAHA Deals is the first of several specialized solutions developed and supported by Jaha Solutions.</p>
              </div>
            </div>
            <div className="rounded-2xl border border-border bg-card p-6">
              <div className="text-sm font-semibold mb-1">Need a custom product?</div>
              <p className="text-sm text-muted-foreground mb-3">We design and build proprietary platforms for organizations that need more than off-the-shelf software.</p>
              <Button variant="link" className="p-0 h-auto" asChild>
                <a href="#contact">Talk to our team <ArrowRight className="ml-1 h-3.5 w-3.5" /></a>
              </Button>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

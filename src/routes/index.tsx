import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { About } from "@/components/site/About";
import { Services } from "@/components/site/Services";
import { Products } from "@/components/site/Products";
import { Industries } from "@/components/site/Industries";
import { WhyUs } from "@/components/site/WhyUs";
import { CaseStudies } from "@/components/site/CaseStudies";
import { Process } from "@/components/site/Process";
import { TechStack } from "@/components/site/TechStack";
import { CTASection } from "@/components/site/CTASection";
import { Footer } from "@/components/site/Footer";
import { Toaster } from "@/components/ui/sonner";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Jaha Solutions — Custom Software, AI & Digital Transformation" },
      { name: "description", content: "Jaha Solutions helps organizations streamline operations and accelerate growth with custom software, AI, automation, and enterprise integrations." },
      { property: "og:title", content: "Jaha Solutions — Technology Solutions That Drive Business Growth" },
      { property: "og:description", content: "Custom software, AI solutions, process automation, and system integrations for SMBs, healthcare, education, and enterprises." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [{
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Organization",
        name: "Jaha Solutions",
        description: "Custom software, AI, automation, and digital transformation services.",
        url: "/",
      }),
    }],
  }),
  component: Index,
});

function Index() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Products />
      <Industries />
      <WhyUs />
      <CaseStudies />
      <Process />
      <TechStack />
      <CTASection />
      <Footer />
      <Toaster />
    </main>
  );
}

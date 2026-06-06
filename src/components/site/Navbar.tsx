import { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/jaha-solutions-logo.png.asset.json";
import { Button } from "@/components/ui/button";

const links = [
  { href: "#services", label: "Services" },
  { href: "#products", label: "Products" },
  { href: "#industries", label: "Industries" },
  { href: "#case-studies", label: "Case Studies" },
  { href: "#process", label: "Process" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/60 bg-background/80 backdrop-blur-xl">
      <div className="container-page flex h-20 items-center justify-between">
        <a href="#top" className="flex items-center gap-2">
          <img src={logo.url} alt="Jaha Solutions" className="h-14 w-auto" />
        </a>
        <nav className="hidden lg:flex items-center gap-8">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              {l.label}
            </a>
          ))}
        </nav>
        <div className="hidden lg:flex items-center gap-3">
          <Button variant="ghost" asChild><a href="#contact">Request Demo</a></Button>
          <Button asChild><a href="#contact">Schedule a Consultation</a></Button>
        </div>
        <button className="lg:hidden p-2" onClick={() => setOpen(!open)} aria-label="Toggle menu">
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>
      {open && (
        <div className="lg:hidden border-t border-border bg-background">
          <div className="container-page py-4 flex flex-col gap-3">
            {links.map((l) => (
              <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="py-2 text-sm font-medium">{l.label}</a>
            ))}
            <Button asChild className="mt-2"><a href="#contact">Schedule a Consultation</a></Button>
          </div>
        </div>
      )}
    </header>
  );
}

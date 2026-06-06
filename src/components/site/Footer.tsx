import { Mail, Phone, MessageCircle, Linkedin } from "lucide-react";
import logo from "@/assets/jaha-solutions-logo.png.asset.json";

export function Footer() {
  return (
    <footer className="bg-background border-t border-border">
      <div className="container-page py-14 grid md:grid-cols-4 gap-10">
        <div className="md:col-span-2">
          <img src={logo.url} alt="Jaha Solutions" className="h-10 w-auto mb-4" />
          <p className="text-sm text-muted-foreground max-w-sm">
            Custom Software · AI Solutions · Automation · Digital Transformation
          </p>
        </div>
        <div>
          <div className="text-sm font-semibold mb-3">Navigation</div>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><a href="#top" className="hover:text-foreground">Home</a></li>
            <li><a href="#services" className="hover:text-foreground">Services</a></li>
            <li><a href="#products" className="hover:text-foreground">Products</a></li>
            <li><a href="#industries" className="hover:text-foreground">Industries</a></li>
            <li><a href="#case-studies" className="hover:text-foreground">Case Studies</a></li>
            <li><a href="#contact" className="hover:text-foreground">Contact</a></li>
          </ul>
        </div>
        <div>
          <div className="text-sm font-semibold mb-3">Contact</div>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li className="flex items-center gap-2"><Mail className="h-4 w-4" /> <a href="mailto:hello@jahasolutions.com" className="hover:text-foreground">hello@jahasolutions.com</a></li>
            <li className="flex items-center gap-2"><Phone className="h-4 w-4" /> <a href="tel:+10000000000" className="hover:text-foreground">+1 (000) 000-0000</a></li>
            <li className="flex items-center gap-2"><MessageCircle className="h-4 w-4" /> <a href="https://wa.me/10000000000" className="hover:text-foreground">WhatsApp</a></li>
            <li className="flex items-center gap-2"><Linkedin className="h-4 w-4" /> <a href="#" className="hover:text-foreground">LinkedIn</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border">
        <div className="container-page py-5 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-muted-foreground">
          <div>© {new Date().getFullYear()} Jaha Solutions. All rights reserved.</div>
          <div>Custom Software · AI · Automation · Digital Transformation</div>
        </div>
      </div>
    </footer>
  );
}

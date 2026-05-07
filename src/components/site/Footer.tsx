import { Cog, Phone, MapPin } from "lucide-react";

const links = [
  { href: "#home", label: "Home" },
  { href: "#products", label: "Products" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];

export function Footer() {
  return (
    <footer className="bg-background border-t border-border pt-14 pb-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-3 gap-10">
        <div>
          <div className="flex items-center gap-2 mb-4">
            <div className="w-10 h-10 rounded-md bg-gradient-to-br from-primary to-primary-glow flex items-center justify-center">
              <Cog className="w-6 h-6 text-primary-foreground" strokeWidth={2.5} />
            </div>
            <div className="leading-tight">
              <div className="font-display text-lg font-bold tracking-wide">SASI AUTO</div>
              <div className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground -mt-0.5">
                Enterprises
              </div>
            </div>
          </div>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Madurai's trusted bike spare parts shop since 2004. Original parts, honest prices.
          </p>
        </div>

        <div>
          <h4 className="font-display text-sm font-bold uppercase tracking-widest text-foreground mb-4">
            Quick Links
          </h4>
          <ul className="space-y-2">
            {links.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="text-sm text-muted-foreground hover:text-primary transition">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-display text-sm font-bold uppercase tracking-widest text-foreground mb-4">
            Reach Us
          </h4>
          <div className="space-y-3 text-sm text-muted-foreground">
            <div className="flex items-start gap-2">
              <MapPin className="w-4 h-4 text-primary shrink-0 mt-0.5" />
              <span>57-C-D, Tamil Sangam Road, Simmakkal, Madurai - 625001</span>
            </div>
            <a href="tel:9842183444" className="flex items-center gap-2 hover:text-primary transition">
              <Phone className="w-4 h-4 text-primary" />
              98421 83444
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10 pt-6 border-t border-border text-center text-xs text-muted-foreground">
        © 2025 Sasi Auto Enterprises. All rights reserved.
      </div>
    </footer>
  );
}

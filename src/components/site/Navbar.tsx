import { useEffect, useState } from "react";
import { Cog, MessageCircle, Menu, X } from "lucide-react";

const links = [
  { href: "#home", label: "Home" },
  { href: "#products", label: "Products" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/85 backdrop-blur-md border-b border-border shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16 lg:h-20">
        <a href="#home" className="flex items-center gap-2 group">
          <div className="w-10 h-10 rounded-md bg-gradient-to-br from-primary to-primary-glow flex items-center justify-center shadow-[var(--shadow-red)] group-hover:rotate-180 transition-transform duration-700">
            <Cog className="w-6 h-6 text-primary-foreground" strokeWidth={2.5} />
          </div>
          <div className="leading-tight">
            <div className="font-display text-lg sm:text-xl font-bold tracking-wide text-foreground">
              SASI AUTO
            </div>
            <div className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground -mt-0.5">
              Enterprises
            </div>
          </div>
        </a>

        <nav className="hidden lg:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium uppercase tracking-wider text-foreground/80 hover:text-primary transition-colors relative after:absolute after:bottom-[-6px] after:left-0 after:h-0.5 after:w-0 after:bg-primary after:transition-all hover:after:w-full"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="https://wa.me/919842183444"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-2 bg-[var(--whatsapp)] hover:opacity-90 text-white px-4 py-2 rounded-md text-sm font-semibold transition shadow-md"
          >
            <MessageCircle className="w-4 h-4" />
            WhatsApp
          </a>
          <button
            type="button"
            className="lg:hidden p-2 text-foreground"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {open && (
        <nav className="lg:hidden bg-background/95 backdrop-blur-md border-t border-border">
          <div className="flex flex-col p-4 gap-1">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="px-4 py-3 text-foreground hover:bg-card hover:text-primary rounded-md font-medium uppercase tracking-wider text-sm"
              >
                {l.label}
              </a>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}

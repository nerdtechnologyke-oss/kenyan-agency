import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const nav = [
  { to: "/properties", label: "Listings" },
  { to: "/services", label: "Services" },
  { to: "/about", label: "About" },
  { to: "/testimonials", label: "Stories" },
  { to: "/contact", label: "Contact" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-surface/85 backdrop-blur-md border-b border-border" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2.5 group">
          <span className="w-8 h-8 bg-foreground flex items-center justify-center">
            <span className="w-3.5 h-3.5 border border-surface rotate-45 transition-transform group-hover:rotate-[60deg] duration-500" />
          </span>
          <span className="text-base font-semibold tracking-[0.15em] uppercase">Imara Luxury</span>
        </Link>

        <nav className="hidden lg:flex items-center gap-10 text-[11px] font-medium uppercase tracking-[0.22em]">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className="hover:text-accent transition-colors"
              activeProps={{ className: "text-accent" }}
            >
              {n.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-5">
          <Link
            to="/properties"
            className="text-[11px] font-medium uppercase tracking-[0.22em] border-b border-foreground/20 pb-1 hover:border-accent transition-colors"
          >
            Search
          </Link>
          <Link
            to="/contact"
            className="bg-foreground text-surface px-5 py-2.5 text-[11px] font-medium uppercase tracking-[0.22em] hover:bg-accent hover:text-foreground transition-colors"
          >
            Enquire
          </Link>
        </div>

        <button
          aria-label="Open menu"
          onClick={() => setOpen(true)}
          className="lg:hidden p-2 -mr-2 text-foreground"
        >
          <Menu className="size-5" strokeWidth={1.5} />
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`lg:hidden fixed inset-0 z-50 bg-surface transition-opacity duration-300 ${
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="h-20 px-6 flex items-center justify-between border-b border-border">
          <span className="text-base font-semibold tracking-[0.15em] uppercase">Menu</span>
          <button aria-label="Close menu" onClick={() => setOpen(false)} className="p-2 -mr-2">
            <X className="size-5" strokeWidth={1.5} />
          </button>
        </div>
        <nav className="px-6 py-10 flex flex-col gap-1">
          {[{ to: "/", label: "Home" }, ...nav].map((n) => (
            <Link
              key={n.to}
              to={n.to}
              onClick={() => setOpen(false)}
              className="py-4 border-b border-border text-base font-medium uppercase tracking-[0.18em] hover:text-accent transition-colors"
              activeProps={{ className: "text-accent" }}
            >
              {n.label}
            </Link>
          ))}
          <Link
            to="/contact"
            onClick={() => setOpen(false)}
            className="mt-8 bg-foreground text-surface text-center py-4 text-xs uppercase tracking-[0.22em]"
          >
            Enquire Now
          </Link>
        </nav>
      </div>
    </header>
  );
}

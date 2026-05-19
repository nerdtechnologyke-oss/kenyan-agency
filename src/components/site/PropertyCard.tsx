import { Link } from "@tanstack/react-router";
import type { Listing } from "@/data/properties";

export function PropertyCard({ p, priority = false }: { p: Listing; priority?: boolean }) {
  const cta =
    p.type === "Airbnb" ? "Book Airbnb" : p.type === "Sale" ? "Request Viewing" : "Inquire Now";
  return (
    <Link to="/properties/$slug" params={{ slug: p.slug }} className="group block">
      <div className="relative overflow-hidden mb-6 aspect-[4/5] bg-muted">
        <img
          src={p.image}
          alt={`${p.name} — ${p.location}`}
          loading={priority ? "eager" : "lazy"}
          className="w-full h-full object-cover transition-transform duration-[1200ms] ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:scale-105"
        />
        <div className="absolute top-4 left-4 flex gap-2">
          <span className="bg-surface/90 backdrop-blur-sm px-3 py-1 text-[10px] font-bold uppercase tracking-[0.18em]">
            For {p.type}
          </span>
          {p.status && (
            <span className="bg-accent text-accent-foreground px-3 py-1 text-[10px] font-bold uppercase tracking-[0.18em]">
              {p.status}
            </span>
          )}
        </div>
      </div>
      <div className="flex justify-between items-start gap-4 mb-2">
        <h3 className="text-xl font-medium tracking-tight uppercase font-sans">{p.name}</h3>
        <p className="text-accent font-semibold whitespace-nowrap text-sm pt-1">{p.price}</p>
      </div>
      <p className="text-sm text-muted-foreground mb-5 tracking-wide">
        {p.location} • {p.beds} Bed • {p.baths} Bath
      </p>
      <div className="w-full py-3 border border-border text-center text-[11px] font-semibold uppercase tracking-[0.22em] group-hover:bg-foreground group-hover:text-surface group-hover:border-foreground transition-all duration-500">
        {cta}
      </div>
    </Link>
  );
}

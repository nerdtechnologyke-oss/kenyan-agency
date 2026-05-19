import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { properties } from "@/data/properties";
import { PropertyCard } from "@/components/site/PropertyCard";

export const Route = createFileRoute("/properties")({
  head: () => ({
    meta: [
      { title: "Listings — Imara Luxury Property" },
      {
        name: "description",
        content:
          "Browse curated apartments, villas, family homes, Airbnb stays, and commercial property across Kenya.",
      },
      { property: "og:title", content: "Listings — Imara Luxury Property" },
      { property: "og:description", content: "Browse curated properties across Kenya." },
    ],
  }),
  component: Properties,
});

const TYPES = ["All", "Sale", "Rent", "Airbnb"] as const;
const CITIES = ["All", "Nairobi", "Mombasa", "Limuru"] as const;

function Properties() {
  const [type, setType] = useState<(typeof TYPES)[number]>("All");
  const [city, setCity] = useState<(typeof CITIES)[number]>("All");
  const [q, setQ] = useState("");

  const filtered = useMemo(() => {
    return properties.filter((p) => {
      if (type !== "All" && p.type !== type) return false;
      if (city !== "All" && p.city !== city) return false;
      if (q && !`${p.name} ${p.location} ${p.category}`.toLowerCase().includes(q.toLowerCase()))
        return false;
      return true;
    });
  }, [type, city, q]);

  return (
    <>
      <section className="pt-36 pb-16 max-w-7xl mx-auto px-6">
        <span className="text-[10px] uppercase tracking-[0.3em] text-accent block mb-4">
          The Portfolio
        </span>
        <h1 className="text-5xl md:text-7xl italic mb-6 max-w-3xl text-balance">
          Every home, considered.
        </h1>
        <p className="text-muted-foreground max-w-xl">
          {filtered.length} curated {filtered.length === 1 ? "property" : "properties"} across Kenya.
        </p>
      </section>

      {/* Filters */}
      <section className="border-y border-border bg-muted/30 sticky top-20 z-30 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col lg:flex-row gap-4 lg:items-center lg:justify-between">
          <input
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Search by name, location, or category..."
            className="bg-transparent border-b border-border py-2 text-sm focus:border-accent outline-none lg:w-80"
          />
          <div className="flex flex-wrap gap-6">
            <FilterGroup label="Type" value={type} options={TYPES} onChange={setType} />
            <FilterGroup label="City" value={city} options={CITIES} onChange={setCity} />
          </div>
        </div>
      </section>

      <section className="py-20 max-w-7xl mx-auto px-6">
        {filtered.length === 0 ? (
          <div className="text-center py-32">
            <p className="text-muted-foreground">No properties match your filters.</p>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-12">
            {filtered.map((p) => (
              <PropertyCard key={p.slug} p={p} />
            ))}
          </div>
        )}
      </section>
    </>
  );
}

function FilterGroup<T extends string>({
  label,
  value,
  options,
  onChange,
}: {
  label: string;
  value: T;
  options: readonly T[];
  onChange: (v: T) => void;
}) {
  return (
    <div className="flex items-center gap-3">
      <span className="text-[10px] uppercase tracking-[0.22em] text-muted-foreground">{label}</span>
      <div className="flex gap-1">
        {options.map((o) => (
          <button
            key={o}
            onClick={() => onChange(o)}
            className={`px-3 py-1.5 text-[11px] uppercase tracking-[0.18em] transition-colors ${
              value === o
                ? "bg-foreground text-surface"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            {o}
          </button>
        ))}
      </div>
    </div>
  );
}

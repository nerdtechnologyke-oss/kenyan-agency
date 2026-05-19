import { createFileRoute, Link } from "@tanstack/react-router";
import { properties } from "@/data/properties";
import { PropertyCard } from "@/components/site/PropertyCard";
import heroVilla from "@/assets/hero-villa.jpg";
import agentPortrait from "@/assets/agent-portrait.jpg";
import locNairobi from "@/assets/loc-nairobi.jpg";
import locMombasa from "@/assets/loc-mombasa.jpg";
import locNaivasha from "@/assets/loc-naivasha.jpg";
import interiorKitchen from "@/assets/interior-kitchen.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Imara Luxury — Modern Living Across Kenya" },
      {
        name: "description",
        content:
          "Curated homes, rentals and Airbnb stays across Kenya. Nairobi, Mombasa, Naivasha, Nanyuki and beyond — by Imara Luxury.",
      },
      { property: "og:title", content: "Imara Luxury — Modern Living Across Kenya" },
      { property: "og:description", content: "Premium property agents covering all of Kenya." },
    ],
  }),
  component: Home,
});

const featured = properties.slice(0, 3);

const locations = [
  { name: "Nairobi", count: "124 properties", image: locNairobi },
  { name: "Mombasa Coast", count: "48 properties", image: locMombasa },
  { name: "Rift Valley", count: "32 properties", image: locNaivasha },
];

const stats = [
  { value: "10+", label: "Cities Covered" },
  { value: "1,200+", label: "Verified Listings" },
  { value: "98%", label: "Client Satisfaction" },
  { value: "24hr", label: "Viewing Response" },
];

function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative h-screen min-h-[720px] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroVilla}
            alt="Contemporary architectural villa in Karen, Nairobi at golden hour"
            className="w-full h-full object-cover"
            width={1920}
            height={1080}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/65 via-black/30 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full pt-20">
          <div className="max-w-3xl animate-reveal">
            <span className="inline-block text-accent font-medium uppercase tracking-[0.3em] text-xs mb-6">
              Nationwide Property Agency
            </span>
            <h1 className="font-serif text-5xl sm:text-7xl md:text-8xl text-white leading-[0.92] mb-10 text-balance">
              Modern Living <br />
              <span className="italic font-light">Across Kenya.</span>
            </h1>
            <p className="text-white/80 max-w-md text-base mb-10 leading-relaxed">
              From sun-drenched Karen villas to skyline penthouses in Kilimani — we curate the country's
              most considered homes for sale, rent, and short stay.
            </p>

            {/* Floating peek */}
            <div className="inline-flex items-center gap-4 bg-surface p-3 pr-6 shadow-2xl shadow-black/20">
              <img
                src={properties[4].image}
                alt={properties[4].name}
                className="size-16 object-cover"
                width={64}
                height={64}
                loading="eager"
              />
              <div>
                <p className="text-[10px] uppercase tracking-[0.22em] text-muted-foreground mb-1">New Listing</p>
                <p className="text-sm font-semibold tracking-tight uppercase">{properties[4].name}, Kilimani</p>
                <p className="text-xs text-accent font-medium">{properties[4].price}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-3">
          <span className="text-[9px] uppercase tracking-[0.3em] text-white/60">Scroll</span>
          <div className="w-px h-12 bg-white/20 relative overflow-hidden">
            <div className="absolute inset-x-0 top-0 h-1/2 bg-white animate-scroll-line" />
          </div>
        </div>
      </section>

      {/* SEARCH BAR */}
      <section className="relative z-20 max-w-6xl mx-auto px-6 -mt-14">
        <form
          onSubmit={(e) => e.preventDefault()}
          className="bg-surface p-6 md:p-8 shadow-2xl shadow-foreground/5 grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-8 items-end border border-border"
        >
          <Field label="Location">
            <select className="w-full bg-transparent border-b border-border py-2 focus:border-accent outline-none">
              <option>Nairobi (All Areas)</option>
              <option>Mombasa & Coast</option>
              <option>Nakuru / Eldoret</option>
              <option>Naivasha / Nanyuki</option>
            </select>
          </Field>
          <Field label="Property Type">
            <select className="w-full bg-transparent border-b border-border py-2 focus:border-accent outline-none">
              <option>All Types</option>
              <option>Modern Apartments</option>
              <option>Family Villas</option>
              <option>Airbnb Ready</option>
              <option>Commercial Space</option>
            </select>
          </Field>
          <Field label="Budget">
            <select className="w-full bg-transparent border-b border-border py-2 focus:border-accent outline-none">
              <option>Any Budget</option>
              <option>KSh 50k – 150k</option>
              <option>KSh 150k – 500k</option>
              <option>KSh 500k+</option>
            </select>
          </Field>
          <Link
            to="/properties"
            className="bg-accent text-accent-foreground px-8 py-4 text-[11px] font-semibold uppercase tracking-[0.22em] text-center hover:bg-foreground hover:text-surface transition-colors"
          >
            Find Home
          </Link>
        </form>
      </section>

      {/* FEATURED */}
      <section className="py-28 md:py-32 max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:justify-between md:items-end gap-6 mb-16">
          <div>
            <span className="text-[10px] uppercase tracking-[0.3em] text-accent block mb-3">
              The Collection
            </span>
            <h2 className="text-4xl md:text-5xl italic mb-2">Handpicked residences.</h2>
            <p className="text-muted-foreground text-sm">Featured properties curated for modern living.</p>
          </div>
          <Link
            to="/properties"
            className="self-start text-[11px] font-semibold uppercase tracking-[0.22em] border-b border-accent pb-1 hover:text-accent transition-colors"
          >
            View Portfolio →
          </Link>
        </div>
        <div className="grid md:grid-cols-3 gap-10 md:gap-12">
          {featured.map((p) => (
            <PropertyCard key={p.slug} p={p} />
          ))}
        </div>
      </section>

      {/* LOCATIONS */}
      <section className="py-28 bg-muted/40">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-[10px] uppercase tracking-[0.3em] text-accent block mb-3">
              Across the Republic
            </span>
            <h2 className="text-4xl md:text-5xl italic mb-3">Explore territories.</h2>
            <p className="text-muted-foreground text-sm max-w-md mx-auto">
              From the vibrant pulse of the capital to the quiet breeze of the coast.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {locations.map((l) => (
              <Link
                key={l.name}
                to="/properties"
                className="group relative aspect-[4/5] overflow-hidden block"
              >
                <img
                  src={l.image}
                  alt={l.name}
                  loading="lazy"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1500ms] ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                <div className="absolute bottom-8 left-8 right-8 text-surface">
                  <h3 className="text-3xl italic mb-1">{l.name}</h3>
                  <p className="text-[10px] uppercase tracking-[0.22em] opacity-80">{l.count}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* TRUST */}
      <section className="bg-foreground text-surface py-28">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 md:gap-20 items-center">
          <div>
            <span className="text-[10px] uppercase tracking-[0.3em] text-accent block mb-4">
              The Imara Promise
            </span>
            <h2 className="text-4xl md:text-6xl italic mb-10 leading-[1.05] text-balance">
              Built on trust. <br />Responsive by nature.
            </h2>
            <div className="grid grid-cols-2 gap-8">
              {stats.map((s) => (
                <div key={s.label}>
                  <p className="text-3xl md:text-4xl font-medium text-accent tracking-tighter mb-1">
                    {s.value}
                  </p>
                  <p className="text-[10px] uppercase tracking-[0.22em] text-surface/60">{s.label}</p>
                </div>
              ))}
            </div>
            <Link
              to="/about"
              className="mt-12 inline-block border border-surface/30 px-8 py-4 text-[11px] uppercase tracking-[0.22em] hover:bg-surface hover:text-foreground transition-colors"
            >
              The Agency Story
            </Link>
          </div>
          <div className="relative">
            <img
              src={agentPortrait}
              alt="Senior Imara Luxury property agent"
              loading="lazy"
              className="w-full aspect-square object-cover"
            />
            <div className="absolute -bottom-8 -left-4 md:-left-8 bg-accent text-accent-foreground p-8 max-w-xs">
              <p className="text-sm font-medium uppercase tracking-[0.15em] leading-relaxed">
                "We don't just find houses — we secure the backdrop of your next chapter across Kenya."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* LIFESTYLE STRIP */}
      <section className="relative">
        <div className="grid md:grid-cols-5 min-h-[420px]">
          <div className="md:col-span-2 bg-muted/40 p-10 md:p-16 flex flex-col justify-center">
            <span className="text-[10px] uppercase tracking-[0.3em] text-accent mb-3">Interior Crafted</span>
            <h2 className="text-3xl md:text-4xl italic mb-5">Spaces that move with you.</h2>
            <p className="text-muted-foreground text-sm leading-relaxed mb-8 max-w-md">
              Every Imara listing is visited, photographed, and verified. The home you see is the home you'll
              walk into.
            </p>
            <Link
              to="/services"
              className="self-start text-[11px] uppercase tracking-[0.22em] border-b border-foreground pb-1 hover:text-accent hover:border-accent transition-colors"
            >
              Our Services →
            </Link>
          </div>
          <div className="md:col-span-3 relative min-h-[300px]">
            <img
              src={interiorKitchen}
              alt="Contemporary kitchen interior in a Kenyan luxury home"
              loading="lazy"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-28 max-w-4xl mx-auto px-6 text-center">
        <span className="text-[10px] uppercase tracking-[0.3em] text-accent block mb-4">
          Ready to begin?
        </span>
        <h2 className="text-4xl md:text-6xl italic mb-8 text-balance">
          Your next address is waiting.
        </h2>
        <p className="text-muted-foreground mb-10 max-w-xl mx-auto">
          Speak directly with a senior agent. We typically respond within an hour during working days.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/contact"
            className="bg-foreground text-surface px-8 py-4 text-[11px] uppercase tracking-[0.22em]"
          >
            Speak with an Agent
          </Link>
          <Link
            to="/properties"
            className="border border-border px-8 py-4 text-[11px] uppercase tracking-[0.22em] hover:bg-muted transition-colors"
          >
            Browse Listings
          </Link>
        </div>
      </section>
    </>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="flex flex-col">
      <label className="text-[10px] uppercase tracking-[0.22em] text-muted-foreground mb-2">
        {label}
      </label>
      {children}
    </div>
  );
}

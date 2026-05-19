import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { properties } from "@/data/properties";
import { PropertyCard } from "@/components/site/PropertyCard";

export const Route = createFileRoute("/properties/$slug")({
  loader: ({ params }) => {
    const property = properties.find((p) => p.slug === params.slug);
    if (!property) throw notFound();
    return { property };
  },
  head: ({ loaderData }) => ({
    meta: loaderData
      ? [
          { title: `${loaderData.property.name} — ${loaderData.property.location} | Imara Luxury` },
          { name: "description", content: loaderData.property.description.slice(0, 155) },
          { property: "og:title", content: `${loaderData.property.name} — Imara Luxury` },
          { property: "og:description", content: loaderData.property.description.slice(0, 155) },
          { property: "og:image", content: loaderData.property.image },
          { property: "twitter:image", content: loaderData.property.image },
        ]
      : [],
  }),
  component: PropertyDetail,
  notFoundComponent: () => (
    <div className="pt-40 text-center px-6">
      <h1 className="font-serif text-4xl mb-4">Property not found.</h1>
      <Link to="/properties" className="text-accent underline">Browse all listings</Link>
    </div>
  ),
});

function PropertyDetail() {
  const { property: p } = Route.useLoaderData();
  const related = properties.filter((x) => x.slug !== p.slug).slice(0, 3);
  const phone = "254700000000";
  const waMsg = encodeURIComponent(`Hello, I'd like to enquire about ${p.name} (${p.location}).`);

  return (
    <>
      <section className="pt-32 pb-12 max-w-7xl mx-auto px-6">
        <Link to="/properties" className="text-[10px] uppercase tracking-[0.22em] text-muted-foreground hover:text-accent">
          ← All Listings
        </Link>
        <div className="mt-8 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div>
            <div className="flex gap-2 mb-4">
              <span className="bg-foreground text-surface px-3 py-1 text-[10px] font-bold uppercase tracking-[0.18em]">
                For {p.type}
              </span>
              {p.status && (
                <span className="bg-accent text-accent-foreground px-3 py-1 text-[10px] font-bold uppercase tracking-[0.18em]">
                  {p.status}
                </span>
              )}
            </div>
            <h1 className="text-5xl md:text-7xl italic mb-3 text-balance">{p.name}</h1>
            <p className="text-muted-foreground">{p.location}</p>
          </div>
          <p className="text-3xl md:text-4xl text-accent font-medium">{p.price}</p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6">
        <img
          src={p.image}
          alt={`${p.name} in ${p.location}`}
          className="w-full aspect-[16/9] object-cover"
          width={1600}
          height={900}
        />
      </section>

      <section className="py-20 max-w-7xl mx-auto px-6 grid lg:grid-cols-3 gap-16">
        <div className="lg:col-span-2">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 mb-12 pb-10 border-b border-border">
            <Spec label="Bedrooms" value={String(p.beds)} />
            <Spec label="Bathrooms" value={String(p.baths)} />
            <Spec label="Area" value={p.area} />
            <Spec label="Category" value={p.category} />
          </div>

          <span className="text-[10px] uppercase tracking-[0.3em] text-accent block mb-3">About the home</span>
          <h2 className="text-3xl italic mb-6">A space of considered detail.</h2>
          <p className="text-muted-foreground leading-relaxed text-lg mb-12">{p.description}</p>

          <h3 className="text-2xl italic mb-6">Amenities</h3>
          <ul className="grid sm:grid-cols-2 gap-y-3 gap-x-8 text-sm">
            {p.amenities.map((a: string) => (
              <li key={a} className="flex items-center gap-3 py-2 border-b border-border">
                <span className="size-1.5 bg-accent" />
                {a}
              </li>
            ))}
          </ul>
        </div>

        {/* Contact card */}
        <aside className="lg:sticky lg:top-28 self-start bg-muted/40 p-8 border border-border">
          <span className="text-[10px] uppercase tracking-[0.3em] text-accent mb-3 block">Speak with the agent</span>
          <h3 className="text-2xl italic mb-6">Schedule a viewing.</h3>
          <p className="text-sm text-muted-foreground mb-6">
            Our senior agents respond personally within the hour during working days.
          </p>
          <div className="flex flex-col gap-3">
            <a
              href={`https://wa.me/${phone}?text=${waMsg}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#25D366] text-white text-center px-6 py-4 text-[11px] uppercase tracking-[0.22em] font-semibold"
            >
              WhatsApp the Agent
            </a>
            <a
              href="tel:+254700000000"
              className="bg-foreground text-surface text-center px-6 py-4 text-[11px] uppercase tracking-[0.22em]"
            >
              Call +254 700 000 000
            </a>
            <Link
              to="/contact"
              className="border border-border text-center px-6 py-4 text-[11px] uppercase tracking-[0.22em] hover:bg-surface transition-colors"
            >
              Request a Viewing
            </Link>
          </div>
        </aside>
      </section>

      {/* Related */}
      <section className="py-24 bg-muted/40">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl italic mb-12">You may also like.</h2>
          <div className="grid md:grid-cols-3 gap-12">
            {related.map((r) => (
              <PropertyCard key={r.slug} p={r} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

function Spec({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="text-[10px] uppercase tracking-[0.22em] text-muted-foreground mb-2">{label}</p>
      <p className="text-2xl font-serif">{value}</p>
    </div>
  );
}

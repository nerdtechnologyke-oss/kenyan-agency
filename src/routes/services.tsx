import { createFileRoute, Link } from "@tanstack/react-router";
import interiorKitchen from "@/assets/interior-kitchen.jpg";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Imara Luxury Property" },
      {
        name: "description",
        content:
          "Rentals, sales, Airbnb management, property management, commercial advisory, land, tenant placement and consultation across Kenya.",
      },
      { property: "og:title", content: "Services — Imara Luxury" },
      { property: "og:description", content: "End-to-end property services across Kenya." },
    ],
  }),
  component: Services,
});

const services = [
  { n: "01", t: "House Rentals", d: "Verified rental homes across Kenya's most-loved neighbourhoods. From bedsitters to family villas." },
  { n: "02", t: "Property Sales", d: "Discreet acquisitions and white-glove disposal of residential and investment properties." },
  { n: "03", t: "Airbnb Management", d: "End-to-end short-stay operations — listings, guest care, photography, dynamic pricing and cleaning." },
  { n: "04", t: "Property Management", d: "Rent collection, maintenance coordination, tenant relations and quarterly owner reports." },
  { n: "05", t: "Commercial Property", d: "Office, retail and mixed-use leasing and acquisition across Nairobi and major secondary cities." },
  { n: "06", t: "Land Sales", d: "Title-verified parcels for residential, agricultural and commercial development with legal handover." },
  { n: "07", t: "Tenant Placement", d: "Background-checked, lease-ready tenants placed quickly — protecting yield and occupancy." },
  { n: "08", t: "Property Consultation", d: "Senior-led advisory on investments, valuation, market positioning and yield optimisation." },
];

function Services() {
  return (
    <>
      <section className="pt-36 pb-20 max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-end">
        <div>
          <span className="text-[10px] uppercase tracking-[0.3em] text-accent block mb-4">What we do</span>
          <h1 className="text-5xl md:text-7xl italic text-balance">A full-service property agency.</h1>
        </div>
        <p className="text-muted-foreground text-lg leading-relaxed">
          Eight specialised practices, one senior team. Imara Luxury operates as an integrated agency —
          one phone call connects you to every part of the property journey.
        </p>
      </section>

      <section className="py-12 border-t border-border">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 lg:grid-cols-4">
          {services.map((s, i) => (
            <div
              key={s.n}
              className={`p-10 border-border ${
                i % 4 !== 3 ? "lg:border-r" : ""
              } ${i % 2 !== 1 ? "md:border-r lg:border-r" : ""} ${
                i < services.length - 4 ? "lg:border-b" : ""
              } border-b group hover:bg-muted/40 transition-colors`}
            >
              <span className="text-[10px] uppercase tracking-[0.3em] text-accent block mb-6">{s.n}</span>
              <h3 className="text-2xl italic mb-4">{s.t}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{s.d}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-28">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <img src={interiorKitchen} alt="Curated home interior" loading="lazy" className="w-full aspect-[5/4] object-cover" />
          <div>
            <span className="text-[10px] uppercase tracking-[0.3em] text-accent block mb-4">How we work</span>
            <h2 className="text-4xl md:text-5xl italic mb-8 leading-[1.1]">Senior agents, no handoffs.</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Every client is paired with a senior agent who personally oversees the relationship — from
              first viewing to final handover. No call centres, no junior pass-throughs.
            </p>
            <Link
              to="/contact"
              className="inline-block bg-foreground text-surface px-8 py-4 text-[11px] uppercase tracking-[0.22em]"
            >
              Start a Conversation
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

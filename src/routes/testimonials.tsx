import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/testimonials")({
  head: () => ({
    meta: [
      { title: "Client Stories — Imara Luxury Property" },
      {
        name: "description",
        content:
          "Real client testimonials and success stories from Imara Luxury Property — buyers, renters, landlords and short-stay hosts across Kenya.",
      },
      { property: "og:title", content: "Client Stories — Imara Luxury" },
      { property: "og:description", content: "What our clients quietly say about us." },
    ],
  }),
  component: Testimonials,
});

const stories = [
  {
    q: "After three months looking on my own, Imara found my family the right home in Lavington in eight days. The photos were honest. The viewing was punctual. The handover was effortless.",
    name: "Wanjiru Kamau",
    role: "Renter, Lavington",
    rating: 5,
  },
  {
    q: "I list two coastal apartments with Imara as short stays. Bookings have grown 40% year on year and I have not once had to chase a payment.",
    name: "Daniel Otieno",
    role: "Airbnb Host, Mombasa",
    rating: 5,
  },
  {
    q: "Sold our Karen home in just over a month, fully off-market. The discretion was exactly what we needed.",
    name: "Mr. & Mrs. Mwangi",
    role: "Vendors, Karen",
    rating: 5,
  },
  {
    q: "We acquired three plots in Kitengela through Imara. Their title-search rigour saved us from a bad deal we didn't even know to be worried about.",
    name: "Faith Njeri",
    role: "Land Investor",
    rating: 5,
  },
  {
    q: "I'm based in Dubai. My Nairobi rental properties have been quietly managed by Imara for six years. Statements arrive every quarter. The properties are full.",
    name: "Ahmed Hassan",
    role: "Diaspora Landlord",
    rating: 5,
  },
  {
    q: "Found us a student apartment in two days, walking distance to USIU. The agent met us in person — rare these days.",
    name: "Brian Mutiso",
    role: "Student Renter",
    rating: 5,
  },
];

function Testimonials() {
  return (
    <>
      <section className="pt-40 pb-20 max-w-5xl mx-auto px-6 text-center">
        <span className="text-[10px] uppercase tracking-[0.3em] text-accent block mb-4">
          Client Stories
        </span>
        <h1 className="text-5xl md:text-7xl italic mb-8 text-balance leading-[1.05]">
          The quiet word of mouth that built us.
        </h1>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          Real Kenyans, real homes, real outcomes. A selection of the conversations our clients have
          allowed us to share.
        </p>
      </section>

      <section className="py-12 border-t border-border">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 lg:grid-cols-3">
          {stories.map((s, i) => (
            <figure
              key={i}
              className={`p-10 border-border border-b ${
                i % 3 !== 2 ? "lg:border-r" : ""
              } ${i % 2 !== 1 ? "md:border-r lg:border-r" : ""} group hover:bg-muted/40 transition-colors`}
            >
              <div className="text-accent text-lg tracking-[0.4em] mb-6">★★★★★</div>
              <blockquote className="font-serif italic text-xl leading-snug mb-8">
                "{s.q}"
              </blockquote>
              <figcaption>
                <p className="text-sm font-semibold uppercase tracking-[0.15em]">{s.name}</p>
                <p className="text-xs text-muted-foreground mt-1">{s.role}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section className="bg-foreground text-surface py-24">
        <div className="max-w-5xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-10 text-center">
          {[
            { v: "4.9", l: "Avg. client rating" },
            { v: "1,200+", l: "Homes placed" },
            { v: "98%", l: "Repeat or referred" },
            { v: "10+", l: "Years in market" },
          ].map((s) => (
            <div key={s.l}>
              <p className="text-4xl md:text-5xl text-accent font-medium tracking-tighter mb-2">{s.v}</p>
              <p className="text-[10px] uppercase tracking-[0.22em] text-surface/60">{s.l}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

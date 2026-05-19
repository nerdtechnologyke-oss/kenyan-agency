import { createFileRoute, Link } from "@tanstack/react-router";
import agentPortrait from "@/assets/agent-portrait.jpg";
import heroVilla from "@/assets/hero-villa.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Imara Luxury Property" },
      {
        name: "description",
        content:
          "Imara Luxury is a Kenyan property agency built on trust, senior expertise, and quiet excellence. Our story, mission, and the team behind the homes.",
      },
      { property: "og:title", content: "About — Imara Luxury" },
      { property: "og:description", content: "Built on trust. Responsive by nature." },
    ],
  }),
  component: About,
});

const values = [
  { t: "Truth in listings", d: "What we show is what you see. Every home is visited and photographed by our team — never by the seller." },
  { t: "Senior-led", d: "Every relationship is held by a senior agent. No handoffs, no junior pass-throughs, no call centres." },
  { t: "Nationwide reach", d: "From Karen to Kilifi, Nanyuki to Naivasha — we cover the full Kenyan property map under one roof." },
  { t: "Client first", d: "Our agents are paid only when you're satisfied — no rushed deals, no pressure tactics." },
];

function About() {
  return (
    <>
      <section className="relative pt-40 pb-28 overflow-hidden">
        <div className="absolute inset-0 -z-10 opacity-15">
          <img src={heroVilla} alt="" className="w-full h-full object-cover" />
        </div>
        <div className="max-w-5xl mx-auto px-6 text-center">
          <span className="text-[10px] uppercase tracking-[0.3em] text-accent block mb-6">
            The Agency
          </span>
          <h1 className="text-5xl md:text-7xl italic mb-8 text-balance leading-[1.05]">
            We help Kenyans find the spaces that quietly shape their lives.
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Imara Luxury was founded in 2014 on a simple frustration — that finding a real, accurate,
            well-presented home in Kenya was harder than it should be. A decade later, that same belief
            drives every listing we publish.
          </p>
        </div>
      </section>

      <section className="py-24 max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
        <img src={agentPortrait} alt="Imara Luxury founding agent" loading="lazy" className="w-full aspect-[4/5] object-cover" />
        <div>
          <span className="text-[10px] uppercase tracking-[0.3em] text-accent block mb-4">Our Mission</span>
          <h2 className="text-4xl md:text-5xl italic mb-8 leading-[1.1]">
            Honest property, beautifully presented.
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-5">
            We believe Kenya's property market deserves the same quiet professionalism as the world's
            most respected agencies. Every Imara listing is verified, visited, and photographed in person.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-8">
            We work in the cities and counties we know best — Nairobi, Mombasa, Kisumu, Nakuru, Eldoret,
            Kiambu, Thika, Nanyuki, Naivasha, and the rapidly growing towns in between.
          </p>
          <Link to="/services" className="inline-block border border-border px-8 py-4 text-[11px] uppercase tracking-[0.22em] hover:bg-muted transition-colors">
            Explore Our Services
          </Link>
        </div>
      </section>

      <section className="bg-foreground text-surface py-28">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-16 max-w-2xl">
            <span className="text-[10px] uppercase tracking-[0.3em] text-accent block mb-4">What we stand for</span>
            <h2 className="text-4xl md:text-5xl italic leading-[1.1]">Four quiet commitments.</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-x-16 gap-y-12">
            {values.map((v, i) => (
              <div key={v.t} className="border-t border-surface/15 pt-8">
                <span className="text-[10px] uppercase tracking-[0.3em] text-accent block mb-4">
                  0{i + 1}
                </span>
                <h3 className="text-2xl italic mb-4">{v.t}</h3>
                <p className="text-sm text-surface/70 leading-relaxed">{v.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl italic mb-8 text-balance">
          Want to know more? Come visit us.
        </h2>
        <p className="text-muted-foreground mb-10">
          Our Westlands office is open Monday to Saturday. Coffee is on us.
        </p>
        <Link to="/contact" className="inline-block bg-foreground text-surface px-8 py-4 text-[11px] uppercase tracking-[0.22em]">
          Find Our Office
        </Link>
      </section>
    </>
  );
}

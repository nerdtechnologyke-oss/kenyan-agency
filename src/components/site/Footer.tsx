import { Link } from "@tanstack/react-router";

export function Footer() {
  return (
    <footer className="bg-surface border-t border-border">
      <div className="max-w-7xl mx-auto px-6 pt-20 pb-12 grid md:grid-cols-12 gap-12">
        <div className="md:col-span-5 flex flex-col gap-6">
          <div className="flex items-center gap-2.5">
            <span className="w-6 h-6 bg-foreground flex items-center justify-center">
              <span className="w-3 h-3 border border-surface rotate-45" />
            </span>
            <span className="text-sm font-semibold tracking-[0.15em] uppercase">Imara Luxury</span>
          </div>
          <p className="text-sm text-muted-foreground leading-relaxed max-w-sm">
            Kenya's premium nationwide property partner. From the heights of Nairobi to the shores
            of Diani — we curate the homes that quietly shape the next chapter of modern Kenyan life.
          </p>
          <div className="flex gap-6 pt-2">
            {["Instagram", "LinkedIn", "Twitter"].map((s) => (
              <a key={s} href="#" className="text-[10px] font-bold uppercase tracking-[0.22em] hover:text-accent transition-colors">
                {s}
              </a>
            ))}
          </div>
        </div>

        <div className="md:col-span-2">
          <h4 className="text-[10px] uppercase tracking-[0.3em] font-bold mb-6">Discover</h4>
          <ul className="space-y-3 text-sm text-muted-foreground">
            <li><Link to="/properties" className="hover:text-accent">All Listings</Link></li>
            <li><Link to="/services" className="hover:text-accent">Our Services</Link></li>
            <li><Link to="/about" className="hover:text-accent">The Agency</Link></li>
            <li><Link to="/testimonials" className="hover:text-accent">Client Stories</Link></li>
          </ul>
        </div>

        <div className="md:col-span-2">
          <h4 className="text-[10px] uppercase tracking-[0.3em] font-bold mb-6">Property</h4>
          <ul className="space-y-3 text-sm text-muted-foreground">
            <li><a href="#" className="hover:text-accent">Luxury Villas</a></li>
            <li><a href="#" className="hover:text-accent">Apartments</a></li>
            <li><a href="#" className="hover:text-accent">Airbnb Stays</a></li>
            <li><a href="#" className="hover:text-accent">Land Assets</a></li>
            <li><a href="#" className="hover:text-accent">Commercial</a></li>
          </ul>
        </div>

        <div className="md:col-span-3">
          <h4 className="text-[10px] uppercase tracking-[0.3em] font-bold mb-6">Head Office</h4>
          <p className="text-sm text-muted-foreground">Westlands Commercial Centre</p>
          <p className="text-sm text-muted-foreground mb-4">Nairobi, Kenya</p>
          <p className="text-sm font-semibold">+254 700 000 000</p>
          <p className="text-sm font-semibold">hello@imaraluxury.co.ke</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-8 border-t border-border flex flex-col md:flex-row gap-4 justify-between items-center">
        <p className="text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
          © {new Date().getFullYear()} Imara Luxury Property. All rights reserved.
        </p>
        <p className="text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
          Crafted for Kenyan Excellence
        </p>
      </div>
    </footer>
  );
}

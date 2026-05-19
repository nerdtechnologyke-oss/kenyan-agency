import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Imara Luxury Property" },
      {
        name: "description",
        content:
          "Speak with a senior Imara Luxury agent. WhatsApp, phone, email, or schedule a viewing at our Westlands office in Nairobi.",
      },
      { property: "og:title", content: "Contact — Imara Luxury" },
      { property: "og:description", content: "Senior agents, real responses, within the hour." },
    ],
  }),
  component: Contact,
});

function Contact() {
  const [sent, setSent] = useState(false);

  return (
    <>
      <section className="pt-40 pb-16 max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-end">
        <div>
          <span className="text-[10px] uppercase tracking-[0.3em] text-accent block mb-4">Get in touch</span>
          <h1 className="text-5xl md:text-7xl italic text-balance leading-[1.05]">Let's begin the conversation.</h1>
        </div>
        <p className="text-muted-foreground text-lg leading-relaxed">
          Tell us about the home you're looking for, or the one you'd like us to represent. A senior
          agent will respond personally — usually within the hour, always within the day.
        </p>
      </section>

      <section className="py-16 max-w-7xl mx-auto px-6 grid lg:grid-cols-5 gap-12">
        {/* Form */}
        <form
          onSubmit={(e) => { e.preventDefault(); setSent(true); }}
          className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 gap-6"
        >
          <Field label="Full Name" required><input required className={inputCls} /></Field>
          <Field label="Phone" required><input required type="tel" className={inputCls} placeholder="+254..." /></Field>
          <Field label="Email" className="sm:col-span-2"><input type="email" className={inputCls} /></Field>
          <Field label="I'm interested in">
            <select className={inputCls}>
              <option>Renting</option>
              <option>Buying</option>
              <option>Airbnb stay</option>
              <option>Listing my property</option>
              <option>Property management</option>
              <option>Other</option>
            </select>
          </Field>
          <Field label="Preferred location"><input className={inputCls} placeholder="Karen, Nyali, etc." /></Field>
          <Field label="Tell us more" className="sm:col-span-2">
            <textarea rows={5} className={inputCls + " resize-none"} placeholder="What kind of home are you looking for?" />
          </Field>
          <div className="sm:col-span-2 flex flex-col sm:flex-row gap-4 items-start sm:items-center pt-2">
            <button
              type="submit"
              className="bg-foreground text-surface px-10 py-4 text-[11px] uppercase tracking-[0.22em] hover:bg-accent hover:text-accent-foreground transition-colors"
            >
              Send Enquiry
            </button>
            {sent && (
              <p className="text-sm text-accent">Thank you — a senior agent will be in touch shortly.</p>
            )}
          </div>
        </form>

        {/* Contact info */}
        <aside className="lg:col-span-2 space-y-10">
          <Block label="Head Office">
            <p>Westlands Commercial Centre</p>
            <p>Waiyaki Way, Nairobi, Kenya</p>
            <p className="text-xs text-muted-foreground mt-2">Mon – Sat, 9am – 6pm</p>
          </Block>
          <Block label="Phone">
            <a href="tel:+254700000000" className="hover:text-accent">+254 700 000 000</a>
          </Block>
          <Block label="WhatsApp">
            <a href="https://wa.me/254700000000" target="_blank" rel="noopener noreferrer" className="hover:text-accent">
              +254 700 000 000
            </a>
          </Block>
          <Block label="Email">
            <a href="mailto:hello@imaraluxury.co.ke" className="hover:text-accent">hello@imaraluxury.co.ke</a>
          </Block>
        </aside>
      </section>

      <section className="px-6 pb-24">
        <div className="max-w-7xl mx-auto aspect-[16/8] overflow-hidden border border-border">
          <iframe
            title="Imara Luxury Westlands office"
            src="https://www.google.com/maps?q=Westlands+Nairobi+Kenya&output=embed"
            className="w-full h-full grayscale-[40%]"
            loading="lazy"
          />
        </div>
      </section>
    </>
  );
}

const inputCls =
  "w-full bg-transparent border-b border-border py-3 text-sm focus:border-accent outline-none";

function Field({
  label,
  required,
  className,
  children,
}: {
  label: string;
  required?: boolean;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <label className={`flex flex-col ${className ?? ""}`}>
      <span className="text-[10px] uppercase tracking-[0.22em] text-muted-foreground mb-2">
        {label} {required && <span className="text-accent">*</span>}
      </span>
      {children}
    </label>
  );
}

function Block({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="border-t border-border pt-6">
      <p className="text-[10px] uppercase tracking-[0.3em] text-accent mb-3">{label}</p>
      <div className="text-base">{children}</div>
    </div>
  );
}

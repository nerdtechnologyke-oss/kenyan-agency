import acacia from "@/assets/property-acacia.jpg";
import oceania from "@/assets/property-oceania.jpg";
import loft from "@/assets/property-loft.jpg";
import family from "@/assets/property-family.jpg";
import penthouse from "@/assets/property-penthouse.jpg";
import tigoni from "@/assets/property-tigoni.jpg";

export type Listing = {
  slug: string;
  name: string;
  image: string;
  location: string;
  city: string;
  price: string;
  type: "Sale" | "Rent" | "Airbnb";
  category: "Villa" | "Apartment" | "Family Home" | "Penthouse" | "Loft" | "Cottage";
  beds: number;
  baths: number;
  area: string;
  status: "Exclusive" | "New" | "Featured" | null;
  description: string;
  amenities: string[];
};

export const properties: Listing[] = [
  {
    slug: "acacia-villa-karen",
    name: "The Acacia Villa",
    image: acacia,
    location: "Karen, Nairobi",
    city: "Nairobi",
    price: "KSh 85.0M",
    type: "Sale",
    category: "Villa",
    beds: 5,
    baths: 4,
    area: "620 m²",
    status: "Exclusive",
    description:
      "A serene five-bedroom architectural villa nestled into half an acre of mature gardens in Karen. Floor-to-ceiling timber-framed glazing draws the indigenous landscape into every room, while a sculpted concrete shell anchors the home in quiet permanence.",
    amenities: ["Private pool", "Borehole water", "Solar backup", "Domestic staff quarters", "Double garage", "Smart security"],
  },
  {
    slug: "oceania-sands-nyali",
    name: "Oceania Sands",
    image: oceania,
    location: "Nyali, Mombasa",
    city: "Mombasa",
    price: "KSh 45k / night",
    type: "Airbnb",
    category: "Apartment",
    beds: 3,
    baths: 2,
    area: "180 m²",
    status: "Featured",
    description:
      "A turnkey beachfront residence overlooking the Indian Ocean. Three bedrooms, expansive glass balconies, and direct white-sand access make this the coast's most-requested short stay.",
    amenities: ["Ocean view", "Infinity pool", "Beach access", "Concierge", "Fibre WiFi", "Air conditioning"],
  },
  {
    slug: "loft-district-westlands",
    name: "The Loft District",
    image: loft,
    location: "Westlands, Nairobi",
    city: "Nairobi",
    price: "KSh 120k / month",
    type: "Rent",
    category: "Loft",
    beds: 2,
    baths: 2,
    area: "140 m²",
    status: "New",
    description:
      "An industrial-soul loft above Westlands' creative quarter. Polished concrete, walnut joinery, and 4-meter ceilings deliver a city retreat that feels far from the street below.",
    amenities: ["Rooftop access", "Gym & spa", "Backup generator", "Underground parking", "Smart locks"],
  },
  {
    slug: "kileleshwa-family-residence",
    name: "Mawingu Family Home",
    image: family,
    location: "Kileleshwa, Nairobi",
    city: "Nairobi",
    price: "KSh 38M",
    type: "Sale",
    category: "Family Home",
    beds: 4,
    baths: 3,
    area: "320 m²",
    status: "Featured",
    description:
      "A warm contemporary four-bedroom family home on a quiet leafy street in Kileleshwa. Open kitchen, family-scaled gardens, and a self-contained DSQ wing.",
    amenities: ["Walled compound", "DSQ", "Children's play area", "Backup water tanks", "CCTV"],
  },
  {
    slug: "sapphire-penthouse-kilimani",
    name: "The Sapphire Penthouse",
    image: penthouse,
    location: "Kilimani, Nairobi",
    city: "Nairobi",
    price: "KSh 250k / month",
    type: "Rent",
    category: "Penthouse",
    beds: 3,
    baths: 3,
    area: "260 m²",
    status: "Exclusive",
    description:
      "A skyline-facing penthouse atop one of Kilimani's most discreet towers. Double-height living, private rooftop terrace, and bespoke walnut cabinetry throughout.",
    amenities: ["Private rooftop", "Lift access", "Concierge", "Gym & pool", "EV charging", "24-hour security"],
  },
  {
    slug: "tigoni-cottage-limuru",
    name: "Tigoni Cottage",
    image: tigoni,
    location: "Tigoni, Limuru",
    city: "Limuru",
    price: "KSh 32k / night",
    type: "Airbnb",
    category: "Cottage",
    beds: 2,
    baths: 2,
    area: "140 m²",
    status: "New",
    description:
      "A timber and glass cottage suspended in the tea fields of Tigoni. Two bedrooms, a wood-burning fireplace, and uninterrupted highland views — the weekend escape that locals quietly keep to themselves.",
    amenities: ["Fireplace", "Tea garden access", "Heated water", "Chef on request", "Pet friendly"],
  },
];

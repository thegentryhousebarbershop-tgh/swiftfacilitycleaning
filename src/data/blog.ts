import { stockImages } from "@/data/images";

export type Article = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  readMinutes: number;
  date: string; // ISO
  dateLabel: string;
  image: string;
  imageAlt: string;
  body: string[];
  relatedServiceHref?: string;
};

export const articles: Article[] = [
  {
    slug: "office-cleaning-checklist",
    title: "The Commercial Office Cleaning Checklist Facility Managers Actually Use",
    excerpt:
      "A room-by-room breakdown of what a professional cleaning program should cover every visit — and how to hold a vendor accountable.",
    category: "Office Cleaning",
    readMinutes: 6,
    date: "2026-05-18",
    dateLabel: "May 18, 2026",
    image: stockImages.modernOfficeInterior.url,
    imageAlt: "Modern office interior ready for cleaning",
    relatedServiceHref: "/commercial-cleaning/office-cleaning",
    body: [
      "A great office cleaning program isn't about doing more — it's about doing the right things consistently, and being able to prove it. The best facility managers we work with don't measure a vendor by how the office looks the day after a deep clean. They measure it by how it looks on an average Tuesday.",
      "Start with the daily essentials: trash and recycling removed, restrooms cleaned and restocked, high-touch points (door handles, light switches, shared keyboards) disinfected, and common areas tidied. These are the tasks that, when missed, everyone notices.",
      "Weekly tasks add the depth: vacuuming under and around workstations, dusting surfaces and vents, spot-cleaning glass and interior windows, and a thorough breakroom and kitchen clean. Monthly and quarterly work — floor care, high dusting, and detailed restroom deep cleans — keeps the space from slowly degrading over time.",
      "The single most important line item isn't a task at all: it's documentation. A checklist completed and left after every visit turns 'I think they came' into 'here's exactly what was done.' That's the difference between hoping your office is clean and knowing it.",
    ],
  },
  {
    slug: "disinfection-vs-cleaning",
    title: "Cleaning vs. Disinfecting: What High-Traffic Facilities Get Wrong",
    excerpt:
      "The difference matters for health outcomes and compliance. Here's how to structure a program that does both correctly.",
    category: "Disinfection",
    readMinutes: 5,
    date: "2026-04-30",
    dateLabel: "April 30, 2026",
    image: stockImages.medicalEquipmentRoom.url,
    imageAlt: "Medical facility interior with equipment",
    relatedServiceHref: "/commercial-cleaning/disinfection-services",
    body: [
      "Cleaning and disinfecting are often used interchangeably, but they do two different jobs — and doing them in the wrong order wastes both time and money. Cleaning removes dirt, dust, and debris from a surface. Disinfecting kills the germs that remain. Disinfectant applied to a dirty surface is far less effective, because grime shields pathogens from the product.",
      "The correct sequence is always clean first, then disinfect. For high-traffic facilities — gyms, clinics, schools, busy offices — the highest-value target is the set of high-touch points: door handles, faucets, shared equipment, elevator buttons, and reception surfaces.",
      "Electrostatic spraying has changed what's possible here. A charged disinfectant mist wraps evenly around surfaces, including the hard-to-reach areas a cloth misses, delivering more complete coverage in less time.",
      "The goal isn't to disinfect everything constantly — it's to disinfect the right surfaces, at the right frequency, after they've actually been cleaned. A good partner builds that logic into your schedule so you're protected without overspending.",
    ],
  },
  {
    slug: "choosing-a-janitorial-partner",
    title: "7 Questions to Ask Before Signing a Janitorial Contract",
    excerpt:
      "Insurance, staffing, quality checks, and communication — the criteria that separate a reliable partner from a costly mistake.",
    category: "Facility Management",
    readMinutes: 7,
    date: "2026-04-12",
    dateLabel: "April 12, 2026",
    image: stockImages.glassOfficeBuilding.url,
    imageAlt: "Corporate office building exterior",
    relatedServiceHref: "/commercial-cleaning/janitorial-services",
    body: [
      "Switching janitorial vendors is disruptive, so it's worth getting the decision right the first time. The lowest bid is rarely the cheapest option once you factor in missed visits, turnover, and the hours you'll spend managing a vendor who needs managing.",
      "Ask these seven questions before you sign. One: Are you insured and bonded, and can I see documentation? Two: Will the same team clean my facility, or a rotating crew? Three: How do you handle staff turnover and training? Four: What does your quality-check process look like, and do I get documentation?",
      "Five: Who is my point of contact, and how fast do you respond to issues? Six: What happens if something isn't done right — what's the remedy? Seven: How flexible is scheduling if my needs change?",
      "The answers reveal more than the price ever will. A vendor who assigns a fixed team, documents their work, and gives you a real person to call is one you'll stop having to think about — which is the entire point of hiring one.",
    ],
  },
];

export const blogCategories = ["All", ...Array.from(new Set(articles.map((a) => a.category)))];

export function getArticle(slug: string) {
  return articles.find((a) => a.slug === slug);
}

import { stockImages } from "@/data/images";
import type { FaqItem } from "@/components/ui/FaqAccordion";

export type ServiceBenefit = { icon: string; title: string; text: string };

export type ServicePageData = {
  slug: string; // route-final segment key
  href: string;
  h1: string;
  metaTitle: string;
  metaDescription: string;
  eyebrow: string;
  heroSubhead: string;
  heroImage: string;
  heroImageAlt: string;
  benefits: ServiceBenefit[];
  included: string[];
  includedNote?: string;
  industrySlugs: string[];
  relatedServiceSlugs: string[];
  faqs: FaqItem[];
  ctaHeadline: string;
};

export const servicePages: Record<string, ServicePageData> = {
  "commercial-cleaning": {
    slug: "commercial-cleaning",
    href: "/commercial-cleaning",
    h1: "Commercial Cleaning Services for Missouri Businesses",
    metaTitle: "Commercial Cleaning Services in Missouri",
    metaDescription:
      "Reliable, accountable commercial cleaning for offices, medical facilities, schools, and more across Missouri. Request a free quote from Swift Facility Cleaning.",
    eyebrow: "Commercial Cleaning",
    heroSubhead:
      "One accountable partner for every cleaning need in your facility — custom programs, trained teams, and documented quality on every visit.",
    heroImage: stockImages.receptionBright.url,
    heroImageAlt: "Bright modern commercial reception kept spotless",
    benefits: [
      { icon: "ShieldCheck", title: "Fully Accountable", text: "Documented checklists and inspections after every visit." },
      { icon: "Users", title: "Trained, Vetted Teams", text: "Background-checked staff who know your facility." },
      { icon: "CalendarClock", title: "Flexible Scheduling", text: "Daily, weekly, or custom — around your hours." },
      { icon: "Sparkles", title: "Consistent Results", text: "The same high standard applied every single time." },
    ],
    included: [],
    industrySlugs: ["offices", "medical-facilities", "schools", "warehouses-industrial", "government-buildings", "commercial-facilities"],
    relatedServiceSlugs: ["office-cleaning", "medical-cleaning", "janitorial-services", "floor-care", "disinfection-services"],
    faqs: [
      { q: "What types of facilities do you clean?", a: "We clean offices, medical facilities, schools, daycares, gyms, warehouses, dealerships, showrooms, religious and government buildings, and more across Missouri." },
      { q: "How is commercial cleaning priced?", a: "Pricing depends on facility size, cleaning frequency, and scope. We provide a custom quote after a brief walkthrough or consultation — no obligation." },
      { q: "Do you provide supplies and equipment?", a: "Yes. We supply all cleaning products and equipment, including eco-friendly options on request." },
      { q: "Are you insured and bonded?", a: "Yes. Swift Facility Cleaning is fully insured and bonded, with documentation available upon request." },
      { q: "Can I customize my cleaning plan?", a: "Absolutely. Every facility is different — we build a program around your space, schedule, and priorities." },
    ],
    ctaHeadline: "Ready for a Cleaner, Healthier Facility?",
  },

  "office-cleaning": {
    slug: "office-cleaning",
    href: "/commercial-cleaning/office-cleaning",
    h1: "Professional Office Cleaning Services in Missouri",
    metaTitle: "Office Cleaning Services in Missouri",
    metaDescription:
      "Professional office cleaning in Missouri — spotless workstations, restrooms, and common areas that impress clients and keep staff healthy. Free quote available.",
    eyebrow: "Office Cleaning",
    heroSubhead:
      "Spotless workstations, restrooms, and common areas that make a great first impression and keep your team healthy and productive.",
    heroImage: stockImages.modernOfficeInterior.url,
    heroImageAlt: "Clean modern open-plan office",
    benefits: [
      { icon: "Sparkles", title: "Better First Impressions", text: "A spotless office signals professionalism to every client." },
      { icon: "Users", title: "Healthier Team", text: "Disinfected high-touch points mean fewer sick days." },
      { icon: "Clock", title: "After-Hours Service", text: "We clean around your schedule — no disruption." },
      { icon: "CheckCircle2", title: "Consistent Standards", text: "The same detailed checklist, every visit." },
    ],
    included: [
      "Desk & workstation sanitizing",
      "Restroom cleaning & restocking",
      "Breakroom & kitchen cleaning",
      "Trash & recycling removal",
      "Vacuuming & hard-floor care",
      "Glass & window spot cleaning",
      "Common-area dusting",
      "High-touch point disinfection",
    ],
    includedNote: "Custom plans available — every facility is different.",
    industrySlugs: ["offices", "government-buildings", "showrooms", "car-dealerships"],
    relatedServiceSlugs: ["janitorial-services", "floor-care", "disinfection-services"],
    faqs: [
      { q: "How often should an office be professionally cleaned?", a: "Most offices are cleaned daily or several times per week. We'll recommend a frequency based on foot traffic, staff size, and your priorities." },
      { q: "Do you clean after business hours?", a: "Yes. Most office clients prefer evening or early-morning service so cleaning never disrupts the workday." },
      { q: "Can you handle multi-floor or multi-suite offices?", a: "Yes. We build programs for single suites through multi-floor campuses, with a fixed team assigned to your building." },
      { q: "Do you restock restroom and breakroom supplies?", a: "We can manage supply restocking as part of your program — just let us know during the walkthrough." },
      { q: "Is your staff background-checked?", a: "Every team member is vetted and background-checked before working in a client facility." },
    ],
    ctaHeadline: "Ready for an Office That Always Looks Its Best?",
  },

  "medical-cleaning": {
    slug: "medical-cleaning",
    href: "/commercial-cleaning/medical-cleaning",
    h1: "Medical Facility Cleaning & Disinfection Services",
    metaTitle: "Medical Facility Cleaning in Missouri",
    metaDescription:
      "OSHA-aware medical facility cleaning and disinfection in Missouri — exam rooms, waiting areas, and high-touch points cleaned to healthcare standards.",
    eyebrow: "Medical Cleaning",
    heroSubhead:
      "Healthcare-grade cleaning and disinfection for clinics, practices, and medical offices — with the compliance awareness your facility demands.",
    heroImage: stockImages.medicalEquipmentRoom.url,
    heroImageAlt: "Clean, modern medical facility interior",
    benefits: [
      { icon: "ShieldCheck", title: "Compliance-Aware", text: "OSHA-aware protocols and EPA-registered disinfectants." },
      { icon: "Sparkles", title: "Infection Control", text: "High-touch disinfection that protects patients and staff." },
      { icon: "CheckCircle2", title: "Documented Visits", text: "Accountable cleaning with records available on request." },
      { icon: "Users", title: "Trained Specialists", text: "Teams trained specifically for medical environments." },
    ],
    included: [
      "Exam room disinfection",
      "Waiting-area sanitation",
      "High-touch point disinfection",
      "Restroom cleaning & restocking",
      "EPA-registered disinfectant application",
      "Compliant waste-handling support",
      "Floor care & vacuuming",
      "Reception & common-area cleaning",
    ],
    includedNote: "Certifications available upon request. Custom compliance-aware plans built per facility.",
    industrySlugs: ["medical-facilities", "daycare-facilities", "gyms-recreational-facilities"],
    relatedServiceSlugs: ["disinfection-services", "janitorial-services", "office-cleaning"],
    faqs: [
      { q: "Do you follow OSHA and infection-control guidelines?", a: "Our teams use OSHA-aware protocols and EPA-registered disinfectants appropriate for healthcare environments. We do not overstate formal certifications — documentation of our practices is available on request." },
      { q: "Do you disinfect exam rooms between the day's patients?", a: "We build schedules around your patient flow, including end-of-day disinfection and, where needed, midday high-touch service." },
      { q: "What disinfectants do you use?", a: "EPA-registered, healthcare-appropriate disinfectants. We can accommodate specific product requirements your practice follows." },
      { q: "Can you handle regulated waste?", a: "We provide compliant support for general and high-touch cleaning; regulated medical waste handling is coordinated per your facility's existing protocols." },
      { q: "Are your staff trained for medical settings?", a: "Yes. Team members assigned to medical facilities receive training specific to healthcare cleaning and infection control." },
    ],
    ctaHeadline: "Ready for a Safer, Compliant Medical Facility?",
  },

  "janitorial-services": {
    slug: "janitorial-services",
    href: "/commercial-cleaning/janitorial-services",
    h1: "Reliable Janitorial Services for Missouri Facilities",
    metaTitle: "Janitorial Services in Missouri",
    metaDescription:
      "Dependable recurring janitorial services in Missouri — daily, weekly, or custom upkeep with a fixed, accountable team. Request a free quote.",
    eyebrow: "Janitorial Services",
    heroSubhead:
      "Dependable recurring upkeep for any facility — a fixed, accountable team that shows up on schedule and keeps your building running.",
    heroImage: stockImages.governmentHallway.url,
    heroImageAlt: "Clean commercial facility hallway",
    benefits: [
      { icon: "CalendarClock", title: "Recurring & Reliable", text: "Daily, weekly, or custom — never a no-show." },
      { icon: "Users", title: "Your Dedicated Team", text: "The same trained crew who knows your building." },
      { icon: "CheckCircle2", title: "Accountable Upkeep", text: "Documented checklists and quality reviews." },
      { icon: "Sparkles", title: "Day-Porter Options", text: "Daytime coverage for high-traffic facilities." },
    ],
    included: [
      "Recurring scheduled cleaning",
      "Restroom & breakroom upkeep",
      "Trash & recycling management",
      "Floor maintenance",
      "Supply restocking",
      "Day-porter options",
      "Common-area cleaning",
      "High-touch disinfection",
    ],
    includedNote: "Custom plans available — every facility is different.",
    industrySlugs: ["warehouses-industrial", "commercial-facilities", "government-buildings"],
    relatedServiceSlugs: ["office-cleaning", "floor-care", "disinfection-services"],
    faqs: [
      { q: "What's the difference between janitorial and commercial cleaning?", a: "Janitorial services are recurring, routine upkeep (daily/weekly). Commercial cleaning is the broader category that also includes specialized and periodic deep-cleaning work." },
      { q: "Can I get daytime (day-porter) coverage?", a: "Yes. For high-traffic buildings we offer day-porter options to keep restrooms, lobbies, and common areas fresh throughout the day." },
      { q: "Do I get the same cleaners each time?", a: "Yes. We assign a fixed team to your facility so they learn your space and standards." },
      { q: "How flexible is scheduling?", a: "Very. We build daily, weekly, or fully custom schedules around your operating hours." },
      { q: "What if something isn't done right?", a: "Your dedicated manager is a quick call away, and our documented quality checks catch issues before you have to." },
    ],
    ctaHeadline: "Ready for Janitorial Service You Can Count On?",
  },

  "floor-care": {
    slug: "floor-care",
    href: "/commercial-cleaning/floor-care",
    h1: "Commercial Floor Care & Maintenance Services",
    metaTitle: "Commercial Floor Care in Missouri",
    metaDescription:
      "Commercial floor care in Missouri — strip & wax, carpet extraction, buffing, tile & grout, and hardwood maintenance that protects your investment.",
    eyebrow: "Floor Care",
    heroSubhead:
      "Restore and protect every floor surface — from strip-and-wax to carpet extraction — with programs built around how your floors are actually used.",
    heroImage: stockImages.reflectiveFloor.url,
    heroImageAlt: "Polished, reflective commercial floor",
    benefits: [
      { icon: "Sparkles", title: "Restorative Finish", text: "Floors that look new and make the right impression." },
      { icon: "ShieldCheck", title: "Protect Your Investment", text: "Proper care extends the life of expensive flooring." },
      { icon: "Layers", title: "Every Surface", text: "VCT, carpet, tile & grout, and hardwood." },
      { icon: "CalendarClock", title: "Scheduled Programs", text: "Deep-cleaning cycles that fit your calendar." },
    ],
    included: [
      "Strip & wax (VCT)",
      "Carpet extraction",
      "Buffing & burnishing",
      "Tile & grout cleaning",
      "Hardwood maintenance",
      "Scheduled deep-cleaning programs",
      "Entryway & high-traffic care",
      "Slip-resistance treatments",
    ],
    includedNote: "Not sure which program your floors need? We'll assess surface types during a free walkthrough.",
    industrySlugs: ["gyms-recreational-facilities", "showrooms", "warehouses-industrial"],
    relatedServiceSlugs: ["janitorial-services", "office-cleaning", "commercial-cleaning"],
    faqs: [
      { q: "How often should commercial floors be deep cleaned?", a: "It depends on traffic and surface type. High-traffic VCT may need quarterly strip-and-wax, while carpet often benefits from extraction two to four times a year. We'll recommend a cycle during the walkthrough." },
      { q: "Do you handle both carpet and hard floors?", a: "Yes — VCT, carpet, tile & grout, and hardwood, each with the appropriate method and equipment." },
      { q: "Can you work after hours to avoid disruption?", a: "Yes. Floor care is often scheduled evenings or weekends so surfaces can fully cure before foot traffic returns." },
      { q: "Will floor care fit into my regular cleaning contract?", a: "Absolutely. Many clients bundle scheduled floor care into their janitorial program for a single, predictable plan." },
      { q: "Do you offer slip-resistance treatments?", a: "Yes, we offer treatments to improve traction on hard surfaces — important for entryways and high-traffic areas." },
    ],
    ctaHeadline: "Ready for Floors That Always Look Their Best?",
  },

  "disinfection-services": {
    slug: "disinfection-services",
    href: "/commercial-cleaning/disinfection-services",
    h1: "Commercial Disinfection Services in Missouri",
    metaTitle: "Commercial Disinfection Services in Missouri",
    metaDescription:
      "EPA-registered commercial disinfection in Missouri — electrostatic spraying and high-touch disinfection for high-traffic and post-illness environments.",
    eyebrow: "Disinfection Services",
    heroSubhead:
      "EPA-registered disinfection for high-touch, high-traffic environments — scheduled or on-demand, including post-illness deep disinfection.",
    heroImage: stockImages.gymInterior.url,
    heroImageAlt: "High-traffic facility disinfected and ready for use",
    benefits: [
      { icon: "ShieldCheck", title: "EPA-Registered", text: "Disinfectants proven effective against key pathogens." },
      { icon: "Sparkles", title: "Electrostatic Coverage", text: "Even application across complex surfaces." },
      { icon: "Clock", title: "On-Demand Response", text: "Rapid post-illness deep disinfection when you need it." },
      { icon: "CheckCircle2", title: "High-Touch Focus", text: "Targeted disinfection where germs spread most." },
    ],
    included: [
      "Electrostatic spraying",
      "High-touch point disinfection",
      "EPA-registered product application",
      "Scheduled disinfection visits",
      "On-demand response",
      "Post-illness deep disinfection",
      "Restroom & breakroom disinfection",
      "Common-area treatment",
    ],
    includedNote: "Custom plans available — scheduled programs or one-time response.",
    industrySlugs: ["medical-facilities", "gyms-recreational-facilities", "daycare-facilities", "offices"],
    relatedServiceSlugs: ["medical-cleaning", "office-cleaning", "janitorial-services"],
    faqs: [
      { q: "What is electrostatic disinfection?", a: "Electrostatic sprayers apply a charged disinfectant mist that wraps evenly around surfaces — including hard-to-reach areas — for more complete coverage than wiping alone." },
      { q: "Is disinfection different from regular cleaning?", a: "Yes. Cleaning removes dirt and debris; disinfecting kills germs on surfaces. A complete program does both, in the right order." },
      { q: "Can you respond quickly after an illness outbreak?", a: "Yes. We offer on-demand deep disinfection so you can reopen a space confidently after a reported illness." },
      { q: "Are your disinfectants safe for my facility?", a: "We use EPA-registered products appropriate to your environment and can accommodate specific product requirements." },
      { q: "Can disinfection be scheduled regularly?", a: "Absolutely — many high-traffic facilities add recurring disinfection to their standard cleaning program." },
    ],
    ctaHeadline: "Ready to Protect Your Facility and Its People?",
  },
};

export const serviceOrder = [
  "commercial-cleaning",
  "office-cleaning",
  "medical-cleaning",
  "janitorial-services",
  "floor-care",
  "disinfection-services",
];

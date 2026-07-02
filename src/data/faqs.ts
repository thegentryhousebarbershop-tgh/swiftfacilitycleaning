import type { FaqItem } from "@/components/ui/FaqAccordion";

export type FaqCategory = {
  id: string;
  label: string;
  items: FaqItem[];
};

export const faqCategories: FaqCategory[] = [
  {
    id: "general",
    label: "General",
    items: [
      { q: "What areas do you serve?", a: "We serve businesses throughout Missouri and the Greater St. Louis metro, including St. Charles, Wentzville, Chesterfield, Clayton, Florissant, Arnold, and surrounding communities." },
      { q: "Are you insured and bonded?", a: "Yes. Swift Facility Cleaning is fully insured and bonded, with documentation available upon request." },
      { q: "Do you bring your own supplies and equipment?", a: "Yes. We supply all cleaning products and equipment, including eco-friendly and Green Seal options on request." },
      { q: "Is your staff background-checked?", a: "Every team member is vetted and background-checked before working in a client facility, and teams are trained to our documented standards." },
    ],
  },
  {
    id: "pricing",
    label: "Pricing",
    items: [
      { q: "How is commercial cleaning priced?", a: "Pricing depends on facility size, cleaning frequency, and scope of work. We provide a custom, no-obligation quote after a brief walkthrough or consultation." },
      { q: "Do you require long-term contracts?", a: "No. We offer flexible agreements and will recommend a plan that fits your needs — many clients stay with us because they want to, not because they're locked in." },
      { q: "Are there any hidden fees?", a: "No. We provide transparent, fixed-scope pricing. If your needs change, we'll discuss any adjustments with you before making them." },
      { q: "Can I get a free quote?", a: "Yes. Every quote is free and comes with no obligation. Request one online or call us and we'll respond within one business day." },
    ],
  },
  {
    id: "scheduling",
    label: "Scheduling",
    items: [
      { q: "Can scheduling be customized?", a: "Yes. We build cleaning schedules around your business hours — daily, weekly, or fully custom frequencies, including nights and weekends." },
      { q: "Do you clean after business hours?", a: "Yes. Most clients prefer evening or early-morning service so cleaning never disrupts their workday." },
      { q: "How quickly can you start?", a: "After a walkthrough and plan approval, most facilities can begin service within the same week." },
      { q: "What if I need to change my schedule?", a: "Just contact your dedicated account manager — we build flexibility into every program and adjust quickly when your needs change." },
    ],
  },
  {
    id: "services",
    label: "Services",
    items: [
      { q: "What services do you offer?", a: "Commercial cleaning, office cleaning, medical cleaning, janitorial services, floor care, and disinfection services — one accountable partner for every need in your facility." },
      { q: "Do you offer specialized floor care?", a: "Yes — strip & wax, carpet extraction, buffing, tile & grout cleaning, and hardwood maintenance, each with the appropriate method for the surface." },
      { q: "Can you handle disinfection for high-touch areas?", a: "Yes. We provide EPA-registered disinfection, including electrostatic spraying and on-demand post-illness deep disinfection." },
      { q: "Do you provide day-porter service?", a: "Yes. For high-traffic buildings we offer daytime day-porter coverage to keep restrooms, lobbies, and common areas fresh throughout the day." },
    ],
  },
  {
    id: "industries",
    label: "Industries",
    items: [
      { q: "What types of facilities do you clean?", a: "Offices, medical facilities, schools, daycares, gyms, warehouses, dealerships, showrooms, religious and government buildings, and more." },
      { q: "Do you follow medical cleaning protocols?", a: "Yes. Our teams use OSHA-aware protocols and EPA-registered disinfectants for healthcare environments. Documentation of our practices is available on request." },
      { q: "Can you clean large industrial facilities?", a: "Yes. We build programs for large, high-traffic warehouses and industrial spaces, with scheduling designed around your operations." },
      { q: "Do you work with schools and daycares?", a: "Yes. We provide detailed, safety-focused cleaning and disinfection for educational and childcare environments." },
    ],
  },
];

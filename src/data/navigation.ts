import {
  Building2,
  Briefcase,
  Stethoscope,
  ClipboardCheck,
  Layers,
  ShieldCheck,
  LayoutGrid,
  Info,
  Phone,
  HelpCircle,
  Newspaper,
  type LucideIcon,
} from "lucide-react";
import { services } from "@/data/services";
import { industries } from "@/data/industries";
import { cities } from "@/data/locations";

export type MenuLink = {
  label: string;
  href: string;
  description?: string;
  icon?: LucideIcon;
};

export type MenuColumn = {
  heading?: string;
  links: MenuLink[];
};

export type NavItem = {
  label: string;
  href: string;
  columns?: MenuColumn[];
  viewAll?: MenuLink;
  variant?: "wide" | "compact";
};

const serviceIcons: Record<string, LucideIcon> = {
  "commercial-cleaning": Building2,
  "office-cleaning": Briefcase,
  "medical-cleaning": Stethoscope,
  "janitorial-services": ClipboardCheck,
  "floor-care": Layers,
  "disinfection-services": ShieldCheck,
};

export const navigation: NavItem[] = [
  {
    label: "Commercial Cleaning",
    href: "/commercial-cleaning",
    variant: "wide",
    columns: [
      {
        heading: "Cleaning Services",
        links: [
          {
            label: "All Cleaning Services",
            href: "/commercial-cleaning",
            description: "Our full range of commercial programs",
            icon: LayoutGrid,
          },
          ...services
            .filter((s) => s.slug !== "commercial-cleaning")
            .map((s) => ({
              label: s.name,
              href: s.href,
              description: s.shortDescription,
              icon: serviceIcons[s.slug] ?? Building2,
            })),
        ],
      },
    ],
    viewAll: { label: "View all services", href: "/commercial-cleaning" },
  },
  {
    label: "Industries",
    href: "/#industries",
    variant: "wide",
    columns: [
      {
        // Industry pages don't exist yet — route to the homepage Industries section.
        links: industries.map((ind) => ({
          label: ind.name,
          href: "/#industries",
        })),
      },
    ],
    viewAll: { label: "View all industries", href: "/#industries" },
  },
  {
    label: "Locations",
    href: "/#service-areas",
    variant: "wide",
    columns: [
      {
        heading: "Missouri",
        // Location pages don't exist yet — route to the homepage Service Areas section.
        links: cities.map((c) => ({
          label: c.name,
          href: "/#service-areas",
        })),
      },
    ],
    viewAll: { label: "View all locations", href: "/#service-areas" },
  },
  {
    label: "Resources",
    href: "/about",
    variant: "compact",
    columns: [
      {
        links: [
          { label: "About", href: "/about", description: "Who we are & how we work", icon: Info },
          { label: "Contact", href: "/contact", description: "Request a free quote", icon: Phone },
          { label: "FAQs", href: "/faqs", description: "Answers to common questions", icon: HelpCircle },
          { label: "Blog", href: "/blog", description: "Guides for facility managers", icon: Newspaper },
        ],
      },
    ],
  },
  {
    label: "Contact",
    href: "/contact",
  },
];

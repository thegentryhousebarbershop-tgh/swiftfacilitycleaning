export type Service = {
  slug: string;
  name: string;
  shortDescription: string;
  icon: string;
  href: string;
};

export const services: Service[] = [
  {
    slug: "commercial-cleaning",
    name: "Commercial Cleaning",
    shortDescription: "Full-service cleaning programs tailored to your facility.",
    icon: "Building2",
    href: "/commercial-cleaning",
  },
  {
    slug: "office-cleaning",
    name: "Office Cleaning",
    shortDescription: "Spotless workstations, restrooms, and common areas.",
    icon: "Briefcase",
    href: "/commercial-cleaning/office-cleaning",
  },
  {
    slug: "medical-cleaning",
    name: "Medical Cleaning",
    shortDescription: "Compliant disinfection for medical and healthcare spaces.",
    icon: "Stethoscope",
    href: "/commercial-cleaning/medical-cleaning",
  },
  {
    slug: "janitorial-services",
    name: "Janitorial Services",
    shortDescription: "Reliable recurring upkeep for any facility type.",
    icon: "ClipboardCheck",
    href: "/commercial-cleaning/janitorial-services",
  },
  {
    slug: "floor-care",
    name: "Floor Care",
    shortDescription: "Strip, wax, buff, and deep-clean every floor surface.",
    icon: "Layers",
    href: "/commercial-cleaning/floor-care",
  },
  {
    slug: "disinfection-services",
    name: "Disinfection Services",
    shortDescription: "EPA-registered disinfection for high-touch environments.",
    icon: "ShieldCheck",
    href: "/commercial-cleaning/disinfection-services",
  },
];

import { stockImages } from "@/data/images";

export type Service = {
  slug: string;
  name: string;
  shortDescription: string;
  icon: string;
  href: string;
  image: string;
  benefits: string[];
};

export const services: Service[] = [
  {
    slug: "commercial-cleaning",
    name: "Commercial Cleaning",
    shortDescription: "Full-service cleaning programs tailored to your facility.",
    icon: "Building2",
    href: "/commercial-cleaning",
    image: stockImages.glassOfficeBuilding.url,
    benefits: ["Custom scope", "Any facility size"],
  },
  {
    slug: "office-cleaning",
    name: "Office Cleaning",
    shortDescription: "Spotless workstations, restrooms, and common areas.",
    icon: "Briefcase",
    href: "/commercial-cleaning/office-cleaning",
    image: stockImages.modernOfficeInterior.url,
    benefits: ["Daily or weekly", "After-hours service"],
  },
  {
    slug: "medical-cleaning",
    name: "Medical Cleaning",
    shortDescription: "Compliant disinfection for medical and healthcare spaces.",
    icon: "Stethoscope",
    href: "/commercial-cleaning/medical-cleaning",
    image: stockImages.medicalEquipmentRoom.url,
    benefits: ["OSHA aligned", "Exam & waiting rooms"],
  },
  {
    slug: "janitorial-services",
    name: "Janitorial Services",
    shortDescription: "Reliable recurring upkeep for any facility type.",
    icon: "ClipboardCheck",
    href: "/commercial-cleaning/janitorial-services",
    image: stockImages.governmentHallway.url,
    benefits: ["Fixed team", "Quality checks"],
  },
  {
    slug: "floor-care",
    name: "Floor Care",
    shortDescription: "Strip, wax, buff, and deep-clean every floor surface.",
    icon: "Layers",
    href: "/commercial-cleaning/floor-care",
    image: stockImages.reflectiveFloor.url,
    benefits: ["Tile, VCT & carpet", "Restorative finish"],
  },
  {
    slug: "disinfection-services",
    name: "Disinfection Services",
    shortDescription: "EPA-registered disinfection for high-touch environments.",
    icon: "ShieldCheck",
    href: "/commercial-cleaning/disinfection-services",
    image: stockImages.gymInterior.url,
    benefits: ["EPA-registered", "High-touch focus"],
  },
];

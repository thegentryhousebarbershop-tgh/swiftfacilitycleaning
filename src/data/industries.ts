import { stockImages } from "@/data/images";

export type Industry = {
  slug: string;
  name: string;
  description: string;
  tag: string;
  image?: string;
};

export const industries: Industry[] = [
  {
    slug: "offices",
    name: "Office Cleaning Services",
    description: "Studies show a direct link between workplace cleanliness and worker productivity.",
    tag: "Office Cleaning",
    image: stockImages.modernOfficeInterior.url,
  },
  {
    slug: "schools",
    name: "Educational Facilities",
    description: "Students and teachers touch countless surfaces daily.",
    tag: "School Cleaning",
    image: stockImages.classroomDesks.url,
  },
  {
    slug: "daycare-facilities",
    name: "Daycare Facilities",
    description: "Keeping little ones safe starts with a thoroughly sanitized space.",
    tag: "Daycare Cleaning",
    image: stockImages.colorfulToys.url,
  },
  {
    slug: "medical-facilities",
    name: "Medical Facilities",
    description: "From hospitals to clinics, we go the extra mile to keep your space clean.",
    tag: "Medical Cleaning",
    image: stockImages.medicalEquipmentRoom.url,
  },
  {
    slug: "gyms-recreational-facilities",
    name: "Gyms & Recreational Facilities",
    description: "High-touch equipment and locker rooms demand consistent disinfecting.",
    tag: "Gym Cleaning",
    image: stockImages.gymInterior.url,
  },
  {
    slug: "warehouses-industrial",
    name: "Warehouses & Industrial",
    description: "Industrial cleaning tailored to large, high-traffic facilities.",
    tag: "Industrial Cleaning",
    image: stockImages.warehouseShelves.url,
  },
  {
    slug: "commercial-facilities",
    name: "Commercial Facilities",
    description: "Reliable cleaning programs built around your business hours.",
    tag: "Commercial Cleaning",
    image: stockImages.glassOfficeBuilding.url,
  },
  {
    slug: "car-dealerships",
    name: "Car Dealerships",
    description: "Showroom-quality floors and glass that make every vehicle shine.",
    tag: "Dealership Cleaning",
    image: stockImages.carShowroom.url,
  },
  {
    slug: "showrooms",
    name: "Showrooms",
    description: "Spotless presentation spaces that put your products front and center.",
    tag: "Showroom Cleaning",
    image: stockImages.retailDisplay.url,
  },
  {
    slug: "religious-facilities",
    name: "Religious Facilities",
    description: "Respectful, detailed cleaning for spaces that bring people together.",
    tag: "Facility Cleaning",
    image: stockImages.churchInterior.url,
  },
  {
    slug: "government-buildings",
    name: "Government Buildings",
    description: "High-traffic public buildings must stay clean to prevent contamination.",
    tag: "Government Cleaning",
    image: stockImages.governmentHallway.url,
  },
];

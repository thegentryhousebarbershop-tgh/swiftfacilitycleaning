export type City = {
  slug: string;
  name: string;
  state: "missouri";
  featured: boolean;
  nearby: string[];
};

export const cities: City[] = [
  { slug: "st-charles", name: "St. Charles", state: "missouri", featured: true, nearby: ["wentzville", "florissant"] },
  { slug: "wentzville", name: "Wentzville", state: "missouri", featured: true, nearby: ["st-charles", "florissant"] },
  { slug: "chesterfield", name: "Chesterfield", state: "missouri", featured: true, nearby: ["creve-coeur", "clayton"] },
  { slug: "clayton", name: "Clayton", state: "missouri", featured: true, nearby: ["richmond-heights", "university-city"] },
  { slug: "florissant", name: "Florissant", state: "missouri", featured: true, nearby: ["st-charles", "old-north"] },
  { slug: "arnold", name: "Arnold", state: "missouri", featured: true, nearby: ["oakville", "dutchtown"] },
  { slug: "edwardsville", name: "Edwardsville", state: "missouri", featured: false, nearby: ["granite-city"] },
  { slug: "university-city", name: "University City", state: "missouri", featured: false, nearby: ["clayton"] },
  { slug: "madison", name: "Madison", state: "missouri", featured: false, nearby: ["granite-city"] },
  { slug: "oakville", name: "Oakville", state: "missouri", featured: false, nearby: ["arnold"] },
  { slug: "granite-city", name: "Granite City", state: "missouri", featured: false, nearby: ["madison", "edwardsville"] },
  { slug: "richmond-heights", name: "Richmond Heights", state: "missouri", featured: false, nearby: ["clayton"] },
  { slug: "dutchtown", name: "Dutchtown", state: "missouri", featured: false, nearby: ["bevo-mill", "arnold"] },
  { slug: "bevo-mill", name: "Bevo Mill", state: "missouri", featured: false, nearby: ["dutchtown", "benton-park"] },
  { slug: "grand-center", name: "Grand Center", state: "missouri", featured: false, nearby: ["old-north"] },
  { slug: "old-north", name: "Old North", state: "missouri", featured: false, nearby: ["florissant", "grand-center"] },
  { slug: "creve-coeur", name: "Creve Coeur", state: "missouri", featured: false, nearby: ["chesterfield"] },
  { slug: "benton-park", name: "Benton Park", state: "missouri", featured: false, nearby: ["bevo-mill"] },
];

export const featuredCities = cities.filter((c) => c.featured);

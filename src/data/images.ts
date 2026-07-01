export type StockImage = {
  url: string;
  alt: string;
  photographer: string;
  source: string;
};

export const stockImages = {
  heroOffice: {
    url: "https://images.unsplash.com/photo-1753596109465-565b8fc96300?fm=jpg&q=80&w=1600&auto=format&fit=crop",
    alt: "Bright, sunlit modern office space with large windows",
    photographer: "Bradley Andrews",
    source: "https://unsplash.com/photos/e-jR0DlAN6k",
  },
  modernOfficeInterior: {
    url: "https://images.unsplash.com/photo-1758413350815-7b06dbbfb9a7?fm=jpg&q=80&w=1600&auto=format&fit=crop",
    alt: "Empty modern office space with tables and chairs",
    photographer: "Nhan Hoang",
    source: "https://unsplash.com/photos/j3eaegN9j_g",
  },
  glassOfficeBuilding: {
    url: "https://images.unsplash.com/photo-1745015446589-7ee6f702d8c1?fm=jpg&q=80&w=1600&auto=format&fit=crop",
    alt: "Glass facade of a modern corporate office building",
    photographer: "Fabian Kleiser",
    source: "https://unsplash.com/photos/V5vF94h52r0",
  },
  gymInterior: {
    url: "https://images.unsplash.com/photo-1758957646695-ec8bce3df462?fm=jpg&q=80&w=1200&auto=format&fit=crop",
    alt: "Modern gym with treadmills and large windows",
    photographer: "Aalo Lens",
    source: "https://unsplash.com/photos/asVNiNtSSXE",
  },
  carShowroom: {
    url: "https://images.unsplash.com/photo-1747817372958-1aadb5132208?fm=jpg&q=80&w=1200&auto=format&fit=crop",
    alt: "Cars displayed in a modern showroom",
    photographer: "Zieben VH",
    source: "https://unsplash.com/photos/nmBZO-1vUgI",
  },
  churchInterior: {
    url: "https://images.unsplash.com/photo-1438032005730-c779502df39b?fm=jpg&q=80&w=1200&auto=format&fit=crop",
    alt: "Bright modern church interior with stained glass",
    photographer: "Karl Fredrickson",
    source: "https://unsplash.com/photos/JRsZWmRd_Ws",
  },
  warehouseShelves: {
    url: "https://images.unsplash.com/photo-1749244768351-2726dc23d26c?fm=jpg&q=80&w=1200&auto=format&fit=crop",
    alt: "Industrial warehouse filled with shelves and boxes",
    photographer: "Russ Murray",
    source: "https://unsplash.com/photos/M7G_m5XJ-go",
  },
  governmentHallway: {
    url: "https://images.unsplash.com/photo-1755495736990-8c70aa1324de?fm=jpg&q=80&w=1200&auto=format&fit=crop",
    alt: "Modern government building interior hallway with warm lighting",
    photographer: "David Kristianto",
    source: "https://unsplash.com/photos/VRzUyuHy8p0",
  },
  reflectiveFloor: {
    url: "https://images.unsplash.com/photo-1762965619718-26dd70adbd51?fm=jpg&q=80&w=1200&auto=format&fit=crop",
    alt: "Polished, reflective commercial floor in a hallway",
    photographer: "Eugene Chystiakov",
    source: "https://unsplash.com/photos/k4oGhHRo0ck",
  },
  teamCollaboration: {
    url: "https://images.unsplash.com/photo-1758873268745-dd2cf0d677b5?fm=jpg&q=80&w=1200&auto=format&fit=crop",
    alt: "Team collaborating around a computer in a modern office",
    photographer: "Vitaly Gariev",
    source: "https://unsplash.com/photos/UikYLDQj9_I",
  },
  classroomDesks: {
    url: "https://images.unsplash.com/photo-1740635341299-3b8e3490f546?fm=jpg&q=80&w=1200&auto=format&fit=crop",
    alt: "Bright elementary school classroom filled with desks and chairs",
    photographer: "Nathan Cima",
    source: "https://unsplash.com/photos/Qw6wa96IvvQ",
  },
  colorfulToys: {
    url: "https://images.unsplash.com/photo-1759149318776-66e93a68695c?fm=jpg&q=80&w=1200&auto=format&fit=crop",
    alt: "Colorful building block toys scattered on a floor",
    photographer: "Roman Kravtsov",
    source: "https://unsplash.com/photos/zk3LB1psbkY",
  },
  medicalEquipmentRoom: {
    url: "https://images.unsplash.com/photo-1723513198534-c3cd2e033815?fm=jpg&q=80&w=1200&auto=format&fit=crop",
    alt: "Hospital room filled with medical equipment and monitors",
    photographer: "Jan Canty",
    source: "https://unsplash.com/photos/LpG6c7mQfXo",
  },
  retailDisplay: {
    url: "https://images.unsplash.com/photo-1746723391801-1a24f7a57730?fm=jpg&q=80&w=1200&auto=format&fit=crop",
    alt: "Modern retail showroom display and counter setup",
    photographer: "SumUp",
    source: "https://unsplash.com/photos/ea_703_mEQg",
  },
} satisfies Record<string, StockImage>;

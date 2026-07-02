"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ChevronLeft,
  ChevronRight,
  Building2,
  GraduationCap,
  Baby,
  Stethoscope,
  Dumbbell,
  Warehouse,
  Store,
  Car,
  ShoppingBag,
  Church,
  Landmark,
  ArrowUpRight,
  type LucideIcon,
} from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { industries } from "@/data/industries";
import { cn } from "@/lib/utils";

const industryIcons: Record<string, LucideIcon> = {
  offices: Building2,
  schools: GraduationCap,
  "daycare-facilities": Baby,
  "medical-facilities": Stethoscope,
  "gyms-recreational-facilities": Dumbbell,
  "warehouses-industrial": Warehouse,
  "commercial-facilities": Store,
  "car-dealerships": Car,
  showrooms: ShoppingBag,
  "religious-facilities": Church,
  "government-buildings": Landmark,
};

export function IndustriesServed() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  function scrollByCard(dir: 1 | -1) {
    const track = trackRef.current;
    if (!track) return;
    const card = track.children[0] as HTMLElement | undefined;
    const cardWidth = card ? card.offsetWidth + 24 : 320;
    track.scrollBy({ left: dir * cardWidth, behavior: "smooth" });
  }

  function handleScroll() {
    const track = trackRef.current;
    if (!track) return;
    const card = track.children[0] as HTMLElement | undefined;
    const cardWidth = card ? card.offsetWidth + 24 : 320;
    setActiveIndex(Math.round(track.scrollLeft / cardWidth));
  }

  return (
    <section id="industries" className="section-y bg-heading text-white relative overflow-hidden scroll-mt-24">
      <div className="container-default flex flex-col md:flex-row md:items-end md:justify-between gap-6">
        <SectionHeader
          align="left"
          eyebrow="Industries We Serve"
          title="Specialized Cleaning for Every Environment"
          description="Businesses across Missouri trust Swift for cleaning and disinfecting tailored to their industry."
          className="mb-0 max-w-xl [&_h2]:text-white [&_span]:text-brand-yellow [&_p]:text-white/70"
        />
        <div className="hidden md:flex gap-2 shrink-0">
          <button
            aria-label="Previous industry"
            onClick={() => scrollByCard(-1)}
            className="w-11 h-11 rounded-full ring-1 ring-white/20 flex items-center justify-center hover:bg-white/10 transition-colors"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            aria-label="Next industry"
            onClick={() => scrollByCard(1)}
            className="w-11 h-11 rounded-full ring-1 ring-white/20 flex items-center justify-center hover:bg-white/10 transition-colors"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>

      <div className="relative mt-10">
        <div
          ref={trackRef}
          onScroll={handleScroll}
          className="flex gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory px-6 md:px-[max(1.5rem,calc((100vw-1280px)/2+1.5rem))] pb-4 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
        >
          {industries.map((ind) => {
            const Icon = industryIcons[ind.slug] ?? Building2;
            return (
              <Link
                key={ind.slug}
                // href={`/industries/${ind.slug}`}
                href={`/#industries`}
                className="group relative shrink-0 w-[280px] md:w-[320px] aspect-[3/4] rounded-[20px] overflow-hidden snap-start ring-1 ring-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-yellow"
              >
                {ind.image ? (
                  <Image
                    src={ind.image}
                    alt={ind.name}
                    fill
                    loading="lazy"
                    sizes="320px"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                ) : (
                  <div className="absolute inset-0 bg-white/5" aria-hidden="true" />
                )}

                {/* gradient overlay */}
                <div
                  className="absolute inset-0 bg-linear-to-t from-heading via-heading/40 to-transparent"
                  aria-hidden="true"
                />

                {/* icon chip */}
                <div className="absolute top-4 left-4 flex items-center justify-center w-11 h-11 rounded-xl bg-white/15 backdrop-blur ring-1 ring-white/20">
                  <Icon size={20} className="text-white" aria-hidden="true" />
                </div>

                <div className="absolute inset-x-0 bottom-0 p-6">
                  <p className="text-xs font-semibold uppercase tracking-wide text-brand-yellow">
                    {ind.tag}
                  </p>
                  <h3 className="mt-1 text-xl font-bold text-accent-blue leading-snug">{ind.name}</h3>
                  <p className="mt-2 text-sm text-white/70 leading-relaxed line-clamp-2">
                    {ind.description}
                  </p>
                  <span className="inline-flex items-center gap-1.5 mt-3 text-sm font-semibold text-white group-hover:gap-2.5 transition-all">
                    Explore
                    <ArrowUpRight size={16} aria-hidden="true" />
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      </div>

      {/* progress dots (mobile) */}
      <div className="md:hidden flex justify-center gap-1.5 mt-6">
        {industries.map((ind, i) => (
          <span
            key={ind.slug}
            className={cn(
              "h-1.5 rounded-full transition-all",
              i === activeIndex ? "w-6 bg-brand-yellow" : "w-1.5 bg-white/30"
            )}
            aria-hidden="true"
          />
        ))}
      </div>
    </section>
  );
}

"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { industries } from "@/data/industries";
import { cn } from "@/lib/utils";

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
    <section className="section-y bg-background-secondary relative overflow-hidden">
      <div className="container-default">
        <SectionHeader
          eyebrow="Industries We Serve"
          title="Industries We Serve"
          description="Businesses across Missouri trust Swift Facility Cleaning for their commercial cleaning and disinfecting needs."
        />
      </div>

      <div className="relative">
        <button
          aria-label="Previous industry"
          onClick={() => scrollByCard(-1)}
          className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-white shadow-md flex items-center justify-center hover:bg-background-secondary transition-colors"
        >
          <ChevronLeft size={20} className="text-heading" />
        </button>
        <button
          aria-label="Next industry"
          onClick={() => scrollByCard(1)}
          className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-white shadow-md flex items-center justify-center hover:bg-background-secondary transition-colors"
        >
          <ChevronRight size={20} className="text-heading" />
        </button>

        <div
          className="pointer-events-none absolute inset-y-0 left-0 w-16 md:w-32 z-10 bg-gradient-to-r from-background-secondary to-transparent"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute inset-y-0 right-0 w-16 md:w-32 z-10 bg-gradient-to-l from-background-secondary to-transparent"
          aria-hidden="true"
        />

        <div
          ref={trackRef}
          onScroll={handleScroll}
          className="flex gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory px-6 md:px-[12vw] pb-4 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
        >
          {industries.map((ind, i) => {
            const isActive = i === activeIndex;
            return (
              <Link
                key={ind.slug}
                href={`/industries/${ind.slug}`}
                className={cn(
                  "group relative shrink-0 w-[260px] md:w-[340px] aspect-[4/5] rounded-[20px] overflow-hidden snap-center transition-all duration-300",
                  isActive ? "opacity-100 scale-100" : "opacity-60 scale-95"
                )}
              >
                <div className="absolute inset-0 bg-white">
                  {ind.image ? (
                    <Image
                      src={ind.image}
                      alt={ind.name}
                      fill
                      loading="lazy"
                      sizes="340px"
                      className="object-cover"
                    />
                  ) : (
                    <div
                      className="absolute inset-0 flex items-center justify-center text-text-secondary text-xs text-center px-4"
                      aria-hidden="true"
                    >
                      {ind.name} photo
                    </div>
                  )}
                </div>
                <div
                  className={cn(
                    "absolute inset-0 bg-gradient-to-t from-white via-white/70 to-transparent transition-opacity",
                    isActive ? "opacity-90" : "opacity-95"
                  )}
                  aria-hidden="true"
                />
                <div className="absolute inset-x-0 bottom-0 p-6 text-center">
                  <h3
                    className={cn(
                      "font-bold transition-colors",
                      isActive ? "text-xl text-heading" : "text-lg text-text-secondary"
                    )}
                  >
                    {ind.name}
                  </h3>
                  <p
                    className={cn(
                      "mt-2 text-sm text-body transition-opacity",
                      isActive ? "opacity-100" : "opacity-0 h-0"
                    )}
                  >
                    {ind.description}
                  </p>
                  <span
                    className={cn(
                      "inline-block mt-4 text-xs font-bold uppercase tracking-wide border border-border rounded px-3 py-2 transition-opacity",
                      isActive ? "opacity-100" : "opacity-0"
                    )}
                  >
                    {ind.tag}
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}

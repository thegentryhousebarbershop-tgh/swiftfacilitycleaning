"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Star } from "lucide-react";
import { cn } from "@/lib/utils";
import { stockImages } from "@/data/images";

const testimonials = [
  {
    label: "Testimonial 1",
    headline: "This cleaning crew changed how we run our office",
    quote:
      "Swift Facility Cleaning has been consistent and reliable since day one. I never have to worry about whether the building is ready for clients.",
    name: "Jamie Carter, Office Manager",
    image: stockImages.teamCollaboration,
  },
  {
    label: "Testimonial 2",
    headline: "The sky is the limit",
    quote:
      "Communication is excellent and the team is always responsive when we need to adjust scheduling. They run like an extension of our own staff.",
    name: "Priya Nair, Facility Manager",
    image: stockImages.glassOfficeBuilding,
  },
  {
    label: "Testimonial 3",
    headline: "Detail-oriented and dependable",
    quote:
      "They handle our medical office with the attention to detail and compliance awareness we need. Every visit, every time.",
    name: "Dr. Allen Brooks, Practice Administrator",
    image: stockImages.reflectiveFloor,
  },
];

export function Testimonials() {
  const [active, setActive] = useState(0);

  return (
    <section className="section-y">
      <div className="container-default">
        {/* Desktop: horizontal accordion slider */}
        <div className="hidden md:flex h-[560px] rounded-[24px] overflow-hidden shadow-xl">
          {testimonials.map((item, i) => {
            const isActive = i === active;
            return (
              <button
                key={item.label}
                onClick={() => setActive(i)}
                aria-current={isActive}
                aria-label={isActive ? undefined : `Show ${item.label}`}
                className={cn(
                  "relative h-full text-left transition-all duration-[600ms] ease-[cubic-bezier(0.4,0,0.2,1)]",
                  isActive ? "flex-[8]" : "flex-[1]",
                  !isActive && "cursor-pointer"
                )}
                style={{ minWidth: isActive ? undefined : "72px" }}
              >
                {/* Background */}
                <div className="absolute inset-0 bg-background-secondary">
                  <Image
                    src={item.image.url}
                    alt=""
                    fill
                    loading="lazy"
                    sizes="(min-width: 768px) 80vw, 100vw"
                    className="object-cover"
                  />
                </div>

                {/* Overlay */}
                <div
                  className={cn(
                    "absolute inset-0 transition-opacity duration-500",
                    isActive
                      ? "bg-gradient-to-r from-heading/90 via-heading/50 to-transparent"
                      : "bg-heading/70"
                  )}
                  aria-hidden="true"
                />

                {/* Collapsed label */}
                <div
                  className={cn(
                    "absolute inset-0 flex items-center justify-center overflow-hidden transition-opacity duration-300",
                    isActive ? "opacity-0" : "opacity-100 delay-150"
                  )}
                >
                  <span
                    className="text-sm font-bold uppercase tracking-wide text-white whitespace-nowrap"
                    style={{ writingMode: "vertical-rl", transform: "rotate(180deg)" }}
                  >
                    {item.label}
                  </span>
                </div>

                {/* Expanded content */}
                <div
                  className={cn(
                    "absolute inset-0 flex items-center overflow-hidden transition-opacity duration-500",
                    isActive ? "opacity-100 delay-200" : "opacity-0"
                  )}
                >
                  <div className="px-10 lg:px-16 max-w-lg w-full">
                    <div className="flex gap-1" aria-label="5 out of 5 stars">
                      {Array.from({ length: 5 }).map((_, s) => (
                        <Star key={s} size={20} className="fill-accent-blue text-accent-blue" aria-hidden="true" />
                      ))}
                    </div>
                    <h3 className="text-2xl lg:text-3xl font-bold mt-4 text-white whitespace-nowrap lg:whitespace-normal">
                      {item.headline}
                    </h3>
                    <p className="mt-4 text-white/80 leading-relaxed">{item.quote}</p>
                    <p className="mt-4 text-sm font-semibold text-white/60">— {item.name}</p>
                    <Link
                      href="/reviews"
                      className="inline-block mt-6 bg-[#f5821f] hover:bg-[#e2741a] text-white text-sm font-bold uppercase tracking-wide px-6 py-3 rounded transition-colors"
                    >
                      Hear Their Story
                    </Link>
                  </div>
                </div>
              </button>
            );
          })}
        </div>

        {/* Mobile: stacked card with dots */}
        <div className="md:hidden rounded-[24px] overflow-hidden bg-heading">
          <div className="relative px-6 py-12">
            <div className="flex gap-1" aria-label="5 out of 5 stars">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} size={20} className="fill-accent-blue text-accent-blue" aria-hidden="true" />
              ))}
            </div>
            <h3 className="text-2xl font-bold mt-4 text-white">{testimonials[active].headline}</h3>
            <p className="mt-4 text-white/80 leading-relaxed">{testimonials[active].quote}</p>
            <p className="mt-4 text-sm font-semibold text-white/60">— {testimonials[active].name}</p>
            <Link
              href="/reviews"
              className="inline-block mt-6 w-fit bg-[#f5821f] hover:bg-[#e2741a] text-white text-sm font-bold uppercase tracking-wide px-6 py-3 rounded transition-colors"
            >
              Hear Their Story
            </Link>

            <div className="flex gap-2 mt-8">
              {testimonials.map((item, i) => (
                <button
                  key={item.label}
                  aria-label={`Show ${item.label}`}
                  aria-current={i === active}
                  onClick={() => setActive(i)}
                  className={cn(
                    "w-2.5 h-2.5 rounded-full transition-colors",
                    i === active ? "bg-accent-blue" : "bg-white/30"
                  )}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import Image from "next/image";
import { Check } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { stockImages } from "@/data/images";

const points = [
  "Dedicated account manager for every contract",
  "Trained, background-checked cleaning teams",
  "Documented quality inspections after every visit",
  "Flexible scheduling around your business hours",
];

export function CompanyIntro() {
  return (
    <section className="section-y">
      <div className="container-default grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">
        <Reveal className="lg:col-span-6 order-2 lg:order-1">
          <span className="inline-block text-sm font-semibold uppercase tracking-wide text-accent-blue mb-3">
            Who We Are
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-heading leading-tight">
            A Local Cleaning Partner Built for Businesses That Can&apos;t Afford Off Days
          </h2>
          <p className="mt-5 text-lg text-body leading-relaxed">
            Swift Facility Cleaning was founded on a simple idea: commercial
            cleaning should be something you never have to think about. We build
            reliable, accountable cleaning programs so your facility is always
            ready — for clients, staff, inspectors, and everyone in between.
          </p>

          <ul className="mt-8 grid sm:grid-cols-2 gap-4">
            {points.map((p) => (
              <li key={p} className="flex items-start gap-3">
                <span className="mt-0.5 w-6 h-6 rounded-full bg-brand-yellow flex items-center justify-center shrink-0">
                  <Check size={14} className="text-heading" aria-hidden="true" />
                </span>
                <span className="text-body">{p}</span>
              </li>
            ))}
          </ul>

          <div className="mt-9">
            <Button href="/about" variant="secondary" size="lg">
              More About Swift
            </Button>
          </div>
        </Reveal>

        <Reveal delay={0.1} className="lg:col-span-6 order-1 lg:order-2">
          <div className="relative">
            <div className="relative rounded-[24px] overflow-hidden aspect-[4/3] shadow-xl ring-1 ring-black/5">
              <Image
                src={stockImages.teamBright.url}
                alt={stockImages.teamBright.alt}
                fill
                loading="lazy"
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-5 -right-5 bg-accent-blue text-white rounded-2xl shadow-lg px-6 py-4 hidden sm:block">
              <p className="text-2xl font-bold leading-none">98%</p>
              <p className="text-xs text-white/80 mt-1">Client Retention Rate</p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Phone, Star, ShieldCheck, Clock } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { site } from "@/data/site";
import { stockImages } from "@/data/images";

const trustPills = [
  { icon: ShieldCheck, label: "Licensed, Bonded & Insured" },
  { icon: Clock, label: "Same-Day Quote Response" },
];

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden">
      {/* Full-bleed background */}
      <Image
        src={stockImages.receptionBright.url}
        alt=""
        fill
        priority
        // sizes="90vw"
        className="object-cover object-center -z-20"
      />
      {/* Readability scrim */}
      {/* <div
        className="absolute inset-0 -z-10 bg-gradient-to-r from-heading/85 via-heading/55 to-heading/10"
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 -z-10 bg-gradient-to-t from-heading/70 via-transparent to-transparent"
        aria-hidden="true"
      /> */}

      <div className="container-default relative min-h-[88vh] md:min-h-[80vh] flex flex-col justify-center py-12 md:py-20">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="max-w-2xl"
        >
          <span className="inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur px-4 py-2 text-xs sm:text-sm font-semibold text-white ring-1 ring-white/20">
            <span className="flex" aria-hidden="true">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} size={14} className="fill-brand-yellow text-brand-yellow" />
              ))}
            </span>
            Rated 5 stars by Missouri businesses
          </span>

          <h1 className="mt-6 text-[2.5rem] leading-[1.1] md:text-6xl md:leading-[1.05] font-bold bg-clip-text text-transparent bg-linear-to-r from-text-hover via-text-hover/80 to-text-hover/50">
            Commercial Cleaning Your Business Can Actually Rely On
          </h1>

          <p className="mt-6 text-lg md:text-xl text-white/80 leading-relaxed max-w-xl">
            Consistent, accountable cleaning programs for offices, medical
            facilities, and schools across Missouri — built around your schedule
            and backed by documented quality checks.
          </p>

          <div className="mt-9 flex flex-col sm:flex-row gap-3 sm:gap-4">
            <Button href="/contact" size="lg" className="w-full sm:w-auto">
              Request a Free Quote
            </Button>
            <Button
              href={site.phoneHref}
              size="lg"
              className="w-full sm:w-auto bg-white/10 text-white ring-1 ring-white/25 backdrop-blur hover:bg-white/20"
            >
              <Phone size={18} aria-hidden="true" /> {site.phone}
            </Button>
          </div>

          <div className="mt-10 flex flex-wrap gap-x-6 gap-y-3">
            {trustPills.map((p) => (
              <div key={p.label} className="flex items-center gap-2 text-sm font-medium text-white/90">
                <p.icon className="text-brand-yellow shrink-0" size={18} aria-hidden="true" />
                {p.label}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

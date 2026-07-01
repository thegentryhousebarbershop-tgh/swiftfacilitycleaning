"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Phone, ShieldCheck, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { site } from "@/data/site";
import { stockImages } from "@/data/images";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-background-secondary">
      {/* <div
        className="absolute -top-32 -right-32 w-[28rem] h-[28rem] rounded-full bg-brand-yellow/20 blur-3xl"
        aria-hidden="true"
      /> */}
      {/* <div
        className="absolute -bottom-40 -left-20 w-[24rem] h-[24rem] rounded-full bg-accent-blue/10 blur-3xl"
        aria-hidden="true"
      /> */}

      <div className="container-default relative grid lg:grid-cols-12 gap-10 lg:gap-12 items-center py-14 md:py-20 lg:py-28">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="lg:col-span-6"
        >
          <span className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold text-accent-blue mb-5 md:mb-6">
            <Sparkles size={16} aria-hidden="true" />
            Trusted Commercial Cleaning Partner — Missouri
          </span>
          <h1 className="text-[2.25rem] leading-[1.15] md:text-5xl md:leading-[1.1] font-bold text-heading">
            Reliable Commercial Cleaning That Keeps Your Business Spotless
          </h1>
          <p className="mt-5 md:mt-6 text-base md:text-xl text-body leading-relaxed max-w-md">
            Consistent, professional cleaning programs for offices, medical
            facilities, schools, and more — built around your schedule.
          </p>
          <div className="mt-7 md:mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4">
            <Button href="/contact" size="lg" className="w-full sm:w-auto">
              Request a Free Quote
            </Button>
            <Button href={site.phoneHref} variant="secondary" size="lg" className="w-full sm:w-auto">
              <Phone size={18} aria-hidden="true" /> Call Now
            </Button>
          </div>

          <div className="mt-8 md:mt-10 flex items-center gap-3 text-sm font-medium text-body">
            <ShieldCheck className="text-accent-blue shrink-0" size={20} aria-hidden="true" />
            Insured, bonded, and trusted by 500+ Missouri businesses
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.15 }}
          className="lg:col-span-6 relative"
        >
          <div className="relative rounded-[20px] md:rounded-[28px] overflow-hidden aspect-[4/3] bg-white shadow-xl ring-1 ring-black/5">
            <Image
              src={stockImages.heroOffice.url}
              alt={stockImages.heroOffice.alt}
              fill
              priority
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </div>

          <div className="absolute -bottom-5 -left-5 md:-bottom-6 md:-left-6 bg-white rounded-2xl shadow-lg px-5 py-3 md:px-6 md:py-4">
            <p className="text-xl md:text-2xl font-bold text-heading leading-none">10+</p>
            <p className="text-xs text-text-secondary mt-1">Years Serving Missouri</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

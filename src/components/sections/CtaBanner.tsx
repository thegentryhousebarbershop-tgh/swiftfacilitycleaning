import Image from "next/image";
import { Phone, ArrowRight, CalendarClock } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { site } from "@/data/site";
import { stockImages } from "@/data/images";

export function CtaBanner({
  headline = "Ready for a Cleaner, Healthier Facility?",
  subtext = "Request a free, no-obligation walkthrough and quote. We respond within one business day — most clients get a plan the same week.",
}: {
  headline?: string;
  subtext?: string;
}) {
  return (
    <section className="py-16 md:py-20 bg-text-hover">
      <div className="container-default">
        <div className="relative overflow-hidden rounded-[28px] isolate px-6 py-16 md:px-16 md:py-20">
          {/* Background image + scrim */}
          <Image
            src={stockImages.lobbyBright.url}
            alt=""
            fill
            loading="lazy"
            sizes="(min-width: 1280px) 1280px, 100vw"
            className="object-cover -z-20"
          />
          {/* <div className="absolute inset-0 -z-10 bg-gradient-to-r from-heading/95 via-heading/85 to-heading/70" aria-hidden="true" /> */}

          <div className="relative max-w-2xl">
            <span className="inline-flex items-center gap-2 rounded-full bg-brand-yellow/15 px-4 py-2 text-sm font-semibold text-brand-yellow ring-1 ring-brand-yellow/30">
              <CalendarClock size={16} aria-hidden="true" />
              Free walkthrough & quote
            </span>
            <h2 className="mt-5 text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-linear-to-r from-text-hover to-text-hover/70 leading-[1.1]">{headline}</h2>
            <p className="mt-5 text-base md:text-lg text-white/75 leading-relaxed">{subtext}</p>

            <div className="mt-9 flex flex-col sm:flex-row gap-3 sm:gap-4">
              <Button href="/contact" size="lg" className="w-full sm:w-auto">
                Request a Free Quote
                <ArrowRight size={18} aria-hidden="true" />
              </Button>
              <Button
                href={site.phoneHref}
                size="lg"
                className="w-full sm:w-auto bg-white/10 text-white ring-1 ring-white/25 backdrop-blur hover:bg-white/20"
              >
                <Phone size={18} aria-hidden="true" /> {site.phone}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

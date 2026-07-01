import Image from "next/image";
import { Phone } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { site } from "@/data/site";
import { stockImages } from "@/data/images";

export function CtaBanner({
  headline = "Ready for a Cleaner, Healthier Facility?",
  subtext = "Request a free, no-obligation quote and hear back within one business day.",
}: {
  headline?: string;
  subtext?: string;
}) {
  return (
    <section className="section-y relative overflow-hidden bg-heading">
      <Image
        src={stockImages.modernOfficeInterior.url}
        alt=""
        fill
        loading="lazy"
        sizes="100vw"
        className="object-cover opacity-60"
      />
      <div
        className="absolute inset-0  "
        aria-hidden="true"
      />
      <div className="container-content relative text-center">
        <h2 className="text-2xl md:text-4xl font-bold text-brand-yellow">{headline}</h2>
        <p className="mt-4 text-base md:text-lg text-white/70 max-w-xl mx-auto">{subtext}</p>
        <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
          <Button href="/contact" size="lg" className="w-full sm:w-auto">
            Request a Free Quote
          </Button>
          <Button
            href={site.phoneHref}
            size="lg"
            className="w-full sm:w-auto bg-white/10 text-white border border-white/20 hover:bg-white/20"
          >
            <Phone size={18} aria-hidden="true" /> {site.phone}
          </Button>
        </div>
      </div>
    </section>
  );
}

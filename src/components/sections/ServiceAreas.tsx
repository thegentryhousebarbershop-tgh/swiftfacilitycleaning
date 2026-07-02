import Link from "next/link";
import { MapPin, Phone } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { cities } from "@/data/locations";
import { site } from "@/data/site";

export function ServiceAreas() {
  const mapQuery = encodeURIComponent(site.address);

  return (
    <section id="service-areas" className="section-y bg-background-secondary scroll-mt-24">
      <div className="container-default">
        <SectionHeader
          eyebrow="Service Areas"
          title="Proudly Serving Greater St. Louis & Missouri"
          description="Locally owned and operated — with fast response times across the metro and surrounding communities."
        />

        <div className="grid lg:grid-cols-12 gap-8 items-stretch">
          {/* Left: location info + city list */}
          <Reveal className="lg:col-span-5 flex flex-col">
            <div className="rounded-[24px] bg-white ring-1 ring-border-light shadow-sm p-6 md:p-8">
              <div className="flex items-start gap-3">
                <span className="flex items-center justify-center w-11 h-11 rounded-full bg-background-secondary shrink-0">
                  <MapPin className="text-accent-blue" size={20} aria-hidden="true" />
                </span>
                <div>
                  <p className="font-semibold text-heading">Swift Facility Cleaning HQ</p>
                  <p className="text-sm text-body">{site.address}</p>
                  <a href={site.phoneHref} className="mt-1 inline-flex items-center gap-1.5 text-sm font-semibold text-accent-blue">
                    <Phone size={14} aria-hidden="true" /> {site.phone}
                  </a>
                </div>
              </div>

              <hr className="my-6 border-border" />

              <p className="text-sm font-semibold uppercase tracking-wide text-text-secondary mb-4">
                Cities we serve
              </p>
              <ul className="grid grid-cols-2 gap-x-4 gap-y-2.5">
                {cities.map((c) => (
                  <li key={c.slug}>
                    <Link
                      href={`/locations/missouri/${c.slug}`}
                      className="flex items-center gap-2 text-sm text-body hover:text-accent-blue"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-brand-yellow shrink-0" aria-hidden="true" />
                      {c.name}
                    </Link>
                  </li>
                ))}
              </ul>

              <div className="mt-8">
                <Button href="/locations/missouri" variant="secondary" size="md" className="w-full">
                  View All Service Areas
                </Button>
              </div>
            </div>
          </Reveal>

          {/* Right: embedded map */}
          <Reveal delay={0.1} className="lg:col-span-7">
            <div className="relative h-full min-h-[380px] rounded-[24px] overflow-hidden ring-1 ring-border shadow-md">
              <iframe
                title="Swift Facility Cleaning service area map"
                src={`https://www.google.com/maps?q=${mapQuery}&z=10&output=embed`}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0 w-full h-full border-0"
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

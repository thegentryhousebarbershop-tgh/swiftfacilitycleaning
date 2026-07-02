import Image from "next/image";
import Link from "next/link";
import * as Icons from "lucide-react";
import { ArrowRight, Check, Phone } from "lucide-react";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { FaqAccordion } from "@/components/ui/FaqAccordion";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { ProcessSteps } from "@/components/sections/ProcessSteps";
import { ServicesOverview } from "@/components/sections/ServicesOverview";
import { ServiceAreas } from "@/components/sections/ServiceAreas";
import { SwiftDifference } from "@/components/sections/SwiftDifference";
import { services } from "@/data/services";
import { industries } from "@/data/industries";
import { site } from "@/data/site";
import type { ServicePageData } from "@/data/servicePages";
import { servicePages } from "@/data/servicePages";

function Icon({ name, className, size = 24 }: { name: string; className?: string; size?: number }) {
  const C = (Icons as unknown as Record<string, Icons.LucideIcon>)[name] ?? Icons.Sparkles;
  return <C className={className} size={size} aria-hidden="true" />;
}

export function ServicePageLayout({ data }: { data: ServicePageData }) {
  const crossIndustries = data.industrySlugs
    .map((slug) => industries.find((i) => i.slug === slug))
    .filter((i): i is NonNullable<typeof i> => Boolean(i));
  const isHub = data.included.length === 0;
  const subServices = services.filter((s) => s.slug !== "commercial-cleaning");

  return (
    <>
      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "Commercial Cleaning", href: "/commercial-cleaning" },
          ...(data.slug === "commercial-cleaning" ? [] : [{ label: data.eyebrow }]),
        ]}
      />

      {/* Hero */}
      <section className="relative overflow-hidden bg-background-secondary">
        <div className="container-default grid lg:grid-cols-2 gap-10 lg:gap-14 items-center py-14 md:py-20">
          <Reveal>
            <span className="inline-block text-sm font-semibold uppercase tracking-wide text-accent-blue mb-4">
              {data.eyebrow}
            </span>
            <h1 className="text-[2.25rem] leading-[1.15] md:text-5xl md:leading-[1.1] font-bold text-heading">
              {data.h1}
            </h1>
            <p className="mt-5 text-lg text-body leading-relaxed max-w-xl">{data.heroSubhead}</p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4">
              <Button href="/contact" size="lg" className="w-full sm:w-auto">Request a Free Quote</Button>
              <Button href={site.phoneHref} variant="secondary" size="lg" className="w-full sm:w-auto">
                <Phone size={18} aria-hidden="true" /> Call Now
              </Button>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="relative rounded-[24px] overflow-hidden aspect-[4/3] shadow-xl ring-1 ring-black/5">
              <Image src={data.heroImage} alt={data.heroImageAlt} fill priority sizes="(min-width:1024px) 50vw, 100vw" className="object-cover" />
            </div>
          </Reveal>
        </div>
      </section>

      {/* Benefits */}
      <section className="section-y">
        <div className="container-default">
          <SectionHeader eyebrow="Why It Matters" title={`The Benefits of ${data.eyebrow}`} />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {data.benefits.map((b, i) => (
              <Reveal key={b.title} delay={i * 0.05}>
                <div className="h-full rounded-[20px] border border-border-light p-7 hover:shadow-lg transition-shadow">
                  <div className="w-12 h-12 rounded-xl bg-background-secondary flex items-center justify-center text-accent-blue">
                    <Icon name={b.icon} size={22} />
                  </div>
                  <h3 className="mt-5 font-semibold text-lg text-heading">{b.title}</h3>
                  <p className="mt-2 text-body leading-relaxed">{b.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* What's Included OR (hub) Services grid */}
      {isHub ? (
        <section className="section-y bg-background-secondary">
          <div className="container-default">
            <SectionHeader eyebrow="Our Services" title="Everything Your Facility Needs" description="Explore the full range of commercial cleaning programs we deliver across Missouri." />
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {subServices.map((s, i) => (
                <Reveal key={s.slug} delay={i * 0.05}>
                  <Link href={s.href} className="group flex flex-col h-full bg-white rounded-[20px] p-8 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-blue">
                    <div className="w-14 h-14 rounded-2xl bg-brand-yellow/15 flex items-center justify-center">
                      <Icon name={s.icon} className="text-heading" size={26} />
                    </div>
                    <h3 className="mt-5 font-semibold text-xl text-heading">{s.name}</h3>
                    <p className="mt-2 text-body leading-relaxed">{s.shortDescription}</p>
                    <span className="inline-flex items-center gap-1.5 mt-5 text-accent-blue font-semibold text-sm group-hover:gap-2.5 transition-all">
                      Learn More <ArrowRight size={16} aria-hidden="true" />
                    </span>
                  </Link>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      ) : (
        <section className="section-y bg-background-secondary">
          <div className="container-default grid lg:grid-cols-12 gap-10 items-start">
            <div className="lg:col-span-5">
              <SectionHeader align="left" eyebrow="What's Included" title={`What Our ${data.eyebrow} Covers`} className="mb-6" />
              {data.includedNote && <p className="text-body leading-relaxed">{data.includedNote}</p>}
              <div className="mt-8"><Button href="/contact" size="lg">Get a Custom Plan</Button></div>
            </div>
            <div className="lg:col-span-7">
              <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-4">
                {data.included.map((task) => (
                  <li key={task} className="flex items-start gap-3 bg-white rounded-xl p-4 border border-border-light">
                    <span className="mt-0.5 w-6 h-6 rounded-full bg-brand-yellow flex items-center justify-center shrink-0">
                      <Check size={14} className="text-heading" aria-hidden="true" />
                    </span>
                    <span className="text-body">{task}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      )}

      {/* Industries served by this service */}
      {crossIndustries.length > 0 && (
        <section className="section-y">
          <div className="container-default">
            <SectionHeader eyebrow="Who We Serve" title={`${data.eyebrow} for Every Industry`} />
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
              {crossIndustries.map((ind, i) => (
                <Reveal key={ind.slug} delay={i * 0.04}>
                  <Link href={`/industries/${ind.slug}`} className="group relative block rounded-[20px] overflow-hidden aspect-[4/3] ring-1 ring-border-light focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-blue">
                    {ind.image && <Image src={ind.image} alt={ind.name} fill loading="lazy" sizes="(min-width:1024px) 25vw, 50vw" className="object-cover transition-transform duration-500 group-hover:scale-105" />}
                    <div className="absolute inset-0 bg-gradient-to-t from-heading/80 to-transparent" aria-hidden="true" />
                    <span className="absolute inset-x-0 bottom-0 p-4 font-semibold text-white">{ind.name}</span>
                  </Link>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* The Swift Difference (shared, consistent across all pages) */}
      <SwiftDifference title={`What Changes When You Switch to Swift ${data.eyebrow}`} />

      {/* Process (shared, consistent across all pages) */}
      <ProcessSteps />

      {/* FAQs */}
      <section className="section-y bg-background-secondary">
        <div className="container-reading">
          <SectionHeader eyebrow="FAQ" title={`${data.eyebrow} Questions, Answered`} />
          <FaqAccordion items={data.faqs} />
        </div>
      </section>

      {/* Our Services (shared, consistent across all pages) */}
      <ServicesOverview background="white" />

      {/* Service Areas (shared, consistent across all pages) */}
      <ServiceAreas />

      <CtaBanner headline={data.ctaHeadline} />
    </>
  );
}

export function getServiceData(slug: string): ServicePageData | undefined {
  return servicePages[slug];
}

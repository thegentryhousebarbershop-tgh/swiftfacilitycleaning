import Image from "next/image";
import { Quote, TrendingDown, Clock, RefreshCw } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { stockImages } from "@/data/images";

const meta = [
  { label: "Client", value: "Multi-tenant office campus" },
  { label: "Industry", value: "Commercial real estate" },
  { label: "Location", value: "St. Charles, MO" },
  { label: "Size", value: "60,000 sq ft" },
];

const results = [
  { icon: TrendingDown, value: "40%", label: "Fewer tenant complaints" },
  { icon: Clock, value: "100%", label: "On-time service record" },
  { icon: RefreshCw, value: "2×", label: "Contract renewed" },
];

export function CaseStudy() {
  return (
    <section className="section-y">
      <div className="container-default">
        <div className="rounded-[28px] overflow-hidden bg-white ring-1 ring-border-light shadow-xl grid lg:grid-cols-2">
          {/* Image side */}
          <Reveal className="relative min-h-[320px] lg:min-h-full">
            <Image
              src={stockImages.openOfficeBright.url}
              alt="Immaculate open-plan office maintained for a St. Charles office campus"
              fill
              loading="lazy"
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-heading/40 to-transparent lg:bg-gradient-to-r" aria-hidden="true" />
            <span className="absolute top-6 left-6 rounded-full bg-brand-yellow px-4 py-2 text-sm font-bold text-heading">
              Case Study
            </span>
          </Reveal>

          {/* Content side */}
          <Reveal delay={0.1} className="p-8 md:p-12">
            <h2 className="text-2xl md:text-3xl font-bold text-heading leading-tight">
              How a 60,000 sq ft office campus cut cleaning complaints by 40%
            </h2>

            <dl className="mt-6 grid grid-cols-2 gap-x-6 gap-y-4">
              {meta.map((m) => (
                <div key={m.label}>
                  <dt className="text-xs font-semibold uppercase tracking-wide text-text-secondary">
                    {m.label}
                  </dt>
                  <dd className="mt-0.5 text-sm font-semibold text-heading">{m.value}</dd>
                </div>
              ))}
            </dl>

            <div className="mt-6 space-y-4 text-body leading-relaxed">
              <p>
                <span className="font-semibold text-heading">The challenge:</span> An
                unreliable vendor left common areas inconsistent, and tenant
                complaints were piling up on the property manager&apos;s desk.
              </p>
              <p>
                <span className="font-semibold text-heading">Our solution:</span> A
                fixed on-site team, documented nightly checklists, and monthly
                quality walkthroughs with the property manager.
              </p>
            </div>

            <div className="mt-8 grid grid-cols-3 gap-3">
              {results.map((r) => (
                <div key={r.label} className="rounded-2xl bg-background-secondary p-4 text-center">
                  <r.icon className="mx-auto text-accent-blue" size={20} aria-hidden="true" />
                  <p className="text-2xl font-bold text-heading mt-2">{r.value}</p>
                  <p className="text-xs text-text-secondary mt-1 leading-snug">{r.label}</p>
                </div>
              ))}
            </div>

            <figure className="mt-8 border-l-4 border-brand-yellow pl-5">
              <Quote className="text-brand-yellow" size={22} aria-hidden="true" />
              <blockquote className="mt-2 text-body italic leading-relaxed">
                &ldquo;For the first time in years, cleaning is something I never
                have to think about. Swift just handles it.&rdquo;
              </blockquote>
              <figcaption className="mt-3 text-sm font-semibold text-heading">
                Property Manager, St. Charles
              </figcaption>
            </figure>

            <div className="mt-8">
              <Button href="/case-studies" size="lg">Read More Success Stories</Button>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

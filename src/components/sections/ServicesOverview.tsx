import Link from "next/link";
import * as Icons from "lucide-react";
import { ArrowRight } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { services } from "@/data/services";

export function ServicesOverview() {
  return (
    <section className="bg-background-secondary section-y">
      <div className="container-default">
        <SectionHeader
          eyebrow="Our Services"
          title="Comprehensive Commercial Cleaning Services"
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => {
            const Icon = (Icons as unknown as Record<string, Icons.LucideIcon>)[s.icon] ?? Icons.Sparkles;
            return (
              <Reveal key={s.slug} delay={i * 0.05}>
                <Link
                  href={s.href}
                  className="group block bg-white rounded-[20px] p-8 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 border border-transparent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-blue"
                >
                  <div className="w-14 h-14 rounded-2xl bg-brand-yellow/15 flex items-center justify-center">
                    <Icon className="text-heading" size={28} aria-hidden="true" />
                  </div>
                  <h3 className="font-semibold text-xl text-heading mt-6">{s.name}</h3>
                  <p className="text-body mt-2 leading-relaxed">{s.shortDescription}</p>
                  <span className="inline-flex items-center gap-1.5 mt-5 text-accent-blue font-semibold text-sm group-hover:gap-2.5 transition-all">
                    Learn More
                    <ArrowRight size={16} aria-hidden="true" />
                  </span>
                </Link>
              </Reveal>
            );
          })}
        </div>
        <div className="text-center mt-12">
          <Button href="/commercial-cleaning" variant="ghost">
            View All Services
          </Button>
        </div>
      </div>
    </section>
  );
}

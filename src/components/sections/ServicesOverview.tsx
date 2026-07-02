import Link from "next/link";
import Image from "next/image";
import * as Icons from "lucide-react";
import { ArrowRight, Check } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { services } from "@/data/services";
import { cn } from "@/lib/utils";

export function ServicesOverview({ background = "secondary" }: { background?: "secondary" | "white" }) {
  return (
    <section className={cn("section-y", background === "secondary" && "bg-background-secondary")}>
      <div className="container-default">
        <SectionHeader
          eyebrow="Our Services"
          title="Comprehensive Commercial Cleaning Services"
          description="One accountable partner for every cleaning need in your facility — from daily janitorial to specialized floor care and disinfection."
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => {
            const Icon = (Icons as unknown as Record<string, Icons.LucideIcon>)[s.icon] ?? Icons.Sparkles;
            return (
              <Reveal key={s.slug} delay={i * 0.05}>
                <Link
                  href={s.href}
                  className="group flex flex-col h-full bg-white rounded-[20px] overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 border border-transparent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-blue"
                >
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <Image
                      src={s.image}
                      alt=""
                      fill
                      loading="lazy"
                      sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-heading/50 to-transparent" aria-hidden="true" />
                    <div className="absolute left-4 bottom-4 flex items-center justify-center w-12 h-12 rounded-xl bg-white shadow-md">
                      <Icon className="text-accent-blue" size={24} aria-hidden="true" />
                    </div>
                  </div>

                  <div className="flex flex-col flex-1 p-6">
                    <h3 className="font-semibold text-xl text-heading">{s.name}</h3>
                    <p className="text-body mt-2 leading-relaxed">{s.shortDescription}</p>

                    <ul className="mt-4 flex flex-wrap gap-x-4 gap-y-2">
                      {s.benefits.map((b) => (
                        <li key={b} className="flex items-center gap-1.5 text-sm text-text-secondary">
                          <Check size={14} className="text-accent-blue shrink-0" aria-hidden="true" />
                          {b}
                        </li>
                      ))}
                    </ul>

                    <span className="inline-flex items-center gap-1.5 mt-6 pt-4 border-t border-border-light text-accent-blue font-semibold text-sm group-hover:gap-2.5 transition-all">
                      Learn More
                      <ArrowRight size={16} aria-hidden="true" />
                    </span>
                  </div>
                </Link>
              </Reveal>
            );
          })}
        </div>
        <div className="text-center mt-12">
          <Button href="/commercial-cleaning" size="lg">View All Services</Button>
        </div>
      </div>
    </section>
  );
}

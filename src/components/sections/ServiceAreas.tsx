import Link from "next/link";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { cities } from "@/data/locations";

export function ServiceAreas() {
  const mid = Math.ceil(cities.length / 2);
  const columns = [cities.slice(0, mid), cities.slice(mid)];

  return (
    <section className="section-y">
      <div className="container-default">
        <SectionHeader eyebrow="Service Areas" title="Proudly Serving Missouri Businesses" />

        <div className="grid lg:grid-cols-12 gap-10 items-start">
          <Reveal className="lg:col-span-5 grid grid-cols-2 gap-x-6 gap-y-5">
            {columns.map((col, ci) => (
              <ul key={ci} className="space-y-5">
                {col.map((c) => (
                  <li key={c.slug} className="flex items-start gap-3">
                    <span className="mt-2 w-2 h-2 rounded-full bg-brand-yellow shrink-0" aria-hidden="true" />
                    <Link
                      href={`/locations/missouri/${c.slug}`}
                      className="font-semibold text-heading hover:text-accent-blue leading-snug"
                    >
                      {c.name}, MO
                    </Link>
                  </li>
                ))}
              </ul>
            ))}
          </Reveal>

          <Reveal delay={0.1} className="lg:col-span-7">
            <div className="relative rounded-[24px] overflow-hidden aspect-[4/3] bg-background-secondary shadow-lg ring-1 ring-black/5">
              <div
                className="absolute inset-0 flex items-center justify-center text-text-secondary text-sm text-center px-6"
                aria-hidden="true"
              >
                Service area map — Greater St. Louis &amp; Missouri
              </div>
            </div>
          </Reveal>
        </div>

        <div className="text-center mt-12">
          <Button href="/locations/missouri" variant="ghost">
            View All Service Areas
          </Button>
        </div>
      </div>
    </section>
  );
}

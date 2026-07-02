import { Star, CalendarCheck, Building2, ThumbsUp, Timer } from "lucide-react";
import { Counter } from "@/components/ui/Counter";
import { Reveal } from "@/components/ui/Reveal";

const stats = [
  { icon: CalendarCheck, value: 10, suffix: "+", label: "Years in Business" },
  { icon: Building2, value: 500, suffix: "+", label: "Facilities Cleaned" },
  { icon: ThumbsUp, value: 98, suffix: "%", label: "Client Retention" },
  { icon: Timer, value: 24, suffix: "h", label: "Quote Turnaround" },
];

export function TrustBar() {
  return (
    <section className="relative z-10 -mt-14 md:-mt-16">
      <div className="container-default">
        <Reveal>
          <div className="rounded-[24px] bg-white shadow-xl ring-1 ring-black/5 overflow-hidden">
            <div className="grid grid-cols-2 lg:grid-cols-5 divide-y divide-x divide-border-light lg:divide-y-0">
              {/* Google rating highlight */}
              <div className="col-span-2 lg:col-span-1 flex flex-col items-center justify-center text-center p-6 bg-background-secondary">
                <div className="flex gap-0.5" aria-label="4.9 out of 5 stars">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} size={16} className="fill-brand-yellow text-brand-yellow" aria-hidden="true" />
                  ))}
                </div>
                <p className="mt-2 text-2xl font-bold text-heading">4.9</p>
                <p className="text-xs text-text-secondary">Average Google Rating</p>
              </div>

              {stats.map((s) => (
                <div key={s.label} className="flex flex-col items-center justify-center text-center p-6">
                  <s.icon className="text-accent-blue mb-2" size={22} aria-hidden="true" />
                  <Counter value={s.value} suffix={s.suffix} label={s.label} size="md" />
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

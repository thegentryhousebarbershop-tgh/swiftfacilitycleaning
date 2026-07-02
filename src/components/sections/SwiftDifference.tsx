import { Check, X, ArrowRight, Sparkles } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";

type Row = { problem: string; solution: string };

const rows: Row[] = [
  { problem: "Missed cleanings and no-shows", solution: "Consistent, scheduled service every time" },
  { problem: "A rotating cast of unvetted cleaners", solution: "The same trained team who knows your space" },
  { problem: "No proof the work was actually done", solution: "Documented checklists after every visit" },
  { problem: "Slow or silent when problems come up", solution: "A dedicated manager who answers fast" },
  { problem: "Surprise fees and unclear scope", solution: "Transparent, fixed-scope pricing" },
];

export function SwiftDifference({
  title = "The Difference a Real Cleaning Partner Makes",
  description = "Most facilities don't have a cleaning problem — they have a reliability problem. Here's exactly what changes when you switch to Swift.",
}: {
  title?: string;
  description?: string;
}) {
  return (
    <section className="section-y bg-background-secondary">
      <div className="container-default">
        <SectionHeader eyebrow="The Swift Difference" title={title} description={description} />

        <Reveal>
          <div className="relative max-w-5xl mx-auto grid lg:grid-cols-2 gap-6 lg:gap-0 items-stretch">
            {/* Without */}
            <div className="rounded-[24px] lg:rounded-r-none bg-white border border-border-light p-8 md:p-10 lg:pr-14">
              <div className="flex items-center gap-3">
                <span className="flex items-center justify-center w-11 h-11 rounded-full bg-red-50">
                  <X size={20} className="text-red-500" aria-hidden="true" />
                </span>
                <h3 className="text-lg font-bold text-heading">Without a reliable partner</h3>
              </div>
              <ul className="mt-7 space-y-5">
                {rows.map((r) => (
                  <li key={r.problem} className="flex items-start gap-3 text-text-secondary min-h-11">
                    <X size={18} className="text-red-400 shrink-0 mt-0.5" aria-hidden="true" />
                    <span className="line-through decoration-red-200">{r.problem}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* With Swift — featured */}
            <div className="relative rounded-[24px] lg:rounded-l-none bg-heading text-white p-8 md:p-10 lg:pl-14 shadow-2xl ring-1 ring-brand-yellow/30 lg:-translate-y-3 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-brand-yellow/10 via-transparent to-accent-blue/10" aria-hidden="true" />
              <span className="absolute top-6 right-6 inline-flex items-center gap-1.5 rounded-full bg-brand-yellow px-3 py-1 text-xs font-bold text-heading">
                <Sparkles size={13} aria-hidden="true" /> The Swift Way
              </span>
              <div className="relative flex items-center gap-3">
                <span className="flex items-center justify-center w-11 h-11 rounded-full bg-brand-yellow">
                  <Check size={20} className="text-heading" aria-hidden="true" />
                </span>
                <h3 className="text-lg font-bold">With Swift Facility Cleaning</h3>
              </div>
              <ul className="relative mt-7 space-y-5">
                {rows.map((r) => (
                  <li key={r.solution} className="flex items-start gap-3 min-h-11">
                    <span className="mt-0.5 flex items-center justify-center w-6 h-6 rounded-full bg-brand-yellow shrink-0">
                      <Check size={14} className="text-heading" aria-hidden="true" />
                    </span>
                    <span className="text-white/90 font-medium">{r.solution}</span>
                  </li>
                ))}
              </ul>
              <div className="relative mt-8">
                <Button href="/contact" size="lg">
                  Make the Switch <ArrowRight size={18} aria-hidden="true" />
                </Button>
              </div>
            </div>

            {/* Center transform badge (desktop) */}
            <div className="hidden lg:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 items-center justify-center w-14 h-14 rounded-full bg-white shadow-lg ring-1 ring-border-light">
              <ArrowRight size={22} className="text-accent-blue" aria-hidden="true" />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

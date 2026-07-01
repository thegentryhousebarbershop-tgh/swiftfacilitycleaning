"use client";

import { useState } from "react";
import { Plus } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { cn } from "@/lib/utils";

const faqs = [
  {
    q: "How is pricing determined?",
    a: "Pricing depends on facility size, cleaning frequency, and scope of work. We provide a custom quote after a brief walkthrough or consultation.",
  },
  {
    q: "Do you bring your own supplies and equipment?",
    a: "Yes. We supply all cleaning products and equipment, including eco-friendly options on request.",
  },
  {
    q: "What areas do you serve?",
    a: "We serve businesses throughout Missouri, including St. Charles, Wentzville, Chesterfield, Clayton, Florissant, Arnold, and surrounding communities.",
  },
  {
    q: "Are you insured and bonded?",
    a: "Yes, Swift Facility Cleaning is insured and bonded. Documentation is available upon request.",
  },
  {
    q: "Can scheduling be customized?",
    a: "Yes. We build cleaning schedules around your business hours, including daily, weekly, or custom frequencies.",
  },
];

export function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="section-y bg-background-secondary">
      <div className="container-reading">
        <SectionHeader eyebrow="FAQ" title="Frequently Asked Questions" />
        <div className="space-y-3">
          {faqs.map((item, i) => {
            const isOpen = open === i;
            return (
              <div
                key={item.q}
                className={cn(
                  "rounded-2xl bg-white border transition-colors",
                  isOpen ? "border-accent-blue/30 shadow-sm" : "border-border-light"
                )}
              >
                <button
                  className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left font-semibold text-heading min-h-11"
                  aria-expanded={isOpen}
                  aria-controls={`faq-panel-${i}`}
                  onClick={() => setOpen(isOpen ? null : i)}
                >
                  {item.q}
                  <span
                    className={cn(
                      "shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-200",
                      isOpen ? "bg-brand-yellow rotate-45" : "bg-background-secondary"
                    )}
                  >
                    <Plus size={16} className="text-heading" aria-hidden="true" />
                  </span>
                </button>
                {isOpen && (
                  <div id={`faq-panel-${i}`} className="px-6 pb-5 text-body">
                    {item.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

"use client";

import { useState } from "react";
import { Plus } from "lucide-react";
import { cn } from "@/lib/utils";

export type FaqItem = { q: string; a: string };

export function FaqAccordion({ items, includeSchema = true }: { items: FaqItem[]; includeSchema?: boolean }) {
  const [open, setOpen] = useState<number | null>(0);

  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };

  return (
    <div className="space-y-3">
      {items.map((item, i) => {
        const isOpen = open === i;
        return (
          <div
            key={item.q}
            className={cn(
              "rounded-2xl bg-white border shadow-sm transition-colors",
              isOpen ? "border-accent-blue/40" : "border-border"
            )}
          >
            <button
              className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left font-semibold text-heading min-h-11"
              aria-expanded={isOpen}
              aria-controls={`faq-${i}`}
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
              <div id={`faq-${i}`} className="px-6 pb-5 text-body leading-relaxed">
                {item.a}
              </div>
            )}
          </div>
        );
      })}
      {includeSchema && (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      )}
    </div>
  );
}

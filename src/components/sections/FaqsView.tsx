"use client";

import { useState } from "react";
import { FaqAccordion } from "@/components/ui/FaqAccordion";
import { faqCategories } from "@/data/faqs";
import { cn } from "@/lib/utils";

export function FaqsView() {
  const [active, setActive] = useState(faqCategories[0].id);
  const current = faqCategories.find((c) => c.id === active) ?? faqCategories[0];

  return (
    <div>
      {/* Category tabs */}
      <div className="flex flex-wrap justify-center gap-2 mb-10" role="tablist" aria-label="FAQ categories">
        {faqCategories.map((cat) => {
          const isActive = cat.id === active;
          return (
            <button
              key={cat.id}
              role="tab"
              aria-selected={isActive}
              onClick={() => setActive(cat.id)}
              className={cn(
                "px-5 py-2.5 rounded-full text-sm font-semibold transition-colors min-h-11 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-blue",
                isActive
                  ? "bg-accent-blue text-white"
                  : "bg-white text-heading border border-border hover:border-accent-blue"
              )}
            >
              {cat.label}
            </button>
          );
        })}
      </div>

      <div className="container-reading px-0">
        <FaqAccordion key={current.id} items={current.items} />
      </div>
    </div>
  );
}

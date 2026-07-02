import { Star, BadgeCheck, Quote } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Reveal } from "@/components/ui/Reveal";
import { cn } from "@/lib/utils";

type Review = {
  name: string;
  role: string;
  company: string;
  initials: string;
  color: string;
  quote: string;
};

const featured: Review = {
  name: "Jamie Carter",
  role: "Office Manager",
  company: "Cardinal Offices",
  initials: "JC",
  color: "bg-accent-blue",
  quote:
    "Swift Facility Cleaning has been consistent and reliable since day one. I never have to worry about whether the building is ready for clients — it just always is. Their team feels like an extension of our own staff.",
};

const reviews: Review[] = [
  {
    name: "Priya Nair",
    role: "Facility Manager",
    company: "Meridian Health",
    initials: "PN",
    color: "bg-emerald-500",
    quote:
      "Communication is excellent and the team is always responsive when we need to adjust scheduling. Documentation after every visit gives me real peace of mind.",
  },
  {
    name: "Dr. Allen Brooks",
    role: "Practice Administrator",
    company: "Northgate Medical",
    initials: "AB",
    color: "bg-violet-500",
    quote:
      "They handle our medical office with the attention to detail and compliance awareness we need. Every visit, every time — no exceptions.",
  },
  {
    name: "Marcus Reed",
    role: "Operations Director",
    company: "BluePeak Logistics",
    initials: "MR",
    color: "bg-amber-500",
    quote:
      "We switched after years of no-shows from our old vendor. Swift's fixed team and on-time record completely changed how our warehouse runs.",
  },
];

function Avatar({ initials, color }: { initials: string; color: string }) {
  return (
    <span
      className={cn("flex items-center justify-center w-12 h-12 rounded-full text-white font-bold shrink-0", color)}
      aria-hidden="true"
    >
      {initials}
    </span>
  );
}

function Stars() {
  return (
    <div className="flex gap-0.5" aria-label="5 out of 5 stars">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} size={16} className="fill-brand-yellow text-brand-yellow" aria-hidden="true" />
      ))}
    </div>
  );
}

export function Testimonials() {
  return (
    <section className="section-y">
      <div className="container-default">
        <SectionHeader
          eyebrow="Testimonials"
          title="Trusted by Businesses Across Missouri"
          description="Real feedback from the facility managers and business owners who rely on us every day."
        />

        <div className="grid lg:grid-cols-2 gap-6 items-stretch">
          {/* Featured review */}
          <Reveal>
            <figure className="h-full flex flex-col justify-between rounded-[24px] bg-heading text-white p-8 md:p-10 shadow-lg relative overflow-hidden">
              <Quote className="absolute -top-2 -right-2 text-white/5" size={140} aria-hidden="true" />
              <div className="relative">
                <Stars />
                <blockquote className="mt-5 text-xl md:text-2xl font-medium leading-relaxed">
                  &ldquo;{featured.quote}&rdquo;
                </blockquote>
              </div>
              <figcaption className="relative mt-8 flex items-center gap-4">
                <Avatar initials={featured.initials} color={featured.color} />
                <div>
                  <p className="font-semibold">{featured.name}</p>
                  <p className="text-sm text-white/60">
                    {featured.role}, {featured.company}
                  </p>
                </div>
                <span className="ml-auto flex items-center gap-1 text-xs font-semibold text-brand-yellow">
                  <BadgeCheck size={16} aria-hidden="true" /> Verified
                </span>
              </figcaption>
            </figure>
          </Reveal>

          {/* Supporting reviews */}
          <div className="grid gap-6">
            {reviews.map((r, i) => (
              <Reveal key={r.name} delay={i * 0.05}>
                <figure className="rounded-[20px] bg-white p-6 md:p-7 border border-border-light shadow-sm">
                  <div className="flex items-center gap-4">
                    <Avatar initials={r.initials} color={r.color} />
                    <div className="min-w-0">
                      <p className="font-semibold text-heading truncate">{r.name}</p>
                      <p className="text-sm text-text-secondary truncate">
                        {r.role}, {r.company}
                      </p>
                    </div>
                    <span className="ml-auto flex items-center gap-1 text-xs font-semibold text-accent-blue shrink-0">
                      <BadgeCheck size={15} aria-hidden="true" /> Verified
                    </span>
                  </div>
                  <div className="mt-4">
                    <Stars />
                  </div>
                  <blockquote className="mt-3 text-body leading-relaxed">{r.quote}</blockquote>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>

        <div className="mt-10 flex items-center justify-center gap-3 text-sm text-text-secondary">
          <span className="flex gap-0.5" aria-hidden="true">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} size={15} className="fill-brand-yellow text-brand-yellow" />
            ))}
          </span>
          <span>
            <span className="font-semibold text-heading">4.9 / 5</span> average from 120+ Google reviews
          </span>
        </div>
      </div>
    </section>
  );
}

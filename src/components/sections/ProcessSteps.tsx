import { CalendarClock, MessageSquareText, Settings2, ClipboardCheck } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

const steps = [
  {
    icon: CalendarClock,
    number: "1",
    eyebrow: "Make an",
    title: "Appointment",
    text: "Contact us to schedule a time that works for you to meet with one of our representatives.",
  },
  {
    icon: MessageSquareText,
    number: "2",
    eyebrow: "with a Cleaning Expert",
    title: "Consultation",
    text: "Our trained team walks your facility and builds a custom cleaning plan around your needs.",
  },
  {
    icon: Settings2,
    number: "3",
    eyebrow: "Professional Team",
    title: "Onboarding",
    text: "We show up. We get it done. Count on us for consistent, detailed results every time.",
  },
  {
    icon: ClipboardCheck,
    number: "4",
    eyebrow: "for Your Business",
    title: "Service",
    text: "Rely on us to continue delivering superior commercial cleaning whenever you need it.",
  },
];

export function ProcessSteps({ background }: { background?: string }) {
  return (
    <section className={cn("section-y", background)}>
      <div className="container-default">
        <SectionHeader eyebrow="How It Works" title="Getting Started Is Simple" />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {steps.map((step, i) => (
            <Reveal key={step.title} delay={i * 0.1}>
              <div className="text-center">
                <div className="relative mx-auto w-24 h-24 rounded-2xl bg-background-secondary flex items-center justify-center mb-6">
                  <step.icon className="text-accent-blue" size={36} aria-hidden="true" />
                  <span
                    className="absolute -top-2 -right-2 w-3 h-3 rounded-full bg-brand-yellow"
                    aria-hidden="true"
                  />
                  <span
                    className="absolute -bottom-1 -left-2 w-2 h-2 rounded-full bg-accent-blue/40"
                    aria-hidden="true"
                  />
                </div>
                <div className="flex items-center justify-center gap-2">
                  <span className="text-2xl font-bold text-brand-yellow leading-none">
                    {step.number}
                  </span>
                  <span className="text-sm font-medium text-text-secondary">
                    {step.eyebrow}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-heading mt-1">{step.title}</h3>
                <p className="text-body mt-3 text-sm leading-relaxed">{step.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
        <div className="text-center mt-14">
          <Button href="/contact" size="lg">
            Schedule Now
          </Button>
        </div>
      </div>
    </section>
  );
}

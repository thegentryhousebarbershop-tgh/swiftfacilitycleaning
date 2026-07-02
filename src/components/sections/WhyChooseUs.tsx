import Image from "next/image";
import { Shield, Clock, CheckCircle2, Users, Sparkles, MessageSquare } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { stockImages } from "@/data/images";

const features = [
  { icon: Shield, title: "Reliability First", text: "Consistent service you can count on, every scheduled visit." },
  { icon: CheckCircle2, title: "Consistent Quality", text: "Detailed standards applied the same way, every single time." },
  { icon: MessageSquare, title: "Responsive Communication", text: "A dedicated manager who answers quickly and follows through." },
  { icon: Sparkles, title: "Customized Plans", text: "Cleaning programs built specifically around your facility." },
  { icon: Users, title: "Vetted, Trained Teams", text: "Background-checked staff who take real pride in the work." },
  { icon: Clock, title: "Flexible Scheduling", text: "Service that fits your hours — days, nights, or weekends." },
];

export function WhyChooseUs() {
  return (
    <section className="section-y">
      <div className="container-default grid lg:grid-cols-12 gap-10 lg:gap-14">
        {/* Left: editorial intro */}
        <div className="lg:col-span-4">
          <div className="lg:sticky lg:top-28">
            <span className="inline-block text-sm font-semibold uppercase tracking-wide text-accent-blue mb-3">
              Why Swift Facility Cleaning
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-heading leading-tight">
              Six reasons facility managers stay with us
            </h2>
            <p className="mt-4 text-lg text-body leading-relaxed">
              We&apos;re not the cheapest quote you&apos;ll get — we&apos;re the one
              you stop having to think about.
            </p>

            <div className="mt-6 relative rounded-[20px] overflow-hidden aspect-[4/3] hidden lg:block ring-1 ring-black/5 shadow-md">
              <Image
                src={stockImages.lobbyMarbleBright.url}
                alt={stockImages.lobbyMarbleBright.alt}
                fill
                loading="lazy"
                sizes="33vw"
                className="object-cover"
              />
            </div>

            <div className="mt-6">
              <Button href="/contact" size="lg">Request a Free Quote</Button>
            </div>
          </div>
        </div>

        {/* Right: feature cards */}
        <div className="lg:col-span-8 grid sm:grid-cols-2 gap-5">
          {features.map((f, i) => (
            <Reveal key={f.title} delay={i * 0.05}>
              <div className="group relative h-full rounded-[20px] border border-border-light bg-white p-7 hover:border-transparent hover:shadow-lg transition-all duration-300 overflow-hidden">
                <div
                  className="absolute -right-8 -top-8 w-24 h-24 rounded-full bg-brand-yellow/0 group-hover:bg-brand-yellow/10 transition-colors duration-300"
                  aria-hidden="true"
                />
                <div className="relative flex items-center justify-center w-12 h-12 rounded-xl bg-background-secondary text-accent-blue group-hover:bg-accent-blue group-hover:text-white transition-colors duration-300">
                  <f.icon size={22} aria-hidden="true" />
                </div>
                <h3 className="relative mt-5 font-semibold text-lg text-heading">{f.title}</h3>
                <p className="relative mt-2 text-body leading-relaxed">{f.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

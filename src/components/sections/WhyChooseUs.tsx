import { Shield, Clock, CheckCircle2, Users, Sparkles, MessageSquare } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Reveal } from "@/components/ui/Reveal";

const features = [
  { icon: Shield, title: "Reliability", text: "Consistent service you can count on, every visit." },
  { icon: CheckCircle2, title: "Consistent Quality", text: "Detailed standards applied the same way, every time." },
  { icon: MessageSquare, title: "Responsive Communication", text: "We answer quickly and follow through." },
  { icon: Sparkles, title: "Customized Plans", text: "Cleaning programs built around your facility." },
  { icon: Users, title: "Experienced Staff", text: "Trained, vetted teams who take pride in the work." },
  { icon: Clock, title: "Flexible Scheduling", text: "Service that fits your hours, not the other way around." },
];

export function WhyChooseUs() {
  return (
    <section className="section-y pt-8 md:pt-12">
      <div className="container-default">
        <SectionHeader
          eyebrow="Why Swift Facility Cleaning"
          title="Why Businesses Choose Swift Facility Cleaning"
        />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <Reveal key={f.title} delay={i * 0.05}>
              <div className="group h-full rounded-[20px] border border-border-light p-7 hover:border-transparent hover:shadow-lg transition-all duration-200">
                <div className="w-14 h-14 rounded-2xl bg-background-secondary flex items-center justify-center group-hover:bg-brand-yellow transition-colors duration-200">
                  <f.icon className="text-accent-blue group-hover:text-heading transition-colors duration-200" size={26} aria-hidden="true" />
                </div>
                <h3 className="font-semibold text-lg text-heading mt-5">{f.title}</h3>
                <p className="text-body mt-2 leading-relaxed">{f.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

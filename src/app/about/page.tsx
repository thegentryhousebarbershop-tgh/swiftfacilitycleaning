import type { Metadata } from "next";
import Image from "next/image";
import {
  Shield,
  Scale,
  CheckCircle2,
  ClipboardCheck,
  HeartPulse,
  Sparkles,
  Quote,
  Check,
  Phone,
  ShieldCheck,
  Clock,
  Star,
} from "lucide-react";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { Counter } from "@/components/ui/Counter";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { site } from "@/data/site";
import { stockImages } from "@/data/images";

export const metadata: Metadata = {
  title: "About Swift Facility Cleaning",
  description:
    "Swift Facility Cleaning delivers enterprise-level professionalism with the responsiveness of a trusted local business — reliable commercial cleaning across Missouri.",
  alternates: { canonical: "/about" },
};

const values = [
  { icon: Shield, title: "Reliability", text: "We show up on schedule, every time — no exceptions." },
  { icon: Scale, title: "Integrity", text: "Honest scope, transparent pricing, and no surprises." },
  { icon: CheckCircle2, title: "Consistency", text: "The same high standard applied on every visit." },
  { icon: ClipboardCheck, title: "Accountability", text: "Documented quality checks you can actually verify." },
  { icon: HeartPulse, title: "Health & Safety", text: "Cleaner, healthier spaces for your staff and visitors." },
  { icon: Sparkles, title: "Attention to Detail", text: "The little things done right, so you never think about them." },
];

const stats = [
  { value: 10, suffix: "+", label: "Years in Business" },
  { value: 500, suffix: "+", label: "Facilities Cleaned" },
  { value: 98, suffix: "%", label: "Client Retention" },
  { value: 24, suffix: "h", label: "Quote Turnaround" },
];

const timeline = [
  { year: "Founded", title: "Built on Reliability", text: "Swift Facility Cleaning started with one promise: commercial cleaning you never have to think about." },
  { year: "Growth", title: "Trusted Across Missouri", text: "Word spread. Offices, clinics, and schools across the metro made us their long-term partner." },
  { year: "Today", title: "500+ Facilities Strong", text: "A dedicated team, documented quality, and a 98% client retention rate — and still growing." },
];

const certifications = [
  { label: "Bonded & Insured", icon: ShieldCheck },
  { label: "OSHA-Aware Practices", icon: Shield },
  { label: "Green Cleaning Options", icon: Sparkles },
  { label: "Locally Owned & Operated", icon: HeartPulse },
];

const philosophy = [
  "We hire for reliability and train to our standards",
  "The same vetted team is assigned to your facility",
  "We invest in our people so they stay — and so do our clients",
];

const heroPills = [
  { icon: ShieldCheck, label: "Licensed, Bonded & Insured" },
  { icon: Clock, label: "Same-Day Quote Response" },
];

export default function AboutPage() {
  return (
    <>
      <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "About" }]} />

      {/* Hero */}
      <section className="relative overflow-hidden bg-background-secondary">
        <div className="absolute -top-32 -right-32 w-[26rem] h-[26rem] rounded-full bg-brand-yellow/15 blur-3xl" aria-hidden="true" />
        <div className="absolute -bottom-40 -left-24 w-[24rem] h-[24rem] rounded-full bg-accent-blue/10 blur-3xl" aria-hidden="true" />

        <div className="container-default relative grid lg:grid-cols-12 gap-10 lg:gap-14 items-center py-14 md:py-20">
          <Reveal className="lg:col-span-6">
            <span className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-semibold text-accent-blue shadow-sm mb-5">
              <Star size={15} className="fill-brand-yellow text-brand-yellow" aria-hidden="true" /> Locally owned since day one
            </span>
            <h1 className="text-[2.25rem] leading-[1.15] md:text-5xl md:leading-[1.1] font-bold text-heading">
              Enterprise-Grade Cleaning, With a Local Handshake
            </h1>
            <p className="mt-5 text-lg text-body leading-relaxed max-w-xl">
              Swift Facility Cleaning pairs the professionalism of a national
              provider with the responsiveness of a trusted neighbor — on every
              facility, every visit.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4">
              <Button href="/contact" size="lg" className="w-full sm:w-auto">Request a Free Quote</Button>
              <Button href={site.phoneHref} variant="secondary" size="lg" className="w-full sm:w-auto">
                <Phone size={18} aria-hidden="true" /> Call Now
              </Button>
            </div>
            <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3">
              {heroPills.map((p) => (
                <div key={p.label} className="flex items-center gap-2 text-sm font-medium text-body">
                  <p.icon className="text-accent-blue shrink-0" size={18} aria-hidden="true" />
                  {p.label}
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.1} className="lg:col-span-6">
            <div className="relative">
              <div className="relative rounded-[24px] overflow-hidden aspect-[4/3] shadow-xl ring-1 ring-black/5">
                <Image src={stockImages.teamBright.url} alt={stockImages.teamBright.alt} fill priority sizes="(min-width:1024px) 50vw, 100vw" className="object-cover" />
              </div>
              <div className="absolute -bottom-5 -left-5 md:-bottom-6 md:-left-6 bg-accent-blue text-white rounded-2xl shadow-lg px-6 py-4">
                <p className="text-2xl md:text-3xl font-bold leading-none">98%</p>
                <p className="text-xs text-white/80 mt-1">Client Retention</p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Company Story */}
      <section className="section-y">
        <div className="container-default grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <Reveal>
            <span className="inline-block text-sm font-semibold uppercase tracking-wide text-accent-blue mb-3">Our Story</span>
            <h2 className="text-3xl md:text-4xl font-bold text-heading leading-tight">
              A local partner for businesses that can&apos;t afford off days
            </h2>
            <div className="mt-5 space-y-4 text-body leading-relaxed">
              <p>
                Swift Facility Cleaning was founded on a simple frustration our
                clients kept sharing: cleaning vendors who cut corners, missed
                visits, and went silent when problems came up.
              </p>
              <p>
                We built the opposite. A cleaning company that treats your
                facility like its reputation depends on it — because it does.
                Documented checklists, a fixed team who knows your space, and a
                dedicated manager who actually answers the phone.
              </p>
              <p>
                Today we clean hundreds of facilities across Missouri, and the
                thing we&apos;re proudest of isn&apos;t our size — it&apos;s that
                98% of our clients stay with us year after year.
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="relative">
              <div className="relative rounded-[24px] overflow-hidden aspect-[4/3] shadow-xl ring-1 ring-black/5">
                <Image src={stockImages.receptionBright.url} alt={stockImages.receptionBright.alt} fill loading="lazy" sizes="(min-width:1024px) 50vw, 100vw" className="object-cover" />
              </div>
              <div className="absolute -top-5 -right-5 bg-white rounded-2xl shadow-lg px-5 py-3 hidden sm:block ring-1 ring-black/5">
                <p className="text-xl font-bold text-heading leading-none">500+</p>
                <p className="text-xs text-text-secondary mt-1">Facilities Cleaned</p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="section-y bg-background-secondary">
        <div className="container-default">
          <SectionHeader eyebrow="What We Stand For" title="Our Mission & Values" description="Six principles that shape how we hire, train, and show up for every client." />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((v, i) => (
              <Reveal key={v.title} delay={i * 0.05}>
                <div className="group relative h-full rounded-[20px] bg-white border border-border-light p-7 hover:border-transparent hover:shadow-lg transition-all duration-300 overflow-hidden">
                  <div className="absolute -right-8 -top-8 w-24 h-24 rounded-full bg-brand-yellow/0 group-hover:bg-brand-yellow/10 transition-colors duration-300" aria-hidden="true" />
                  <div className="relative flex items-center justify-center w-12 h-12 rounded-xl bg-background-secondary text-accent-blue group-hover:bg-accent-blue group-hover:text-white transition-colors duration-300">
                    <v.icon size={22} aria-hidden="true" />
                  </div>
                  <h3 className="relative mt-5 font-semibold text-lg text-heading">{v.title}</h3>
                  <p className="relative mt-2 text-body leading-relaxed">{v.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Team Philosophy */}
      <section className="section-y">
        <div className="container-default grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <Reveal className="order-2 lg:order-1">
            <div className="relative">
              <div className="relative rounded-[24px] overflow-hidden aspect-[4/3] shadow-xl ring-1 ring-black/5">
                <Image src={stockImages.teamCollaboration.url} alt={stockImages.teamCollaboration.alt} fill loading="lazy" sizes="(min-width:1024px) 50vw, 100vw" className="object-cover" />
              </div>
              <div className="absolute -bottom-5 -right-5 bg-brand-yellow rounded-2xl shadow-lg px-5 py-4 hidden sm:block">
                <p className="text-xl font-bold text-heading leading-none">Vetted</p>
                <p className="text-xs text-heading/70 mt-1">& Trained Teams</p>
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.1} className="order-1 lg:order-2">
            <span className="inline-block text-sm font-semibold uppercase tracking-wide text-accent-blue mb-3">Our People</span>
            <h2 className="text-3xl md:text-4xl font-bold text-heading leading-tight">
              High turnover is a cleaning-industry problem. It&apos;s not ours.
            </h2>
            <p className="mt-5 text-body leading-relaxed">
              The biggest reason cleaning quality slips is staff churn — a new,
              untrained crew every few weeks. We solve it by investing in our
              people so they stay, and so does the quality.
            </p>
            <ul className="mt-6 space-y-3">
              {philosophy.map((p) => (
                <li key={p} className="flex items-start gap-3">
                  <span className="mt-0.5 w-6 h-6 rounded-full bg-brand-yellow flex items-center justify-center shrink-0">
                    <Check size={14} className="text-heading" aria-hidden="true" />
                  </span>
                  <span className="text-body">{p}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* Why Clients Trust Us */}
      <section className="section-y bg-heading text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-brand-yellow/10 blur-3xl" aria-hidden="true" />
        <div className="container-default relative">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((s) => (
              <div key={s.label} className="rounded-[20px] bg-white/5 ring-1 ring-white/10 p-6 text-center">
                <Counter value={s.value} suffix={s.suffix} label={s.label} />
              </div>
            ))}
          </div>
          <figure className="mt-14 max-w-3xl mx-auto text-center">
            <Quote className="mx-auto text-brand-yellow" size={32} aria-hidden="true" />
            <blockquote className="mt-4 text-xl md:text-2xl font-medium leading-relaxed">
              &ldquo;For the first time in years, cleaning is something I never
              have to think about. Swift just handles it.&rdquo;
            </blockquote>
            <figcaption className="mt-5 text-sm text-white/60">Property Manager, St. Charles</figcaption>
          </figure>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-y">
        <div className="container-default">
          <SectionHeader eyebrow="Our Journey" title="How We Got Here" />
          <div className="relative grid md:grid-cols-3 gap-8">
            {/* connecting line (desktop) */}
            <div className="hidden md:block absolute top-6 left-[16.66%] right-[16.66%] h-0.5 bg-border" aria-hidden="true" />
            {timeline.map((t, i) => (
              <Reveal key={t.year} delay={i * 0.1}>
                <div className="relative text-center md:px-4">
                  <div className="relative z-10 mx-auto w-12 h-12 rounded-full bg-brand-yellow text-heading font-bold flex items-center justify-center ring-8 ring-white">
                    {i + 1}
                  </div>
                  <span className="inline-block mt-5 text-sm font-bold uppercase tracking-wide text-accent-blue">{t.year}</span>
                  <h3 className="mt-1 text-xl font-bold text-heading">{t.title}</h3>
                  <p className="mt-2 text-body leading-relaxed">{t.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="section-y bg-background-secondary">
        <div className="container-default">
          <SectionHeader eyebrow="Credentials" title="Trust, Documented" description="Verification available on request. Additional certifications are added here as they're formalized." />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
            {certifications.map((c) => (
              <div key={c.label} className="flex flex-col items-center justify-center gap-3 rounded-[20px] bg-white border border-border-light px-4 py-8 text-center hover:shadow-md transition-shadow">
                <span className="flex items-center justify-center w-12 h-12 rounded-full bg-background-secondary text-accent-blue">
                  <c.icon size={22} aria-hidden="true" />
                </span>
                <span className="text-sm font-semibold text-heading">{c.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner headline="Let's Build Your Cleaning Program" />
    </>
  );
}

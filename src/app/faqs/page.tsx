import type { Metadata } from "next";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { PageHero } from "@/components/ui/PageHero";
import { FaqsView } from "@/components/sections/FaqsView";
import { CtaBanner } from "@/components/sections/CtaBanner";

export const metadata: Metadata = {
  title: "Frequently Asked Questions",
  description:
    "Answers to common questions about Swift Facility Cleaning — pricing, scheduling, services, service areas, insurance, and more across Missouri.",
  alternates: { canonical: "/faqs" },
};

export default function FaqsPage() {
  return (
    <>
      <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "FAQs" }]} />
      <PageHero
        eyebrow="FAQs"
        title="Frequently Asked Questions"
        subtitle="Everything you need to know about working with Swift Facility Cleaning. Can't find your answer? Just reach out — we respond within one business day."
      />
      <section className="section-y">
        <div className="container-default">
          <FaqsView />
        </div>
      </section>
      <CtaBanner
        headline="Still Have Questions?"
        subtext="Our team is happy to walk you through anything and build a plan around your facility."
      />
    </>
  );
}

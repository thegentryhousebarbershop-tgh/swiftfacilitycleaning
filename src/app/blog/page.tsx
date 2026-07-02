import type { Metadata } from "next";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { PageHero } from "@/components/ui/PageHero";
import { BlogIndexView } from "@/components/sections/BlogIndexView";
import { CtaBanner } from "@/components/sections/CtaBanner";

export const metadata: Metadata = {
  title: "Blog — Cleaning & Facility Management Guides",
  description:
    "Practical guides for facility managers on commercial cleaning, disinfection, and choosing a janitorial partner — from the Swift Facility Cleaning team.",
  alternates: { canonical: "/blog" },
};

export default function BlogPage() {
  return (
    <>
      <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Blog" }]} />
      <PageHero
        eyebrow="Resources"
        title="Guides for Facility Managers"
        subtitle="Practical advice on keeping commercial spaces clean, healthy, and compliant — written by the people who do it every day."
      />
      <section className="section-y">
        <div className="container-default">
          <BlogIndexView />
        </div>
      </section>
      <CtaBanner headline="Want a Cleaning Program Built Around Your Facility?" />
    </>
  );
}

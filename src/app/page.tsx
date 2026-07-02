import { Hero } from "@/components/sections/Hero";
import { TrustBar } from "@/components/sections/TrustBar";
import { ClientLogos } from "@/components/sections/ClientLogos";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { ServicesOverview } from "@/components/sections/ServicesOverview";
import { IndustriesServed } from "@/components/sections/IndustriesServed";
import { CompanyIntro } from "@/components/sections/CompanyIntro";
import { ProcessSteps } from "@/components/sections/ProcessSteps";
import { CaseStudy } from "@/components/sections/CaseStudy";
import { SwiftDifference } from "@/components/sections/SwiftDifference";
import { Testimonials } from "@/components/sections/Testimonials";
import { ServiceAreas } from "@/components/sections/ServiceAreas";
import { Faq } from "@/components/sections/Faq";
import { LatestArticles } from "@/components/sections/LatestArticles";
import { CtaBanner } from "@/components/sections/CtaBanner";

export default function Home() {
  return (
    <>
      <Hero />
      <TrustBar />
      <ClientLogos />
      <WhyChooseUs />
      <ServicesOverview />
      <IndustriesServed />
      <CompanyIntro />
      <ProcessSteps />
      <CaseStudy />
      <SwiftDifference />
      <Testimonials />
      <ServiceAreas />
      <Faq />
      <LatestArticles />
      <CtaBanner />
    </>
  );
}

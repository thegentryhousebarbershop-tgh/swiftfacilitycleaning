import { Hero } from "@/components/sections/Hero";
import { TrustBar } from "@/components/sections/TrustBar";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { ServicesOverview } from "@/components/sections/ServicesOverview";
import { IndustriesServed } from "@/components/sections/IndustriesServed";
import { ProcessSteps } from "@/components/sections/ProcessSteps";
import { Testimonials } from "@/components/sections/Testimonials";
import { ServiceAreas } from "@/components/sections/ServiceAreas";
import { Faq } from "@/components/sections/Faq";
import { CtaBanner } from "@/components/sections/CtaBanner";

export default function Home() {
  return (
    <>
      <Hero />
      <TrustBar />
      <WhyChooseUs />
      <ServicesOverview />
      <IndustriesServed />
      <ProcessSteps />
      <Testimonials />
      <ServiceAreas />
      <Faq />
      <CtaBanner />
    </>
  );
}

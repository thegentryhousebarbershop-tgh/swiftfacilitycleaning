import type { Metadata } from "next";
import { Phone, MapPin, Clock } from "lucide-react";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { ContactForm } from "@/components/ui/ContactForm";
import { Faq } from "@/components/sections/Faq";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Request a free commercial cleaning quote from Swift Facility Cleaning. Call, email, or fill out our quick form and we'll respond within one business day.",
};

export default function ContactPage() {
  return (
    <>
      <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Contact" }]} />
      <section className="section-y pt-0">
        <div className="container-default">
          <h1 className="text-4xl md:text-5xl font-bold text-heading max-w-2xl">
            Request Your Free Quote
          </h1>
          <p className="mt-4 text-lg text-body max-w-xl">
            Tell us about your facility and we&apos;ll respond within one business day.
          </p>

          <div className="mt-12 grid lg:grid-cols-12 gap-10">
            <div className="lg:col-span-7 order-2 lg:order-1">
              <ContactForm />
            </div>
            <div className="lg:col-span-5 order-1 lg:order-2">
              <div className="bg-background-secondary rounded-[20px] p-8 space-y-6 lg:sticky lg:top-28">
                <div className="flex gap-3">
                  <Phone className="text-accent-blue shrink-0" aria-hidden="true" />
                  <div>
                    <p className="font-semibold text-heading">Phone</p>
                    <a href={site.phoneHref} className="text-body">{site.phone}</a>
                  </div>
                </div>
                <div className="flex gap-3">
                  <MapPin className="text-accent-blue shrink-0" aria-hidden="true" />
                  <div>
                    <p className="font-semibold text-heading">Address</p>
                    <p className="text-body">{site.address}</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <Clock className="text-accent-blue shrink-0" aria-hidden="true" />
                  <div>
                    <p className="font-semibold text-heading">Business Hours</p>
                    <p className="text-body">Mon–Fri: 8am–6pm</p>
                    <p className="text-body">Sat: By appointment</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Faq />
    </>
  );
}

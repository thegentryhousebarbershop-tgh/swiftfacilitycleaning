import type { Metadata } from "next";
import { ServicePageLayout } from "@/components/templates/ServicePageLayout";
import { servicePages } from "@/data/servicePages";

const data = servicePages["floor-care"];

export const metadata: Metadata = {
  title: data.metaTitle,
  description: data.metaDescription,
  alternates: { canonical: data.href },
};

export default function Page() {
  return <ServicePageLayout data={data} />;
}

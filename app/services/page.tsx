import type { Metadata } from "next";
import { site } from "@/data";
import PageBanner from "@/components/common/PageBanner";
import Services from "@/components/Services";

export const metadata: Metadata = site.pages.services.meta;

export default function ServicesPage() {
  return (
    <>
      <PageBanner page="services" />
      <Services variant="light" />
    </>
  );
}

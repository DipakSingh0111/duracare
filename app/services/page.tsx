import type { Metadata } from "next";
import data from "@/data/duracare.json";
import PageBanner from "@/components/common/PageBanner";
import Services from "@/components/Services";

const { banner, meta } = data.pages.services;

export const metadata: Metadata = meta;

export default function ServicesPage() {
  return (
    <>
      <PageBanner
        title={banner.title}
        highlight={banner.highlight}
        description={banner.description}
        breadcrumb={banner.breadcrumb}
      />
      <Services variant="light" />
    </>
  );
}

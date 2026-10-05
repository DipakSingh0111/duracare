import type { Metadata } from "next";
import data from "@/data/duracare.json";
import PageBanner from "@/components/common/PageBanner";
import AboutSection from "@/components/common/AboutSection";
import WhyChooseUs from "@/components/WhyChooseUs";

const { banner, meta } = data.pages.about;

export const metadata: Metadata = meta;

export default function AboutPage() {
  return (
    <>
      <PageBanner
        title={banner.title}
        highlight={banner.highlight}
        description={banner.description}
        breadcrumb={banner.breadcrumb}
      />
      <AboutSection />
      <WhyChooseUs />
    </>
  );
}

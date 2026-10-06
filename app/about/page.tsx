import type { Metadata } from "next";
import { site } from "@/data";
import PageBanner from "@/components/common/PageBanner";
import AboutSection from "@/components/common/AboutSection";
import WhyChooseUs from "@/components/WhyChooseUs";

export const metadata: Metadata = site.pages.about.meta;

export default function AboutPage() {
  return (
    <>
      <PageBanner page="about" />
      <AboutSection showCta={false} />
      <WhyChooseUs className="mb-16 lg:mb-16" />
    </>
  );
}

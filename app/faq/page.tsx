import type { Metadata } from "next";
import { site } from "@/data";
import PageBanner from "@/components/common/PageBanner";
import FaqSection from "@/components/FaqSection";

export const metadata: Metadata = site.pages.faq.meta;

export default function FaqPage() {
  return (
    <>
      <PageBanner page="faq" />
      <FaqSection />
    </>
  );
}

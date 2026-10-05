import type { Metadata } from "next";
import { site } from "@/data";
import PageBanner from "@/components/common/PageBanner";
import ThankYouSection from "@/components/ThankYouSection";

export const metadata: Metadata = site.pages.thankYou.meta;

export default function ThankYouPage() {
  return (
    <>
      <PageBanner page="thankYou" />
      <ThankYouSection />
    </>
  );
}

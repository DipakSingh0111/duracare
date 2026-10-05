import type { Metadata } from "next";
import { site } from "@/data";
import PageBanner from "@/components/common/PageBanner";
import QuoteSection from "@/components/QuoteSection";

export const metadata: Metadata = site.pages.quote.meta;

export default function GetAQuotePage() {
  return (
    <>
      <PageBanner page="quote" />
      <QuoteSection />
    </>
  );
}

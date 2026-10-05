import type { Metadata } from "next";
import { site } from "@/data";
import PageBanner from "@/components/common/PageBanner";
import ContactSection from "@/components/ContactSection";

export const metadata: Metadata = site.pages.contact.meta;

export default function ContactPage() {
  return (
    <>
      <PageBanner page="contact" />
      <ContactSection />
    </>
  );
}

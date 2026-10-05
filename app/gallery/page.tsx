import type { Metadata } from "next";
import { site } from "@/data";
import PageBanner from "@/components/common/PageBanner";
import Gallery from "@/components/Gallery";

export const metadata: Metadata = site.pages.gallery.meta;

export default function GalleryPage() {
  return (
    <>
      <PageBanner page="gallery" />
      <Gallery />
    </>
  );
}

import type { Metadata } from "next";
import data from "@/data/duracare.json";
import PageBanner from "@/components/common/PageBanner";
import Container from "@/components/common/Container";
import SectionHeading from "@/components/common/SectionHeading";
import MediaGallery from "@/components/MediaGallery";

const { banner, meta } = data.pages.gallery;
const { images, videos } = data.gallery;

export const metadata: Metadata = meta;

export default function GalleryPage() {
  return (
    <>
      <PageBanner
        title={banner.title}
        highlight={banner.highlight}
        description={banner.description}
        breadcrumb={banner.breadcrumb}
      />

      <section className="bg-white pb-10 pt-16 lg:pt-20">
        <Container>
          <SectionHeading
            title={images.title}
            highlight={images.titleHighlight}
            description={images.description}
          />
          <div className="mt-10">
            <MediaGallery items={images.items} type="image" />
          </div>
        </Container>
      </section>

      <section className="bg-white pb-16 pt-10 lg:pb-20">
        <Container>
          <SectionHeading
            title={videos.title}
            highlight={videos.titleHighlight}
            description={videos.description}
          />
          <div className="mt-10">
            <MediaGallery items={videos.items} type="video" />
          </div>
        </Container>
      </section>
    </>
  );
}

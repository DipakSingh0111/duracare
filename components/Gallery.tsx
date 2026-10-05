import { site, type GalleryData, type SectionProps } from "@/data";
import Container from "@/components/common/Container";
import SectionHeading from "@/components/common/SectionHeading";
import MediaGallery from "@/components/MediaGallery";

export default function Gallery({ data, className = "" }: SectionProps<GalleryData> = {}) {
  const gallery = data || site.gallery;
  const { images, videos } = gallery;

  return (
    <div className={className}>
      <section className="bg-white pb-10 pt-16 lg:pt-20">
        <Container>
          <SectionHeading heading={images.heading} description={images.description} />
          <MediaGallery data={images} type="image" className="mt-10" />
        </Container>
      </section>

      <section className="bg-white pb-16 pt-10 lg:pb-20">
        <Container>
          <SectionHeading heading={videos.heading} description={videos.description} />
          <MediaGallery data={videos} type="video" className="mt-10" />
        </Container>
      </section>
    </div>
  );
}

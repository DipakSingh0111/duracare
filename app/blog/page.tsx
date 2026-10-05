import type { Metadata } from "next";
import data from "@/data/duracare.json";
import PageBanner from "@/components/common/PageBanner";
import Container from "@/components/common/Container";
import SectionHeading from "@/components/common/SectionHeading";
import { FeaturedPostCard, PostCard } from "@/components/BlogCards";

const { banner, meta } = data.pages.blog;
const { blog } = data;

export const metadata: Metadata = meta;

export default function BlogPage() {
  return (
    <>
      <PageBanner
        title={banner.title}
        highlight={banner.highlight}
        description={banner.description}
        breadcrumb={banner.breadcrumb}
      />

      <section className="bg-white py-16 lg:py-20">
        <Container>
          <SectionHeading
            eyebrow={blog.eyebrow}
            title={blog.title}
            highlight={blog.titleHighlight}
            description={blog.description}
          />

          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            {blog.posts.map((post) =>
              post.featured ? (
                <FeaturedPostCard key={post.slug} post={post} className="lg:row-span-2" />
              ) : (
                <PostCard key={post.slug} post={post} />
              )
            )}
          </div>
        </Container>
      </section>
    </>
  );
}

import { site, type BlogData, type SectionProps } from "@/data";
import Container from "@/components/common/Container";
import SectionHeading from "@/components/common/SectionHeading";
import { FeaturedPostCard, PostCard } from "@/components/BlogCards";

export default function BlogList({ data, className = "" }: SectionProps<BlogData> = {}) {
  const blog = data || site.blog;

  return (
    <section className={`bg-white py-10 lg:py-12 ${className}`}>
      <Container>
        <SectionHeading badge={blog.badge} heading={blog.heading} description={blog.description} />

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {blog.posts.map((post) =>
            post.featured ? (
              <FeaturedPostCard key={post.slug} data={post} blog={blog} className="lg:row-span-2" />
            ) : (
              <PostCard key={post.slug} data={post} blog={blog} />
            )
          )}
        </div>
      </Container>
    </section>
  );
}

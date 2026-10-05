import Link from "next/link";
import data from "@/data/duracare.json";
import Icon from "@/components/common/Icon";
import SectionHeading from "@/components/common/SectionHeading";
import Container from "@/components/common/Container";
import { FeaturedPostCard, PostCard } from "@/components/BlogCards";

const { blog } = data;

export default function OurBlog() {
  const featured = blog.posts.find((p) => p.featured);
  const latest = blog.posts.filter((p) => !p.featured).slice(0, 2);

  return (
    <section className="bg-white pb-16 pt-4 lg:pb-20">
      <Container>
        <SectionHeading
          eyebrow={blog.eyebrow}
          title={blog.title}
          highlight={blog.titleHighlight}
          description={blog.description}
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {featured && <FeaturedPostCard post={featured} className="sm:min-h-[480px]" />}

          <div className="flex flex-col gap-6">
            {latest.map((post) => (
              <PostCard key={post.slug} post={post} className="flex-1" />
            ))}
          </div>
        </div>

        <div className="mt-12 flex justify-center">
          <Link
            href={blog.button.href}
            className="group inline-flex items-center gap-3 rounded-full bg-navy px-8 py-3.5 text-sm font-semibold text-white shadow-md transition-colors duration-300 hover:bg-orange"
          >
            {blog.button.label}
            <Icon
              name={blog.arrowIcon}
              size={12}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </Link>
        </div>
      </Container>
    </section>
  );
}

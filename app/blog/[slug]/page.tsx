import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getPost, site } from "@/data";
import PageBanner from "@/components/common/PageBanner";
import BlogDetails from "@/components/BlogDetails";

export function generateStaticParams() {
  return site.blog.posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata(props: PageProps<"/blog/[slug]">): Promise<Metadata> {
  const { slug } = await props.params;
  const post = getPost(slug);
  if (!post) return {};
  return {
    title: `${post.title}${site.meta.titleSuffix}`,
    description: post.excerpt,
  };
}

export default async function BlogDetailsPage(props: PageProps<"/blog/[slug]">) {
  const { slug } = await props.params;
  const post = getPost(slug);
  if (!post) notFound();

  return (
    <>
      <PageBanner data={site.pages.blogDetails.banner} />
      <BlogDetails data={post} />
    </>
  );
}

import type { Metadata } from "next";
import { site } from "@/data";
import PageBanner from "@/components/common/PageBanner";
import BlogList from "@/components/BlogList";

export const metadata: Metadata = site.pages.blog.meta;

export default function BlogPage() {
  return (
    <>
      <PageBanner page="blog" />
      <BlogList />
    </>
  );
}

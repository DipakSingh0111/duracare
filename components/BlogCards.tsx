import Image from "next/image";
import Link from "next/link";
import { site, type BlogData, type BlogPostData, type SectionProps } from "@/data";
import Icon from "@/components/common/Icon";

type PostCardProps = SectionProps<BlogPostData> & { blog?: BlogData };

export const postHref = (post: BlogPostData) => `/blog/${post.slug}`;

export function FeaturedPostCard({ data, blog = site.blog, className = "" }: PostCardProps) {
  const post = data || blog.posts[0];
  return (
    <article
      className={`group relative isolate flex min-h-[420px] flex-col justify-end overflow-hidden rounded-[22px] p-6 shadow-lg sm:p-8 ${className}`}
    >
      <Image
        src={post.image}
        alt={post.imageAlt}
        fill
        sizes="(min-width:1024px) 600px, 100vw"
        className="-z-20 object-cover transition-transform duration-700 group-hover:scale-105"
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-[#061a45] via-[#061a45]/70 to-transparent" />

      <span className="inline-flex w-fit items-center gap-1.5 rounded-md bg-orange px-3 py-1.5 text-xs font-semibold text-white">
        <Icon name={blog.dateIcon} size={14} />
        {post.date}
      </span>

      <h3 className="mt-4 max-w-[460px] text-2xl font-bold leading-snug text-white sm:text-[28px]">
        {post.title}
      </h3>

      <p className="mt-3 max-w-[460px] text-[13px] leading-relaxed text-white/80 sm:text-sm">
        {post.excerpt}
      </p>

      <Link
        href={postHref(post)}
        className="group/btn mt-5 inline-flex w-fit items-center gap-3 text-sm font-semibold text-white"
      >
        {blog.readMore}
        <span className="flex h-8 w-8 items-center justify-center rounded-full bg-orange transition-transform duration-300 group-hover/btn:translate-x-1">
          <Icon name={blog.arrowIcon} size={12} />
        </span>
      </Link>
    </article>
  );
}

export function PostCard({ data, blog = site.blog, className = "" }: PostCardProps) {
  const post = data || blog.posts[0];
  return (
    <article className={`group grid gap-5 ${className} rounded-[22px] border border-slate-100 bg-white p-3.5 shadow-[0_8px_30px_-12px_rgba(11,42,111,0.2)] transition-shadow duration-300 hover:shadow-[0_18px_40px_-14px_rgba(11,42,111,0.3)] sm:grid-cols-[45%_1fr]`}>
      <div className="relative min-h-[190px] overflow-hidden rounded-2xl bg-slate-200">
        <Image
          src={post.image}
          alt={post.imageAlt}
          fill
          sizes="(min-width:1024px) 260px, (min-width:640px) 45vw, 90vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      <div className="flex flex-col justify-center py-2 pr-2">
        <span className="flex items-center gap-1.5 text-xs font-medium text-slate-500">
          <Icon name={blog.dateIcon} size={14} className="text-orange" />
          {post.date}
        </span>

        <h3 className="mt-2.5 text-lg font-bold leading-snug text-navy transition-colors duration-300 group-hover:text-orange sm:text-xl">
          {post.title}
        </h3>

        <p className="mt-2 text-[13px] leading-relaxed text-slate-500">{post.excerpt}</p>

        <Link
          href={postHref(post)}
          className="group/btn mt-4 inline-flex w-fit items-center gap-2.5 text-sm font-semibold text-navy"
        >
          {blog.readMore}
          <span className="flex h-7 w-7 items-center justify-center rounded-full bg-orange text-white transition-transform duration-300 group-hover/btn:translate-x-1">
            <Icon name={blog.arrowIcon} size={11} />
          </span>
        </Link>
      </div>
    </article>
  );
}

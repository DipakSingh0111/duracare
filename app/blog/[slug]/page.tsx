import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import data from "@/data/duracare.json";
import PageBanner from "@/components/common/PageBanner";
import Container from "@/components/common/Container";
import Icon from "@/components/common/Icon";

const { blog } = data;
const { banner } = data.pages.blogDetails;

const getPost = (slug: string) => blog.posts.find((p) => p.slug === slug);

export function generateStaticParams() {
  return blog.posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata(props: PageProps<"/blog/[slug]">): Promise<Metadata> {
  const { slug } = await props.params;
  const post = getPost(slug);
  if (!post) return {};
  return {
    title: `${post.title}${data.site.titleSuffix}`,
    description: post.excerpt,
  };
}

export default async function BlogDetailsPage(props: PageProps<"/blog/[slug]">) {
  const { slug } = await props.params;
  const post = getPost(slug);
  if (!post) notFound();

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
          <article>
            <div className="relative aspect-[16/9] overflow-hidden rounded-2xl bg-slate-200 shadow-[0_14px_34px_-14px_rgba(11,42,111,0.35)] sm:aspect-[21/8]">
              <Image
                src={post.image}
                alt={post.imageAlt}
                fill
                preload
                sizes="(min-width:1400px) 1300px, 100vw"
                className="object-cover"
              />
            </div>

            <p className="mt-8 flex items-center gap-2 text-sm font-medium text-slate-500">
              <Icon name={blog.dateIcon} size={16} className="text-orange" />
              {post.date}
            </p>
            <h2 className="mt-2 text-[28px] font-bold leading-tight text-navy sm:text-4xl lg:text-[42px]">
              {post.title}
            </h2>
            <p className="mt-4 text-base leading-relaxed text-slate-600 lg:text-[17px]">
              {post.content.intro}
            </p>

            {post.content.sections.map((section) => (
              <div key={section.heading} className="mt-10">
                <span className="block h-[3px] w-10 rounded-full bg-orange" />
                <h3 className="mt-4 text-2xl font-bold text-navy lg:text-[30px]">
                  {section.heading}
                </h3>

                <div className="mt-3 space-y-3 text-base leading-relaxed text-slate-600 lg:text-[17px]">
                  {section.paragraphs?.map((p) => (
                    <p key={p}>{p}</p>
                  ))}

                  {section.list && (
                    <ul className="space-y-1.5">
                      {section.list.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  )}

                  {section.items && (
                    <div className="space-y-4">
                      {section.items.map((item) => (
                        <div key={item.title}>
                          <h4 className="text-lg font-semibold text-navy">{item.title}</h4>
                          <p className="mt-1">{item.text}</p>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </article>
        </Container>
      </section>
    </>
  );
}

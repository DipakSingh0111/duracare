import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getService, site } from "@/data";
import PageBanner from "@/components/common/PageBanner";
import ServiceDetails from "@/components/ServiceDetails";

export function generateStaticParams() {
  return site.services.list.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata(props: PageProps<"/services/[slug]">): Promise<Metadata> {
  const { slug } = await props.params;
  const service = getService(slug);
  if (!service) return {};
  return {
    title: `${service.title} ${service.titleHighlight}${site.meta.titleSuffix}`,
    description: service.description,
  };
}

export default async function ServiceDetailsPage(props: PageProps<"/services/[slug]">) {
  const { slug } = await props.params;
  const service = getService(slug);
  if (!service) notFound();

  return (
    <>
      <PageBanner data={site.pages.serviceDetails.banner} />
      <ServiceDetails data={service} />
    </>
  );
}

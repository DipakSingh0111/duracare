import type { Metadata } from "next";
import Image from "next/image";
import data from "@/data/duracare.json";
import PageBanner from "@/components/common/PageBanner";
import FaqAccordion from "@/components/FaqAccordion";
import Container from "@/components/common/Container";

const { banner, meta } = data.pages.faq;
const { faq } = data;

export const metadata: Metadata = meta;

export default function FaqPage() {
  return (
    <>
      <PageBanner
        title={banner.title}
        highlight={banner.highlight}
        description={banner.description}
        breadcrumb={banner.breadcrumb}
      />

      <section className="bg-white py-16 lg:py-24">
        <Container>
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
            <div className="relative aspect-[16/9] overflow-hidden rounded-2xl bg-slate-200 shadow-[0_14px_34px_-14px_rgba(11,42,111,0.35)]">
              <Image
                src={faq.image}
                alt={faq.imageAlt}
                fill
                sizes="(min-width:1024px) 600px, 100vw"
                className="object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>

            <div>
              <span className="block h-[3px] w-10 rounded-full bg-orange" />
              <h2 className="mt-5 text-[34px] font-bold leading-[1.15] text-navy sm:text-[44px] lg:text-[54px]">
                {faq.title} <span className="text-orange">{faq.titleHighlight}</span>
              </h2>
              <p className="mt-5 max-w-[620px] text-base leading-relaxed text-slate-500 sm:text-lg lg:text-[19px]">
                {faq.description}
              </p>
            </div>
          </div>

          <div className="mt-14">
            <FaqAccordion
              items={faq.items}
              defaultOpen={faq.defaultOpen}
              toggleIcon={faq.toggleIcon}
            />
          </div>
        </Container>
      </section>
    </>
  );
}

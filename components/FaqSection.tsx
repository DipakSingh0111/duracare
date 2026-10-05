import Image from "next/image";
import { site, type FaqData, type SectionProps } from "@/data";
import FaqAccordion from "@/components/FaqAccordion";
import Container from "@/components/common/Container";

export default function FaqSection({ data, className = "" }: SectionProps<FaqData> = {}) {
  const faq = data || site.faq;

  return (
    <section className={`bg-white py-16 lg:py-24 ${className}`}>
      <Container>
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
          <div className="relative aspect-[16/9] overflow-hidden rounded-2xl bg-slate-200 shadow-[0_14px_34px_-14px_rgba(11,42,111,0.35)]">
            <Image
              src={faq.image.src}
              alt={faq.image.alt}
              fill
              sizes="(min-width:1024px) 600px, 100vw"
              className="object-cover transition-transform duration-700 hover:scale-105"
            />
          </div>

          <div>
            <span className="block h-[3px] w-10 rounded-full bg-orange" />
            <h2 className="mt-5 text-[34px] font-bold leading-[1.15] text-navy sm:text-[44px] lg:text-[54px]">
              {faq.heading.main} <span className="text-orange">{faq.heading.highlight}</span>
            </h2>
            <p className="mt-5 max-w-[620px] text-base leading-relaxed text-slate-500 sm:text-lg lg:text-[19px]">
              {faq.description}
            </p>
          </div>
        </div>

        <FaqAccordion data={faq} className="mt-14" />
      </Container>
    </section>
  );
}

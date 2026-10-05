import Image from "next/image";
import { site, type SectionProps, type WhyChooseUsData } from "@/data";
import Icon from "@/components/common/Icon";

export default function WhyChooseUs({ data, className = "" }: SectionProps<WhyChooseUsData> = {}) {
  const whyChooseUs = data || site.whyChooseUs;

  return (
    <section className={`grid bg-[#F8FAFE] lg:grid-cols-[1.35fr_1fr] ${className}`}>
      <div className="px-9 py-16 sm:px-[60px] lg:py-20 lg:pl-[max(94px,calc((100vw-1480px)/2+94px))] lg:pr-12">
        <div className="flex items-center gap-4">
          <span className="h-[2px] w-10 bg-orange" />
          <span className="text-sm font-semibold uppercase tracking-[0.12em] text-orange">
            {whyChooseUs.badge}
          </span>
        </div>

        <h2 className="mt-4 text-[30px] font-bold leading-[1.15] text-navy sm:text-4xl lg:text-[44px]">
          <span className="block">{whyChooseUs.heading.main}</span>
          {whyChooseUs.heading.middle}{" "}
          <span className="text-orange">{whyChooseUs.heading.highlight}</span>
        </h2>

        <p className="mt-5 max-w-[620px] text-[15px] leading-relaxed text-slate-500">
          {whyChooseUs.description}
        </p>

        <div className="mt-9 grid gap-4 sm:grid-cols-2">
          {whyChooseUs.list.map((f) => (
            <div
              key={f.title}
              className="group flex items-center gap-4 rounded-r-lg border-l-4 border-orange bg-[#EEF3FC] p-4 transition-all duration-300 hover:-translate-y-1 hover:bg-orange hover:shadow-[0_16px_32px_-12px_rgba(255,106,19,0.6)]"
            >
              <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-navy text-white transition-colors duration-300 group-hover:bg-white group-hover:text-orange">
                <Icon name={f.icon} size={26} />
              </span>
              <div>
                <h3 className="text-[15px] font-semibold leading-snug text-navy transition-colors duration-300 group-hover:text-white">
                  {f.title}
                </h3>
                <p className="mt-1 text-[13px] leading-relaxed text-slate-500 transition-colors duration-300 group-hover:text-white/90">
                  {f.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="relative h-[300px] overflow-hidden bg-slate-200 sm:h-[420px] lg:h-auto lg:min-h-[380px]">
        <Image
          src={whyChooseUs.image.src}
          alt={whyChooseUs.image.alt}
          fill
          sizes="(min-width:1024px) 42vw, 100vw"
          className="object-cover transition-transform duration-700 hover:scale-105"
        />
      </div>
    </section>
  );
}

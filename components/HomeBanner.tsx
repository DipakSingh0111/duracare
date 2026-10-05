import Image from "next/image";
import Link from "next/link";
import { site, splitLines, type HeroData, type SectionProps } from "@/data";
import Container from "@/components/common/Container";

export default function HomeBanner({ data, className = "" }: SectionProps<HeroData> = {}) {
  const hero = data || site.hero;

  return (
    <section className={`relative isolate overflow-hidden bg-navy ${className}`}>
      <Image
        src={hero.image.src}
        alt={hero.image.alt}
        fill
        preload
        sizes="100vw"
        className="-z-20 object-cover"
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#061a45]/90 via-[#061a45]/50 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 -z-10 h-1/3 bg-gradient-to-t from-[#061a45]/60 to-transparent" />

      <Container className="flex min-h-[500px] items-center pb-16 pt-36 sm:min-h-[540px] lg:min-h-[max(480px,calc(100svh-54px))] lg:pb-12 lg:pt-[110px]">
        <div>
          <h1 className="font-display text-[8vw] font-bold uppercase leading-[1.05] text-white sm:text-[54px] lg:text-[clamp(52px,min(5vw,9.5svh),96px)]">
            {splitLines(hero.heading.main).map((line) => (
              <span key={line} className="block whitespace-nowrap">
                {line}
              </span>
            ))}
            <span className="block whitespace-nowrap text-orange">{hero.heading.highlight}</span>
          </h1>

          <Link
            href={hero.cta.href}
            className="group relative mt-8 inline-flex h-12 items-center overflow-hidden rounded-full bg-brand pl-9 pr-8 text-sm font-semibold lg:mt-[min(40px,4svh)] lg:h-14 lg:pl-11 lg:pr-10 lg:text-base text-white shadow-[0_12px_28px_-10px_rgba(0,0,0,0.6)] transition-colors duration-300 hover:bg-orange"
          >
            <span className="absolute inset-y-0 left-0 w-5 rounded-l-full border-l-4 border-orange transition-colors duration-300 group-hover:border-white" />
            {hero.cta.label}
          </Link>
        </div>
      </Container>
    </section>
  );
}

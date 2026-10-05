import Image from "next/image";
import Link from "next/link";
import { site, type PageBannerData, type PageKey, type SectionProps } from "@/data";
import Icon from "@/components/common/Icon";
import Container from "@/components/common/Container";

type Crumb = { label: string; href?: string };

type PageBannerProps = SectionProps<PageBannerData> & { page?: PageKey };

export default function PageBanner({ data, page, className = "" }: PageBannerProps) {
  const banner = data || (page ? site.pages[page].banner : null);
  if (!banner) return null;

  const config = site.pageBanner;
  const crumbs: Crumb[] = [{ label: config.homeLabel, href: config.homeHref }, ...banner.breadcrumb];

  return (
    <section className={`relative isolate overflow-hidden bg-navy ${className}`}>
      <Image
        src={config.image.src}
        alt=""
        aria-hidden
        fill
        sizes="50vw"
        className="-z-30 scale-110 object-cover blur-xl"
      />
      <div className="absolute inset-y-0 right-0 -z-20 w-full [mask-image:linear-gradient(to_right,transparent_0%,black_40%)] lg:w-[64%]">
        <Image
          src={config.image.src}
          alt={config.image.alt}
          fill
          preload
          sizes="(min-width:1024px) 64vw, 100vw"
          quality={90}
          className="object-cover object-[center_35%]"
        />
      </div>
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#0a2a6b]/95 via-[#0a2a6b]/80 to-[#0a2a6b]/40 lg:from-[#0a2a6b]/90 lg:via-[#0a2a6b]/35 lg:via-35% lg:to-transparent" />

      <Container className="flex min-h-[400px] items-center pb-14 pt-32 sm:min-h-[440px] lg:min-h-[480px] lg:pt-28">
        <div className="max-w-[620px]">
          <h1 className="text-[44px] font-bold leading-[1.1] text-white sm:text-6xl lg:text-[72px]">
            {banner.heading.main}
            {banner.heading.highlight && (
              <span className="text-orange">{banner.heading.highlight}</span>
            )}
          </h1>

          {banner.description && (
            <p className="mt-4 text-[15px] leading-relaxed text-white/90 sm:text-lg">
              {banner.description}
            </p>
          )}

          <nav aria-label={site.labels.breadcrumb} className="mt-7">
            <ol className="inline-flex max-w-full flex-wrap items-center gap-x-2.5 gap-y-1 rounded-full border border-white/15 bg-white/10 px-5 py-2.5 text-sm font-medium backdrop-blur-sm sm:gap-x-3 sm:px-7 sm:py-3.5 sm:text-lg">
              {crumbs.map((crumb, i) => {
                const isLast = i === crumbs.length - 1;
                return (
                  <li key={crumb.label} className="flex items-center gap-2.5 whitespace-nowrap">
                    {i > 0 && (
                      <Icon name={config.separatorIcon} size={18} className="text-white/60" />
                    )}
                    {isLast || !crumb.href ? (
                      <span
                        aria-current={isLast ? "page" : undefined}
                        className={isLast ? "text-orange" : "text-white"}
                      >
                        {crumb.label}
                      </span>
                    ) : (
                      <Link
                        href={crumb.href}
                        className="flex items-center gap-2 text-white transition-colors hover:text-orange"
                      >
                        {i === 0 && <Icon name={config.homeIcon} size={19} />}
                        {crumb.label}
                      </Link>
                    )}
                  </li>
                );
              })}
            </ol>
          </nav>
        </div>
      </Container>
    </section>
  );
}

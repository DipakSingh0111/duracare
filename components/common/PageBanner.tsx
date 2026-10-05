import Image from "next/image";
import Link from "next/link";
import data from "@/data/duracare.json";
import Icon from "@/components/common/Icon";
import Container from "@/components/common/Container";

const { pageBanner, labels } = data;

type Crumb = { label: string; href?: string };

type PageBannerProps = {
  title: string;
  highlight?: string;
  description?: string;
  breadcrumb: Crumb[];
  image?: string;
  imageAlt?: string;
};

export default function PageBanner({
  title,
  highlight,
  description,
  breadcrumb,
  image = pageBanner.image,
  imageAlt = pageBanner.imageAlt,
}: PageBannerProps) {
  const crumbs: Crumb[] = [
    { label: pageBanner.homeLabel, href: pageBanner.homeHref },
    ...breadcrumb,
  ];

  return (
    <section className="relative isolate overflow-hidden bg-navy">
      <Image
        src={image}
        alt={imageAlt}
        fill
        preload
        sizes="100vw"
        className="-z-20 object-cover object-right"
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#0a2a6b] via-[#0a2a6b]/85 to-[#0a2a6b]/10 lg:via-[#0a2a6b]/70" />

      <Container className="flex min-h-[400px] items-center pb-14 pt-32 sm:min-h-[440px] lg:min-h-[480px] lg:pt-28">
        <div className="max-w-[620px]">
          <h1 className="text-[44px] font-bold leading-[1.1] text-white sm:text-6xl lg:text-[72px]">
            {title}
            {highlight && <span className="text-orange">{highlight}</span>}
          </h1>

          {description && (
            <p className="mt-4 text-[15px] leading-relaxed text-white/90 sm:text-lg">
              {description}
            </p>
          )}

          <nav aria-label={labels.breadcrumb} className="mt-7">
            <ol className="inline-flex items-center gap-2.5 rounded-full border border-white/15 bg-white/10 px-5 py-2.5 text-sm font-medium backdrop-blur-sm">
              {crumbs.map((crumb, i) => {
                const isLast = i === crumbs.length - 1;
                return (
                  <li key={crumb.label} className="flex items-center gap-2.5">
                    {i > 0 && (
                      <Icon name={pageBanner.separatorIcon} size={14} className="text-white/60" />
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
                        {i === 0 && <Icon name={pageBanner.homeIcon} size={15} />}
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

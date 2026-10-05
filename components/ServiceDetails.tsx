import Image from "next/image";
import Link from "next/link";
import { getService, site, type SectionProps, type ServiceDetailsData } from "@/data";
import Container from "@/components/common/Container";
import Icon from "@/components/common/Icon";

export default function ServiceDetails({ data, className = "" }: SectionProps<ServiceDetailsData> = {}) {
  const service = data || getService(site.services.list[0].slug);
  if (!service) return null;

  const { sidebarTitle, linkIcon, contactCard } = site.serviceDetails;

  return (
    <section className={`bg-white py-16 lg:py-20 ${className}`}>
      <Container className="grid items-start gap-8 lg:grid-cols-[340px_1fr] lg:gap-10">
        <aside className="order-2 space-y-6 lg:order-1 lg:sticky lg:top-36">
          <div className="overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-[0_12px_30px_-14px_rgba(11,42,111,0.3)]">
            <h2 className="bg-orange px-6 py-4 text-lg font-semibold text-white">{sidebarTitle}</h2>
            <ul className="px-4 py-2">
              {site.services.list.map((s) => {
                const active = s.slug === service.slug;
                return (
                  <li key={s.slug} className="border-b border-slate-100 last:border-b-0">
                    <Link
                      href={s.button.href}
                      aria-current={active ? "page" : undefined}
                      className={`group flex items-center justify-between rounded-lg px-3 py-3.5 text-[15px] font-medium transition-colors ${
                        active ? "bg-orange/10 text-orange" : "text-navy hover:text-orange"
                      }`}
                    >
                      {s.title} {s.titleHighlight}
                      <Icon
                        name={linkIcon}
                        size={13}
                        className="text-orange transition-transform duration-300 group-hover:translate-x-1"
                      />
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>

          <div className="rounded-2xl bg-navy px-6 py-8 text-white shadow-[0_14px_34px_-14px_rgba(11,42,111,0.6)]">
            <div className="flex items-center justify-center gap-3">
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-orange">
                <Icon name={contactCard.icon} size={20} />
              </span>
              <span className="text-xl font-semibold">{contactCard.name}</span>
            </div>
            <h3 className="mx-auto mt-4 max-w-[240px] text-center text-lg font-semibold leading-snug">
              {contactCard.title}
            </h3>

            <ul className="mt-6 space-y-4">
              {contactCard.items.map((item) => {
                const content = (
                  <>
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-orange">
                      <Icon name={item.icon} size={14} />
                    </span>
                    <span className="text-[15px] leading-snug text-white/90">{item.text}</span>
                  </>
                );
                return (
                  <li key={item.text}>
                    {item.href ? (
                      <a href={item.href} className="flex items-center gap-3 transition-colors hover:text-orange">
                        {content}
                      </a>
                    ) : (
                      <div className="flex items-center gap-3">{content}</div>
                    )}
                  </li>
                );
              })}
            </ul>

            <Link
              href={contactCard.button.href}
              className="mt-7 flex items-center justify-center gap-2.5 rounded-full bg-orange py-3 text-[15px] font-semibold transition-colors hover:bg-white hover:text-navy"
            >
              {contactCard.button.label}
              <Icon name={linkIcon} size={13} />
            </Link>
          </div>
        </aside>

        <article className="order-1 lg:order-2">
          <div className="relative aspect-[16/9] overflow-hidden rounded-2xl bg-slate-200 shadow-[0_14px_34px_-14px_rgba(11,42,111,0.35)]">
            <Image
              src={service.details.image}
              alt={service.imageAlt}
              fill
              preload
              sizes="(min-width:1024px) 860px, 100vw"
              className="object-cover"
            />
          </div>

          <h2 className="mt-8 text-[28px] font-bold leading-tight text-navy sm:text-4xl">
            {service.title} <span className="text-orange">{service.titleHighlight}</span>
          </h2>

          <div className="mt-4 space-y-4 text-base leading-relaxed text-slate-600 lg:text-[17px]">
            {service.details.paragraphs.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
        </article>
      </Container>
    </section>
  );
}

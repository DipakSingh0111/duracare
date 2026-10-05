import Image from "next/image";
import Link from "next/link";
import { site, type FooterData, type SectionProps } from "@/data";
import Icon from "@/components/common/Icon";
import Container from "@/components/common/Container";

function LinkColumn({ title, links, icon }: { title: string; links: { label: string; href: string }[]; icon: string }) {
  return (
    <div className="lg:border-l lg:border-white/15 lg:pl-8">
      <h3 className="text-lg font-semibold">{title}</h3>
      <ul className="mt-6 grid grid-cols-2 gap-x-4 gap-y-3 sm:grid-cols-1">
        {links.map((link) => (
          <li key={link.label}>
            <Link
              href={link.href}
              className="group flex items-center gap-2.5 text-sm text-white/80 transition-colors hover:text-orange"
            >
              <Icon
                name={icon}
                size={9}
                className="shrink-0 text-orange transition-transform group-hover:translate-x-1"
              />
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Footer({ data, className = "" }: SectionProps<FooterData> = {}) {
  const footer = data || site.footer;
  const { contact, socials, logo, labels } = site;
  const contactItems = [
    { icon: footer.contactIcons.address, text: contact.address },
    { icon: footer.contactIcons.phone, text: contact.phone, href: contact.phoneHref },
    { icon: footer.contactIcons.email, text: contact.email, href: contact.emailHref },
    { icon: footer.contactIcons.hours, text: contact.hours },
  ];

  return (
    <footer className={`bg-brand-dark text-white ${className}`}>
      <Container className="grid gap-10 pb-12 pt-16 sm:grid-cols-2 lg:grid-cols-[1.1fr_1fr_1.15fr_1.25fr] lg:gap-8">
        <div>
          <Link href="/" aria-label={labels.logoHome}>
            <Image
              src={logo.footer}
              alt={logo.alt}
              width={2172}
              height={724}
              className="-ml-5 h-[88px] w-auto"
            />
          </Link>
          <p className="mt-2 text-sm leading-relaxed text-white/80">{footer.description}</p>

          <div className="my-6 border-t border-white/15" />

          <h4 className="text-sm font-semibold">{footer.socialTitle}</h4>
          <div className="mt-4 flex items-center gap-2.5">
            {socials.map((s) => (
              <a
                key={s.name}
                href={s.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.name}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/50 transition-colors hover:border-orange hover:bg-orange"
              >
                <Icon name={s.icon} size={13} />
              </a>
            ))}
          </div>
        </div>

        <LinkColumn title={footer.quickLinks.title} links={footer.quickLinks.list} icon={footer.linkIcon} />
        <LinkColumn title={footer.services.title} links={footer.services.list} icon={footer.linkIcon} />

        <div className="lg:border-l lg:border-white/15 lg:pl-8">
          <h3 className="text-lg font-semibold">{footer.contactTitle}</h3>
          <ul className="mt-6">
            {contactItems.map((item) => {
              const content = (
                <>
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-orange">
                    <Icon name={item.icon} size={14} />
                  </span>
                  <span className="text-sm text-white/85">{item.text}</span>
                </>
              );
              return (
                <li
                  key={item.text}
                  className="border-b border-white/15 py-3.5 first:pt-0 last:border-b-0"
                >
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
        </div>
      </Container>

      <div className="border-t border-white/15">
        <Container>
          <p className="py-5 text-center text-[13px] text-white/70">{footer.copyright}</p>
        </Container>
      </div>
    </footer>
  );
}

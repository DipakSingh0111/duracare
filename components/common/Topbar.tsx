import { site, type SectionProps, type TopbarData } from "@/data";
import Icon from "@/components/common/Icon";

export default function Topbar({ data, className = "" }: SectionProps<TopbarData> = {}) {
  const topbar = data || site.topbar;
  const { contact, socials } = site;

  return (
    <div className={`bg-navy text-white ${className}`}>
      <div className="mx-auto flex h-[50px] max-w-[1400px] items-center justify-between gap-3 px-4 text-[13px] sm:px-12 sm:text-sm lg:h-[54px] lg:px-[72px] lg:text-[15px]">
        <div className="flex items-center gap-4 lg:gap-5">
          <a
            href={contact.phoneHref}
            className="flex items-center gap-2 whitespace-nowrap transition-colors hover:text-orange sm:gap-2.5"
          >
            <Icon name={topbar.phoneIcon} size={16} />
            <span>{contact.phone}</span>
          </a>
          <span className="hidden h-5 w-[1.5px] bg-white/80 sm:block" />
          <a
            href={contact.emailHref}
            className="hidden items-center gap-2.5 transition-colors hover:text-orange sm:flex"
          >
            <Icon name={topbar.emailIcon} size={18} />
            <span>{contact.email}</span>
          </a>
        </div>

        <div className="flex items-center gap-3.5 sm:gap-5 lg:gap-7">
          {socials.map((s) => (
            <a
              key={s.name}
              href={s.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={s.name}
              className="transition-all duration-300 hover:-translate-y-0.5 hover:text-orange"
            >
              <Icon name={s.icon} size={16} className="sm:h-[18px] sm:w-[18px]" />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

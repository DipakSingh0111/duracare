import data from "@/data/duracare.json";
import Icon from "@/components/common/Icon";

const { contact, socials, topbar } = data;

export default function Topbar({ className = "" }: { className?: string }) {
  return (
    <div className={`bg-navy text-white ${className}`}>
      <div className="mx-auto flex h-[50px] max-w-[1400px] items-center justify-between px-6 text-sm sm:px-12 lg:h-[54px] lg:px-[72px] lg:text-[15px]">
        <div className="flex items-center gap-4 lg:gap-5">
          <a
            href={contact.phoneHref}
            className="flex items-center gap-2.5 transition-colors hover:text-orange"
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

        <div className="flex items-center gap-5 lg:gap-7">
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              aria-label={s.label}
              className="transition-all duration-300 hover:-translate-y-0.5 hover:text-orange"
            >
              <Icon name={s.icon} size={18} />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

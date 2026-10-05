import Link from "next/link";
import { site, type SectionProps, type ThankYouData } from "@/data";
import Container from "@/components/common/Container";
import Icon from "@/components/common/Icon";

export default function ThankYouSection({ data, className = "" }: SectionProps<ThankYouData> = {}) {
  const thankYou = data || site.thankYou;
  const { contact } = site;
  const { primary, secondary } = thankYou.buttons;

  return (
    <section className={`bg-white py-16 lg:py-24 ${className}`}>
      <Container>
        <div className="mx-auto max-w-[860px] text-center">
          <span className="relative mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-orange/10 text-orange">
            <span className="absolute inset-0 animate-ping rounded-full bg-orange/15 [animation-duration:2.4s]" />
            <Icon name={thankYou.icon} size={48} className="relative" />
          </span>

          <div className="mt-7 flex items-center justify-center gap-3">
            <span className="h-[2px] w-8 bg-orange" />
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-navy sm:text-[13px]">
              {thankYou.badge}
            </span>
            <span className="h-[2px] w-8 bg-orange" />
          </div>

          <h2 className="mt-3 text-[30px] font-bold leading-tight text-navy sm:text-4xl lg:text-[46px]">
            {thankYou.heading.main} <span className="text-orange">{thankYou.heading.highlight}</span>
          </h2>
          <p className="mx-auto mt-4 max-w-[680px] text-[15px] leading-relaxed text-slate-500 sm:text-base lg:text-[17px]">
            {thankYou.description}
          </p>
        </div>

        <div className="mx-auto mt-12 max-w-[1060px] rounded-3xl bg-soft p-6 sm:p-10">
          <h3 className="text-center text-xl font-bold text-navy sm:text-2xl">{thankYou.stepsTitle}</h3>

          <ol className="mt-8 grid gap-5 md:grid-cols-3">
            {thankYou.steps.map((step, i) => (
              <li
                key={step.title}
                className="group relative rounded-2xl bg-white px-6 pb-7 pt-9 text-center shadow-[0_10px_30px_-14px_rgba(11,42,111,0.3)] transition-transform duration-300 hover:-translate-y-1"
              >
                <span className="absolute right-5 top-4 text-3xl font-extrabold text-navy/10 transition-colors group-hover:text-orange/25">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-navy text-white transition-colors duration-300 group-hover:bg-orange">
                  <Icon name={step.icon} size={22} />
                </span>
                <h4 className="mt-4 text-lg font-semibold text-navy">{step.title}</h4>
                <p className="mt-2 text-sm leading-relaxed text-slate-500">{step.text}</p>
              </li>
            ))}
          </ol>
        </div>

        <div className="mt-10 flex flex-col items-center gap-6">
          <p className="text-center text-[15px] text-slate-600">
            {thankYou.helpText}{" "}
            <a href={contact.phoneHref} className="whitespace-nowrap font-semibold text-orange hover:text-navy">
              {contact.phone}
            </a>
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href={primary.href}
              className="group inline-flex items-center gap-3 rounded-full bg-orange py-2 pl-8 pr-2 text-base font-semibold text-white shadow-[0_10px_24px_-8px_rgba(255,106,19,0.6)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-navy"
            >
              {primary.label}
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-orange transition-colors group-hover:text-navy">
                <Icon name={primary.icon} size={15} className="transition-transform duration-300 group-hover:translate-x-0.5" />
              </span>
            </Link>
            <Link
              href={secondary.href}
              className="inline-flex h-14 items-center rounded-full border-2 border-navy px-8 text-base font-semibold text-navy transition-colors duration-300 hover:bg-navy hover:text-white"
            >
              {secondary.label}
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}

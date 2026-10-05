import type { Metadata } from "next";
import data from "@/data/duracare.json";
import PageBanner from "@/components/common/PageBanner";
import Container from "@/components/common/Container";
import SectionHeading from "@/components/common/SectionHeading";
import Icon from "@/components/common/Icon";
import EnquiryForm from "@/components/EnquiryForm";

const { banner, meta } = data.pages.quote;
const { aside, form, steps } = data.quotePage;

export const metadata: Metadata = meta;

export default function GetAQuotePage() {
  return (
    <>
      <PageBanner
        title={banner.title}
        highlight={banner.highlight}
        description={banner.description}
        breadcrumb={banner.breadcrumb}
      />

      <section className="bg-white py-16 lg:py-20">
        <Container className="grid items-start gap-8 lg:grid-cols-[380px_1fr] lg:gap-10">
          <aside className="relative overflow-hidden rounded-3xl bg-navy p-8 text-white shadow-[0_18px_40px_-16px_rgba(11,42,111,0.6)] lg:sticky lg:top-36">
            <span className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-orange/15" />
            <span className="pointer-events-none absolute -bottom-20 -left-12 h-48 w-48 rounded-full bg-white/5" />

            <span className="relative flex h-14 w-14 items-center justify-center rounded-2xl bg-orange">
              <Icon name={aside.icon} size={24} />
            </span>
            <h2 className="relative mt-5 text-2xl font-bold leading-snug">{aside.title}</h2>
            <p className="relative mt-3 text-[15px] leading-relaxed text-white/80">{aside.description}</p>

            <ul className="relative mt-6 space-y-3.5">
              {aside.benefits.map((b) => (
                <li key={b} className="flex items-center gap-3 text-[15px]">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-orange">
                    <Icon name={aside.checkIcon} size={11} />
                  </span>
                  {b}
                </li>
              ))}
            </ul>

            <div className="relative mt-8 rounded-2xl bg-white/10 p-5 backdrop-blur-sm">
              <div className="flex items-center gap-3">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-orange">
                  <Icon name={aside.help.icon} size={18} />
                </span>
                <div>
                  <h3 className="font-semibold">{aside.help.title}</h3>
                  <p className="text-[13px] text-white/75">{aside.help.text}</p>
                </div>
              </div>
              <a
                href={aside.help.phoneHref}
                className="mt-4 block text-2xl font-bold tracking-wide transition-colors hover:text-orange"
              >
                {aside.help.phone}
              </a>
              <a
                href={aside.help.emailHref}
                className="mt-1 block text-sm text-white/80 transition-colors hover:text-orange"
              >
                {aside.help.email}
              </a>
            </div>
          </aside>

          <div className="rounded-3xl border border-slate-100 bg-white p-6 shadow-[0_14px_40px_-16px_rgba(11,42,111,0.25)] sm:p-10">
            <div className="flex items-center gap-3">
              <span className="h-[2px] w-10 bg-orange" />
              <span className="text-sm font-semibold uppercase tracking-[0.12em] text-orange">
                {form.eyebrow}
              </span>
            </div>
            <h2 className="mt-3 text-[30px] font-bold leading-tight text-navy sm:text-4xl lg:text-[42px]">
              {form.title} <span className="text-orange">{form.titleHighlight}</span>
            </h2>
            <p className="mt-3 max-w-2xl text-[15px] leading-relaxed text-slate-500">{form.description}</p>

            <div className="mt-8">
              <EnquiryForm
                fields={form.fields}
                submit={form.submit}
                submitIcon={form.submitIcon}
                success={form.success}
              />
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-brand py-16 lg:py-20">
        <Container>
          <SectionHeading
            dark
            eyebrow={steps.eyebrow}
            title={steps.title}
            highlight={steps.titleHighlight}
            description={steps.description}
          />

          <ol className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {steps.items.map((step, i) => (
              <li
                key={step.title}
                className="group relative rounded-2xl bg-white px-6 pb-8 pt-10 text-center shadow-[0_18px_40px_-18px_rgba(0,0,0,0.45)] transition-transform duration-300 hover:-translate-y-1.5"
              >
                <span className="absolute right-5 top-4 text-4xl font-extrabold text-navy/10 transition-colors group-hover:text-orange/20">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-soft text-navy transition-colors duration-300 group-hover:bg-orange group-hover:text-white">
                  <Icon name={step.icon} size={26} />
                </span>
                <h3 className="mt-5 text-lg font-semibold text-navy">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-500">{step.text}</p>
              </li>
            ))}
          </ol>
        </Container>
      </section>
    </>
  );
}

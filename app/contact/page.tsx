import type { Metadata } from "next";
import data from "@/data/duracare.json";
import PageBanner from "@/components/common/PageBanner";
import Container from "@/components/common/Container";
import SectionHeading from "@/components/common/SectionHeading";
import Icon from "@/components/common/Icon";
import EnquiryForm from "@/components/EnquiryForm";

const { banner, meta } = data.pages.contact;
const { info, form, map } = data.contactPage;

export const metadata: Metadata = meta;

export default function ContactPage() {
  return (
    <>
      <PageBanner
        title={banner.title}
        highlight={banner.highlight}
        description={banner.description}
        breadcrumb={banner.breadcrumb}
      />

      <section className="bg-white pb-10 pt-16 lg:pb-12 lg:pt-20">
        <Container>
          <SectionHeading
            eyebrow={info.eyebrow}
            title={info.title}
            highlight={info.titleHighlight}
            description={info.description}
          />

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {info.cards.map((card) => {
              const body = (
                <>
                  <span className="flex h-16 w-16 items-center justify-center rounded-full bg-navy text-white transition-colors duration-300 group-hover:bg-white group-hover:text-orange">
                    <Icon name={card.icon} size={24} />
                  </span>
                  <h3 className="mt-5 text-lg font-semibold text-navy transition-colors duration-300 group-hover:text-white">
                    {card.title}
                  </h3>
                  {card.lines.map((line) => (
                    <p
                      key={line}
                      className="mt-1.5 text-[15px] text-slate-500 transition-colors duration-300 group-hover:text-white/90"
                    >
                      {line}
                    </p>
                  ))}
                </>
              );
              const cls =
                "group flex flex-col items-center rounded-2xl border-b-4 border-orange bg-white px-6 py-9 text-center shadow-[0_10px_30px_-12px_rgba(11,42,111,0.25)] transition-all duration-300 hover:-translate-y-1.5 hover:bg-orange hover:shadow-[0_20px_40px_-14px_rgba(255,106,19,0.55)]";
              return card.href ? (
                <a key={card.title} href={card.href} className={cls}>
                  {body}
                </a>
              ) : (
                <div key={card.title} className={cls}>
                  {body}
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      <section className="bg-[#F8FAFE] pb-16 pt-10 lg:pb-20 lg:pt-12">
        <Container className="grid gap-8 lg:grid-cols-[1.15fr_1fr]">
          <div className="rounded-3xl bg-white p-6 shadow-[0_14px_40px_-16px_rgba(11,42,111,0.25)] sm:p-10">
            <div className="flex items-center gap-3">
              <span className="h-[2px] w-10 bg-orange" />
              <span className="text-sm font-semibold uppercase tracking-[0.12em] text-orange">
                {form.eyebrow}
              </span>
            </div>
            <h2 className="mt-3 text-[30px] font-bold leading-tight text-navy sm:text-4xl">
              {form.title} <span className="text-orange">{form.titleHighlight}</span>
            </h2>
            <p className="mt-3 text-[15px] leading-relaxed text-slate-500">{form.description}</p>

            <div className="mt-8">
              <EnquiryForm
                fields={form.fields}
                submit={form.submit}
                submitIcon={form.submitIcon}
                success={form.success}
              />
            </div>
          </div>

          <div className="min-h-[400px] overflow-hidden rounded-3xl bg-slate-200 shadow-[0_14px_40px_-16px_rgba(11,42,111,0.25)]">
            <iframe
              title={map.title}
              src={map.embedUrl}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="h-full min-h-[400px] w-full border-0"
            />
          </div>
        </Container>
      </section>
    </>
  );
}

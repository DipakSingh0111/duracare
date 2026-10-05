import Image from "next/image";
import Link from "next/link";
import { site, type SectionProps, type ServicesData } from "@/data";
import Icon from "@/components/common/Icon";
import SectionHeading from "@/components/common/SectionHeading";
import Container from "@/components/common/Container";

type ServicesProps = SectionProps<ServicesData> & {
  variant?: "dark" | "light";
  limit?: number;
};

export default function Services({ data, className = "", variant = "dark", limit }: ServicesProps = {}) {
  const services = data || site.services;
  const dark = variant === "dark";
  const items = limit ? services.list.slice(0, limit) : services.list;

  return (
    <section className={`py-16 lg:py-20 ${dark ? "bg-brand" : "bg-white"} ${className}`}>
      <Container>
        <SectionHeading
          dark={dark}
          badge={services.badge}
          heading={services.heading}
          description={services.description}
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {items.map((item) => (
            <article
              key={item.title}
              className={`group grid gap-5 rounded-[22px] bg-white p-3.5 transition-all duration-300 hover:-translate-y-1 sm:grid-cols-[46%_1fr] ${
                dark
                  ? "shadow-[0_18px_40px_-18px_rgba(0,0,0,0.45)]"
                  : "border border-slate-100 shadow-[0_10px_30px_-12px_rgba(11,42,111,0.22)] hover:shadow-[0_18px_40px_-14px_rgba(11,42,111,0.32)]"
              }`}
            >
              <div className="relative min-h-[220px] overflow-hidden rounded-2xl bg-slate-200">
                <Image
                  src={item.image}
                  alt={item.imageAlt}
                  fill
                  sizes="(min-width:1024px) 280px, (min-width:640px) 45vw, 90vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              <div className="flex flex-col py-2 pr-2">
                <h3 className="text-xl font-bold leading-tight">
                  <span className="text-navy">{item.title}</span>{" "}
                  <span className="text-orange">{item.titleHighlight}</span>
                </h3>

                <p className="mt-2.5 text-[13px] leading-relaxed text-slate-500">
                  {item.description}
                </p>

                <ul className="mt-4 space-y-2">
                  {item.points.map((point) => (
                    <li
                      key={point}
                      className="flex items-center gap-2.5 text-[13px] font-medium text-slate-700"
                    >
                      <span className="flex h-[18px] w-[18px] shrink-0 items-center justify-center rounded-full bg-orange text-white">
                        <Icon name={services.checkIcon} size={9} />
                      </span>
                      {point}
                    </li>
                  ))}
                </ul>

                <div className="mt-auto pt-5">
                  <Link
                    href={item.button.href}
                    className={`group/btn inline-flex items-center gap-2.5 rounded-full px-5 py-2.5 ${dark ? "bg-brand" : "bg-navy"} text-[13px] font-semibold text-white transition-colors duration-300 hover:bg-orange`}
                  >
                    {item.button.label}
                    <Icon
                      name={services.buttonIcon}
                      size={11}
                      className="transition-transform duration-300 group-hover/btn:translate-x-1"
                    />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}

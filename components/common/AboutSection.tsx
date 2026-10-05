import Image from "next/image";
import Link from "next/link";
import data from "@/data/duracare.json";
import Icon from "@/components/common/Icon";
import Container from "@/components/common/Container";

const { about } = data;

export default function AboutSection() {
  return (
    <section className="bg-white py-16 lg:py-24">
      <Container className="grid items-center gap-12 lg:grid-cols-2 lg:gap-14">
        <div className="relative mx-auto aspect-[10/9] w-full max-w-[600px]">
          <div className="absolute right-0 top-0 h-full w-[82%] overflow-hidden rounded-[28px] bg-slate-200">
            <Image
              src={about.images.main}
              alt={about.images.mainAlt}
              fill
              sizes="(min-width:1024px) 500px, 85vw"
              className="object-cover transition-transform duration-700 hover:scale-105"
            />
          </div>

          <div className="absolute bottom-[8%] left-0 aspect-square w-[44%] overflow-hidden rounded-[22px] border-[6px] border-white bg-slate-200 shadow-[0_18px_40px_-10px_rgba(11,42,111,0.35)]">
            <Image
              src={about.images.small}
              alt={about.images.smallAlt}
              fill
              sizes="(min-width:1024px) 270px, 45vw"
              className="object-cover transition-transform duration-700 hover:scale-110"
            />
          </div>
        </div>

        <div>
          <p className="text-[15px] font-semibold text-navy">{about.eyebrow}</p>

          <h2 className="mt-3 text-[30px] font-bold leading-[1.15] sm:text-4xl lg:text-[44px]">
            <span className="block text-navy">{about.title}</span>
            <span className="block text-orange">{about.titleHighlight}</span>
          </h2>

          <p className="mt-5 text-[15px] leading-relaxed text-slate-500">
            {about.description}
          </p>

          <div className="mt-8 grid gap-7 sm:grid-cols-[0.8fr_1fr]">
            <div className="group rounded-2xl bg-white p-3 shadow-[0_10px_30px_-10px_rgba(11,42,111,0.25)] transition-shadow duration-300 hover:shadow-[0_18px_40px_-12px_rgba(255,106,19,0.45)]">
              <div className="relative aspect-[16/10] overflow-hidden rounded-xl bg-slate-200">
                <Image
                  src={about.images.card}
                  alt={about.images.cardAlt}
                  fill
                  sizes="(min-width:1024px) 240px, 80vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="px-1 pb-1 pt-3">
                <div className="text-[40px] font-extrabold leading-none text-navy transition-colors duration-300 group-hover:text-orange">
                  {about.experience.value}
                </div>
                <p className="mt-2 text-[13px] leading-snug text-slate-500">
                  {about.experience.label}
                </p>
              </div>
            </div>

            <div className="flex flex-col justify-center">
              <p className="text-[15px] leading-snug text-slate-700">
                {about.commitment}
              </p>

              <ul className="mt-5 space-y-3.5">
                {about.points.map((p) => (
                  <li key={p} className="group/item flex items-center gap-3">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-orange text-white transition-transform duration-300 group-hover/item:scale-110">
                      <Icon name={about.checkIcon} size={11} />
                    </span>
                    <span className="text-sm text-slate-600 transition-colors duration-300 group-hover/item:text-orange">
                      {p}
                    </span>
                  </li>
                ))}
              </ul>

              <Link
                href={about.button.href}
                className="group/btn mt-7 inline-flex w-fit items-center gap-3 rounded-full bg-orange px-7 py-3.5 text-sm font-semibold text-white shadow-[0_10px_24px_-8px_rgba(255,106,19,0.6)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-navy"
              >
                {about.button.label}
                <Icon
                  name={about.button.icon}
                  size={13}
                  className="transition-transform duration-300 group-hover/btn:translate-x-1"
                />
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

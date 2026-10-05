"use client";

import { useEffect, useRef, useState } from "react";
import { site, type AchievementsData, type SectionProps } from "@/data";
import Icon from "@/components/common/Icon";
import SectionHeading from "@/components/common/SectionHeading";
import Container from "@/components/common/Container";

function CountUp({ value, duration = 2000 }: { value: string; duration?: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const match = value.match(/^(\D*)([\d,]+(?:\.\d+)?)(.*)$/);
  const prefix = match?.[1] ?? "";
  const target = match ? Number(match[2].replace(/,/g, "")) : 0;
  const suffix = match?.[3] ?? "";
  const useCommas = match?.[2].includes(",") ?? false;
  const isNumeric = match !== null;
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el || !isNumeric) return;

    const total = window.matchMedia("(prefers-reduced-motion: reduce)").matches ? 0 : duration;
    let frame = 0;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.disconnect();
        const start = performance.now();
        const tick = (now: number) => {
          const progress = total ? Math.min((now - start) / total, 1) : 1;
          const eased = 1 - Math.pow(1 - progress, 3);
          setCurrent(Math.round(target * eased));
          if (progress < 1) frame = requestAnimationFrame(tick);
        };
        frame = requestAnimationFrame(tick);
      },
      { threshold: 0.4 }
    );
    observer.observe(el);

    return () => {
      observer.disconnect();
      cancelAnimationFrame(frame);
    };
  }, [target, duration, isNumeric]);

  if (!isNumeric) return <span>{value}</span>;

  return (
    <span ref={ref} aria-label={value}>
      {prefix}
      {useCommas ? current.toLocaleString("en-US") : current}
      {suffix}
    </span>
  );
}

export default function Achievements({ data, className = "" }: SectionProps<AchievementsData> = {}) {
  const achievements = data || site.achievements;
  const [active, setActive] = useState(achievements.defaultActive);

  return (
    <section className={`bg-white py-16 lg:py-20 ${className}`}>
      <Container>
        <SectionHeading
          badge={achievements.badge}
          heading={achievements.heading}
          description={achievements.description}
        />

        <div
          className="mt-12 grid gap-x-6 gap-y-8 sm:grid-cols-2 lg:grid-cols-4"
          onMouseLeave={() => setActive(achievements.defaultActive)}
        >
          {achievements.list.map((s, i) => {
            const isActive = active === i;
            return (
              <div
                key={s.label}
                tabIndex={0}
                onMouseEnter={() => setActive(i)}
                onFocus={() => setActive(i)}
                className="relative flex h-[244px] cursor-pointer items-end outline-none"
              >
                <div
                  className={`flex w-full flex-col items-center justify-end rounded-xl pb-8 text-center transition-all duration-300 ${
                    isActive
                      ? "h-[204px] bg-orange text-white shadow-[0_18px_40px_-12px_rgba(255,106,19,0.55)]"
                      : "h-[186px] bg-white text-navy shadow-[0_6px_22px_-6px_rgba(11,42,111,0.18)]"
                  }`}
                >
                  <div className="text-[40px] font-extrabold leading-none tracking-tight tabular-nums">
                    <CountUp value={s.value} />
                  </div>
                  <div
                    className={`mt-3 text-base font-medium ${
                      isActive ? "text-white" : "text-slate-600"
                    }`}
                  >
                    {s.label}
                  </div>
                </div>

                <div className="pointer-events-none absolute left-1/2 top-[12px] -translate-x-1/2">
                  <div className="absolute left-1/2 top-1/2 h-[128px] w-[128px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white" />

                  <div
                    className={`relative flex h-[112px] w-[112px] items-center justify-center rounded-full bg-white transition-shadow duration-300 ${
                      isActive ? "ring-[1.5px] ring-orange" : ""
                    }`}
                  >
                    <span className="flex h-[80px] w-[80px] items-center justify-center rounded-full bg-[#EEF3FF] text-navy">
                      <Icon name={s.icon} size={36} />
                    </span>

                    <svg viewBox="0 0 112 112" fill="none" className="absolute inset-0 h-full w-full">
                      <path
                        d="M 109.4 64 A 54 54 0 0 1 2.6 64"
                        stroke={isActive ? "#ffffff" : s.arcColor}
                        strokeWidth="3.5"
                        strokeLinecap="round"
                        style={{ transition: "stroke 300ms" }}
                      />
                    </svg>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}

"use client";

import { useState } from "react";
import { site, type FaqData, type SectionProps } from "@/data";
import Icon from "@/components/common/Icon";

export default function FaqAccordion({ data, className = "" }: SectionProps<FaqData> = {}) {
  const faq = data || site.faq;
  const [open, setOpen] = useState<number | null>(faq.defaultOpen);

  return (
    <div className={`space-y-4 ${className}`}>
      {faq.list.map((item, i) => {
        const isOpen = open === i;
        return (
          <div key={item.question} className="rounded-xl bg-soft">
            <button
              type="button"
              id={`faq-q-${i}`}
              aria-expanded={isOpen}
              aria-controls={`faq-a-${i}`}
              onClick={() => setOpen(isOpen ? null : i)}
              className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left sm:px-7 sm:py-6"
            >
              <span
                className={`text-base font-semibold text-navy transition-colors sm:text-lg lg:text-xl ${
                  isOpen ? "" : "hover:text-orange"
                }`}
              >
                {item.question}
              </span>
              <Icon
                name={faq.toggleIcon}
                size={16}
                className={`shrink-0 text-navy transition-transform duration-300 ${
                  isOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            <div
              id={`faq-a-${i}`}
              role="region"
              aria-labelledby={`faq-q-${i}`}
              className={`grid transition-[grid-template-rows] duration-300 ${
                isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
              }`}
            >
              <div className="overflow-hidden">
                <div className="mx-5 border-t border-slate-200 pb-6 pt-4 text-[15px] leading-relaxed text-slate-500 sm:mx-7 sm:text-base lg:text-[17px]">
                  {item.answer}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

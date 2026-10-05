"use client";

import { useState } from "react";
import { site, type EnquiryFormData, type SectionProps } from "@/data";
import Icon from "@/components/common/Icon";

const inputClass =
  "w-full rounded-xl border border-slate-200 bg-soft px-4 py-3.5 text-[15px] text-navy outline-none transition placeholder:text-slate-400 focus:border-orange focus:bg-white focus:ring-4 focus:ring-orange/15";

export default function EnquiryForm({ data, className = "" }: SectionProps<EnquiryFormData> = {}) {
  const { fields, submit, submitIcon, success } = data || site.contactPage.form;
  const { labels } = site;
  const [sent, setSent] = useState(false);

  if (sent) {
    return (
      <div className={`flex flex-col items-center rounded-2xl bg-soft px-6 py-14 text-center ${className}`}>
        <span className="flex h-20 w-20 items-center justify-center rounded-full bg-orange/10 text-orange">
          <Icon name={success.icon} size={40} />
        </span>
        <h3 className="mt-5 text-2xl font-bold text-navy">{success.title}</h3>
        <p className="mt-2 max-w-md text-[15px] leading-relaxed text-slate-500">{success.text}</p>
        <button
          type="button"
          onClick={() => setSent(false)}
          className="mt-7 rounded-full bg-navy px-7 py-3 text-sm font-semibold text-white transition-colors hover:bg-orange"
        >
          {success.button}
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setSent(true);
      }}
      className={`grid gap-5 sm:grid-cols-2 ${className}`}
    >
      {fields.map((f) => {
        const id = `field-${f.name}`;
        return (
          <div key={f.name} className={f.full ? "sm:col-span-2" : ""}>
            <label htmlFor={id} className="mb-2 block text-sm font-semibold text-navy">
              {f.label}
              {f.required && <span className="text-orange"> {labels.requiredMark}</span>}
            </label>

            {f.type === "textarea" ? (
              <textarea
                id={id}
                name={f.name}
                rows={5}
                required={f.required}
                placeholder={f.placeholder}
                className={`${inputClass} resize-none`}
              />
            ) : f.type === "select" ? (
              <select
                id={id}
                name={f.name}
                required={f.required}
                defaultValue=""
                className={`${inputClass} cursor-pointer`}
              >
                <option value="" disabled>
                  {f.placeholder}
                </option>
                {("options" in f && f.options ? f.options : []).map((o) => (
                  <option key={o} value={o}>
                    {o}
                  </option>
                ))}
              </select>
            ) : (
              <input
                id={id}
                name={f.name}
                type={f.type}
                required={f.required}
                placeholder={f.placeholder}
                min={f.type === "number" ? 0 : undefined}
                className={inputClass}
              />
            )}
          </div>
        );
      })}

      <div className="sm:col-span-2">
        <button
          type="submit"
          className="group inline-flex items-center gap-3 rounded-full bg-orange py-2 pl-8 pr-2 text-base font-semibold text-white shadow-[0_10px_24px_-8px_rgba(255,106,19,0.6)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-navy"
        >
          {submit}
          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-orange transition-colors group-hover:text-navy">
            <Icon
              name={submitIcon}
              size={15}
              className="transition-transform duration-300 group-hover:translate-x-0.5"
            />
          </span>
        </button>
      </div>
    </form>
  );
}

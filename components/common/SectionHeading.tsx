import type { HeadingData } from "@/data";

type SectionHeadingProps = {
  badge?: string;
  heading: HeadingData;
  description: string;
  dark?: boolean;
  className?: string;
};

export default function SectionHeading({
  badge,
  heading,
  description,
  dark = false,
  className = "",
}: SectionHeadingProps) {
  return (
    <div className={`mx-auto max-w-[760px] text-center ${className}`}>
      {badge ? (
        <div className="flex items-center justify-center gap-3">
          <span className="h-[2px] w-8 bg-orange" />
          <span
            className={`text-xs font-semibold uppercase tracking-[0.18em] sm:text-[13px] ${
              dark ? "text-white" : "text-navy"
            }`}
          >
            {badge}
          </span>
          <span className="h-[2px] w-8 bg-orange" />
        </div>
      ) : (
        <span className="mx-auto block h-[3px] w-12 rounded-full bg-orange" />
      )}

      <h2
        className={`mt-3 text-[28px] font-bold leading-tight sm:text-4xl lg:text-[42px] ${
          dark ? "text-white" : "text-navy"
        }`}
      >
        {heading.main} <span className="text-orange">{heading.highlight}</span>
        {heading.end && <> {heading.end}</>}
      </h2>

      <p
        className={`mx-auto mt-4 max-w-[640px] text-sm leading-relaxed sm:text-[15px] ${
          dark ? "text-white/80" : "text-slate-500"
        }`}
      >
        {description}
      </p>
    </div>
  );
}

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  highlight: string;
  titleEnd?: string;
  description: string;
  dark?: boolean;
};

export default function SectionHeading({
  eyebrow,
  title,
  highlight,
  titleEnd,
  description,
  dark = false,
}: SectionHeadingProps) {
  return (
    <div className="mx-auto max-w-[760px] text-center">
      {eyebrow ? (
        <div className="flex items-center justify-center gap-3">
          <span className="h-[2px] w-8 bg-orange" />
          <span
            className={`text-xs font-semibold uppercase tracking-[0.18em] sm:text-[13px] ${
              dark ? "text-white" : "text-navy"
            }`}
          >
            {eyebrow}
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
        {title} <span className="text-orange">{highlight}</span>
        {titleEnd && <> {titleEnd}</>}
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

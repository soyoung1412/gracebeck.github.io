export function SectionHeading({ eyebrow, title, copy, align = "left" }) {
  return (
    <div className={`max-w-2xl ${align === "center" ? "mx-auto text-center" : ""}`}>
      <p className="font-display text-sm font-bold uppercase tracking-[0.32em] text-sky-700/80">
        {eyebrow}
      </p>
      <h2 className="font-display mt-3 text-3xl leading-tight text-slate-900 sm:text-4xl lg:text-[2.75rem]">
        {title}
      </h2>
      <p className="mt-4 text-base leading-8 text-slate-600 sm:text-lg">{copy}</p>
    </div>
  );
}

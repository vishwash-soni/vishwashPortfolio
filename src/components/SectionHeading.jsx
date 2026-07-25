// ---------------------------------------------------------------
// SectionHeading — reusable heading used at the top of every section
// for a consistent, premium look (eyebrow label + title + optional subtitle).
// ---------------------------------------------------------------
function SectionHeading({ eyebrow, title, subtitle }) {
  return (
    <div className="text-center max-w-2xl mx-auto mb-14">
      {eyebrow && (
        <span className="inline-block text-xs font-semibold tracking-[0.2em] uppercase text-[#b9b7b7] mb-3">
          {eyebrow}
        </span>
      )}
      <h2 className="text-3xl sm:text-4xl font-semibold text-white tracking-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-zinc-400 leading-relaxed">{subtitle}</p>
      )}
    </div>
  );
}

export default SectionHeading;

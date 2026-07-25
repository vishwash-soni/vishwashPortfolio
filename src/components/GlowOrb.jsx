// ---------------------------------------------------------------
// GlowOrb — a simple "React Bits"-style ambient background effect.
// Pure CSS gradients + Tailwind animation, no external libraries.
// Renders two soft blurred blobs that slowly float, used behind
// key sections for a premium, atmospheric feel.
// ---------------------------------------------------------------
function GlowOrb({ className = "" }) {
  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}
    >
      {/* Cyan blob */}
      <div className="absolute -top-24 left-1/4 h-72 w-72 rounded-full bg-[#333535] blur-[100px] animate-float" />
      {/* Violet blob */}
      <div
        className="absolute top-1/3 right-1/4 h-80 w-80 rounded-full bg-[#272828] blur-[110px] animate-float"
        style={{ animationDelay: "2s" }}
      />
    </div>
  );
}

export default GlowOrb;

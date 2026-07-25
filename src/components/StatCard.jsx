// ---------------------------------------------------------------
// StatCard — small glass card showing a single headline stat.
// Used for LeetCode stats and similar highlight numbers.
// ---------------------------------------------------------------
function StatCard({ label, value, sub }) {
  return (
    <div className="glass-card p-6 text-center hover:border-[#f3efef] transition-all duration-300">
      <p className="text-3xl sm:text-4xl font-display font-semibold gradient-text">
        {value}
      </p>
      <p className="mt-2 text-sm font-medium text-zinc-200">{label}</p>
      {sub && <p className="mt-1 text-xs text-zinc-500">{sub}</p>}
    </div>
  );
}

export default StatCard;

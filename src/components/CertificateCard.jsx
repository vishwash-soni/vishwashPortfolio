import { Award } from "lucide-react";

// A single certificate card: image, name, and issuing organization.
function CertificateCard({ certificate }) {
  const { title, issuer, image, date } = certificate;

  return (
    <div className="glass-card overflow-hidden group hover:border-[#f6f6f6] transition-all duration-300">
      <div className="aspect-[4/3] overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
      </div>
      <div className="p-5">
        <div className="flex items-start gap-2">
          <Award size={18} className="text-violet-300 mt-0.5 shrink-0" />
          <div>
            <h3 className="text-sm font-semibold text-white leading-snug">
              {title}
            </h3>
            <p className="mt-1 text-xs text-zinc-400">
              {issuer} · {date}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CertificateCard;

import SectionHeading from "./SectionHeading";
import CertificateCard from "./CertificateCard";
import certificates from "../data/certificates";

// Certificates section - maps over the certificates data array.
// To add a new certificate, add an entry in src/data/certificates.js
function Certificates() {
  return (
    <section id="certificates" className="relative py-24 bg-ink-900/40">
      <div className="section-container">
        <SectionHeading
          eyebrow="Certificates"
          title="Courses & Certifications"
          subtitle="Credentials from courses and programs I've completed along the way."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificates.map((certificate) => (
            <CertificateCard key={certificate.id} certificate={certificate} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Certificates;

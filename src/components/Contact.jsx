import { Github, Linkedin, Mail, MapPin, Code2 } from "lucide-react";
import SectionHeading from "./SectionHeading";
import ContactForm from "./ContactForm";
import profile from "../data/profile";

// Contact info list shown next to the form
const contactItems = [
  { icon: Mail, label: "Email", value: profile.email, href: `mailto:${profile.email}` },
  { icon: Github, label: "GitHub", value: "View profile", href: profile.socials.github },
  { icon: Linkedin, label: "LinkedIn", value: "Connect with me", href: profile.socials.linkedin },
  { icon: Code2, label: "LeetCode", value: "View profile", href: profile.socials.leetcode },
];

function Contact() {
  return (
    <section id="contact" className="relative py-24">
      <div className="section-container">
        <SectionHeading
          eyebrow="Contact"
          title="Let's Work Together"
          subtitle="Have an opportunity or a project in mind? I'd love to hear from you."
        />

        <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-8">
          {/* Contact details */}
          <div className="space-y-4">
            <div className="glass-card p-6 flex items-start gap-3">
              <MapPin size={20} className="text-[#fdfdfd] mt-0.5 shrink-0" />
              <div>
                <p className="text-sm font-medium text-white">{profile.location}</p>
                <p className="text-xs text-zinc-500 mt-0.5">{profile.openToRelocate}</p>
              </div>
            </div>

            {contactItems.map(({ icon: Icon, label, value, href }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                className="glass-card p-6 flex items-center gap-3 hover:border-[#ede5e5] transition-all duration-300 group"
              >
                <div className="p-2.5 rounded-lg bg-white/[0.04] text-[#fbf6f6] group-hover:bg-[#302b2b] transition-colors duration-300">
                  <Icon size={18} />
                </div>
                <div>
                  <p className="text-xs text-zinc-500">{label}</p>
                  <p className="text-sm font-medium text-white">{value}</p>
                </div>
              </a>
            ))}
          </div>

          {/* Contact form */}
          <ContactForm />
        </div>
      </div>
    </section>
  );
}

export default Contact;

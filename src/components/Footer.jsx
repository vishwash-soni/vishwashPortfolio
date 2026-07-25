import { Github, Linkedin, Mail, Code2 } from "lucide-react";
import profile from "../data/profile";

const socialLinks = [
  { icon: Github, href: profile.socials.github, label: "GitHub" },
  { icon: Linkedin, href: profile.socials.linkedin, label: "LinkedIn" },
  { icon: Code2, href: profile.socials.leetcode, label: "LeetCode" },
  { icon: Mail, href: `mailto:${profile.email}`, label: "Email" },
];

// Minimal footer: social icons + copyright
function Footer() {
  return (
    <footer className="border-t border-white/[0.06] py-10">
      <div className="section-container flex flex-col sm:flex-row items-center justify-between gap-6">
        <p className="text-sm text-zinc-500">
          © {new Date().getFullYear()} {profile.name}. All rights reserved.
        </p>

        <div className="flex items-center gap-4">
          {socialLinks.map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel="noopener noreferrer"
              aria-label={label}
              className="p-2 rounded-full text-zinc-400 hover:text-white hover:bg-white/5 transition-all duration-200"
            >
              <Icon size={18} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}

export default Footer;

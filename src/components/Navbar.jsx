import { useState } from "react";
import { Menu, X, Download } from "lucide-react";
import profile from "../data/profile";

// Nav links used both in desktop and mobile menu
const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Achievements", href: "#achievements" },
  { label: "Projects", href: "#projects" },
  { label: "Certificates", href: "#certificates" },
  { label: "Contact", href: "#contact" },
];

function Navbar() {
  // Tracks whether the mobile menu is open
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/[0.06] bg-ink-950/70 backdrop-blur-xl">
      <nav className="section-container flex items-center justify-between h-16">
        {/* Logo */}
        <a href="#home" className="font-display text-lg font-semibold tracking-tight text-white">
          VS<span className="gradient-text">.</span>
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-8 text-sm text-zinc-300">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="hover:text-white transition-colors duration-200"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Resume download button (desktop) */}
        <a
          href={profile.resumeUrl}
          download
          className="hidden md:inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm border border-white/15 text-zinc-200 hover:bg-white/5 hover:border-white/30 transition-all duration-300"
        >
          <Download size={16} />
          Resume
        </a>

        {/* Mobile menu toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-zinc-200 p-2"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile dropdown menu */}
      {isOpen && (
        <div className="md:hidden border-t border-white/[0.06] bg-ink-950/95 backdrop-blur-xl">
          <ul className="section-container flex flex-col py-4 gap-4 text-sm text-zinc-300">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block hover:text-white transition-colors duration-200"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href={profile.resumeUrl}
                download
                className="inline-flex items-center gap-2 text-white"
              >
                <Download size={16} />
                Download Resume
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}

export default Navbar;

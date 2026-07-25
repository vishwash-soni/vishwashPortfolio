import { ArrowRight, Mail } from "lucide-react";
import profile from "../data/profile";
import GlowOrb from "./GlowOrb";
import IconCloud from "./IconCloud";
import {skillIcons} from "../data/achievements"


// Hero section - the first thing visitors see.
// Name, role, short intro, profile image, and two CTAs.
function Hero() {
  return (
    <section
      id="home"
      className="relative flex items-center min-h-screen pt-16 overflow-hidden"
    >
      {/* Ambient background: soft grid + glow blobs */}
      <div className="absolute inset-0 bg-grid-pattern bg-grid [mask-image:radial-gradient(ellipse_60%_60%_at_50%_0%,black,transparent)]" />
      <GlowOrb />

      <div className="section-container relative grid md:grid-cols-[1.15fr_0.85fr] gap-12 items-center py-20">
        {/* Left: text content */}
        <div>
          <p className="text-[#2f2f2f3] font-medium tracking-wide mb-4">
            Hi, I'm
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-white leading-[1.1]">
            <span className="gradient-text">{profile.name}</span>
          </h1>
          <p className="mt-4 text-lg sm:text-xl text-zinc-300 font-medium">
            {profile.title}
          </p>
          <p className="mt-6 text-zinc-400 leading-relaxed max-w-xl">
            {profile.tagline}
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a href="#projects" className="btn-primary">
              View Projects
              <ArrowRight size={18} />
            </a>
            <a href="#contact" className="btn-secondary">
              Contact Me
              <Mail size={18} />
            </a>
          </div>
        </div>

        {/* Right: profile image with glow ring */}
        <div className="relative mx-auto md:mx-0">
          <div className="absolute -inset-4 rounded-[2rem] blur-2xl" />
          <div className="relative -top-0 left-2 w-60 h-80 sm:w-80 sm:h-60 sm:-top-10 sm:left-20 rounded-[2rem]">
            <div><IconCloud icons={skillIcons} size={350} /></div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;

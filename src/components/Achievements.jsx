import { Code2, Layers, Briefcase } from "lucide-react";
import SectionHeading from "./SectionHeading";
import StatCard from "./StatCard";
import { stats, skills, experience, techStack } from "../data/achievements";

// Achievements section: LeetCode stats, skills, experience, tech stack
function Achievements() {
  return (
    <section id="achievements" className="relative py-24 bg-ink-900/40">
      <div className="section-container">
        <SectionHeading
          eyebrow="Achievements"
          title="Numbers & Skills"
          subtitle="A quick snapshot of my competitive programming stats, core skills, and experience."
        />

        {/* LeetCode / headline stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 mb-16">
          {stats.map((stat) => (
            <StatCard key={stat.label} {...stat} />
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Skills */}
          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 rounded-lg bg-[#111] text-[#eeebeb]">
                <Layers size={20} />
              </div>
              <h3 className="text-lg font-semibold text-white">Skills</h3>
            </div>
            <div className="space-y-5">
              {skills.map((group) => (
                <div key={group.category}>
                  <p className="text-xs uppercase tracking-wider text-zinc-500 mb-2">
                    {group.category}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <span
                        key={item}
                        className="text-xs px-3 py-1.5 rounded-full bg-white/[0.04] border border-white/[0.08] text-zinc-300"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Experience + tech stack */}
          <div className="flex flex-col gap-8">
            <div className="glass-card p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 rounded-lg bg-[#111] text-[#eeebeb]">
                  <Briefcase size={20} />
                </div>
                <h3 className="text-lg font-semibold text-white">Experience</h3>
              </div>
              <div className="space-y-6">
                {experience.map((job) => (
                  <div key={job.role} className="border-l-2 border-[#5d5656f6] pl-4">
                    <p className="font-medium text-white">{job.role}</p>
                    <p className="text-sm text-[#faf8f8a6]">
                      {job.company} · {job.period}
                    </p>
                    <p className="mt-2 text-sm text-zinc-400 leading-relaxed">
                      {job.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="glass-card p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 rounded-lg bg-[#111] text-[#eeebeb]">
                  <Code2 size={20} />
                </div>
                <h3 className="text-lg font-semibold text-white">Tech Stack</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {techStack.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs px-3 py-1.5 rounded-full bg-white/[0.04] border border-white/[0.08] text-zinc-300 hover:border-cyan-400/40 hover:text-white transition-colors duration-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Achievements;

import { Github, ExternalLink } from "lucide-react";

// A single responsive project card: image, description, tech stack, and links.
function ProjectCard({ project }) {
  const { title, description, image, techStack, githubUrl, liveUrl } = project;

  return (
    <div className="glass-card overflow-hidden group hover:border-[#f2efef93] transition-all duration-300">
      {/* Project image */}
      <div className="aspect-video overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
      </div>

      <div className="p-6">
        <h3 className="text-lg font-semibold text-white">{title}</h3>
        <p className="mt-2 text-sm text-zinc-400 leading-relaxed">
          {description}
        </p>

        {/* Tech stack tags */}
        <div className="mt-4 flex flex-wrap gap-2">
          {techStack.map((tech) => (
            <span
              key={tech}
              className="text-xs px-2.5 py-1 rounded-full bg-white/[0.04] border border-white/[0.08] text-zinc-400"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Action buttons */}
        <div className="mt-6 flex gap-3">
          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 inline-flex items-center justify-center gap-2 text-sm px-4 py-2.5 rounded-full border border-white/15 text-zinc-200 hover:bg-white/5 hover:border-white/30 transition-all duration-300"
          >
            <Github size={16} />
            GitHub
          </a>
          <a
            href={liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 inline-flex items-center justify-center gap-2 text-sm px-4 py-2.5 rounded-full bg-gradient-to-r from-[#c4c2c2] to-[#393939d5] text-ink-950 font-semibold hover:scale-[1.02] transition-transform duration-300"
          >
            <ExternalLink size={16} />
            Live Demo
          </a>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;

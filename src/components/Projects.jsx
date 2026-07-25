import SectionHeading from "./SectionHeading";
import ProjectCard from "./ProjectCard";
import projects from "../data/projects";

// Projects section - maps over the projects data array.
// To add a new project, just add an entry in src/data/projects.js
function Projects() {
  return (
    <section id="projects" className="relative py-24">
      <div className="section-container">
        <SectionHeading
          eyebrow="Projects"
          title="Things I've Built"
          subtitle="A selection of projects showcasing my work across React, Firebase, Supabase, and AI-powered tools."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;

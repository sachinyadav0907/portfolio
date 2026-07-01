import Section from "../../components/layout/Section";
import SectionTitle from "../../components/ui/SectionTitle";
import ProjectCard from "../../components/ui/ProjectCard";

import projects from "../../data/projects";

const Projects = () => {
  return (
    <Section id="projects">
      <SectionTitle
        subtitle="Featured Work"
        title="Projects"
        description="A selection of projects showcasing my experience in building full-stack applications, secure backend APIs, and scalable software solutions."
      />

      <div className="space-y-16 lg:space-y-20">
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
          />
        ))}
      </div>
    </Section>
  );
};

export default Projects;
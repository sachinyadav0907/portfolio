import { motion } from "framer-motion";
import { FaCheckCircle } from "react-icons/fa";

import ProjectButton from "./ProjectButton";
import TechBadge from "./TechBadge";

const ProjectCard = ({ project }) => {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5 }}
      className="
        overflow-hidden
        rounded-3xl
        border
        border-border
        bg-surface
        transition-all
        duration-300
        hover:-translate-y-1
        hover:border-primary/40
        hover:shadow-[0_0_40px_rgba(6,182,212,0.08)]
      "
    >
      {/* Image */}

      <div className="overflow-hidden bg-background p-3 sm:p-5">
        <img
          src={project.image}
          alt={project.title}
          className="
            w-full
            rounded-2xl
            transition-transform
            duration-500
            hover:scale-[1.02]
          "
        />
      </div>

      {/* Content */}

      <div className="p-6 sm:p-8 lg:p-10">
        {project.featured && (
          <span className="inline-flex rounded-full bg-yellow-500/10 px-3 py-1 text-xs font-medium text-yellow-400 sm:px-4 sm:text-sm">
            🚧 Deployment in Progress
          </span>
        )}

        <p className="mt-5 text-xs font-medium uppercase tracking-[0.2em] text-primary sm:text-sm">
          {project.subtitle}
        </p>

        <h3 className="mt-2 text-2xl font-bold sm:text-3xl lg:text-4xl">
          {project.title}
        </h3>

        <p className="mt-5 max-w-3xl text-sm leading-7 text-muted sm:mt-6 sm:text-base sm:leading-8">
          {project.description}
        </p>

        {/* Highlights */}

        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {project.highlights.map((item) => (
            <div
              key={item}
              className="flex items-start gap-3"
            >
              <FaCheckCircle className="mt-1 shrink-0 text-primary" />

              <span className="text-sm leading-7 sm:text-base">
                {item}
              </span>
            </div>
          ))}
        </div>

        {/* Tech Stack */}

        <div className="mt-8 flex flex-wrap gap-2 sm:gap-3">
          {project.techStack.map((tech) => (
            <TechBadge key={tech}>{tech}</TechBadge>
          ))}
        </div>

        {/* Buttons */}

        <div className="mt-8 flex flex-wrap gap-3 sm:mt-10 sm:gap-4">
          {project.buttons.map((button) => (
            <ProjectButton
              key={button.label}
              {...button}
            />
          ))}
        </div>
      </div>
    </motion.article>
  );
};

export default ProjectCard;
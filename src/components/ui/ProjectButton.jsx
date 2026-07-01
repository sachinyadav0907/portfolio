import {
  FaBookOpen,
  FaExternalLinkAlt,
  FaGithub,
  FaPlay,
} from "react-icons/fa";

const icons = {
  github: FaGithub,
  live: FaExternalLinkAlt,
  video: FaPlay,
  swagger: FaBookOpen,
};

const variants = {
  github:
    "border border-border hover:border-primary hover:text-primary",

  live:
    "bg-primary text-background hover:opacity-90",

  video:
    "border border-border hover:border-primary hover:text-primary",

  swagger:
    "border border-border hover:border-primary hover:text-primary",
};

const ProjectButton = ({ type, label, url }) => {
  const Icon = icons[type];

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className={`
        inline-flex
        items-center
        gap-2
        rounded-xl
        px-4
        py-2.5
        text-sm
        font-medium
        transition-all
        duration-300
        hover:-translate-y-0.5
        focus-visible:outline-none
        focus-visible:ring-2
        focus-visible:ring-primary
        sm:px-5
        sm:py-3
        ${variants[type]}
      `}
    >
      <Icon className="text-base" />
      {label}
    </a>
  );
};

export default ProjectButton;
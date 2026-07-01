const TechBadge = ({ children }) => {
  return (
    <span
      className="
        rounded-full
        border
        border-primary/20
        bg-primary/10
        px-3
        py-1
        text-xs
        font-medium
        text-primary
        transition-all
        duration-300
        hover:-translate-y-0.5
        hover:border-primary/40
        hover:bg-primary/15
        sm:text-sm
      "
    >
      {children}
    </span>
  );
};

export default TechBadge;
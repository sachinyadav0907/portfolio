const SkillCard = ({ category, items }) => {
  return (
    <div
      className="
        h-full
        rounded-3xl
        border
        border-border
        bg-surface
        p-6
        transition-all
        duration-300
        hover:-translate-y-1
        hover:border-primary/40
        hover:shadow-[0_0_30px_rgba(6,182,212,0.08)]
        sm:p-8
      "
    >
      <h3 className="mb-6 text-xl font-semibold sm:mb-8 sm:text-2xl">
        {category}
      </h3>

      <div className="space-y-4 sm:space-y-5">
        {items.map(({ name, icon: Icon, color }) => (
          <div
            key={name}
            className="group flex items-center gap-4"
          >
            <Icon
              className="text-xl transition-transform duration-300 group-hover:scale-110 sm:text-2xl"
              style={{ color }}
            />

            <span className="text-sm text-muted transition-colors duration-300 group-hover:text-white sm:text-base">
              {name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillCard;
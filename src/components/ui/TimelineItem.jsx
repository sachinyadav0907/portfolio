const TimelineItem = ({ item, last }) => {
  return (
    <div className="relative flex gap-4 sm:gap-6">
      {/* Timeline */}

      <div className="flex shrink-0 flex-col items-center">
        <div className="h-3.5 w-3.5 rounded-full bg-primary shadow-[0_0_10px_rgba(6,182,212,0.6)] sm:h-4 sm:w-4" />

        {!last && (
          <div className="mt-2 h-full w-px bg-border" />
        )}
      </div>

      {/* Content */}

      <div className="pb-10 sm:pb-12">
        <p className="text-xs font-semibold uppercase tracking-[0.15em] text-primary sm:text-sm">
          {item.year}
        </p>

        <h3 className="mt-2 text-xl font-semibold leading-tight sm:text-2xl">
          {item.title}
        </h3>

        <p className="mt-3 max-w-2xl text-sm leading-7 text-muted sm:mt-4 sm:text-base sm:leading-8">
          {item.description}
        </p>
      </div>
    </div>
  );
};

export default TimelineItem;
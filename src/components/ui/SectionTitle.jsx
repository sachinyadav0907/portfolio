const SectionTitle = ({ title, subtitle, description }) => {
  return (
    <div className="mx-auto mb-12 max-w-3xl text-center md:mb-16">
      {subtitle && (
        <p className="mb-2 text-xs font-semibold uppercase tracking-[0.25em] text-primary sm:text-sm">
          {subtitle}
        </p>
      )}

      <h2 className="text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
        {title}
      </h2>

      {description && (
        <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-muted sm:text-base md:mt-5 md:text-lg md:leading-8">
          {description}
        </p>
      )}
    </div>
  );
};

export default SectionTitle;
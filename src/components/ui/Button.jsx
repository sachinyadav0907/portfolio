const variants = {
  primary:
    "bg-primary text-background hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background",

  secondary:
    "border border-border bg-surface text-white hover:border-primary hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background",
};

const Button = ({
  children,
  href,
  variant = "primary",
  ...props
}) => {
  const classes = `
    inline-flex items-center justify-center
    rounded-xl
    px-5 py-3
    text-sm font-medium
    transition-all duration-300
    hover:-translate-y-0.5
    md:px-6
    ${variants[variant]}
  `;

  if (href) {
    return (
      <a href={href} className={classes} {...props}>
        {children}
      </a>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
};

export default Button;
const ContactCard = ({ title, value, link, icon: Icon }) => {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="
        flex
        items-center
        gap-4
        overflow-hidden
        rounded-2xl
        border
        border-border
        bg-surface
        p-4
        transition-all
        duration-300
        hover:-translate-y-1
        hover:border-primary/40
        hover:shadow-[0_0_25px_rgba(6,182,212,0.08)]
        sm:p-5
      "
    >
      <div className="rounded-xl bg-primary/10 p-3">
        <Icon className="text-lg text-primary sm:text-xl" />
      </div>

      <div className="min-w-0 flex-1">
        <p className="text-xs text-muted sm:text-sm">
          {title}
        </p>

        <p className="break-all text-sm font-medium sm:text-base">
          {value}
        </p>
      </div>
    </a>
  );
};

export default ContactCard;
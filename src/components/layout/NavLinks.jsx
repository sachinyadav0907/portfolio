import navigation from "../../data/Navigation";
import useActiveSection from "../../hooks/useActiveSection";

const NavLinks = ({ onClick }) => {
  const activeSection = useActiveSection();

  return (
    <>
      {navigation.map((item) => {
        const isActive = activeSection === item.href.slice(1);

        return (
          <a
            key={item.name}
            href={item.href}
            onClick={onClick}
            className={`
              relative
              py-3
              text-sm
              font-medium
              transition-all
              duration-300
              lg:py-0

              ${
                isActive
                  ? "text-primary"
                  : "text-muted hover:text-primary"
              }

              lg:after:absolute
              lg:after:-bottom-1
              lg:after:left-0
              lg:after:h-0.5
              lg:after:bg-primarynpm install @formspree/react
              lg:after:transition-all
              lg:after:duration-300

              ${
                isActive
                  ? "lg:after:w-full"
                  : "lg:after:w-0 hover:lg:after:w-full"
              }
            `}
          >
            {item.name}
          </a>
        );
      })}
    </>
  );
};

export default NavLinks;
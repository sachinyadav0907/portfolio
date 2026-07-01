import Container from "./Container";

const Section = ({ id, children, className = "" }) => {
  return (
    <section
      id={id}
      className={`py-16 sm:py-20 lg:py-24 ${className}`}
    >
      <Container>{children}</Container>
    </section>
  );
};

export default Section;
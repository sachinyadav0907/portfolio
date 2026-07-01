import Section from "../../components/layout/Section";
import SectionTitle from "../../components/ui/SectionTitle";

import ContactCard from "../../components/ui/ContactCard";
import ContactForm from "../../components/ui/ContactForm";

import contact from "../../data/contact";

const Contact = () => {
  return (
    <Section id="contact">
      <SectionTitle
        subtitle="Get In Touch"
        title="Let's Connect"
        description="I'm currently seeking full-time Software Engineer opportunities where I can contribute to building scalable web applications, solve real-world problems, and continue growing as a full-stack developer."
      />

      <div className="grid items-start gap-10 lg:grid-cols-2 lg:gap-14">
        {/* Left Section */}
        <div>
          <h3 className="text-xl font-semibold sm:text-2xl">
            Let's Build Something Great Together
          </h3>

          <div className="mt-4 h-1 w-20 rounded-full bg-primary" />

          <p className="mt-5 text-sm leading-7 text-muted sm:text-base sm:leading-8">
            Whether you have an exciting opportunity, a project idea, or simply
            want to connect, I'd love to hear from you. Feel free to reach out
            through any of the platforms below, and I'll get back to you as soon
            as possible.
          </p>

          <div className="mt-8 space-y-4 sm:space-y-5">
            {contact.map((item) => (
              <ContactCard
                key={item.title}
                {...item}
              />
            ))}
          </div>
        </div>

        {/* Right Section */}
        <ContactForm />
      </div>
    </Section>
  );
};

export default Contact;
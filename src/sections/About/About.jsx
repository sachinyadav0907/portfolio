import { motion } from "framer-motion";
import { FaCheckCircle } from "react-icons/fa";

import Section from "../../components/layout/Section";
import SectionTitle from "../../components/ui/SectionTitle";
import about from "../../data/about";

const About = () => {
  return (
    <Section id="about">
      <SectionTitle
        subtitle="Who I Am"
        title="About Me"
        description="A quick introduction to my background, interests, and the technologies I'm passionate about."
      />

      <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-12">
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
        >
          <p className="whitespace-pre-line text-sm leading-7 text-muted sm:text-base md:leading-8">
            {about.description}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="rounded-3xl border border-border bg-surface p-6 transition-all duration-300 hover:border-primary/30 hover:shadow-[0_0_30px_rgba(6,182,212,0.08)] sm:p-8"
        >
          <ul className="space-y-4 sm:space-y-5">
            {about.highlights.map((item) => (
              <li
                key={item}
                className="flex items-start gap-3"
              >
                <FaCheckCircle className="mt-1 shrink-0 text-primary" />

                <span className="text-sm leading-7 sm:text-base">
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </Section>
  );
};

export default About;
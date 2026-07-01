import { motion } from "framer-motion";

import Section from "../../components/layout/Section";
import SectionTitle from "../../components/ui/SectionTitle";
import SkillCard from "../../components/ui/SkillCard";

import skills from "../../data/skills";

const Skills = () => {
  return (
    <Section id="skills">
      <SectionTitle
        subtitle="My Tech Stack"
        title="Technical Skills"
        description="Technologies I use to build scalable, modern, and user-focused web applications."
      />

      <div className="grid gap-6 md:grid-cols-2 lg:gap-8">
        {skills.map((skill, index) => (
          <motion.div
            key={skill.category}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 0.45,
              delay: index * 0.08,
            }}
          >
            <SkillCard {...skill} />
          </motion.div>
        ))}
      </div>
    </Section>
  );
};

export default Skills;
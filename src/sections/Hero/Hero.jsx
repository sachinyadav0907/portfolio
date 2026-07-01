import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";

import Section from "../../components/layout/Section";
import Button from "../../components/ui/Button";

const Hero = () => {
  return (
    <Section
      id="hero"
      className="flex min-h-svh items-center"
    >
      <div className="max-w-3xl">
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-3 text-sm font-medium tracking-wide text-primary sm:text-base"
        >
          Hi, I'm
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.5 }}
          className="text-4xl font-bold leading-tight sm:text-5xl md:text-6xl lg:text-7xl"
        >
          Sachin Yadav
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="mt-4 text-xl font-semibold text-primary sm:text-2xl md:mt-6 md:text-3xl"
        >
          Full Stack MERN Developer
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="mt-5 max-w-2xl text-sm leading-7 text-muted sm:text-base md:mt-6 md:text-lg md:leading-8"
        >
          I build scalable, high-performance web applications with the MERN
          stack, focusing on clean architecture, backend development, and
          exceptional user experiences.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="mt-8 flex flex-wrap gap-3 sm:gap-4 md:mt-10"
        >
          <Button href="#projects">
            View Projects
          </Button>

          <Button
            href="/resume.pdf"
            variant="secondary"
            target="_blank"
          >
            Download Resume
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="mt-8 flex items-center gap-5 md:mt-10 md:gap-6"
        >
          <a
            href="https://github.com/sachinyadav0907"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-muted transition-all duration-300 hover:-translate-y-0.5 hover:text-primary"
          >
            <FaGithub className="text-xl sm:text-2xl" />
          </a>

          <a
            href="https://www.linkedin.com/in/sachinyadav090"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-muted transition-all duration-300 hover:-translate-y-0.5 hover:text-primary"
          >
            <FaLinkedin className="text-xl sm:text-2xl" />
          </a>

          <a
            href="mailto:ysachin8600@gmail.com"
            aria-label="Email"
            className="text-muted transition-all duration-300 hover:-translate-y-0.5 hover:text-primary"
          >
            <FaEnvelope className="text-xl sm:text-2xl" />
          </a>
        </motion.div>
      </div>
    </Section>
  );
};

export default Hero;
import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";

import Section from "../../components/layout/Section";
import Button from "../../components/ui/Button";
import profile from "../../assets/profile.webp";

const Hero = () => {
  return (
    <Section
  id="hero"
  className="flex min-h-svh items-center"
>
  <div className="grid w-full items-center gap-16 lg:grid-cols-2">
    {/* Left Content */}
    <div>
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
        className="mt-4 text-xl font-semibold text-primary sm:text-2xl md:text-3xl"
      >
        Full Stack MERN Developer
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className="mt-6 max-w-xl text-base leading-8 text-muted"
      >
        I build scalable, high-performance web applications using the MERN
        stack, specializing in backend architecture, REST APIs, and modern,
        responsive React applications with exceptional user experiences.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.5 }}
        className="mt-8 flex flex-wrap gap-4"
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
        className="mt-8 flex items-center gap-6"
      >
        <a
          href="https://github.com/sachinyadav0907"
          target="_blank"
          rel="noopener noreferrer"
          className="text-muted transition-all duration-300 hover:-translate-y-1 hover:text-primary"
        >
          <FaGithub className="text-2xl" />
        </a>

        <a
          href="https://www.linkedin.com/in/sachinyadav090"
          target="_blank"
          rel="noopener noreferrer"
          className="text-muted transition-all duration-300 hover:-translate-y-1 hover:text-primary"
        >
          <FaLinkedin className="text-2xl" />
        </a>

        <a
          href="mailto:ysachin8600@gmail.com"
          className="text-muted transition-all duration-300 hover:-translate-y-1 hover:text-primary"
        >
          <FaEnvelope className="text-2xl" />
        </a>
      </motion.div>
    </div>

    {/* Right Image */}
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.4, duration: 0.7 }}
      className="flex justify-center"
    >
      <div className="relative">
        {/* Glow */}
        <div className="absolute inset-0 rounded-full bg-primary/20 blur-3xl"></div>

        <img
          src={profile}
          alt="Sachin Yadav"
          className="relative h-72 w-72 rounded-full border-4 border-primary object-cover shadow-[0_0_40px_rgba(6,182,212,0.25)] transition duration-500 hover:scale-105 md:h-96 md:w-96"
        />
      </div>
    </motion.div>
  </div>
</Section>
  );
};

export default Hero;
import {
  FaArrowUp,
  FaEnvelope,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto max-w-7xl px-5 py-12 sm:px-6 md:py-16 lg:px-8">
        <div className="flex flex-col items-center text-center">
          <h2 className="text-2xl font-bold text-primary sm:text-3xl">
            Sachin Yadav
          </h2>

          <p className="mt-4 max-w-xl text-sm leading-7 text-muted sm:text-base md:leading-8">
            Building scalable, secure, and modern web applications with the
            MERN stack while continuously learning backend engineering and
            DevOps.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              href="https://github.com/sachinyadav0907"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="rounded-xl border border-border p-3 transition-all duration-300 hover:-translate-y-0.5 hover:border-primary hover:text-primary"
            >
              <FaGithub className="text-lg" />
            </a>

            <a
              href="https://www.linkedin.com/in/sachinyadav0907"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="rounded-xl border border-border p-3 transition-all duration-300 hover:-translate-y-0.5 hover:border-primary hover:text-primary"
            >
              <FaLinkedin className="text-lg" />
            </a>

            <a
              href="mailto:ysachin8600@gmail.com"
              aria-label="Email"
              className="rounded-xl border border-border p-3 transition-all duration-300 hover:-translate-y-0.5 hover:border-primary hover:text-primary"
            >
              <FaEnvelope className="text-lg" />
            </a>
          </div>

          <div className="my-8 h-px w-full bg-border md:my-10" />

          <div className="flex w-full flex-col items-center justify-between gap-4 text-center md:flex-row md:text-left">
            <p className="text-sm text-muted">
              © {year} Sachin Yadav. All rights reserved.
            </p>

            <button
              type="button"
              onClick={() =>
                window.scrollTo({
                  top: 0,
                  behavior: "smooth",
                })
              }
              className="flex items-center gap-2 rounded-xl border border-border px-4 py-2.5 text-sm font-medium transition-all duration-300 hover:-translate-y-0.5 hover:border-primary hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
            >
              <FaArrowUp />
              Back to Top
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
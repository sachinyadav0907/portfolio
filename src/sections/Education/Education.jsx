import { FaGraduationCap, FaCheckCircle } from "react-icons/fa";

import Section from "../../components/layout/Section";
import SectionTitle from "../../components/ui/SectionTitle";

import education from "../../data/education";

const Education = () => {
  return (
    <Section id="education">
      <SectionTitle
        subtitle="Education"
        title="Education & Professional Growth"
        description="My academic background and the technologies I'm continuously learning to grow as a software engineer."
      />

      <div className="mx-auto max-w-4xl rounded-3xl border border-border bg-surface p-6 transition-all duration-300 hover:border-primary/40 hover:shadow-[0_0_30px_rgba(6,182,212,0.08)] sm:p-8 lg:p-10">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-start">
          <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-primary/10 sm:h-16 sm:w-16">
            <FaGraduationCap className="text-2xl text-primary sm:text-3xl" />
          </div>

          <div className="flex-1">
            <h3 className="text-xl font-bold leading-tight sm:text-2xl lg:text-3xl">
              {education.degree}
            </h3>

            <p className="mt-2 text-sm text-muted sm:text-base">
              {education.university}
            </p>

            <p className="mt-1 text-sm font-medium text-primary sm:text-base">
              {education.graduation}
            </p>

            {education.cgpa && (
              <p className="mt-1 text-sm text-muted sm:text-base">
                {education.cgpa}
              </p>
            )}

            <p className="mt-5 text-sm leading-7 text-muted sm:mt-6 sm:text-base sm:leading-8">
              {education.description}
            </p>

            <h4 className="mt-8 mb-5 text-lg font-semibold sm:text-xl">
              Current Focus
            </h4>

            <div className="grid gap-4 sm:grid-cols-2">
              {education.focus.map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-3"
                >
                  <FaCheckCircle className="mt-1 shrink-0 text-primary" />

                  <span className="text-sm leading-7 sm:text-base">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Education;
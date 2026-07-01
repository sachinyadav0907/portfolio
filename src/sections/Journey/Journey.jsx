import Section from "../../components/layout/Section";
import SectionTitle from "../../components/ui/SectionTitle";
import TimelineItem from "../../components/ui/TimelineItem";

import journey from "../../data/journey";

const Journey = () => {
  return (
    <Section id="journey">
      <SectionTitle
        subtitle="Learning Journey"
        title="Learning Path"
        description="A timeline highlighting my growth from learning web development to building full-stack applications and continuously advancing toward a software engineering career."
      />

      <div className="mx-auto max-w-4xl">
        {journey.map((item, index) => (
          <TimelineItem
            key={item.title}
            item={item}
            last={index === journey.length - 1}
          />
        ))}
      </div>
    </Section>
  );
};

export default Journey;
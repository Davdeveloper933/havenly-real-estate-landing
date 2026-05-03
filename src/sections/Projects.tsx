import SectionTitle from "../components/SectionTitle";
import { projects } from "../constants";
import ProjectCard from "../components/ProjectCard";

const Projects = () => {
  const sectionTitleProps = {
    title: "Our Amazing Home Projects",
    secondaryText:
      "Transforming homes, transforming lives: Havenly Real Estate's amazing home projects",
    buttonText: "Explore more Property",
    maxW: 80,
  };

  return (
    <section id="projects" className="pt-10 pb-10 md:pt-20 md:pb-20">
      <div className="container">
        <SectionTitle {...sectionTitleProps} />
        <div className="pt-18">
          <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-x-6 gap-y-6 grid-flow-row auto-rows-max">
            {projects.map((project, index) => (
              <div key={index} className={`row-span-${index + 1}`}>
                <ProjectCard {...project} />
              </div>
            ))}
            {/* <div className="row-span-1">
              <ProjectCard {...projects[0]} />
            </div>
            <div className="row-span-2">
              <ProjectCard {...projects[1]} />
            </div>
            <div className="row-span-1">
              <div className="">
                <ProjectCard {...projects[2]} />
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;

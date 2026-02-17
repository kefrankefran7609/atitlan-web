import {
  LangProps,
  platform,
  platforms,
  projects,
  projectsCards,
  seeFullDetails,
  toolsInThisProject,
} from "@/lib/utils";
import { useState } from "react";
import Image from "next/image";

export default function SectionHomeProjects({ lang }: LangProps) {
  const [platformSelected, setPlatformSelected] = useState<
    "Webflow" | "Next.js" | "All"
  >("All");
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handlePlatformChange = (platform: "Webflow" | "Next.js" | "All") => {
    setPlatformSelected(platform);
  };

  const handleMouseEnter = (index: number) => {
    setHoveredProject(index);
  };

  const handleMouseLeave = () => {
    setHoveredProject(null);
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <section id="projects">
      <h2>{projects[lang]}</h2>
      <div className="flex justify-center">
        <h3 className="is-smaller">{platform[lang]}:</h3>
        <ul className="flex flex-wrap flex-x gap-075">
          {platforms.map((platfor, i) => (
            <li key={i}>
              <button
                className={`service-card-tool is-filter${
                  platformSelected === platfor ? " is-active" : ""
                }`}
                onClick={() =>
                  handlePlatformChange(platfor as "Webflow" | "Next.js" | "All")
                }
              >
                {platfor}
              </button>
            </li>
          ))}
        </ul>
      </div>
      <div className="mt-4">
        {projectsCards
          .filter(
            (project) =>
              project.platform === platformSelected ||
              platformSelected === "All",
          )
          .map((project, i) => (
            <div className="project" key={i}>
              <div className="project-image">
                <div className="image-scroll-wrapper">
                  <Image
                    src={project.image}
                    alt={project.name}
                    fill
                    sizes="100%"
                    onMouseEnter={() => handleMouseEnter(i)}
                    onMouseLeave={handleMouseLeave}
                    onMouseMove={handleMouseMove}
                  />
                </div>
              </div>
              <div className="project-content">
                <h3>
                  {lang === "es"
                    ? project.name.split("///")[1]
                    : project.name.split("///")[0]}
                </h3>
                <p className="mb-1">{project.shortDescription[lang]}</p>
                <h4>{toolsInThisProject[lang]}</h4>
                <div className="flex flex-wrap gap-05 mb-1">
                  {project.tools.map((tool, i) => (
                    <span key={i} className="service-card-tool is-filter">
                      {tool}
                    </span>
                  ))}
                </div>
                <button className="button">{seeFullDetails[lang]}</button>
              </div>
              <div
                className="project-hover"
                style={{
                  transform: `scale(${hoveredProject === i ? 1 : 0})`,
                  left: `${mousePosition.x}px`,
                  top: `${mousePosition.y}px`,
                  transition:
                    "opacity 0.3s, transform 0.2s ease-out, left 0.1s ease-out, top 0.1s ease-out",
                }}
              >
                <p className="project-hover-text">See project</p>
              </div>
            </div>
          ))}
      </div>
    </section>
  );
}

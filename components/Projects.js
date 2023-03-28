import React from "react";
import ProjectItem from "./ProjectItem";
import cLinkImage from "../public/cLinkImage.png";
import cToolsImage from "../public/cToolsImage.png";
import anantMkImage from "../public/anant-mk2.png";
import anantUsImage from "../public/anantUsImage.png";

const Projects = () => {
  const myProjects = [
    {
      projectName: "Cassandra Link",
      projectImage: cLinkImage,
      originalProjectLink: "https://cassandra.link/",
      projectUrl: "/cassandra-link",
      projectLanguage: "Gatsby JS",
    },
    {
      projectName: "Cassandra Tools",
      projectImage: cToolsImage,
      originalProjectLink: "https://cassandra.tools/",
      projectUrl: "/cassandra-tools",
      projectLanguage: "Gatsby JS",
    },
    {
      projectName: "Anant MK (In Progress...)",
      projectImage: anantMkImage,
      originalProjectLink: "https://anant-5fbpggvol-anantmk.vercel.app/",
      projectUrl: "/anant-mk",
      projectLanguage: "Next JS",
    },
    {
      projectName:
        "Anant US (Built in wordpress / In Progress version with Next.js...)",
      projectImage: anantUsImage,
      originalProjectLink: "https://anant.us/",
      projectUrl: "/anant-us",
      projectLanguage: "Wordpress / New version with Next.js",
    },
  ];
  return (
    <div id="projects" className=" w-full">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <h2 className="text-xl tracking-widest uppercase text-[#6561e5] mb-4">
          Professional Project Experience
        </h2>

        <div className=" grid md:grid-cols-2 gap-8">
          {myProjects.map((project) => {
            return (
              <div key={project.projectName}>
                <ProjectItem
                  title={project.projectName}
                  backgroundImg={project.projectImage}
                  originalProjectLink={project.originalProjectLink}
                  projectUrl={project.projectUrl}
                  projectLanguage={project.projectLanguage}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Projects;

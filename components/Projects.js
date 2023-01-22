import React from "react";
import ProjectItem from "./ProjectItem";
import cLinkImage from "../public/cLinkImage.png";
import cToolsImage from "../public/cToolsImage.png";
import anantMkImage from "../public/anant-mk.png";

const Projects = () => {
  const myProjects = [
    {
      projectName: "Cassandra Link",
      projectImage: cLinkImage,
      projectUrl: "https://cassandra.link/",
      projectLanguage: "Gatsby JS",
    },
    {
      projectName: "Cassandra Tools",
      projectImage: cToolsImage,
      projectUrl: "https://cassandra.tools/",
      projectLanguage: "Gatsby JS",
    },
    {
      projectName: "Anant MK (In Progress...)",
      projectImage: anantMkImage,
      projectUrl: "https://anant-5fbpggvol-anantmk.vercel.app/",
      projectLanguage: "Next JS",
    },
  ];
  return (
    <div className=" w-full">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <p className="text-xl tracking-widest uppercase text-[#6561e5]">
          Projects
        </p>
        <h2 className="py-4">What I've Built</h2>
        <div className=" grid md:grid-cols-2 gap-8">
          {myProjects.map((project) => {
            return (
              <ProjectItem
                title={project.projectName}
                backgroundImg={project.projectImage}
                projectUrl={project.projectUrl}
                projectLanguage={project.projectLanguage}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Projects;

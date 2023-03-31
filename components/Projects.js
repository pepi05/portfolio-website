import React from "react";
import ProjectItem from "./ProjectItem";

const Projects = ({ projects, title }) => {
  return (
    <div id="projects" className=" w-full">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <h2 className="text-xl tracking-widest uppercase text-[#6561e5] mb-4">
          {title}
        </h2>

        <div className=" grid md:grid-cols-2 gap-8">
          {projects.map((project) => {
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

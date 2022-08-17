import React, { useState } from "react";
import Filter from "./Filter/Filter";
import ProjectCard from "./ProjectCard";

const Projects = ({ projects }) => {
  const projectTech = projects.map((project) => project.tech);
  const techArray = projectTech.flat().map((el) => el.name);
  const [technologies, setTechnologies] = useState([...new Set(techArray)]);
  const [projectsList, setProjectsList] = useState(projects)
  // console.log(projects.map(project => project.checked === true && project));

  return (
    <div className=" min-h-screen py-20 " id="work">
      <div className="mx-auto container h-full flex flex-col  items-center ">
        <Filter  technologies={technologies} projects={projects} setProjectsList={setProjectsList} projectsList={projectsList} />

        <div className=" max-w-xl  grid  grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 justify-items-center  content-center">
          {projectsList.map((project) => {
            const { id, title, thumbnailImage, link, shadow, shadowHover } =
              project;
            return (
              <ProjectCard
                key={id}
                title={title}
                shadowHover={shadowHover}
                link={link}
                shadow={shadow}
                
                thumbnailImage={thumbnailImage}
                
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Projects;

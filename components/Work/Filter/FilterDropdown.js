import React, { useEffect, useState } from "react";
import SingleTechnologyFilter from "./SingleTechnologyFilter";

const FilterDropdown = ({
  technologies,
  setProjectsList,
  projects,
  projectsList,
}) => {
  useEffect(() => {
    setProjectsList(projects);
  }, [projects, setProjectsList]);
  return (
    <div
      className={`w-64 p-4 gap-2 bg-filter-dropdown rounded-lg grid grid-cols-2 top-8 absolute shadow-dropdown`}
    >
      {technologies.map((tech, index) => {
        return (
          <SingleTechnologyFilter
            projectsList={projectsList}
            setProjectsList={setProjectsList}
            projects={projects}
            key={index}
            tech={tech}
          />
        );
      })}
    </div>
  );
};

export default FilterDropdown;

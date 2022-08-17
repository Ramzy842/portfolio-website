import React, { useEffect, useState } from "react";

const SingleTechnologyFilter = ({
  tech,
  setProjectsList,
  projects,
  projectsList,
}) => {
  const [isChecked, setIsChecked] = useState(false);

  useEffect(() => {
    if (isChecked) {
      const specificProjects = projects.filter((project) =>
        project.tech.some((project) => project.name === tech)
      );
      setProjectsList(specificProjects);
    } else {
      const specificProjects = projects.filter((project) =>
        project.tech.some((project) => project.name != tech)
      );
      setProjectsList(specificProjects);
    }
  }, [isChecked, projects, setProjectsList, tech]);

  return (
    <div className="">
      <label className="flex items-center ">
        <input
          type="checkbox"
          name={tech}
          className=" relative accent-cyan-500 ring-offset-0 border-none outline-none  bg-cyan-500 rounded-full ring-cyan-500 "
          id="technology"
          onChange={() => {
            setIsChecked(!isChecked);
          }}
          value={isChecked}
          checked={isChecked}
        ></input>

        <span className="ml-2 text-sm">{tech}</span>
      </label>
    </div>
  );
};

export default SingleTechnologyFilter;

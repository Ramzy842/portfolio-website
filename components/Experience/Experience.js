import React from "react";
import Skillset from "../Skillset";
import Job from "./Job";

const Experience = ({ jobs, technologies }) => {
  return (
    <div className="  min-h-screen flex items-center px-8 z-40" name="experience" id="experience">
      <div className="mx-auto container h-full  py-16  ">
        <div className="grid grid-cols-1 md:grid-cols-2  max-w-3xl lg:max-w-5xl mx-auto gap-x-20 text-white pb-4 z-40 ">
          {jobs.map((job, index) => {
            const { image, role, type, duration, description } = job;
            return (
              <Job
                key={index}
                index={index}
                length={jobs.length}
                image={image}
                role={role}
                type={type}
                duration={duration}
                description={description}
              />
            );
          })}
        </div>
        <div className="max-w-md mx-auto z-40">
          <Skillset technologies={technologies} />
        </div>
      </div>
    </div>
  );
};

export default Experience;

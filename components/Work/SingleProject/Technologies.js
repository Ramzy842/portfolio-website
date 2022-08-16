import React from "react";
import Technology from "./Technology";

const Technologies = ({tech}) => {
  return (
    <div className="text-white">
      <h1 className="capitalize text-white font-bold mb-2">Technologies:</h1>
      <div className="flex">
        {tech.map((tech, index) => {
          return <Technology key={index} tech={tech} />
        })}
        
      </div>
    </div>
  );
};

export default Technologies;

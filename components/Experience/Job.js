import React from "react";
import Image from "next/image";

const Job = ({ image, role, type, duration, description, length, index }) => {
  return (
    <div className={`flex flex-col mb-16 ${index === length - 1 ? "border-none" : "border-b"} md:border-none pb-16  md:mb-0 z-40`}>
      <div className="flex mb-4">
        <div>
          <Image src={image} height={100} width={100} alt={type} />
        </div>
        <div className="ml-4">
          <h1 className="font-bold mb-2">{role}</h1>
          <h2 className="text-sm font-medium mb-2">{type}</h2>
          <p className="text-sm font-light">{duration}</p>
        </div>
      </div>
      <ul className="max-w-md">
        {description?.map((point, index) => {
          return <li className="text-xs md:text-sm font-light leading-4 mb-2" key={index}>{point}</li>;
        })}
      </ul>
    </div>
  );
};

export default Job;

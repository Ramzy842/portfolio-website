import React from "react";
import Button from "../../Custom/Button";
import Screenshots from "./Screenshots";

const Details = ({
  description,
  screenshots,
  links,
  setMainImage,
  setIndex,
  title,
}) => {
  return (
    <div className="h-full">
      <div className="flex flex-col  md:flex-row justify-between">
        <div className="flex flex-col flex-1 mb-4">
          <h1 className="text-white text-xl mb-2 font-bold tracking-wider">{title}</h1>
          <p className="text-sm text-white leading-6 capitalize md:mb-0 md:w-11/12 text-gray-100">
            {description}
          </p>
        </div>

        <div className="flex md:flex-col my-4 md:my-0">
          {links.map((link, index) => {
            return (
              <Button
                link={link.source}
                key={index}
                text={link.text}
                color={link.color}
              />
            );
          })}
        </div>
      </div>
      <h2 className="text-white font-medium mb-4">Screenshots:</h2>
      <Screenshots
        setIndex={setIndex}
        setMainImage={setMainImage}
        screenshots={screenshots}
      />
    </div>
  );
};

export default Details;

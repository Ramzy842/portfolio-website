import React from "react";
import Button from "../../Custom/Button";
import Screenshots from "./Screenshots";

const Details = ({description, screenshots, links, setMainImage, setIndex}) => {
  return <div className="h-full">
    <div className="flex flex-col  md:flex-row justify-between">
      <p className="text-base text-white leading-6 mb-4 md:mb-0 md:w-4/6">{description}</p>
      <div className="flex md:flex-col my-4 md:my-0">
        {
         links.map((link, index) => {
          return <Button link={link.source} key={index} text={link.text}  color={link.color} />
         }) 
        }
        
      </div>
    </div>
    <h2 className="text-white font-medium mb-4">Screenshots:</h2>
    <Screenshots  setIndex={setIndex} setMainImage={setMainImage} screenshots={screenshots} />
  </div>;
};

export default Details;

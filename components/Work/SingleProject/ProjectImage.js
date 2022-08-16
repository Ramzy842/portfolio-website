import React from "react";
import Image from "next/image";
const ProjectImage = ({image}) => {
  return (
    <div>
      <Image
        src={image}
        width={488}
        height={240}
        alt="project-image"
      />
    </div>
  );
};

export default ProjectImage;

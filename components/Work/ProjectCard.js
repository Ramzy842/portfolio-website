import React from "react";
import Image from "next/image";
import Link from "next/link";
const ProjectCard = ({ id, title, thumbnailImage, shadow, link, shadowHover }) => {
  
  return (
    <div className={`hover:-translate-y-2 transition hover:drop-shadow-project-syfp-hover drop-shadow-project-syfp cursor-pointer `}>
      <Link href={link}>
        <div className={`mb-4 flex rounded-sm`}>
          <Image
            src={thumbnailImage}
            className="rounded-sm"
            height={200}
            width={280}
            alt={title}
          />
        </div>
      </Link>
    </div>
  );
};

export default ProjectCard;

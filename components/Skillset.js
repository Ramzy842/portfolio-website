import React from "react";
import Image from "next/image";

const Skillset = ({ technologies }) => {
  return (
    <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5  mx-auto gap-y-5 gap-x-10 place-items-center">
      {technologies.map((technology) => {
        const { id, link } = technology;
        return (
          <div className="hover:grayscale-0 grayscale transition" key={id}>
            <Image alt={"image" + id} src={link} height={54} width={54} />
          </div>
        );
      })}
    </div>
  );
};

export default Skillset;

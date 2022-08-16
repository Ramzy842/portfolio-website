import Image from "next/image";
import React from "react";

const Screenshot = ({ screenshot,index, setIndex }) => {
  
  return (
    <div
      className="cursor-pointer"
      onClick={() => {setIndex(index)}}
    >
      <Image src={screenshot} height={100} width={140} alt="screenshot" />
    </div>
  );
};

export default Screenshot;

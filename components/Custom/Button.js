import React from "react";

const Button = ({ text, color, link }) => {
  return (
    <a
      style={{ background: color }}
      className={`py-1 px-4 font-bold text-sm rounded-sm mb-2 text-center text-white mr-4 md:mr-0`}
      href={link}
    >
      {text}
    </a>
  );
};

export default Button;

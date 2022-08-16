import React, { useEffect } from "react";

import Skillset from "./Skillset";

const Hero = ({ technologies }) => {
  /* useEffect(() => {
    particlesJS.load("particles-js", "../particlesjs-config.json", function () {
      console.log("callback - particles.js config loaded");
    });
  }, []); */
  return (
    <div className="min-h-screen" id="particles-js">
      <div className="container mx-auto max-w-3xl flex flex-col justify-around h-screen   ">
        <div className="flex flex-col h-80  justify-center items-center ">
          <h2 className="text-xl md:text-2xl lg:text-4xl	font-semibold text-center text-primary md:mb-8 ">
            Hi, I&apos;m Ramzi Chahbani
          </h2>
          <h1 className="text-3xl md:text-5xl lg:text-7xl font-bold text-center text-transparent bg-clip-text bg-title p-4">
            Frontend Developer
          </h1>
        </div>

        <Skillset technologies={technologies} />
      </div>
    </div>
  );
};

export default Hero;

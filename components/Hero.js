import React from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { useCallback } from "react";
import particles from "./particles";

import Skillset from "./Skillset";

const Hero = ({ technologies }) => {
  const particlesInit = useCallback(async (engine) => {
    
    // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(engine);
}, []);

const particlesLoaded = useCallback(async (container) => {
    
}, []);
  return (
    <div name="home" className="min-h-screen">
      <div>
        <Particles id="tsparticles"
            init={particlesInit}
            loaded={particlesLoaded} options={particles} />
      </div>
      <div className="container mx-auto max-w-3xl flex flex-col justify-around h-screen z-40  ">
        <div className="flex flex-col h-80  justify-center items-center ">
        
          <h2 className="text-xl md:text-2xl lg:text-4xl	font-semibold text-center text-primary md:mb-8 z-40 ">
            Hi, I&apos;m Ramzi Chahbani
          </h2>
          <h1 className="text-3xl md:text-5xl lg:text-7xl font-bold text-center text-transparent bg-clip-text bg-title p-4 z-40">
            Frontend Developer
          </h1>
        </div>

        <Skillset technologies={technologies} />
      </div>
    </div>
  );
};

export default Hero;

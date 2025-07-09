import React from "react";

export default function Hero() {
  return (
    <>
      <div id="about" className="flex flex-col items-center px-4 pt-48 py-3 space-y-2 ">
        <h1 className="lg:text-6xl font-bold text-5xl text-center">Jennica Sask</h1>
        <p className="text-md md:text-md max-w-xl mb-8 text-center">
          I’m a junior digital designer and developer with a passion 
for combining aesthetics with intuitive design. Seeking 
hands-on experience in the digital marketing industry to 
grow technical and strategic communication skills.
        </p>
      </div>

      <div className="flex gap-4 pb-20 pt-10">
        <a
          href="#projects"
          className="px-4 py-2 border-2 border-[#890620] hover:bg-[#890620] hover:text-[#F9F3ED] transition-all duration-300 rounded-2xl w-fit h-fit text-base text-black md:text-sm lg:text-sm  "
        >
          View Projects
        </a>
        <a
          href="#contact"
          className="px-4 py-2 border-2 border-[#890620] hover:bg-[#890620] hover:text-[#F9F3ED] rounded-2xl w-fit h-fit text-base text-black md:text-sm lg:text-sm transition-all duration-300 "
        >
          Contact Me!
        </a>
      </div>
    </>
  );
}

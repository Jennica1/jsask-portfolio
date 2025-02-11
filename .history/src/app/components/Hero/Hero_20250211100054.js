import React from "react";

export default function Hero() {
  return (
    <>
      <div className="flex flex-col items-center px-4 pt-46 py-3 space-y-2">
        <h1 className="text-4xl md:text-4xl font-bold">Jennica Sask</h1>
        <p className="text-md md:text-md max-w-xl mb-8 justify-center">
          I’m a junior web designer who is looking to gain experience in the web
          development industry. I’m passionate about combining aesthetics with
          accessible and intuitive design.
        </p>
      </div>

      <div className="flex gap-4 pb-20 pt-10">
        <a
          href="#projects"
          className="px-4 py-2 border-2 border-[#AC0022] hover:bg-[#AC0022] hover:text-[#F9F3ED] rounded-2xl w-fit h-fit text-base text-black md:text-sm lg:text-sm transition-all duration-300 "
        >
          View Projects
        </a>
        <a
          href="#contact"
          className="px-4 py-2 border-2 border-[#AC0022] hover:bg-[#AC0022] hover:text-[#F9F3ED] rounded-2xl w-fit h-fit text-base text-black md:text-sm lg:text-sm transition-all duration-300 "
        >
          Contact Me!
        </a>
      </div>
    </>
  );
}

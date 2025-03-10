import React from "react";

export default function Hero() {
  return (
    <>
      <div className="flex flex-col items-center  px-4 pt-20 py-3 space-y-2">
        <h1 className="text-3xl md:text-4xl font-bold">Jennica Sask</h1>
        <p className="text-md md:text-md text-muted-foreground max-w-xl mb-8">
          I’m a junior web designer who is looking to gain experience in the web
          development industry. I’m passionate about combining aesthetics with
          accessible and intuitive design.
        </p>
      </div>

      <div className="flex gap-4 pb-20">
        <a
          href="#projects"
          className="px-4 py-2 hover:opacity-90 transition-opacity bg-[#AC0022] rounded-2xl w-fit h-fit text-base text-[#F9F3ED] underline md:text-sm lg:text-sm"
        >
          View Projects
        </a>
        <a
          href="#contact"
          className="px-4 py-2 hover:opacity-90 transition-opacity bg-[#AC0022] rounded-2xl w-fit h-fit text-base text-[#F9F3ED] underline md:text-sm lg:text-sm"
        >
          Contact Me
        </a>
      </div>
    </>
  );
}

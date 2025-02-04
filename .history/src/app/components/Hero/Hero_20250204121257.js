import React from "react";

export default function Hero() {
  return (
    <div className="flex flex-col justify-center align-center ">
    <h1 className="font- text-3xl">Jennica Sask</h1>
      <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-8">
      I’m a junior web designer who is looking to gain experience in the web development industry. I’m passionate about combining aesthetics with accessible and intuitive design.
      </p>
      <div className="flex gap-4">
        <a href="#projects" className="px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:opacity-90 transition-opacity">
          View Projects
        </a>
        <a href="#contact" className="px-6 py-3 bg-secondary text-secondary-foreground rounded-lg hover:opacity-90 transition-opacity">
          Contact Me
        </a>
      </div>
    </div>
  );
};
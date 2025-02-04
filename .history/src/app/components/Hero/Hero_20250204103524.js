import React from "react";

export default function Hero() {
  return (
    <>
      <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-purple-400 bg-clip-text text-transparent">
        Creative Designer & Developer
      </h1>
      <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-8">
        I craft beautiful user experiences and bring designs to life through clean, efficient code.
      </p>
      <div className="flex gap-4">
        <a href="#projects" className="px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:opacity-90 transition-opacity">
          View Projects
        </a>
        <a href="#contact" className="px-6 py-3 bg-secondary text-secondary-foreground rounded-lg hover:opacity-90 transition-opacity">
          Contact Me
        </a>
      </div>
    </>
  );
};
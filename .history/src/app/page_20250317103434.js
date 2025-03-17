"use client"; // Required for Next.js App Router

import { useEffect, useRef, useState } from "react";
import Matter from "matter-js";
import Image from "next/image";
import Header from "./components/Header/Header";
import Slideshow from "./components/Slideshow/Slideshow";
import Hero from "./components/Hero/Hero";
import { ProjectsGrid } from "./components/ProjectsGrid/ProjetsGrid";
import ContactForm from "./components/ContactForm/ContactForm";

export default function Home() {
  const sceneRef = useRef(null);
  const [engine, setEngine] = useState(null);
  const [bodies, setBodies] = useState([]);
  const mouseConstraintRef = useRef(null);

  useEffect(() => {
    // Create physics engine
    const engine = Matter.Engine.create();
    const world = engine.world;
    setEngine(engine);

    // Create renderer (not visible, just for physics calculations)
    const render = Matter.Render.create({
      element: sceneRef.current,
      engine: engine,
      options: {
        width: window.innerWidth,
        height: window.innerHeight,
        wireframes: false,
        background: "transparent",
      },
    });

    // Define floating SVG image
    const floatingImages = [
      { src: "/images/Triangle.svg", x: 200, y: 150, width: 120, height: 120 },
    ];

    const bodies = floatingImages.map((img, index) => {
      const body = Matter.Bodies.rectangle(img.x, img.y, img.width, img.height, {
        restitution: 0.8, // Bounciness
        frictionAir: 0.05, // Air resistance
        render: { sprite: { texture: img.src, xScale: 1, yScale: 1 } },
      });
      Matter.World.add(world, body);
      return body;
    });

    setBodies(bodies);

    // Create walls to keep images inside viewport
    const ground = Matter.Bodies.rectangle(window.innerWidth / 2, window.innerHeight, window.innerWidth, 50, { isStatic: true });
    const ceiling = Matter.Bodies.rectangle(window.innerWidth / 2, 0, window.innerWidth, 50, { isStatic: true });
    const leftWall = Matter.Bodies.rectangle(0, window.innerHeight / 2, 50, window.innerHeight, { isStatic: true });
    const rightWall = Matter.Bodies.rectangle(window.innerWidth, window.innerHeight / 2, 50, window.innerHeight, { isStatic: true });

    Matter.World.add(world, [ground, ceiling, leftWall, rightWall]);

    // Add mouse interaction (drag & throw)
    const mouse = Matter.Mouse.create(sceneRef.current);
    const mouseConstraint = Matter.MouseConstraint.create(engine, {
      mouse,
      constraint: {
        stiffness: 0.2,
        render: { visible: false },
      },
    });

    Matter.World.add(world, mouseConstraint);
    mouseConstraintRef.current = mouseConstraint;

    // Run physics engine
    Matter.Engine.run(engine);
    Matter.Render.run(render);

    // Sync images with physics engine
    Matter.Events.on(engine, "afterUpdate", () => {
      bodies.forEach((body, i) => {
        const imgElement = document.getElementById(`floating-image-${i}`);
        if (imgElement) {
          imgElement.style.transform = `translate(${body.position.x - floatingImages[i].width / 2}px, ${body.position.y - floatingImages[i].height / 2}px) rotate(${body.angle}rad)`;
        }
      });
    });

    return () => {
      Matter.Render.stop(render);
      Matter.World.clear(world);
      Matter.Engine.clear(engine);
    };
  }, []);

  return (
    <>
      <main className="flex justify-center flex-col items-center opacity-0 animate-fadeIn animate-slideIn">
        <Header />
        <Hero className="p-5" />
        <ProjectsGrid />
        <ContactForm />
      </main>

      {/* Floating image container (separate from main content) */}
      <div ref={sceneRef} className="fixed top-0 left-0 w-full h-full pointer-events-none -z-20">
        {["/images/Triangle.svg"].map((src, i) => (
          <img key={i} id={`floating-image-${i}`} src={src} alt={`Floating Image ${i}`} className="absolute w-[120px] h-auto select-none" />
        ))}
      </div>
    </>
  );
}

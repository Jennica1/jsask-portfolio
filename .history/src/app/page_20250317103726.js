"use client"; // Required for Next.js App Router

import { useEffect, useRef, useState } from "react";
import Matter from "matter-js";
import Image from "next/image";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import { ProjectsGrid } from "./components/ProjectsGrid/ProjetsGrid";
import ContactForm from "./components/ContactForm/ContactForm";

export default function Home() {
  const sceneRef = useRef(null);
  const [engine, setEngine] = useState(null);
  const imageRef = useRef(null);

  useEffect(() => {
    const engine = Matter.Engine.create();
    const world = engine.world;
    setEngine(engine);

    // Create the floating image as a physics body
    const floatingImage = Matter.Bodies.rectangle(200, 150, 120, 120, {
      restitution: 0.8, // Bounciness
      frictionAir: 0.02, // Air resistance
    });

    Matter.World.add(world, floatingImage);

    // Add invisible walls to keep image inside the viewport
    const ground = Matter.Bodies.rectangle(window.innerWidth / 2, window.innerHeight, window.innerWidth, 50, { isStatic: true });
    const ceiling = Matter.Bodies.rectangle(window.innerWidth / 2, 0, window.innerWidth, 50, { isStatic: true });
    const leftWall = Matter.Bodies.rectangle(0, window.innerHeight / 2, 50, window.innerHeight, { isStatic: true });
    const rightWall = Matter.Bodies.rectangle(window.innerWidth, window.innerHeight / 2, 50, window.innerHeight, { isStatic: true });

    Matter.World.add(world, [ground, ceiling, leftWall, rightWall]);

    // Add mouse interaction for dragging & throwing
    const mouse = Matter.Mouse.create(sceneRef.current);
    const mouseConstraint = Matter.MouseConstraint.create(engine, {
      mouse,
      constraint: {
        stiffness: 0.2,
        render: { visible: false },
      },
    });

    Matter.World.add(world, mouseConstraint);

    // Run physics engine
    Matter.Engine.run(engine);

    // Sync image position with Matter.js body
    const update = () => {
      if (imageRef.current) {
        imageRef.current.style.transform = `translate(${floatingImage.position.x - 60}px, ${floatingImage.position.y - 60}px) rotate(${floatingImage.angle}rad)`;
      }
      requestAnimationFrame(update);
    };
    update();

    return () => {
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

      {/* Floating interactive image */}
      <div ref={sceneRef} className="fixed top-0 left-0 w-full h-full">
        <Image
          ref={imageRef}
          id="floating-image"
          src="/images/Triangle.svg"
          alt="Floating Triangle"
          width={120}
          height={120}
          className="absolute cursor-grab select-none"
        />
      </div>
    </>
  );
}

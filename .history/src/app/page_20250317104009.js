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
  const floatingImageRef = useRef(null);

  useEffect(() => {
    const engine = Matter.Engine.create();
    const world = engine.world;
    setEngine(engine);

    // Create the floating image as a physics body
    const floatingImage = Matter.Bodies.circle(200, 150, 60, {
      restitution: 0.8, // Bounciness
      frictionAir: 0.05, // Makes it float slowly
      density: 0.002, // Lightens the image
    });

    Matter.World.add(world, floatingImage);
    floatingImageRef.current = floatingImage;

    // Add invisible walls to keep the image inside the viewport
    const bounds = [
      Matter.Bodies.rectangle(window.innerWidth / 2, window.innerHeight, window.innerWidth, 50, { isStatic: true }), // Bottom
      Matter.Bodies.rectangle(window.innerWidth / 2, 0, window.innerWidth, 50, { isStatic: true }), // Top
      Matter.Bodies.rectangle(0, window.innerHeight / 2, 50, window.innerHeight, { isStatic: true }), // Left
      Matter.Bodies.rectangle(window.innerWidth, window.innerHeight / 2, 50, window.innerHeight, { isStatic: true }), // Right
    ];
    Matter.World.add(world, bounds);

    // Add a subtle force to make the image drift
    const applyRandomForce = () => {
      Matter.Body.applyForce(floatingImage, floatingImage.position, {
        x: (Math.random() - 0.5) * 0.002, // Small random push in X direction
        y: (Math.random() - 0.5) * 0.002, // Small random push in Y direction
      });
    };
    setInterval(applyRandomForce, 2000); // Apply force every 2 seconds

    // Add mouse interaction for dragging & throwing
    const mouse = Matter.Mouse.create(sceneRef.current);
    const mouseConstraint = Matter.MouseConstraint.create(engine, {
      mouse,
      constraint: {
        stiffness: 0.1,
        render: { visible: false },
      },
    });
    Matter.World.add(world, mouseConstraint);

    // Run the physics engine properly
    const runner = Matter.Runner.create();
    Matter.Runner.run(runner, engine);

    // Sync image position with Matter.js body
    const updateImagePosition = () => {
      if (imageRef.current && floatingImageRef.current) {
        const { x, y, angle } = floatingImageRef.current.position;
        imageRef.current.style.transform = `translate(${x - 60}px, ${y - 60}px) rotate(${angle}rad)`;
      }
      requestAnimationFrame(updateImagePosition);
    };
    updateImagePosition();

    return () => {
      Matter.World.clear(world);
      Matter.Engine.clear(engine);
      Matter.Runner.stop(runner);
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
      <div ref={sceneRef} className="fixed top-0 left-0 w-full h-full pointer-events-none">
        <Image
          ref={imageRef}
          id="floating-image"
          src="/images/Triangle.svg"
          alt="Floating Triangle"
          width={120}
          height={120}
          className="absolute cursor-grab select-none pointer-events-auto"
        />
      </div>
    </>
  );
}

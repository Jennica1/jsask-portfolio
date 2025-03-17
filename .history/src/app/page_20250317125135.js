"use client"; // Required for Next.js App Router

import { useEffect, useRef, useState } from "react";
import Matter from "matter-js";
import Image from "next/image";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import { ProjectsGrid } from "./components/ProjectsGrid/ProjetsGrid";
import ContactForm from "./components/ContactForm/ContactForm";

export default function FloatingImage() {
  const sceneRef = useRef(null);
  const imageRef = useRef(null);
  const [engine, setEngine] = useState(null);
  const floatingImageRef = useRef(null);

  useEffect(() => {
    const engine = Matter.Engine.create();
    const world = engine.world;
    setEngine(engine);

    // 🚀 Disable gravity for space-like floating
    engine.gravity.y = 0;
    engine.gravity.x = 0;

    const startX = window.innerWidth / 2;
    const startY = window.innerHeight / 2;

    // Create floating image body
    const floatingImage = Matter.Bodies.circle(startX, startY, 50, {
      restitution: 1, // Perfect bounce
      frictionAir: 0, // No air resistance (zero-drag movement)
      density: 0.002, // Light object
    });

    Matter.World.add(world, floatingImage);
    floatingImageRef.current = floatingImage;

    // Add invisible boundaries (so it stays inside viewport)
    const bounds = [
      Matter.Bodies.rectangle(window.innerWidth / 2, window.innerHeight, window.innerWidth, 10, { isStatic: true }),
      Matter.Bodies.rectangle(window.innerWidth / 2, 0, window.innerWidth, 10, { isStatic: true }),
      Matter.Bodies.rectangle(0, window.innerHeight / 2, 10, window.innerHeight, { isStatic: true }),
      Matter.Bodies.rectangle(window.innerWidth, window.innerHeight / 2, 10, window.innerHeight, { isStatic: true }),
    ];
    Matter.World.add(world, bounds);

    // 🌟 Apply an initial random push (so it drifts like in space)
    Matter.Body.setVelocity(floatingImage, {
      x: (Math.random() - 0.5) * 2, // Small random speed
      y: (Math.random() - 0.5) * 2,
    });

    // Run physics engine
    const runner = Matter.Runner.create();
    Matter.Runner.run(runner, engine);

    // Sync image position with physics
    const updateImagePosition = () => {
      if (imageRef.current && floatingImageRef.current) {
        const { x, y } = floatingImageRef.current.position;
        imageRef.current.style.transform = `translate(${x - 50}px, ${y - 50}px)`;
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

    <div ref={sceneRef} className="fixed top-0 left-0 w-full h-full pointer-events-none">
      <Image
        ref={imageRef}
        src="/images/Triangle.svg"
        alt="Floating Triangle"
        width={100}
        height={100}
        className="absolute select-none -z-20"
      />
    </div>
    </>
  );
}

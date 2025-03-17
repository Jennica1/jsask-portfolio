"use client"; // Required for Next.js App Router

import { useEffect, useRef, useState } from "react";
import Matter from "matter-js";
import Image from "next/image";

export default function FloatingImage() {
  const sceneRef = useRef(null);
  const imageRef = useRef(null);
  const [engine, setEngine] = useState(null);
  const floatingImageRef = useRef(null);

  useEffect(() => {
    const engine = Matter.Engine.create();
    const world = engine.world;
    setEngine(engine);

    const startX = window.innerWidth / 2;
    const startY = window.innerHeight / 2;

    // Create floating image physics body
    const floatingImage = Matter.Bodies.circle(startX, startY, 50, {
      restitution: 1, // Perfect bounce
      frictionAir: 0.02, // Slight drag for smooth movement
      density: 0.002, // Light weight
    });

    Matter.World.add(world, floatingImage);
    floatingImageRef.current = floatingImage;

    // Add walls to keep image inside viewport
    const bounds = [
      Matter.Bodies.rectangle(window.innerWidth / 2, window.innerHeight, window.innerWidth, 10, { isStatic: true }), // Bottom
      Matter.Bodies.rectangle(window.innerWidth / 2, 0, window.innerWidth, 10, { isStatic: true }), // Top
      Matter.Bodies.rectangle(0, window.innerHeight / 2, 10, window.innerHeight, { isStatic: true }), // Left
      Matter.Bodies.rectangle(window.innerWidth, window.innerHeight / 2, 10, window.innerHeight, { isStatic: true }), // Right
    ];
    Matter.World.add(world, bounds);

    // Give it an initial push in a random direction
    Matter.Body.setVelocity(floatingImage, {
      x: (Math.random() - 0.5) * 5,
      y: (Math.random() - 0.5) * 5,
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
    <div ref={sceneRef} className="fixed top-0 left-0 w-full h-full pointer-events-none">
      <Image
        ref={imageRef}
        src="/images/Triangle.svg"
        alt="Floating Triangle"
        width={100}
        height={100}
        className="absolute select-none"
      />
    </div>
  );
}

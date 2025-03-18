"use client"; // Required for Next.js App Router

import { useEffect, useRef, useState } from "react";
import Matter from "matter-js";
import Image from "next/image";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import { ProjectsGrid } from "./components/ProjectsGrid/ProjetsGrid";
import ContactForm from "./components/ContactForm/ContactForm";

export default function FloatingShapes() {
  const sceneRef = useRef(null);
  const triangleRef = useRef(null);
  const circleRef = useRef(null);
  const starRef = useRef(null);
  const [engine, setEngine] = useState(null);
  const floatingTriangleRef = useRef(null);
  const floatingCircleRef = useRef(null);
  const floatingStarRef = useRef(null);
  const selectedBodyRef = useRef(null); // To track dragged object

  useEffect(() => {
    const engine = Matter.Engine.create();
    const world = engine.world;
    setEngine(engine);

    engine.gravity.y = 0;
    engine.gravity.x = 0;

    const startX = window.innerWidth / 2;
    const startY = window.innerHeight / 2;

    // Create floating bodies
    const floatingTriangle = Matter.Bodies.circle(startX, startY, 20, {
      restitution: 1,
      frictionAir: 0.02,
      density: 0.002,
    });

    const floatingCircle = Matter.Bodies.circle(startX + 50, startY + 150, 50, {
      restitution: 1,
      frictionAir: 0.02,
      density: 0.002,
    });

    const floatingStar = Matter.Bodies.circle(startX - 100, startY + 100, 50, {
      restitution: 1,
      frictionAir: 0.02,
      density: 0.002,
    });

    Matter.World.add(world, [floatingTriangle, floatingCircle, floatingStar]);

    floatingTriangleRef.current = floatingTriangle;
    floatingCircleRef.current = floatingCircle;
    floatingStarRef.current = floatingStar;

    // Add invisible boundaries
    const bounds = [
      Matter.Bodies.rectangle(
        window.innerWidth / 2,
        window.innerHeight,
        window.innerWidth,
        10,
        { isStatic: true }
      ),
      Matter.Bodies.rectangle(window.innerWidth / 2, 0, window.innerWidth, 10, {
        isStatic: true,
      }),
      Matter.Bodies.rectangle(
        0,
        window.innerHeight / 2,
        10,
        window.innerHeight,
        { isStatic: true }
      ),
      Matter.Bodies.rectangle(
        window.innerWidth,
        window.innerHeight / 2,
        10,
        window.innerHeight,
        { isStatic: true }
      ),
    ];
    Matter.World.add(world, bounds);

    // Random initial push
    Matter.Body.setVelocity(floatingTriangle, {
      x: (Math.random() - 0.5) * 2,
      y: (Math.random() - 0.5) * 2,
    });
    Matter.Body.setVelocity(floatingCircle, {
      x: (Math.random() - 0.5) * 2,
      y: (Math.random() - 0.5) * 2,
    });
    Matter.Body.setVelocity(floatingStar, {
      x: (Math.random() - 0.5) * 2,
      y: (Math.random() - 0.5) * 2,
    });

    // Run physics engine
    const runner = Matter.Runner.create();
    Matter.Runner.run(runner, engine);

    // Track mouse events for dragging
    const handleMouseDown = (event) => {
      const { clientX, clientY } = event;

      // Check which body was clicked
      const bodies = [floatingTriangle, floatingCircle, floatingStar];
      for (let body of bodies) {
        const distance = Math.hypot(clientX - body.position.x, clientY - body.position.y);
        if (distance < 50) {
          selectedBodyRef.current = body;
          Matter.Body.setStatic(body, true); // Hold in place while dragging
          break;
        }
      }
    };

    const handleMouseMove = (event) => {
      if (selectedBodyRef.current) {
        Matter.Body.setPosition(selectedBodyRef.current, { x: event.clientX, y: event.clientY });
      }
    };

    const handleMouseUp = () => {
      if (selectedBodyRef.current) {
        Matter.Body.setStatic(selectedBodyRef.current, false); // Release the shape
        Matter.Body.setVelocity(selectedBodyRef.current, {
          x: (Math.random() - 0.5) * 3, // Apply small push on release
          y: (Math.random() - 0.5) * 3,
        });
        selectedBodyRef.current = null;
      }
    };

    // Attach event listeners
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);

    // Sync images with physics
    const updateImagePositions = () => {
      if (triangleRef.current && floatingTriangleRef.current) {
        const { x, y } = floatingTriangleRef.current.position;
        triangleRef.current.style.transform = `translate(${x - 50}px, ${y - 50}px)`;
      }
      if (circleRef.current && floatingCircleRef.current) {
        const { x, y } = floatingCircleRef.current.position;
        circleRef.current.style.transform = `translate(${x - 50}px, ${y - 50}px)`;
      }
      if (starRef.current && floatingStarRef.current) {
        const { x, y } = floatingStarRef.current.position;
        starRef.current.style.transform = `translate(${x - 50}px, ${y - 50}px)`;
      }

      requestAnimationFrame(updateImagePositions);
    };
    updateImagePositions();

    return () => {
      Matter.World.clear(world);
      Matter.Engine.clear(engine);
      Matter.Runner.stop(runner);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, []);

  return (
    <>
      <main className="flex justify-center flex-col items-center opacity-0 animate-fadeIn animate-slideIn relative">
        <Header />
        <Hero className="p-5" />
        <ProjectsGrid />
        <ContactForm />
      </main>

      <div ref={sceneRef} className="fixed top-0 left-0 w-full h-full pointer-events-none">
        <Image
          ref={triangleRef}
          src="/images/Triangle.svg"
          alt="Floating Triangle"
          width={100}
          height={100}
          className="absolute select-none"
        />
        <Image
          ref={circleRef}
          src="/images/Circle.svg"
          alt="Floating Circle"
          width={100}
          height={100}
          className="absolute select-none"
        />
        <Image
          ref={starRef}
          src="/images/star.svg"
          alt="Floating Star"
          width={100}
          height={100}
          className="absolute select-none"
        />
      </div>
    </>
  );
}

"use client";

import { useEffect, useRef, useState } from "react";
import Matter from "matter-js";
import Image from "next/image";

export default function FloatingShapes() {
  const sceneRef = useRef(null);
  const triangleRef = useRef(null);
  const circleRef = useRef(null);
  const starRef = useRef(null);
  const [engine, setEngine] = useState(null);
  const floatingTriangleRef = useRef(null);
  const floatingCircleRef = useRef(null);
  const floatingStarRef = useRef(null);

  useEffect(() => {
    const engine = Matter.Engine.create();
    const world = engine.world;
    setEngine(engine);

    // Disable gravity for floating effect
    engine.gravity.y = 0;
    engine.gravity.x = 0;

    const startX = window.innerWidth / 2;
    const startY = window.innerHeight / 2;

    // Create floating bodies
    const floatingTriangle = Matter.Bodies.circle(startX - 50, startY + 20, 20, {
      restitution: 1,
      frictionAir: 0,
      density: 0.002,
    });

    const floatingCircle = Matter.Bodies.circle(startX + 200, startY + 80, 50, {
      restitution: 1,
      frictionAir: 0,
      density: 0.002,
    });

    const floatingStar = Matter.Bodies.circle(startX - 100, startY + 100, 50, {
      restitution: 1,
      frictionAir: 0,
      density: 0.002,
    });

    Matter.World.add(world, [floatingTriangle, floatingCircle, floatingStar]);

    floatingTriangleRef.current = floatingTriangle;
    floatingCircleRef.current = floatingCircle;
    floatingStarRef.current = floatingStar;

    // Add invisible boundaries with restitution
    const boundaries = [
      // Bottom Boundary
      Matter.Bodies.rectangle(
        window.innerWidth / 2, 
        window.innerHeight + 5, 
        window.innerWidth, 
        10, 
        { isStatic: true, restitution: 1, render: { visible: false } }
      ),
      // Top Boundary
      Matter.Bodies.rectangle(
        window.innerWidth / 2, 
        -5, 
        window.innerWidth, 
        10, 
        { isStatic: true, restitution: 1, render: { visible: false } }
      ),
      // Left Boundary
      Matter.Bodies.rectangle(
        -5, 
        window.innerHeight / 2, 
        10, 
        window.innerHeight, 
        { isStatic: true, restitution: 1, render: { visible: false } }
      ),
      // Right Boundary
      Matter.Bodies.rectangle(
        window.innerWidth + 5, 
        window.innerHeight / 2, 
        10, 
        window.innerHeight, 
        { isStatic: true, restitution: 1, render: { visible: false } }
      ),
    ];

    Matter.World.add(world, boundaries);

    // Apply random initial velocity
    const applyRandomVelocity = (body) => {
      Matter.Body.setVelocity(body, {
        x: (Math.random() - 0.5) * 4,
        y: (Math.random() - 0.5) * 4,
      });
    };

    applyRandomVelocity(floatingTriangle);
    applyRandomVelocity(floatingCircle);
    applyRandomVelocity(floatingStar);

    // Run physics engine
    const runner = Matter.Runner.create();
    Matter.Runner.run(runner, engine);

    // Sync image positions with physics
    const updateImagePositions = () => {
      if (triangleRef.current && floatingTriangleRef.current) {
        const { x, y } = floatingTriangleRef.current.position;
        triangleRef.current.style.transform = `translate(${x}px, ${y}px)`;
      }
      if (circleRef.current && floatingCircleRef.current) {
        const { x, y } = floatingCircleRef.current.position;
        circleRef.current.style.transform = `translate(${x}px, ${y}px)`;
      }
      if (starRef.current && floatingStarRef.current) {
        const { x, y } = floatingStarRef.current.position;
        starRef.current.style.transform = `translate(${x}px, ${y}px)`;
      }

      requestAnimationFrame(updateImagePositions);
    };
    updateImagePositions();

    return () => {
      Matter.World.clear(world);
      Matter.Engine.clear(engine);
      Matter.Runner.stop(runner);
    };
  }, []);

  return (
    <div
      ref={sceneRef}
      className="fixed top-0 left-0 w-full h-full pointer-events-none -z-20"
    >
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
  );
}

"use client"; // Required for Next.js App Router

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
  const lastScrollY = useRef(0);

  useEffect(() => {
    const engine = Matter.Engine.create();
    const world = engine.world;
    setEngine(engine);

    engine.gravity.y = 0;
    engine.gravity.x = 0;

    const startX = window.innerWidth / 2;
    const startY = window.innerHeight / 2;

    const floatingTriangle = Matter.Bodies.circle(startX - 50, startY + 20, 20, {
      restitution: 1,
      frictionAir: 0.02,
      density: 0.002,
    });

    const floatingCircle = Matter.Bodies.circle(startX + 200, startY + 80, 50, {
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

    // **Stronger Boundaries to Prevent Escape**
    const bounds = [
      Matter.Bodies.rectangle(window.innerWidth / 2, window.innerHeight, window.innerWidth, 50, {
        isStatic: true,
      }),
      Matter.Bodies.rectangle(window.innerWidth / 2, 0, window.innerWidth, 50, {
        isStatic: true,
      }),
      Matter.Bodies.rectangle(0, window.innerHeight / 2, 50, window.innerHeight, {
        isStatic: true,
      }),
      Matter.Bodies.rectangle(window.innerWidth, window.innerHeight / 2, 50, window.innerHeight, {
        isStatic: true,
      }),
    ];
    Matter.World.add(world, bounds);

    // Apply initial movement
    [floatingTriangle, floatingCircle, floatingStar].forEach((body) => {
      Matter.Body.setVelocity(body, {
        x: (Math.random() - 0.5) * 2,
        y: (Math.random() - 0.5) * 2,
      });
    });

    const runner = Matter.Runner.create();
    Matter.Runner.run(runner, engine);

    const updateImagePositions = () => {
      const checkBounds = (body) => {
        const xMin = 50;
        const xMax = window.innerWidth - 50;
        const yMin = 50;
        const yMax = window.innerHeight - 50;

        if (body.position.x < xMin) Matter.Body.setPosition(body, { x: xMin, y: body.position.y });
        if (body.position.x > xMax) Matter.Body.setPosition(body, { x: xMax, y: body.position.y });
        if (body.position.y < yMin) Matter.Body.setPosition(body, { x: body.position.x, y: yMin });
        if (body.position.y > yMax) Matter.Body.setPosition(body, { x: body.position.x, y: yMax });

        // **Limit Max Speed to Prevent Escape**
        const maxSpeed = 5;
        if (body.velocity.x > maxSpeed || body.velocity.x < -maxSpeed) {
          Matter.Body.setVelocity(body, { x: Math.sign(body.velocity.x) * maxSpeed, y: body.velocity.y });
        }
        if (body.velocity.y > maxSpeed || body.velocity.y < -maxSpeed) {
          Matter.Body.setVelocity(body, { x: body.velocity.x, y: Math.sign(body.velocity.y) * maxSpeed });
        }
      };

      [floatingTriangleRef.current, floatingCircleRef.current, floatingStarRef.current].forEach((body) => {
        if (body) checkBounds(body);
      });

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

    const handleScroll = () => {
      const scrollY = window.scrollY;
      const scrollDelta = scrollY - lastScrollY.current;
      lastScrollY.current = scrollY;

      if (Math.abs(scrollDelta) > 2) {
        const forceMagnitude = 0.005 * scrollDelta;

        [floatingTriangle, floatingCircle, floatingStar].forEach((body) => {
          Matter.Body.applyForce(body, body.position, { x: 0, y: forceMagnitude });
        });
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      Matter.World.clear(world);
      Matter.Engine.clear(engine);
      Matter.Runner.stop(runner);
    };
  }, []);

  return (
    <>
      <div ref={sceneRef} className="fixed top-0 left-0 w-full h-full pointer-events-none -z-20">
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
          width={150}
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

"use client"; // Required for Next.js App Router

import { useEffect, useRef, useState } from "react";
import Matter from "matter-js";
import Image from "next/image";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import { ProjectsGrid } from "./components/ProjectsGrid/ProjetsGrid";
import ContactForm from "./components/ContactForm/ContactForm";
import FloatingShapes from "./components/FloatingShapes/floatingShapes";

export default function Home() {
  return (
    <>
      <main className="flex justify-center flex-col items-center opacity-0 animate-fadeIn animate-slideIn z-10 relative">
        <Header />
        <Hero className="p-5" />
        <ProjectsGrid />
        <ContactForm />
      </main>
      <FloatingShapes />
      <div className="relative w-full h-40">
    <Image 
      src="/images/Barcode.svg" 
      width={160} 
      height={40} 
      className="absolute right-0 bottom-0 w-40 h-auto -z-20" 
    />
  </div>

    </>
  );
}

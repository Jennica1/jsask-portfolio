import Image from "next/image";
import Header from "./components/Header/Header";
import Link from "next/link";
import Slideshow from "./components/Slideshow/PP-wireframe";
import Hero from "./components/Hero/Hero";
import { ProjectsGrid } from "./components/ProjectsGrid/ProjetsGrid";

export default function Home() {


  return (
    <>
    <main className="flex justify-center flex-col items-center">
      <Header/>
      
      
      <Hero className="p-50"/>
  
   <ProjectsGrid/>
    
    </main>
    </>
  );
}

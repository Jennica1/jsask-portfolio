import Image from "next/image";
import Header from "./components/Header/Header";
import Link from "next/link";
import Slideshow from "./components/Slideshow/Slideshow";
import Hero from "./components/Hero/Hero";
import { ProjectsGrid } from "./components/ProjectsGrid/ProjetsGrid";
import ContactForm from "./components/ContactForm/ContactForm";
import Contact from "./components/ContactForm/Contact";
export default function Home() {


  return (
    <>
    <main className="flex justify-center flex-col items-center opacity-0 animate-fadeIn animate-slideIn">
      <Header/>
      
      
      <Hero className="p-5"/>
  
   <ProjectsGrid/>
   <ContactForm/>
    {/* <Contact/> */}
    <image src="../images/Grid.svg"
    width={0}
    height={0}
    className="w-full h-auto"/>
    </main>
   
    </>
  );
}

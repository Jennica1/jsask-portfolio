import Image from "next/image";
import Header from "./components/Header/Header";
import Link from "next/link";
import Slideshow from "./components/Slideshow/PP-wireframe";

export default function Home() {


  return (
    <>
    <main className="flex justify-center flex-col items-center">
      <Header/>
      <h1>Jennica's Portfolio</h1>
      <p>Wip</p>
      <Link href="/pocket-pals">Pocket Pals</Link>
      <Slideshow slides = {[
          {image: './images/Leading Page.png', alt: 'Slide 1'},
          {image: './images/Article.png', alt: 'Slide 2'},
      ]} 
      height="h-[40%]"
      width="max-w-[50%]"/>
            <Slideshow slides = {[
          {image: './images/Rough Sketch.png', alt: 'Slide 1'},
          {image: './images/Site Map.png', alt: 'Slide 2'},

      ]} 
      height="h-auto"
      width="max-w-[50%]"/>
    </main>
    </>
  );
}

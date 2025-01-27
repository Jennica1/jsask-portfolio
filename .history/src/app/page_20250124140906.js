import Image from "next/image";
import Header from "./components/Header/Header";
import Link from "next/link";
import Slideshow from "./components/Slideshow/PP-wireframe";

export default function Home() {

  const slides = [
    {image: './images/pocket_pals_img.svg', alt: 'Slide 1'},
    {image: './images/pocket_pals_img.svg', alt: 'Slide 1'},
    {image: './images/pocket_pals_img.svg', alt: 'Slide 1'},
  ]

  return (
    <>
    <main className="flex justify-center flex-col items-center">
      <Header/>
      <h1>Jennica's Portfolio</h1>
      <p>Wip</p>
      <Link href="/pocket-pals">Pocket Pals</Link>
      <Slideshow slides = {slides} height="h-80"/>
    </main>
    </>
  );
}

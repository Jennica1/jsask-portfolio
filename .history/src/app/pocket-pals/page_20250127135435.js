import React from "react";
import Image from "next/image";
import Header from "../components/Header/Header";
import Slideshow from "../components/Slideshow/PP-wireframe";
import Information from "./information";

export default function pocketPals() {
  return (
    <div className="flex justify-center flex-col items-center">
      <Header />
      <main className="p-5">

        <Information/>

        <section className="relative flex flex-col md:flex-row items-start">
          {/* Background Image */}
          <Image
            src="/images/Background - Dark Blue.svg"
            width={0}
            height={0}
            alt="Background Image"
            className="w-full h-full absolute object-cover -z-10 object-cover "
          />

        </section>

        <section className="">
          <Image
            src="/images/Background - Light Blue.svg"
            width={0}
            height={0}
            alt="Background Image"
            className="w-full h-auto absolute object-cover -z-10 object-cover"
          />
        </section>

        <section className="">
          <Image
            src="/images/Background - Dark Blue.svg"
            width={0}
            height={0}
            alt="Background Image"
            className="w-full h-auto absolute object-cover -z-10 object-cover"
          />

          
        </section>
      </main>
    </div>
  );
}



{/* <div className="flex">
<Slideshow
  slides={[
    { image: "./images/Leading Page.png", alt: "Slide 1" },
    { image: "./images/Article.png", alt: "Slide 2" },
  ]}
  height="h-auto"
  width="w-52"
/>

<Slideshow
  slides={[
    { image: "./images/Rough Sketch.png", alt: "Slide 1" },
    { image: "./images/Site Map.png", alt: "Slide 2" },
  ]}
  height="h-auto"
  width="w-52"
/>
</div> */}
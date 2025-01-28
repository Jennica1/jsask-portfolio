import React from "react";
import Image from "next/image";
import Header from "../components/Header/Header";
import Slideshow from "../components/Slideshow/PP-wireframe";
import Information from "./information";
import AppInformation from "./appInformation";

export default function pocketPals() {
  return (
    <div className="flex justify-center flex-col items-center">
      <Header />
      <main className="lg:p-10 p-5 ">
        <AppInformation />
        <Information className="" />

        
        <section className="relative flex flex-col md:flex-row items-start mb-10">
  {/* Images for larger screens */}
  <div className="w-full">
    <label className="block text-lg font-semibold mb-3">Final Design</label>
    <div className="hidden md:flex gap-4 items-center -mt-3">
      <Image
        src="/pocketPals/HiFi - Home Page.png"
        width={0}
        height={0}
        className="w-full h-auto"
        alt="HiFi - Home Page"
      />
      <Image
        src="/pocketPals/HiFi - Marmot Article.png"
        width={0}
        height={0}
        className="w-full h-auto"
        alt="HiFi - Marmot Article"
      />
      <Image
        src="/pocketPals/HiFi - Choose Your Topic.png"
        width={0}
        height={0}
        className="w-full h-auto"
        alt="HiFi - Choose Your Topic"
      />
      <Image
        src="/pocketPals/HiFi - Styling.png"
        width={0}
        height={0}
        className="w-full h-full"
        alt="HiFi - Styling"
      />
    </div>
  </div>

  {/* Slideshow for smaller screens */}
  <div className="flex md:hidden w-full flex-col">
    <label className="block text-lg font-semibold mb-3">Final Design</label>
    <Slideshow
      slides={[
        { image: "./pocketPals/HiFi - Home Page.png", alt: "Slide 1" },
        { image: "./pocketPals/HiFi - Marmot Article.png", alt: "Slide 2" },
        { image: "./pocketPals/HiFi - Choose Your Topic.png", alt: "Slide 3" },
      ]}
      height="h-auto"
      width="w-40"
    />
    <Image
      src="/pocketPals/HiFi - Styling.png"
      width={0}
      height={0}
      className="w-full h-full p-5"
      alt="HiFi - Styling"
    />
  </div>
</section>


        <section className="relative flex flex-col md:flex-row items-start mb-12">
          <Image
            src="/images/Background - Light Blue.svg"
            width={0}
            height={0}
            alt="Background Image"
            className="w-full h-auto absolute object-cover -z-10 object-cover"
          />

          <div className="">
            <Slideshow
              slides={[
                {
                  image: "./pocketPals/LoFi - Leading Page.png",
                  alt: "Slide 1",
                },
                { image: "./pocketPals/LoFi - Article.png", alt: "Slide 2" },
              ]}
              height="h-auto"
              width="w-52"
            />

            <Slideshow
              slides={[
                {
                  image: "./pocketPals/LoFi - Rough Sketch.png",
                  alt: "Slide 1",
                },
                { image: "./pocketPals/LoFi - Site Map.png", alt: "Slide 2" },
              ]}
              height="h-auto"
              width="w-52"
            />
          </div>
        </section>

        <section className="relative flex flex-col md:flex-row items-start mb-12">
          <Image
            src="/images/Background - Dark Blue.svg"
            width={0}
            height={0}
            alt="Background Image"
            className="w-full h-auto absolute object-cover -z-10 object-cover"
          />

          <div className="">
            <Slideshow
              slides={[
                {
                  image: "./pocketPals/LoFi - Leading Page.png",
                  alt: "Slide 1",
                },
                { image: "./pocketPals/LoFi - Article.png", alt: "Slide 2" },
              ]}
              height="h-auto"
              width="w-52"
            />

            <Slideshow
              slides={[
                {
                  image: "./pocketPals/LoFi - Rough Sketch.png",
                  alt: "Slide 1",
                },
                { image: "./pocketPals/LoFi - Site Map.png", alt: "Slide 2" },
              ]}
              height="h-auto"
              width="w-52"
            />
          </div>
        </section>
      </main>
    </div>
  );
}

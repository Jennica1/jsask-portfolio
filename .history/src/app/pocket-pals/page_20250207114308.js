import React from "react";
import Image from "next/image";
import Header from "../components/Header/Header";
import Slideshow from "../components/Slideshow/PP-wireframe";
import Information from "./information";
import AppInformation from "../components/AppInformation/AppInformation";

export default function pocketPals() {
  return (
    <div className="flex justify-center flex-col items-center">
      <Header />
      <main className="lg:p-10 p-5 opacity-0 animate-fadeIn animate-slideIn">
      <AppInformation
  appName="Pocket Pals"
  appLink="https://pocketpals.vercel.app/"
  role="UI/UX Designer"
  skills={['Figma', 'Next.js', 'User Testing']}
  description="A form filling app for caregivers to auto-fill their forms as well as simplifying documents."
  status="UI/UX"
/>

        <Information className="" />

        <section className="relative flex flex-col md:flex-row items-start mb-10">
          {/* Images for larger screens */}
          <div className="w-full">
            <label className="block text-lg font-semibold mb-3">
              Final Design
            </label>
            <div className="hidden md:flex gap-4 items-center -mt-3">
              <Image
                src="/pocketPals/HiFi - Home Page.webp"
                unoptimized
                width={0}
                height={0}
                className="w-full h-auto"
                alt="HiFi - Home Page"
              />
              <Image
                src="/pocketPals/HiFi - Marmot Article.webp"
                unoptimized
                width={0}
                height={0}
                className="w-full h-auto"
                alt="HiFi - Marmot Article"
              />
              <Image
                src="/pocketPals/HiFi - Choose Your Topic.webp"
                unoptimized
                width={0}
                height={0}
                className="w-full h-auto"
                alt="HiFi - Choose Your Topic"
              />
              <Image
                src="/pocketPals/HiFi - Styling.png"
                unoptimized
                width={0}
                height={0}
                className="w-full h-full"
                alt="HiFi - Styling"
              />
            </div>
          </div>

          {/* Slideshow for smaller screens */}
          <div className="flex md:hidden w-full flex-col">
            <Slideshow
              slides={[
                { image: "./pocketPals/HiFi - Home Page.png", alt: "Slide 1" },
                {
                  image: "./pocketPals/HiFi - Marmot Article.png",
                  alt: "Slide 2",
                },
                {
                  image: "./pocketPals/HiFi - Choose Your Topic.png",
                  alt: "Slide 3",
                },
              ]}
              height="h-auto"
              width="w-52"
            />
            <Image
              src="/pocketPals/HiFi - Styling.png"
              unoptimized
              width={0}
              height={0}
              className="w-full h-full p-10"
              alt="HiFi - Styling"
            />
          </div>
        </section>

        <section className="relative flex flex-col md:flex-row items-start mb-10">
          {/* Images for larger screens */}
          <div className="w-full">
            <label className="block text-lg font-semibold mb-3">
              MidFi Design
            </label>
            <div className="hidden md:flex gap-4 items-center -mt-3">
              <Image
                src="/pocketPals/MidFi - Choose Your Region.webp"
                unoptimized
                width={0}
                height={0}
                className="w-full h-auto"
                alt="HiFi - Home Page"
              />
              <Image
                src="/pocketPals/MidFi - Article.webp"
                unoptimized
                width={0}
                height={0}
                className="w-full h-auto"
                alt="HiFi - Marmot Article"
              />
              <Image
                src="/pocketPals/MidFi - Leading Page.webp"
                unoptimized
                width={0}
                height={0}
                className="w-full h-full"
                alt="HiFi - Styling"
              />
              <Image
                src="/pocketPals/MidFi - Game Selection.webp"
                unoptimized
                width={0}
                height={0}
                className="w-full h-full"
                alt="HiFi - Styling"
              />
            </div>
          </div>

          {/* Slideshow for smaller screens */}
          <div className="flex md:hidden w-full flex-col">
            <Slideshow
              slides={[
                {
                  image: "/pocketPals/MidFi - Choose Your Region.png",
                  alt: "Slide 1",
                },
                {
                  image: "/pocketPals/MidFi - Article.png",
                  alt: "Slide 2",
                },
                {
                  image: "/pocketPals/MidFi - Leading Page.png",
                  alt: "Slide 3",
                },
                {
                  image: "/pocketPals/MidFi - Game Selection.webp",
                  alt: "Slide 3",
                },
                
              ]}
              height="h-auto"
              width="w-52"
            />
          </div>
        </section>

        <section className="relative flex flex-col md:flex-row items-start mb-10">
          {/* Images for larger screens */}
          <div className="w-full">
            <label className="block text-lg font-semibold mb-3">
              LoFi Design
            </label>
            <div className="hidden md:flex gap-4 items-center -mt-3">
              <Image
                src="/pocketPals/LoFi - Leading Page.webp"
                unoptimized
                width={0}
                height={0}
                className="w-full h-auto"
                alt="HiFi - Home Page"
              />
              <Image
                src="/pocketPals/LoFi - Article.webp"
                unoptimized
                width={0}
                height={0}
                className="w-full h-auto "
                alt="HiFi - Marmot Article"
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
                width="lg:w-[40%] md:w-1/3 "
              />
            </div>
          </div>
          {/* Slideshow for smaller screens */}
<div className="flex md:hidden w-full flex-col items-center gap-8 py-10">
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
    className="mb-6"
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

{
  /* <Image
            src="/images/Background - Dark Blue.svg"
            width={0}
            height={0}
            alt="Background Image"
            className="w-full h-auto absolute object-cover -z-10 object-cover"
          />*/
}

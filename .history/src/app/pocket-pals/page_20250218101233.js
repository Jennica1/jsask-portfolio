import React from "react";
import Image from "next/image";
import Header from "../components/Header/Header";
import Slideshow from "../components/Slideshow/Slideshow";
import Information from "./information";
import AppInformation from "../components/AppInformation/AppInformation";

export default function pocketPals() {
  return (
    <div className="flex justify-center flex-col items-center">
      <Header />
      <main className="lg:p-10 p-5 opacity-0 animate-fadeIn animate-slideIn">
      <Image
       src="/pocketPals/Banner Logo.webp"
       width={0}
       height={0}
       unoptimized
       alt="happy path"
       className="h-auto w-full"
        />

        <AppInformation
          appName="Pocket Pals"
          appLink="https://pocketpals.vercel.app/"
          linkName="View App"
          role="UI/UX Designer"
          skills={['Figma', 'Next.js', 'User Testing']}
          description="A learning app for kids. Focused on educating children about endangered animals across the globe through interactive learning."
          status="UI/UX"
        />

        <Information className="" />

        <section className="relative flex flex-col md:flex-row items-start mb-10">
          {/* Images for larger screens */}
          <div className="w-full">
            <label className="block text-lg font-semibold mb-3">
              Hifi Screens:
            </label>
            <div className="hidden md:flex gap-8 items-center mt-3 mr-20 ml-20 ">
              <Image
                src="/pocketPals/HiFi - Home Page.webp"
                unoptimized
                width={0}
                height={0}
                className="w-full h-auto rounded-2xl"
                alt="HiFi - Home Page"
              />
              <Image
                src="/pocketPals/HiFi - Marmot Article.png"
                unoptimized
                width={0}
                height={0}
                className="w-[103%] h-auto rounded-2xl"
                alt="HiFi - Marmot Article"
              />
              <Image
                src="/pocketPals/HiFi - Article.png"
                unoptimized
                width={0}
                height={0}
                className="w-[103%] h-auto rounded-2xl"
                alt="HiFi - Choose Your Topic"
              />

            </div>
          </div>

          {/* Slideshow for smaller screens */}
          <div className="flex md:hidden w-full flex-col">
            <Slideshow
              slides={[
                { image: "./pocketPals/HiFi - Home Page.webp", alt: "Slide 1" },
                {
                  image: "./pocketPals/HiFi - Marmot Article.png",
                  alt: "Slide 2",
                },
                {
                  image: "./pocketPals/HiFi - Article.png",
                  alt: "Slide 3",
                },
              ]}
              height="h-auto"
              width="w-full"
            />
          </div>
        </section>

        <section className="relative flex flex-col md:flex-row items-start mb-10">
          {/* Images for larger screens */}
          <div className="w-full">
            <label className="block text-lg font-semibold mb-3">
              Design Process:
            </label>
            <div className="hidden md:flex gap-8 items-center mt-3 mr-20 ml-20 ">
              <Image
                src="/pocketPals/LoFi - Article.webp"
                unoptimized
                width={0}
                height={0}
                className="w-full h-auto rounded-2xl"
                alt="HiFi - Home Page"
              />
              <Image
                src="/pocketPals/MidFi - Article.webp"
                unoptimized
                width={0}
                height={0}
                className="w-full h-auto rounded-2xl"
                alt="HiFi - Marmot Article"
              />
              <Image
                src="/pocketPals/HiFi - Article.png"
                unoptimized
                width={0}
                height={0}
                className="w-[98%] h-full rounded-2xl"
                alt="HiFi - Styling"
              />

            </div>
          </div>

          {/* Slideshow for smaller screens */}
          <div className="flex md:hidden w-full flex-col">
            <Slideshow
              slides={[
                {
                  image: "/pocketPals/LoFi - Article.webp",
                  alt: "Slide 1",
                },
                {
                  image: "/pocketPals/MidFi - Article.webp",
                  alt: "Slide 2",
                },
                {
                  image: "/pocketPals/HiFi - Marmot Article.webp",
                  alt: "Slide 3",
                },
              ]}
              height="h-auto"
              width="w-full"
            />
          </div>
        </section>

        <section className="relative flex flex-col md:flex-row items-start mb-10">
          {/* Images for larger screens */}
          <div className="w-full">
            <label className="block text-lg font-semibold mb-3">
             Graphic Assets:
            </label>
            <div className="hidden md:flex gap-8 items-center mt-3 mr-20 ml-20">
              <Image
                src="/pocketPals/Animal Icons.webp"
                unoptimized
                width={0}
                height={0}
                className="w-full h-auto"
                alt="buttons that lead to different animals"
              />
              <Image
                src="/pocketPals/Assets.webp"
                unoptimized
                width={0}
                height={0}
                className="w-[60%] h-auto "
                alt="colours chosen and font choices"
              />
              
            </div>
          </div>
          {/* Slideshow for smaller screens */}
          <div className="flex md:hidden w-full flex-col items-center gap-8 py-10">
            <Slideshow
              slides={[
                {
                  image: "/pocketPals/Animal Icons.webp",
                  alt: "Slide 1",
                },
                { image: "./pocketPals/Assets.webp", alt: "Slide 2" },
              ]}
              height="h-auto"
              width="w-full"
              className="mb-6"
            />
  
          </div>
        </section>

        <section className="relative flex flex-col md:flex-row items-start mb-10">
          {/* Images for larger screens */}
          <div className="w-full">
            <label className="block text-lg font-semibold mb-3">
             Rough Drafts
            </label>
            <div className="hidden md:flex gap-8 items-center mt-3 mr-20 ml-20">
              <Image
                src="/pocketPals/LoFi - Rough Sketch.png"
                unoptimized
                width={0}
                height={0}
                className="w-full h-auto"
                alt="rough layout idea for app"
              />
              <Image
                src="/pocketPals/LoFi - Site Map.png"
                unoptimized
                width={0}
                height={0}
                className="w-full h-auto "
                alt="map laying out app navigation"
              />
              
            </div>
          </div>
          {/* Slideshow for smaller screens */}
          <div className="flex md:hidden w-full flex-col items-center gap-8 py-10">
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


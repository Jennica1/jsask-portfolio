import React from "react";
import Image from "next/image";
import Header from "../components/Header/Header";
import Slideshow from "../components/Slideshow/Slideshow";
import AppInformation from "../components/AppInformation/AppInformation";

export default function pocketPals() {
  return (
    <div className="flex justify-center flex-col items-center">
      <Header />
      <main className="lg:px-40 lg:p-10 p-5 opacity-0 animate-fadeIn animate-slideIn">
        <Image
          src="/lysstyle/Banner.png"
          width={0}
          height={0}
          unoptimized
          alt="happy path"
          className="h-auto w-full"
        />

        <AppInformation
          appName="Lysstyle"
          appLink="https://lysstyle.com/"
          linkName="View Site"
          role="UI/UX Designer"
          skills={["Figma", "Next.js", "User Testing"]}
          description="A learning app for kids. Focused on educating children about endangered animals across the globe through interactive learning."
          status="UI/UX"
        />


        <section className="relative flex flex-col md:flex-row items-start mb-10 mt-44">
          {/* Images for larger screens */}
          <div className="w-full">
            <h2 className="md:mt-3 text-3xl font-bold">Hifi Screens:</h2>
            <hr className="border-black border-2 lg:w-[70%] "></hr>
            <div className="hidden md:flex max-w-8xl gap-5 pt-4 ">
              <Image
                src="/pocketPals/HiFi - Home Page.webp"
                unoptimized
                width={500}
                height={700}
                className="flex-1 basis-0 min-w-0 w-full h-auto  rounded-2xl"
                alt="HiFi - Home Page"
              />
              <Image
                src="/pocketPals/HiFi - Marmot Article.png"
                unoptimized
                width={500}
                height={700}
                className="flex-1 basis-0 min-w-0 w-full h-auto h-auto rounded-2xl"
                alt="HiFi - Marmot Article"
              />
              <Image
                src="/pocketPals/HiFi - Games.png"
                unoptimized
                width={500}
                height={700}
                className="flex-1 basis-0 min-w-0 w-full h-auto  h-auto rounded-2xl"
                alt="HiFi - Choose Your Topic"
              />
            </div>
          </div>

          {/* Slideshow for smaller screens */}
          <div className="flex md:hidden w-full flex-col pt-4 ">
            <Slideshow
              slides={[
                { image: "./pocketPals/HiFi - Home Page.webp", alt: "Slide 1" },
                {
                  image: "./pocketPals/HiFi - Marmot Article.png",
                  alt: "Slide 2",
                },
                {
                  image: "./pocketPals/HiFi - Games.png",
                  alt: "Slide 3",
                },
              ]}
              height="h-auto"
              width="w-full"
            />
          </div>
        </section>

        <section className="relative flex flex-col md:flex-row items-start mb-10 mt-44">
          {/* Images for larger screens */}
          <div className="w-full">
            <h2 className="md:mt-3 text-3xl font-bold">Design Process:</h2>
            <hr className="border-black border-2 lg:w-[70%] "></hr>
            <div className="hidden md:flex max-w-8xl gap-5 pt-4">
              <Image
                src="/pocketPals/LoFi - Article.webp"
                unoptimized
                width={500}
                height={700}
                className="flex-1 basis-0 min-w-0 w-full h-auto  rounded-2xl"
                alt="HiFi - Home Page"
              />
              <Image
                src="/pocketPals/MidFi - Article.webp"
                unoptimized
                width={500}
                height={700}
                className="flex-1 basis-0 min-w-0 w-full h-auto  rounded-2xl"
                alt="HiFi - Marmot Article"
              />
              <Image
                src="/pocketPals/HiFi - Article.png"
                unoptimized
                width={500}
                height={700}
                className="flex-1 basis-0 min-w-0 w-full h-auto  rounded-2xl"
                alt="HiFi - Styling"
              />
            </div>
          </div>

          {/* Slideshow for smaller screens */}
          <div className="flex md:hidden w-full flex-col pt-4">
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
                  image: "/pocketPals/HiFi - Article.png",
                  alt: "Slide 3",
                },
              ]}
              height="h-auto"
              width="w-full"
            />
          </div>
        </section>

        <section className="relative flex flex-col md:flex-row items-start mb-10 mt-44">
          {/* Images for larger screens */}
          <div className="w-full">
            <h2 className="md:mt-3 text-3xl font-bold">Graphic Assets:</h2>
            <hr className="border-black border-2 lg:w-[70%] "></hr>
            <div className="hidden md:flex max-w-8xl gap-5 pt-4 items-start">
              <Image
                src="/pocketPals/Animal Icons.webp"
                unoptimized
                width={500}
                height={700}
                className="flex-1 basis-0 min-w-0 w-full max-w-full h-auto aspect-[50%] object-contain"
                alt="buttons that lead to different animals"
              />
              <Image
                src="/pocketPals/Assets.webp"
                unoptimized
                width={500}
                height={700}
                className="flex-1 basis-0 min-w-0 w-full max-w-md h-auto aspect-[50%] object-contain"
                alt="colours chosen and font choices"
              />
            </div>
          </div>
          {/* Slideshow for smaller screens */}
          <div className="flex md:hidden w-full flex-col items-center gap-8 pt-4 ">
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

        <section className="relative flex flex-col md:flex-row items-start mb-10 mt-44">
          {/* Images for larger screens */}
          <div className="w-full">
            <h2 className="md:mt-3 text-3xl font-bold">Rough Drafts:</h2>
            <hr className="border-black border-2 lg:w-[70%] "></hr>
            <div className="hidden md:flex max-w-8xl pt-4 gap-8 items-start">
              <Image
                src="/pocketPals/LoFi - Rough Sketch.png"
                unoptimized
                width={500}
                height={700}
                className="flex-1 basis-0 max-w-lg h-auto aspect-[50%] object-contain"
                alt="rough layout idea for app"
              />
              <Image
                src="/pocketPals/LoFi - Site Map.png"
                unoptimized
                width={500}
                height={700}
                className="flex-1 basis-0 min-w-0 w-full max-w-full h-auto aspect-[50%] object-contain"
                alt="map laying out app navigation"
              />
            </div>
          </div>
          {/* Slideshow for smaller screens */}
          <div className="flex md:hidden w-full flex-col items-center gap-8 pt-4">
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

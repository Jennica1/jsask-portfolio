import React from "react";
import Image from "next/image";
import Header from "../components/Header/Header";
// import AppInformation from "../components/AppInformation/AppInformation";
import AppInformation from "./AppInformation";
export default function ACG() {
  return (
    <>
      <div className="flex justify-center flex-col items-center">
        <Header />
        <main className="lg:px-40 p-5 opacity-0 animate-fadeIn animate-slideIn">
          <video
            autoPlay
            controls
            preload="none"
            loop
            muted
            className="mx-auto w-full max-w-full"
          >
            <source src="/ACG/acgpromo.mp4" />
          </video>

          <AppInformation
            appName="Aspects of Elements"
            appLink="https://pocketpals.vercel.app/"
            linkName="Steam Workshop"
            role="Illustrator"
            skills={["Illustrator", "Photoshop"]}
            description="ACG: Aspects of Elements is a strategy card game with gameplay inspired by Marvel Snap and Gwent. "
            status="Illustration"
          />

          <section className="flex flex-row justify-center gap-6 w-full max-w-6xl mx-auto pt-5">
            <div className="flex-1 max-w-fit">
              <h2 className="md:mt-3 text-xl font-bold">Background:</h2>
              <p className="max-w-2xl">
                In ACG: Aspect of Elements, you must carefully strategize in
                turn-based battles to win. Players have the option to customize
                their deck with different elements such as: fire, water, earth,
                or air – as each offers unique abilities. Utilize spells,
                creatures, and artifacts to support your deck and victory shall
                be yours!
              </p>
            </div>
          </section>

          <section className="relative flex flex-col md:flex-row items-start mb-10 mt-20">
            {/* Images for larger screens */}
            <div className="w-full">
            <h2 className="md:mt-3 text-3xl font-bold">Card Illustrations:</h2>
            <hr className="border-black border-2 lg:w-[70%] "></hr>
              <div className="flex flex-col md:flex-row max-w-8xl gap-2 pt-4 items-start">
                <Image
                  src="/ACG/Goblin.webp"
                  unoptimized
                  width={500}
                  height={700}
                  className="flex-1 basis-0 min-w-0 w-full max-w-full h-auto aspect-[5/7] object-contain"
                  alt="HiFi - Home Page"
                />
                <Image
                  src="/ACG/Helpful Witch.webp"
                  unoptimized
                  width={500}
                  height={700}
                  className="flex-1 basis-0 min-w-0 w-full max-w-full h-auto aspect-[5/7] object-contain"
                  alt="HiFi - Marmot Article"
                />
                <Image
                  src="/ACG/Jolly Elf.webp"
                  unoptimized
                  width={500}
                  height={700}
                  className="flex-1 basis-0 min-w-0 w-full max-w-full h-auto aspect-[5/7] object-contain"
                  alt="HiFi - Choose Your Topic"
                />
                <Image
                  src="/ACG/Scary Goth.webp"
                  unoptimized
                  width={500}
                  height={700}
                  className="flex-1 basis-0 min-w-0 w-full max-w-full h-auto aspect-[5/7] object-contain"
                  alt="HiFi - Choose Your Topic"
                />
              </div>
            </div>
          </section>

          <section className="relative flex flex-col md:flex-row items-start mb-10 mt-44">
            <div className="w-full">
            <h2 className="md:mt-3 text-3xl font-bold">Background Illustrations:</h2>
            <hr className="border-black border-2 lg:w-[70%] "></hr>
              <div className="flex flex-col gap-8 items-center mt-3 md:mr-20 md:ml-20 ">
                <Image
                  src="/ACG/Background.webp"
                  unoptimized
                  width={0}
                  height={0}
                  className="w-full h-auto"
                  alt="HiFi - Home Page"
                />

                <Image
                  src="/ACG/Background2.webp"
                  unoptimized
                  width={0}
                  height={0}
                  className="w-full h-auto"
                  alt="HiFi - Home Page"
                />
                <Image
                  src="/ACG/Background3.webp"
                  unoptimized
                  width={0}
                  height={0}
                  className="w-full h-auto"
                  alt="HiFi - Home Page"
                />
              </div>
            </div>
          </section>

          <section className="relative flex flex-col md:flex-row items-start mb-10 mt-20">
            <div className="w-full">
            <h2 className="md:mt-3 text-3xl font-bold">Lofi Tutorial Video:</h2>
            <hr className="border-black border-2 lg:w-[70%] "></hr>
              <div className="flex flex-col gap-8 items-center mt-3 md:mr-20 md:ml-20 ">
                <video
                  autoPlay
                  controls
                  preload="none"
                  loop
                  muted
                  playsInline
                  className="mx-auto w-full max-w-full"
                >
                  <source src="/ACG/LoFi - Tutorial Muted.mp4" />
                </video>
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  );
}

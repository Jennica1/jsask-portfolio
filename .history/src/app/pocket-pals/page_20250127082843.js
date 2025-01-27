import React from "react";
import Image from "next/image";
import Header from "../components/Header/Header";
import Slideshow from "../components/Slideshow/PP-wireframe";

export default function pocketPals() {
  return (
    <div className="flex justify-center flex-col items-center">
      <Header />
      <main className="p-5">
        <section className="relative ">
          {/* Background Image */}
          <Image
            src="/images/Proj_Background.svg"
            width={0}
            height={0}
            alt="Background Image"
            className="w-full h-auto absolute inset-0 object-cover "
          />

          {/* Foreground Content */}
          <div className="relative flex flex-col md:flex-row items-start gap-8 p-8 ">
            {/* App Title Image */}
            <Image
              src="/images/pocket_pals_img.svg"
              width={0}
              height={0}
              alt="pocket pals"
              className="w-[90%] sm:w-[80%] md:w-[60%] lg:w-[60%] max-w-[1200px] object-contain  mx-auto md:mx-0"
            />

            {/* App Details */}
            <div className="text-sm lg:pt-10 sm:w-2/3">
              <span className="inline-flex items-baseline ">
                <h2 className="text-2xl font-bold">Pocket Pals</h2>
                <a href="https://pocketpals.vercel.app/">Pocket Pals</a>
              </span>

              <p className="text-base text-gray-600">UI/UX</p>
              <p className="mt-4 md:mt-2 text-base w-[90%]">
                A learning app for kids. Focused on educating children about
                endangered animals across the globe through interactive
                learning.
              </p>
              <h2 className="mt-6 md:mt-3 text-xl font-bold">
                Project Details:
              </h2>
              <div className="mt-4">
                <p className="text-base font-medium md:-mt-3">Role:</p>
                <p className="text-base">App Interface Designer</p>
              </div>
              <div className="mt-4">
                <p className="text-base font-medium">Skills Used:</p>
                <div className="flex flex-wrap gap-3 mt-2">
                  <span className="bg-gray-100 px-3 py-2 rounded text-base">
                    Figma
                  </span>
                  <span className="bg-gray-100 px-3 py-2 rounded text-base">
                    Next.js
                  </span>
                  <span className="bg-gray-100 px-3 py-2 rounded text-base">
                    User Testing
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="relative flex flex-col md:flex-row items-start">
          {/* Background Image */}
          <Image
            src="/images/Background - Dark Blue.svg"
            width={0}
            height={0}
            alt="Background Image"
            className="w-full h-auto absolute inset-0 object-cover"
          />

          {/* Content */}
          <div className="relative z-20 p-6 md:p-10  ">
            <h2 className="mt-6 md:mt-3 text-xl font-bold">
              Background Information
            </h2>

            {/* Parent Flex Container */}
            <div className="flex flex-col md:flex-row items-start gap-6 mt-4">
              
                <Slideshow
                  slides={[
                    { image: "./images/Leading Page.png", alt: "Slide 1" },
                    { image: "./images/Article.png", alt: "Slide 2" },
                  ]}
                  height=""
                  width="w-52"
                />

                <Slideshow
                  slides={[
                    { image: "./images/Rough Sketch.png", alt: "Slide 1" },
                    { image: "./images/Site Map.png", alt: "Slide 2" },
                  ]}
                  height=""
                  width="w-52%"
                />
             

              {/* Ordered List */}
              <ol className="list-decimal ml-6">
                Key features are:
                <ul className="list-disc ml-6">
                  <li>Simple language</li>
                  <li>Straight-forward interface</li>
                  <li>Colourful</li>
                  <li>Engaging with young audience</li>
                </ul>
              </ol>
            </div>
          </div>
        </section>

        <section className="relative flex flex-col md:flex-row items-start ">
          <Image
            src="/images/Background - Light Blue.svg"
            width={0}
            height={0}
            alt="Background Image"
            className="w-full h-auto object-cover -z-10 object-cover"
          />

          <h2 className="mt-6 md:mt-3 text-xl font-bold">Challenges Faced:</h2>
          <ol>
            <ul>Colour choices were bright but did not mesh well together</ul>
            <ul>Balancing amount of article information</ul>
            <ul>
              How to could we customize the initial set-up for the account?
            </ul>
          </ol>
        </section>

        <section className="relative flex flex-col md:flex-row items-start ">
          <Image
            src="/images/Background - Dark Blue.svg"
            width={0}
            height={0}
            alt="Background Image"
            className="w-full h-auto object-cover -z-10 object-cover"
          />

          <h2 className="mt-6 md:mt-3 text-xl font-bold">Final Design:</h2>
          <ol>
            <ul>
              Final UI design had no error in user testers navigating the app
            </ul>
            <ul>Colours chosen were bright yet, complimented each other</ul>
            <ul>
              Reduced word count of information and increased text size for
              better reading
            </ul>
          </ol>
        </section>
      </main>
    </div>
  );
}

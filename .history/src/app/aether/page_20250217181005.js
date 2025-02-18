import React from "react";
import Image from "next/image";
import Header from "../components/Header/Header";
import AppInformation from "./AppInformation";
import CoreValues from "./CoreValues";
import Slideshow from "../components/Slideshow/Slideshow";
import BackgroundInfo from "./BackgroundInfo";


import {
  ReactCompareSliderImage,
  ReactCompareSlider,
} from "react-compare-slider";

export default function Aether() {
  return (
    <div className="flex justify-center flex-col items-center">
      <Header />
      <main className="lg:px-40 p-5 opacity-0 animate-fadeIn animate-slideIn">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="mx-auto w-full max-w-full"
        >
          <source src="/aether/aetherBanner.webm" />
        </video>
        <AppInformation
          appName="Aether"
          appLink={[
            "https://www.figma.com/proto/cONVb0kTlMWcbc6h87uAMQ/Aether-Prototype-(Copy)?page-id=2750%3A6683&node-id=2751-16880&p=f&viewport=410%2C424%2C0.03&t=0LSxHP6hTHazRigC-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=2750%3A7345&show-proto-sidebar=1",
            "https://aether-landing-page.vercel.app/",
          ]}
          role="Developer"
          skills={["Figma", "React Native", "JavaScript"]}
          description="A form filling app for caregivers to auto-fill their forms as well as simplifying documents."
          status="Development"
        />

        <section className="flex flex-row justify-center gap-6 w-full max-w-6xl mx-auto pt-10 mt-20">
          {/* Left Box */}
          <div className="w-[8px] bg-[#890620] h-grow"></div>

          {/* Main Content */}
          <div className="flex-1 max-w-fit">
            <h2 className="md:mt-3 text-xl font-bold">Context:</h2>
            <p className="max-w-xl">
              Caregivers face significant challenges with repetitive, stressful, and time-consuming paperwork which affects their ability to focus on providing quality care to seniors. Although there are tools that assist in form filling, there hasn't any specifically targeted towards caregivers.
            </p>

            <h2 className="mt-6 md:mt-3 text-xl font-bold">
              Key Issues to Solve:
            </h2>
            <ul className="list-disc ml-6 mb-6">
              <li>
                Relieving caregivers of tedious tasks of repetitive form
                filling.
              </li>
              <li>
                Translating document jargon to more easy-to-understand terms.
              </li>
              <li>
                Unnecessary effort to look for different Canadian government
                forms.
              </li>
              <li>
                Managing several client information and keeping it organized.
              </li>
            </ul>
          </div>
        </section>

        <BackgroundInfo />

        <section className="mt-44">
          <div>
            <h2 className="md:mt-3 text-xl font-bold">Key User Personas:</h2>
            <p>Based on survey results as well as online research two main user personas were created:</p>
            {/* Images visible on medium and larger screens */}
            <div className="hidden md:flex gap-5">
              <Image
                src="/aether/User Persona.webp"
                width={0}
                height={0}
                unoptimized
                alt="lofi wireframe"
                className="w-full h-auto"
              />
              <Image
                src="/aether/User Persona 2.webp"
                width={0}
                height={0}
                unoptimized
                alt="lofi wireframe"
                className="w-full h-auto"
              />
            </div>

            {/* Slideshow visible on medium and smaller screens */}
            <div className="block md:hidden">
              <Slideshow
                slides={[
                  { image: "./aether/User Persona.webp", alt: "Slide 1" },
                  { image: "./aether/User Persona 2.webp", alt: "Slide 2" },
                ]}
                height="h-auto"
                width="w-100"
              />
            </div>
          </div>

          <section className="mt-20">
            <div className="flex flex-col">
              {/* Text Section */}
              <div className="w-full md:w-2/3 pt-6 md:pt-24 md:mr-[20%] md:text-left">
                <h2 className="text-xl font-bold">Competitive Analysis:</h2>
                <p className="text-left">
                  Looking into what apps are currently available, Aether’s research found that there are a few that do provide tools that assist in documentations. However, not only do they not provide an all-in-one solution, but also target different demographic with different various uses.
                </p>
              </div>

              {/* Image Section */}
              <Image
                src="/aether/Comp Analysis.webp"
                width={0}
                height={0}
                unoptimized
                alt="lofi wireframe"
                className="w-auto h-full"
              />
            </div>
          </section>


          <section className="mt-20">
            <div className="flex flex-row ">
              <div className="flex flex-row gap-6 w-full max-w-6xl pt-10 ">
                <div className="w-[8px] bg-[#890620] h-30"></div>
                {/* Main Content */}
                <div className="flex-1 max-w-fit">
                  <h2 className="md:mt-3 text-xl font-bold">Solution:</h2>
                  <p className="max-w-xl">
                    Aether is a form-filling app designed to alleviate stress for
                    caregivers. It streamlines the document-filling process by
                    simplifying complex paperwork, saving time through its
                    auto-fill capabilities, and makes the form-filling process
                    hassle-free.
                  </p>

                  <ul className="list-disc ml-6 mb-6 mt-6 font-bold text-xl max-w-60 ">
                    <li>
                      <div className="flex justify-between items-center">
                        <p>Paraphrasing</p>
                        <Image
                          src="/images/checkmark-outline.svg"
                          width={30}
                          height={10}
                          unoptimized
                          alt="lofi wireframe"
                          className=""
                        />
                      </div>
                    </li>
                    <li>
                      <div className="flex justify-between items-center">
                        <p>Autofilling</p>
                        <Image
                          src="/images/checkmark-outline.svg"
                          width={30}
                          height={10}
                          unoptimized
                          alt="lofi wireframe"
                          className=""
                        />
                      </div>
                    </li>
                    <li>
                      <div className="flex justify-between items-center">
                        <p>OCR Scanning</p>
                        <Image
                          src="/images/checkmark-outline.svg"
                          width={30}
                          height={10}
                          unoptimized
                          alt="lofi wireframe"
                          className=""
                        />
                      </div>
                    </li>
                    <li>
                      <div className="flex justify-between items-center">
                        <p>Text Editor</p>
                        <Image
                          src="/images/checkmark-outline.svg"
                          width={30}
                          height={10}
                          unoptimized
                          alt="lofi wireframe"
                          className=""
                        />
                      </div>
                    </li>
                  </ul>
                </div>
              </div>

              <Image
                src="/aether/Solution.webp"
                width={0}
                height={0}
                unoptimized
                alt="lofi wireframe"
                className="w-80  h-auto mt-6 md:mt-0"
              />
            </div>
          </section>

          <div className="mt-44">
            <h2 className="md:mt-3 text-xl font-bold">User Happy Path:</h2>
            <Image
              src="/aether/User Happy Path.webp"
              width={0}
              height={0}
              unoptimized
              alt="happy path"
              className="h-auto w-full"
            />
          </div>

          <div className="mt-44">
            <h2 className="md:mt-3 text-xl font-bold">Wireframes:</h2>
            <ReactCompareSlider
              itemOne={
                <ReactCompareSliderImage
                  src="/aether/LoFi - Wireframes.webp"
                  alt="Lofi wirerfames"
                />
              }
              itemTwo={
                <ReactCompareSliderImage
                  src="/aether/HiFi - Wireframes.webp"
                  alt="Hifi wireframes"
                />
              }
            />
          </div>
        </section>
        <section className="mt-20">
          <h2 className="md:mt-3 text-xl font-bold">Branding:</h2>
          <div className="flex flex-col md:flex-row gap-8 md:gap-28">
            <div>
              <h2 className="mt-3 text-l font-bold">Logos:</h2>
              <Image
                src="/aether/Logos.webp"
                width={0}
                height={0}
                unoptimized
                alt="Logo"
                className="w-full h-auto sm:w-3/4 sm:h-auto md:w-full"
              />
            </div>
            <div>
              <h2 className="mt-3 text-l font-bold">Colours:</h2>
              <Image
                src="/aether/Colours.webp"
                width={0}
                height={0}
                unoptimized
                alt="Colour palette"
                className="w-full h-auto sm:w-3/4 sm:h-auto md:w-full"
              />
            </div>
            <div>
              <h2 className="mt-3 text-l font-bold">Font:</h2>
              <Image
                src="/aether/Font.webp"
                width={0}
                height={0}
                unoptimized
                alt="font used: DM Sans"
                style={{
                  width: "70%",
                  height: "auto",
                  alignItems: "center",
                  alignContent: "center",
                }}
              />
            </div>
          </div>
        </section>

        <CoreValues />
      </main>
    </div>
  );
}

{
  /* <iframe
height="600"
className="w-full"
src="https://embed.figma.com/design/cONVb0kTlMWcbc6h87uAMQ/Aether-Prototype-(Copy)?node-id=49-10&embed-host=share"
allowFullScreen
></iframe> */
}

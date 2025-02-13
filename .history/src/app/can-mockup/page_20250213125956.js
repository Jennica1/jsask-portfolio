import React from "react";
import Image from "next/image";
import Header from "../components/Header/Header";
import AppInformation from "./AppInformation";


export default function canMockup() {
  return(
    <>
<div className="flex justify-center flex-col items-center">
      <Header />
      <main className="lg:px-40 p-5 opacity-0 animate-fadeIn animate-slideIn">
        <Image
       src="/canMockup/Can Mockup 1.webp"
       width={0}
       height={0}
       unoptimized
       alt="happy path"
       className="h-auto w-full"
        />
      
    
        <AppInformation
          appName="Brand Mockup"
          appLink={[
            "https://www.figma.com/proto/cONVb0kTlMWcbc6h87uAMQ/Aether-Prototype-(Copy)?page-id=2750%3A6683&node-id=2751-16880&p=f&viewport=410%2C424%2C0.03&t=0LSxHP6hTHazRigC-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=2750%3A7345&show-proto-sidebar=1",
            "https://aether-landing-page.vercel.app/",
          ]}
          role="Graphic Designer"
          skills={["Illustrator", "Photoshop"]}
          description="Mock-up designs for Breezy Bee’s Hydromel in three different flavours."
          status="Graphic Design"
        />

        <section className="flex flex-row justify-center gap-6 w-full max-w-6xl mx-auto pt-10 mt-20">

          {/* Main Content */}
          <div className="flex-1 max-w-fit">
            <h2 className="md:mt-3 text-xl font-bold">Background:</h2>
            <p className="max-w-xl">
              Caregivers face significant challenges with repetitive, stressful, and time-consuming paperwork which affects their ability to focus on providing quality care to seniors. Although there are tools that assist in form filling, there hasn't any specifically targeted towards caregivers.
            </p>

            
        </section>


        <section className="mt-44">


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

      </main>
    </div>
    </>
  )
}
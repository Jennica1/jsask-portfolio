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

        <section className="flex flex-row justify-center gap-6 w-full max-w-6xl mx-auto pt-5">
          <div className="flex-1 max-w-fit">
            <h2 className="md:mt-3 text-xl font-bold">Background:</h2>
            <p className="max-w-xl">
            Breezy Bee’s Hydromel is a Canadian-owned meandery focused on all natural, locally sourced ingredients that’s packed full of fruity flavours. Targeted towards those who want to support their local Canadian beekeepers and care about authentic natural ingredients.
            </p>

   
          </div>
        </section>


        <section className="mt-44">
          <div className="mt-44">
            <Image
              src="/canMockup/Can Mockup 2.webp"
              width={0}
              height={0}
              unoptimized
              alt="happy path"
              className="h-auto w-full"
            />
          </div>
        </section>

        <section className="mt-20 flex flex-col">
        <div className="mt-30 ">
            <Image
              src="/canMockup/Blueberry.png"
              width={0}
              height={0}
              unoptimized
              alt="happy path"
              className="h-auto w-full"
            />
          </div>
          
          <div className="mt-30 ">
            <Image
              src="/canMockup/Red.png"
              width={0}
              height={0}
              unoptimized
              alt="happy path"
              className="h-auto w-full"
            />
          </div>

          <div className="mt-30 ">
            <Image
              src="/canMockup/Orange.png"
              width={0}
              height={0}
              unoptimized
              alt="happy path"
              className="h-auto w-full"
            />
          </div>
        </section>

      </main>
    </div>
    </>
  )
}
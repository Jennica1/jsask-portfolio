import React from "react";
import Image from "next/image";
import Header from "../components/Header/Header";
import AppInformation from "../components/AppInformation/AppInformation"


export default function canMockup() {
  return(
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
            <source src="/airplane/How To.mp4" />
          </video>
      
    
        <AppInformation
          appName="Airplane Tutorial"
          appLink={[
            
          ]}
          role="Motion Graphics"
          skills={["After Effects", "Illustrator"]}
          description="A how to video on making a paper airplane."
          status="Graphic Design"
        />

        <section className="flex flex-row justify-center gap-6 w-full max-w-6xl mx-auto pt-5">
          <div className="flex-1 max-w-fit">
          <h2 className="md:mt-3 text-3xl font-bold">Animation Graphics:</h2>
          <hr className="border-black border-2 lg:w-[70%] "></hr>
            <video
                  autoPlay
                  controls
                  preload="none"
                  loop
                  muted
                  playsInline
                  className="mx-auto w-full max-w-full pt-4"
                >
                  <source src="/airplane/Animation Compressed.mp4" />
                </video>

   
          </div>
        </section>

      </main>
    </div>
    </>
  )
}
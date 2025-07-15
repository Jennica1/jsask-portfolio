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
          role="Developer"
          skills={["Figma", "Wordpress", "Zoho"]}
          description="Small business' website for booking clients."
          status="Development"
        />


        <section className="relative flex flex-col md:flex-row items-start mb-10 mt-44">
          {/* Images for larger screens */}
          
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

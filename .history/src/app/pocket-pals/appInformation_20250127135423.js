import Image from "next/image";
import React from "react";
import Slideshow from "../components/Slideshow/PP-wireframe";

export default function AppInformation() {
    return(
        <>
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
        </>
    )
}
import React from "react";
import Image from "next/image";
import Header from "../components/Header/Header";
import Slideshow from "../components/Slideshow/PP-wireframe";
import Link from "next/link";

export default function Aether() {
  return (
    <div className="flex justify-center flex-col items-center">
      <Header />
      <main className="lg:p-10 p-5 opacity-0 animate-fadeIn animate-slideIn">
        <video width="fit" height="auto" controls preload="none">
          <source src="/aether/aetherBanner.webm" />
        </video>

        <section className="flex flex-col">
          <div className="flex">
            <p>Aether</p>
            <Link href="">View Prototype</Link>
          </div>
          <p>Developement</p>
          <p>A form filling app for caregivers to auto-fill their forms as well as simplifying documents.</p>

          <div className="flex">
            <h2 className="mt-6 md:mt-2 text-xl font-bold md:text-lg">
              Project Details:
            </h2>

            <div className="mt-4">
              <p className="text-base font-medium md:text-sm md:-mt-3">Role:</p>
              <p className="text-base md:text-sm">App Interface Designer</p>
            </div>

            <div className="mt-4">
              <p className="text-base font-medium md:text-sm">Skills Used:</p>
              <div className="flex flex-wrap gap-2 mt-2">
                <span className="bg-[#2C304F] px-3 py-2 rounded text-base md:text-sm text-[#F9F3ED]">
                  Figma
                </span>
                <span className="bg-[#2C304F] px-3 py-2 rounded text-base md:text-sm text-[#F9F3ED]">
                  Next.js
                </span>
                <span className="bg-[#2C304F] px-3 py-2 rounded text-base md:text-sm text-[#F9F3ED] ">
                  User Testing
                </span>
              </div>
            </div>
          </div>
        </section>



      </main>
    </div>
  );
}


import Image from "next/image";
import React from "react";
import Slideshow from "../components/Slideshow/PP-wireframe";

export default function AppInformation() {
  return (
    <>
        <section className="relative lg:m-60 lg:mb-40 md:mb-5 ">
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
              src="/pocketPals/pocket_pals_img.svg"
              width={0}
              height={0}
              alt="pocket pals"
              className="w-[80%] sm:w-[80%] md:w-[60%] lg:w-[40%] max-w-[1200px] object-contain  mx-auto md:mx-0"
            />

            {/* App Details */}
            <div className="text-sm lg:pt-10 sm:w-2/3">
              <span className="inline-flex items-baseline ">
                <h2 className="text-2xl font-bold">Pocket Pals</h2>
                <a href="https://pocketpals.vercel.app/">Pocket Pals</a>
              </span>

              <p className="text-base text-gray-600">UI/UX</p>
              <p className="mt-4 md:mt-1 text-base w-[90%]">
                A learning app for kids. Focused on educating children about
                endangered animals across the globe through interactive
                learning.
              </p>
              <h2 className="mt-6 md:mt-1 text-xl font-bold">
                Project Details:
              </h2>
              <div className="mt-4">
                <p className="text-base font-medium md:-mt-3">Role:</p>
                <p className="text-base">App Interface Designer</p>
              </div>
              <div className="mt-4">
                <p className="text-base font-medium">Skills Used:</p>
                <div className="flex flex-wrap gap-2 mt-2">
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
    </>
  );
}

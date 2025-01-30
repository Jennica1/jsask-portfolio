import Image from "next/image";
import React from "react";
import Link from "next/link";
import Slideshow from "../components/Slideshow/PP-wireframe";

export default function AppInformation() {
  return (
    <>
      <section className="relative lg:mr-40 lg:ml-40 lg:mb-40 md:mb-5 lg:text-[#F9F3ED] md:text-[#F9F3ED]">
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

          <div className="text-sm lg:pt-10 sm:w-2/3 md:w-3/4 md:text-xs">
            <span className="inline-flex items-baseline pb-1">
              <h2 className="text-2xl font-bold md:text-lg">Pocket Pals</h2>
              <Link
                href="https://pocketpals.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className=" bg-[#AC0022] rounded  text-[#F9F3ED] underline  md:text-sm"
              >
                Visit App
              </Link>
            </span>

            <p className="bg-[#2C304F] rounded w-fit px-3 py-2 text-base md:text-sm text-[#F9F3ED]">
              UI/UX
            </p>

            <p className="mt-4 md:mt-1 text-base md:text-sm w-[90%]">
              A learning app for kids. Focused on educating children about
              endangered animals across the globe through interactive learning.
            </p>

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
        </div>
      </section>
    </>
  );
}

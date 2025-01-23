import React from "react";
import Image from "next/image";
import Header from "../components/Header/Header";

export default function pocketPals() {
  return (
    <div className="flex justify-center flex-col items-center ">
      <Header />
      <main>
      <div className="relative">
  {/* Background Image */}
  <Image
    src="/images/Proj_Background.svg"
    width={0}
    height={0}
    alt="dont worry about it"
    className="w-full h-auto -z-10 object-cover"
  />

  {/* Content on Top */}
  <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6">
    <h2 className="text-2xl font-bold text-white">Pocket Pals</h2>
    <p className="text-sm text-gray-300 mt-2">UI/UX</p>
    <p className="mt-4 text-sm text-gray-200">
      A learning app for kids. Focused on educating children about endangered
      animals across the globe through interactive learning.
    </p>
    <h2 className="mt-6 text-lg font-bold text-white">Project Details:</h2>
    <div className="mt-4">
      <p className="text-sm font-medium text-gray-300">Role:</p>
      <p className="text-sm text-gray-200">App Interface Designer</p>
    </div>
    <div className="mt-4">
      <p className="text-sm font-medium text-gray-300">Skills Used:</p>
      <div className="flex flex-wrap gap-2 mt-2">
        <span className="bg-gray-700 px-2 py-1 rounded text-sm text-white">
          Figma
        </span>
        <span className="bg-gray-700 px-2 py-1 rounded text-sm text-white">
          Next.js
        </span>
        <span className="bg-gray-700 px-2 py-1 rounded text-sm text-white">
          User Testing
        </span>
      </div>
    </div>
  </div>
</div>

      </main>
    </div>
  );
}

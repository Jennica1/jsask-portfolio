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
            className="w-full h-auto absolute inset-0 -z-10 object-cover"
          />
          <div className="flex flex-col md:flex-row items-start gap-6 p-20">
            {/* App Title Image */}
            <Image
              src="/images/pocket_pals_img.svg"
              width={0}
              height={0}
              alt="pocket pals"
              className="w-1/3 max-w-xs object-contain"
            />

            {/* App Details */}
            <div>
              <h2 className="text-xl font-bold">Pocket Pals</h2>
              <p className="text-sm text-gray-600">UI/UX</p>
              <p className="mt-2 text-sm">
                A learning app for kids. Focused on educating children about
                endangered animals across the globe through interactive
                learning.
              </p>
              <h2 className="mt-4 text-lg font-bold">Project Details:</h2>
              <div className="mt-2">
                <p className="text-sm font-medium">Role:</p>
                <p className="text-sm">App Interface Designer</p>
              </div>
              <div className="mt-2">
                <p className="text-sm font-medium">Skills Used:</p>
                <div className="flex flex-wrap gap-2 mt-1">
                  <span className="bg-gray-100 px-2 py-1 rounded text-sm">
                    Figma
                  </span>
                  <span className="bg-gray-100 px-2 py-1 rounded text-sm">
                    Next.js
                  </span>
                  <span className="bg-gray-100 px-2 py-1 rounded text-sm">
                    User Testing
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

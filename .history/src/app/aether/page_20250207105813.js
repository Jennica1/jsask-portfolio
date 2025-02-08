import React from "react";
import Image from "next/image";
import Header from "../components/Header/Header";
import Slideshow from "../components/Slideshow/PP-wireframe";


export default function Aether() {
  return (
    <div className="flex justify-center flex-col items-center">
      <Header />
      <main className="lg:p-10 p-5 opacity-0 animate-fadeIn animate-slideIn">
      <video width="auto" height="240" controls preload="none">
        <source src="/aether/aetherBanner.webm" />
      </video>





      </main>
    </div>
  );
}


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
            <h3>Project Details:</h3>
            <p>role:</p>
            <p>Developer</p>

            <p>Skills Used:</p>
          </div>
        </section>



      </main>
    </div>
  );
}


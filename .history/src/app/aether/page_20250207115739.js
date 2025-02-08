import React from "react";
import Image from "next/image";
import Header from "../components/Header/Header";
import Link from "next/link";
import AppInformation from "../components/AppInformation/AppInformation";

export default function Aether() {
  return (
    <div className="flex justify-center flex-col items-center">
      <Header />
      <main className="lg:p-10 p-5 opacity-0 animate-fadeIn animate-slideIn">
        <video width="fit" height="auto" controls preload="none">
          <source src="/aether/aetherBanner.webm" />
        </video>
        <AppInformation
          appName="Aether"
          appLink="/"
          role="Developer"
          skills={['Figma', 'React Native', 'JavaScript']}
          description="A form filling app for caregivers to auto-fill their forms as well as simplifying documents."
          status="Development"
        />

        <section>
          
        </section>



      </main>
    </div>
  );
}


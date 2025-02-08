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

<section className="">
          <h2 className=" md:mt-3 text-xl font-bold">The Purpose:</h2>
          <p>
            The goal was to create an app that educated children about
            endangered animals world issue in order to develop an early
            understanding on what they can do to help or be mindful of.
          </p>

          <h2 className="mt-6  md:mt-3 text-xl font-bold">Challenges Faced:</h2>
          <ul className="list-disc ml-6 mb-6">
            <li>
              Colour choices were bright but, visually unappealing and
              frequently clashed together.
            </li>
            <li>
              Balancing the amount of article information that is informative
              but can still be understood by young children.{" "}
            </li>
            <li>
              How to could we customize the initial set-up for the account?
            </li>
          </ul>
        </section>



      </main>
    </div>
  );
}


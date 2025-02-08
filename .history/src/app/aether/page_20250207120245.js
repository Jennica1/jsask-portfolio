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
          <h2 className=" md:mt-3 text-xl font-bold ">Context:</h2>
          <p className="w-max-w-md">
            Aether is an ai powered app, focused on helping caregivers and individuals by simplifying the  form-filling process. Our mission is to automate tedious tasks, clarify  confusing language, and save valuable time, making paperwork easier for everyone.
          </p>

          <h2 className="mt-6  md:mt-3 text-xl font-bold">Key Issues to Solve:</h2>
          <ul className="list-disc ml-6 mb-6">
            <li>
              Relieving caregivers of tedious task of repetitive form filling.
            </li>
            <li>
              Translating document jargon to more easy-to-understand terms.
            </li>
            <li>
              Unnecessary effort to look for different Canadian government forms.
            </li>
            <li>
              Managing several client information and keeping it organized.
            </li>
          </ul>
        </section>



      </main>
    </div>
  );
}


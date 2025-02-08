import React from "react";
import Image from "next/image";
import Header from "../components/Header/Header";
import Link from "next/link";
import AppInformation from "../components/AppInformation/AppInformation";

export default function Aether() {
  return (
    <div className="flex justify-center flex-col items-center">
      <Header />
      <main className="lg:px-24 p-5 opacity-0 animate-fadeIn animate-slideIn">
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

        <section className="flex flex-col justify-center items-center text-left">
          <h2 className=" md:mt-3 text-xl font-bold ">Context:</h2>
          <p className="max-w-xl">
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

        <section className="">
          <h2 className=" md:mt-3 text-xl font-bold ">Background Research:</h2>
          <p className="max-w-xl">
            Our survey sought to understand the diverse experiences of caregivers when managing forms for elderly individuals. To enhance the Aether app’s usability and effectiveness, we recommend incorporating the following innovative strategies:

          </p>

          <div className="flex flex-col">
            <h2 className=" md:mt-3 text-xl font-bold ">Simplify Form-filling Process</h2>
            <p className="max-w-xl">
              Action: Create an interface with simplified language and tooltips to explain complex legal or medical terminology. Add a error-checking feature to prevent users from submitting incomplete or incorrect forms, reducing stress.
            </p>

            <h2 className=" md:mt-3 text-xl font-bold ">Improve App Navigation and Usability</h2>
            <p className="max-w-xl">
              Action: Ensure features like form status and reminders are easily accessible from the home screen. Use a design that avoids overwhelming users with too much information.
            </p>
          </div>

          <div>
            <h2 className=" md:mt-3 text-xl font-bold ">Develope Time-saving Features</h2>
            <p className="max-w-xl">
              Action: Add autofill functionality that remembers frequently used information. Introduce smart suggestions that prompt users with likely answers based on their previous submissions.
            </p>

            <h2 className=" md:mt-3 text-xl font-bold ">AI - Form Assistance
            </h2>
            <p className="max-w-xl">
              Action: Implement an AI that will help users who are unsure of how to fill out a form. Allow users to ask questions and have feedback on questions they are unsure about to ensure the form is filled out correctly.
            </p>
          </div>
        </section>

        <section>
          <h2 className=" md:mt-3 text-xl font-bold ">Key User Persona:</h2>
          <Image src="/aether/User Persona.webp"
            width={0} height={0}
            unoptimized
            alt="user persona"
            className="h-auto w-full" />
          <h2 className=" md:mt-3 text-xl font-bold ">User Happy Path:</h2>
          <Image src="/aether/User Happy Path.webp"
            width={0} height={0}
            unoptimized
            alt="user persona"
            className="h-auto w-full" />
          <h2 className=" md:mt-3 text-xl font-bold ">Lofi Wireframe:</h2>
          <Image src="/aether/LoFi - Wireframes.webp"
            width={0} height={0}
            unoptimized
            alt="user persona"
            className="w-full h-auto" />
        </section>

        <section>
          <h2 className=" md:mt-3 text-xl font-bold ">Branding</h2>
          <div className="flex">
            <div>
              <h2 className=" md:mt-3 text-l font-bold ">Logos:</h2>
              <Image src="/aether/Logos.webp"
                width={0} height={0}
                unoptimized
                alt="user persona"
                className="w-full h-auto" />
            </div>
            <div>
              <h2 className=" md:mt-3 text-l font-bold ">Colours:</h2>
              <Image src="/aether/Colours.webp"
                width={0} height={0}
                unoptimized
                alt="user persona"
                className="w-full h-auto" />
            </div>
            <div>
              <h2 className=" md:mt-3 text-l font-bold ">Font:</h2>
              <Image src="/aether/Font.webp"
                width={0} height={0}
                unoptimized
                alt="user persona"
                className="w-full h-auto" />
            </div>
          </div>
        </section>

        <section>
          <h2 className=" md:mt-3 text-xl font-bold ">Core Features:</h2>
          <div className="w-25%">
            <div>
              <h2 className=" md:mt-3 text-4xl font-bold ">Clarity</h2>
              <p>Aether turns complex terms into clear steps for confident form completion.</p>
            </div>
            <div>
              <h2 className=" md:mt-3 text-4xl font-bold ">Summarize</h2>
              <p>Aether highlights key points, saving you from reading lengthy documents.</p>
            </div>
            <div>
              <h2 className=" md:mt-3 text-4xl font-bold ">Streamline</h2>
              <p>Aether automates form-filling and clarifies jargon, making the process efficient.</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}


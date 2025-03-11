"use client";

import { Worker, Viewer } from "@react-pdf-viewer/core";
import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout";
import { zoomPlugin } from "@react-pdf-viewer/zoom"; // Optional if you need more zoom control
import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";
import "@react-pdf-viewer/zoom/lib/styles/index.css";
import Header from '../components/Header/Header';
import AppInformation from '../components/AppInformation/AppInformation';
import Image from "next/image";

export default function Magazine() {
  // Initialize the plugins
  const defaultLayoutPluginInstance = defaultLayoutPlugin({
    sidebarTabs: () => [], // Hide the sidebar if not needed
  });

  const zoomPluginInstance = zoomPlugin(); // Optional, for additional zoom controls

  return (
    <>
      <div className="flex justify-center flex-col items-center">
        <Header />
        <main className="lg:px-40 p-5 opacity-0 animate-fadeIn animate-slideIn">
          <div className="flex justify-center">
            <Image
              src="/magazine/Magazine Mockup.png"
              width={0}
              height={0}
              unoptimized
              alt="happy path"
              className="h-auto w-1/2"
            />
          </div>


          <AppInformation
            appName="Ancient China"
            appLink={[]}
            role="Graphic Designer"
            skills={["Illustrator", "Indesign"]}
            description="A magazine focused on ancient China's Architecture throughout different dynasties."
            status="Graphic Design"
          />




          <section className=" pt-44">
          <h2 className="md:mt-3 text-3xl font-bold">Key User Personas:</h2>
          <hr className="border-black border-2 lg:w-[70%] "></hr>

          <div className="w-full pt-20" style={{ height: "90vh" }}>
          <div className="flex-1 max-w-fit">
            </div>
            <Worker workerUrl="https://cdnjs.cloudflare.com/ajax/libs/pdf.js/2.16.105/pdf.worker.min.js">
              <Viewer
                fileUrl="/magazine/Magazine.pdf"
                plugins={[defaultLayoutPluginInstance, zoomPluginInstance]}
                theme="light"
                renderMode="canvas"
                initialPage={0}
                zoom={1.0}
              />
            </Worker>
          </div>
          </section>




        </main>
      </div>
    </>
  );
}

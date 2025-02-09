"use client";

import { useState } from "react";
import Image from "next/image";

export default function CoreValues() {
  const [selectedFeature, setSelectedFeature] = useState("Clarity");

  const features = [
    { name: "Clarity", image: "/aether/Clarify.webp" },
    { name: "Summarize", image: "/aether/Summarize.webp" },
    { name: "Streamline", image: "/aether/Streamline.webp" },
  ];

  return (
    <section className="mt-44">
      <h2 className="text-xl font-bold mb-5">Core Features:</h2>

      {/* Add pt-10 here to create spacing below h2 */}
      <div className="flex pt-10">
        <div className="flex gap-6 max-w-2xl">
          {/* Left Box (Rectangle Div) */}
          <div className="w-[8px] bg-[#AC0022] h-80 flex-shrink-0"></div>

          {/* Main Content */}
          <div className="w-2/3 max-w-full">
            {features.map((feature) => (
              <button
                key={feature.name}
                onClick={() => setSelectedFeature(feature.name)}
                className={`text-left transition-colors duration-300 ${
                  selectedFeature === feature.name ? "text-[#AC0022]" : "text-black"
                }`}
              >
                <h2 className="text-4xl font-bold">{feature.name}</h2>
                <p className="max-w-sm">
                  {feature.name === "Clarity" &&
                    "Aether turns complex terms into clear steps for confident form completion."}
                  {feature.name === "Summarize" &&
                    "Aether highlights key points, saving you from reading lengthy documents."}
                  {feature.name === "Streamline" &&
                    "Aether automates form-filling and clarifies jargon, making the process efficient."}
                </p>
              </button>
            ))}
          </div>
        </div>

        {/* Image Display */}
        <div className="w-2/3 h-auto">
          {features.map((feature) =>
            selectedFeature === feature.name ? (
              <Image
                key={feature.name}
                src={feature.image}
                width={0}
                height={0}
                unoptimized
                alt={feature.name}
                className="w-64 h-auto"
              />
            ) : null
          )}
        </div>
      </div>
    </section>
  );
}

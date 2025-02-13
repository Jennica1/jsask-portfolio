"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

export default function CoreValues() {
  const [selectedFeature, setSelectedFeature] = useState("Clarity");
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    setHydrated(true); // Ensures client-side rendering
  }, []);

  const features = [
    { name: "Clarity", image: "/aether/Clarify.webp" },
    { name: "Summarize", image: "/aether/Summarize.webp" },
    { name: "Streamline", image: "/aether/Streamline.webp" },
  ];

  return (
    <section className="mt-44">
      <h2 className="text-xl font-bold mb-5">Core Features:</h2>
      <div className="flex items-center">
        <div className="flex gap-6 max-w-2xl">
          {/* Left Box */}
          <div className="w-[8px] bg-[#AC0022] h-80 flex-shrink-0"></div>

          {/* Buttons */}
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

        {/* Image Display - Render only on client after hydration */}
        <div className="w-3/2 h-full ">
          {hydrated &&
            features.map(
              (feature) =>
                selectedFeature === feature.name && (
                  <Image
                    key={feature.name}
                    src={feature.image}
                    width={300} // Set explicit width
                    height={300} // Set explicit height
                    alt={feature.name}
                    className="w-full h-auto "
                  />
                )
            )}
        </div>
      </div>
    </section>
  );
}

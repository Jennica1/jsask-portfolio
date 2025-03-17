"use client";

import { useState } from "react";
import { ProjectCard } from "../ProjectCard/ProjectCard";

const projects = [
  {
    id: 1,
    title: "Pocket Pals",
    description: "A learning app for kids. Focused on educating children about endangered animals across the globe through interactive learning.",
    image: "/pocketPals/Logo.png",
    category: "UI/UX Design",
    path: "/pocket-pals", 
  },
  {
    id: 2,
    title: "Can Mock-up",
    description: "Mock-up designs for Breezy Bee’s Hydromel in three different flavours.",
    image: "/canMockup/Logo.png",
    category: "Graphic Design",
    path: "/can-mockup", 
  },
  {
    id: 3,
    title: "Aspect of Element",
    description: "Strategy card game similar to King of the Hill but with the power of different elements.",
    image: "/ACG/Logo.png",
    category: "Illustration",
    path: "/ACG",
  },
  {
    id: 4,
    title: "Aether",
    description: "A form filling app for caregivers to auto-fill their forms as well as simplifying documents.",
    image: "/aether/Logo.png",
    category: "Development",
    path: "/aether",
  },
  {
    id: 5,
    title: "Ancient China",
    description: "A magazine focused on ancient China's Architecture throughout different dynasties.",
    image: "/magazine/Magazine Mockup.png",
    category: "Graphic Design",
    path: "/magazine",
  },
  {
    id: 6,
    title: "Paper Airplane Tutorial",
    description: "A how to video on making a paper airplane.",
    image: "/airplane/airplane.png",
    category: "Motion Graphics",
    path: "/airplane",
  },
  
];


const categories = ["All", "UI/UX Design", "Graphic Design", "Illustration", "Development", "Motion Graphics"];

export const ProjectsGrid = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProjects =
    selectedCategory === "All"
      ? projects
      : projects.filter((project) => project.category === selectedCategory);

  return (
    <section id="projects" className="py-16 px-4 pb-48">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-8">My Projects</h2>

        {/* Categories */}
        <div className="flex flex-wrap gap-2 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-2xl transition-all duration-300 
                ${
                  selectedCategory === category
                    ? "bg-[#890620] text-white font-bold  " // Active button
                    : "border-2 border-[#890620] text-black hover:bg-[#890620] hover:text-white"
                }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} {...project} className=""/>
          ))}
        </div>
      </div>
    </section>
  );
};

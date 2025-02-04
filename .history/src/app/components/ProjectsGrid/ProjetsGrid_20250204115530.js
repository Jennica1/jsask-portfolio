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
    path: "/pocket-pals", // Custom path for Pocket Pals
  },
  {
    id: 2,
    title: "Can Mock-up",
    description: "Mock-up designs for Breezy Bee’s Hydromel in three different flavours.",
    image: "https://images.unsplash.com/photo-1483058712412-4245e9b90334",
    category: "Graphic Design",
    path: "/project/2", // Default path for other projects
  },
  {
    id: 3,
    title: "Aspect of Element",
    description: "Strategy card game similar to King of the Hill but with the power of different elements.",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
    category: "Illustrator",
    path: "/project/3",
  },
  {
    id: 4,
    title: "Web Application",
    description: "Full-stack web application built with React and Node.js.",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
    category: "Development",
    path: "/project/3",
  },
];


const categories = ["All", "UI/UX Design", "Graphic Design", "Illustrator", "Development"];

export const ProjectsGrid = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProjects =
    selectedCategory === "All"
      ? projects
      : projects.filter((project) => project.category === selectedCategory);

  return (
    <section id="projects" className="py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">My Projects</h2>

        <div className="flex flex-wrap gap-2 justify-center mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-lg transition-colors ${
                selectedCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Fix: Use .map() to render ProjectCard components */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
  {filteredProjects.map((project) => (
    <ProjectCard key={project.id} {...project} />
  ))}
</div>

      </div>
    </section>
  );
};

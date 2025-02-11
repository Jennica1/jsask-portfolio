"use client";

import { useRouter } from "next/navigation";

export const ProjectCard = ({ title, description, image, category, path }) => {
  const router = useRouter();

  const handleNavigation = () => {
    router.push(path);
  };

  return (
    <div
      onClick={handleNavigation}
      className="cursor-pointer group transition-transform duration-300
      bg-white"
    >
      <div className="aspect-video overflow-hidden rounded-lg ">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <div className="p-6">
        <span className="text-sm text-primary mb-2 inline-block">
          {category}
        </span>
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-muted-foreground">{description}</p>
      </div>
    </div>
  );
};

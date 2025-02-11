"use client";

import { useRouter } from "next/navigation";

export const ProjectCard = ({ title, description, image, category, path }) => {
  const router = useRouter();

  const handleNavigation = () => {
    router.push(path); // Navigate to the assigned path
  };

  return (
    <div onClick={handleNavigation} className="cursor-pointer opacity-0 animate-fadeIn animate-slideIn">
      <div className="aspect-video overflow-hidden">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover transition-transform group-hover:scale-105"
        />
      </div>
      <div className="p-6">
        <span className="text-sm text-primary mb-2 inline-block">{category}</span>
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-muted-foreground">{description}</p>
      </div>
    </div>
  );
};

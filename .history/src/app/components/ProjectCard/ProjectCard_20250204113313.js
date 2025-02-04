"use client";

import { useRouter } from "next/navigation";
import Image from "next/image"; // Import Next.js Image

export const ProjectCard = ({ title, description, image, category, path }) => {
  const router = useRouter();

  const handleNavigation = () => {
    router.push(path);
  };

  return (
    <div onClick={handleNavigation} className="cursor-pointer">
      <div className="aspect-video overflow-hidden relative w-full h-48">
        <Image 
          src={image} 
          alt={title}
          layout="fill" // Ensures responsiveness
          objectFit="cover"
          className="transition-transform group-hover:scale-105"
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

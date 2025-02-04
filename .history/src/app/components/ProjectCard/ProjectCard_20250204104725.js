import Link from "next/link";

export const ProjectCard = ({ id, title, description, image, category }) => {
  return (
    <Link to={id ? `/project/${id}` : "#"}>
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
    </Link>
  );
};

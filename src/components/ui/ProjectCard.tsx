import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

interface ProjectCardProps {
  id: string;
  number: string;
  title: string;
  description: string;
  tags: string[];
  image?: string;
}

const ProjectCard = ({
  id,
  number,
  title,
  description,
  tags,
  image,
}: ProjectCardProps) => {
  return (
    <Link
      to={`/projects/${id}`}
      className="group block bg-card rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
    >
      <div className="aspect-video bg-secondary relative overflow-hidden">
        {image ? (
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gradient-navy">
            <span className="font-heading text-5xl font-bold text-primary-foreground/20">
              {number}
            </span>
          </div>
        )}
        <div className="absolute top-4 left-4">
          <span className="bg-accent text-accent-foreground px-3 py-1 rounded-full text-sm font-medium">
            Bài {number}
          </span>
        </div>
      </div>
      <div className="p-6">
        <h3 className="font-heading text-xl font-semibold text-foreground mb-2 group-hover:text-accent transition-colors">
          {title}
        </h3>
        <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
          {description}
        </p>
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="bg-secondary text-secondary-foreground px-2 py-1 rounded text-xs font-medium"
            >
              {tag}
            </span>
          ))}
        </div>
        <div className="flex items-center text-accent font-medium text-sm group-hover:gap-3 gap-2 transition-all">
          Xem chi tiết <ArrowRight size={16} />
        </div>
      </div>
    </Link>
  );
};

export default ProjectCard;

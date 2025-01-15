import React from "react";
import { Github, ExternalLink } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  sourceCode: string;
  liveDemo?: string;
  tags: string[];
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  image,
  sourceCode,
  liveDemo,
  tags,
}) => {
  return (
    <div className="group relative overflow-hidden rounded-xl bg-white dark:bg-gray-800 shadow-xl transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
      <div className="relative h-48 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-black/50 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          <div className="flex h-full items-center justify-center space-x-4">
            <a
              href={sourceCode}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-white dark:bg-gray-800 p-2 text-gray-800 dark:text-white transition-transform hover:scale-110"
            >
              <Github className="h-6 w-6" />
            </a>
            {liveDemo && (
              <a
                href={liveDemo}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-white dark:bg-gray-800 p-2 text-gray-800 dark:text-white transition-transform hover:scale-110"
              >
                <ExternalLink className="h-6 w-6" />
              </a>
            )}
          </div>
        </div>
      </div>
      <div className="p-6">
        <h3 className="mb-2 text-xl font-bold text-gray-800 dark:text-white transition-colors duration-500">
          {title}
        </h3>
        <p className="mb-4 text-gray-600 dark:text-gray-300 transition-colors duration-500">
          {description}
        </p>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-indigo-100 dark:bg-indigo-900 px-3 py-1 text-sm text-indigo-600 dark:text-indigo-300 transition-colors duration-500"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;

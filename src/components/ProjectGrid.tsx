import { Project } from "@/data/projects";
import ProjectCard from "./ProjectCard";

interface ProjectGridProps {
  projects: Project[];
  title: string;
}

export default function ProjectGrid({ projects, title }: ProjectGridProps) {
  return (
    <div className="py-8">
      <div className="container px-4 sm:px-6">
        <h2 className="text-2xl font-cal mb-6">{title}</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              id={project.id}
              title={project.title}
              imageUrl={project.imageUrl}
              createdBy={project.createdBy}
              remixedFrom={project.remixedFrom}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

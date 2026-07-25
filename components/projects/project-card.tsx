import Image from "next/image";
import { Play } from "lucide-react";
import { cn } from "@/lib/utils";

export type ProjectCategory = "Residential" | "Commercial" | "Industrial";

export interface ProjectData {
  id: string;
  title: string;
  category: ProjectCategory;
  capacity?: string;
  image: string;
  hasVideo?: boolean;
  isBeforeAfter?: boolean;
}

interface ProjectCardProps {
  project: ProjectData;
  className?: string;
}

export function ProjectCard({ project, className }: ProjectCardProps) {
  return (
    <div className={cn("relative group overflow-hidden bg-slate-900 rounded-lg", className)}>
      <Image
        src={project.image}
        alt={project.title}
        fill
        className="object-cover transition-transform duration-500 group-hover:scale-105"
      />
      
      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

      {/* Badges */}
      {project.isBeforeAfter && (
        <div className="absolute top-4 left-4 bg-[#FBC02D] text-slate-900 font-bold text-xs px-3 py-1.5 rounded-full shadow-md z-10 whitespace-pre-wrap leading-tight text-center">
          Before /<br/>After
        </div>
      )}

      {/* Video Play Button */}
      {project.hasVideo && (
        <div className="absolute inset-0 flex items-center justify-center z-10">
          <div className="bg-primary/90 hover:bg-primary rounded-full p-4 cursor-pointer transition-colors shadow-lg">
            <Play className="h-8 w-8 text-white fill-white ml-1" />
          </div>
        </div>
      )}

      {/* Bottom Content */}
      <div className="absolute bottom-0 left-0 p-5 w-full z-10">
        <h3 className="text-xl md:text-2xl font-bold text-white mb-1">
          {project.hasVideo ? "Video Testimonial" : project.title}
        </h3>
        
        {!project.hasVideo && project.capacity && (
          <p className="text-[#4ADE80] font-medium text-sm">
            {project.capacity} · {project.category}
          </p>
        )}
      </div>
    </div>
  );
}

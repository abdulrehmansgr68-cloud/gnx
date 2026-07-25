"use client";

import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ProjectCard, ProjectData, ProjectCategory } from "./project-card";

const allProjects: ProjectData[] = [
  {
    id: "1",
    title: "Green Villa Residence",
    category: "Residential",
    capacity: "10 kW",
    image: "/project1.png",
    isBeforeAfter: true,
  },
  {
    id: "2",
    title: "Video Testimonial",
    category: "Commercial",
    image: "/project2.png",
    hasVideo: true,
  },
  {
    id: "3",
    title: "Video Testimonial",
    category: "Residential",
    image: "/project3.png",
    hasVideo: true,
  },
  {
    id: "4",
    title: "SunPeak Industrial Park",
    category: "Industrial",
    capacity: "5 MW",
    image: "/project4.png",
  },
  {
    id: "5",
    title: "Horizon Commercial Tower",
    category: "Commercial",
    capacity: "250 kW",
    image: "/project5.png",
  },
];

const filters: ("All" | ProjectCategory)[] = ["All", "Residential", "Commercial", "Industrial"];

export function ProjectsSection() {
  const [activeFilter, setActiveFilter] = useState<"All" | ProjectCategory>("All");

  const filteredProjects = allProjects.filter(
    (p) => activeFilter === "All" || p.category === activeFilter
  );

  return (
    <section className="py-20 bg-[#E8F8FC] dark:bg-[#071920] px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">
            Our Projects
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Explore our diverse portfolio of solar installations across residential, commercial, and industrial sectors.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all ${
                activeFilter === filter
                  ? "bg-primary text-white shadow-md"
                  : "bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 min-h-[600px]">
          {/* Top Row (3 items) */}
          {filteredProjects.map((project, index) => {
            // Layout logic when showing "All" vs filtered
            let colSpan = "md:col-span-6 lg:col-span-4"; // Default for small sets
            let hClass = "min-h-[300px] md:min-h-[350px]";

            if (activeFilter === "All") {
              // 1st, 2nd, 3rd take 4 cols (1/3 width). 4th, 5th take 6 cols (1/2 width).
              if (index < 3) colSpan = "md:col-span-4";
              else colSpan = "md:col-span-6";
            } else {
              // If filtered, just stack nicely
              colSpan = "md:col-span-6 lg:col-span-6";
            }

            return (
              <ProjectCard 
                key={project.id} 
                project={project} 
                className={`${colSpan} ${hClass}`} 
              />
            );
          })}
        </div>

        <div className="mt-12 flex justify-start">
          <Button size="lg" className="rounded-full px-8 h-14 text-base shadow-lg hover:scale-105 transition-transform">
            View All Projects <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
}

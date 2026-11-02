"use client";

import { useState } from "react";
import { CATEGORIES, PROJECTS } from "@/lib/projects";
import { cn } from "@/lib/utils";
import ProjectCard from "../ProjectCard";

// Every film in one even grid, filterable by format. Changing the filter re-runs the site's usual reveal.
export default function WorkGrid() {
  const [filter, setFilter] = useState("All");
  const films = filter === "All" ? PROJECTS : PROJECTS.filter((p) => p.format === filter);

  return (
    <section className="bg-paper">
      <div className="mx-auto max-w-368 px-5 pb-28 sm:px-8 lg:px-12">
        <div
          role="tablist"
          aria-label="Filter by format"
          data-reveal
          className="no-scrollbar -mx-5 flex gap-2 overflow-x-auto px-5 sm:mx-0 sm:flex-wrap sm:px-0"
        >
          {CATEGORIES.map((cat) => {
            const count = cat === "All" ? PROJECTS.length : PROJECTS.filter((p) => p.format === cat).length;
            const selected = filter === cat;
            return (
              <button
                key={cat}
                role="tab"
                type="button"
                aria-selected={selected}
                onClick={() => setFilter(cat)}
                className={cn(
                  "h-11 shrink-0 rounded-full border px-5 text-[15px] transition-colors duration-500 ease-out-film",
                  selected ? "border-ink bg-ink text-paper" : "border-ink/20 text-ink hover:border-ink/60"
                )}
              >
                {cat} <span className={selected ? "text-paper/60" : "text-ink-soft"}>{count}</span>
              </button>
            );
          })}
        </div>

        <div key={filter} className="mt-12 grid gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
          {films.map((project, i) => (
            <ProjectCard key={project.slug} project={project} delay={String((i % 3) * 90)} />
          ))}
        </div>
      </div>
    </section>
  );
}

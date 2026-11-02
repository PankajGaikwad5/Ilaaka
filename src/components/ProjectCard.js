"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import { mixkitPoster, mixkitVideo } from "@/lib/site";
import { cn } from "@/lib/utils";

// A film thumbnail in one consistent frame. The still is always there; on hover the footage
// fades in over it and plays, and fades back out when the pointer leaves.
export default function ProjectCard({ project, className, delay, featured = false }) {
  const video = useRef(null);
  const [playing, setPlaying] = useState(false);

  function start(e) {
    if (e.pointerType && e.pointerType !== "mouse") return;
    const el = video.current;
    if (!el || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (el.preload !== "auto") el.preload = "auto";
    el.play().then(() => setPlaying(true)).catch(() => {});
  }

  function stop() {
    setPlaying(false);
    video.current?.pause();
  }

  return (
    <Link
      href={`/work/${project.slug}`}
      onPointerEnter={start}
      onPointerLeave={stop}
      data-reveal
      data-reveal-delay={delay}
      className={cn("group block", className)}
    >
      <div
        className={cn(
          "relative overflow-hidden rounded-[4px] bg-paper-deep",
          featured ? "aspect-[4/3] sm:aspect-[2.39/1]" : "aspect-[16/10]"
        )}
      >
        <img
          src={mixkitPoster(project.video)}
          alt=""
          loading="lazy"
          className="absolute inset-0 size-full object-cover transition-[scale] duration-[1400ms] ease-out-film group-hover:scale-[1.03]"
        />
        <video
          ref={video}
          src={mixkitVideo(project.video)}
          muted
          loop
          playsInline
          preload="none"
          aria-hidden
          className={cn(
            "absolute inset-0 size-full object-cover transition-[opacity,scale] duration-[900ms] ease-out-film group-hover:scale-[1.03]",
            playing ? "opacity-100" : "opacity-0"
          )}
        />
      </div>
      <div className="mt-5 flex items-baseline justify-between gap-4">
        <h3
          className={cn(
            "display transition-colors duration-500 group-hover:text-fox",
            featured ? "text-[clamp(2.25rem,4vw,3.75rem)]" : "text-[clamp(1.75rem,2.2vw,2.25rem)]"
          )}
        >
          {project.title}
        </h3>
        <p className="shrink-0 text-[14px] text-ink-soft">{project.year}</p>
      </div>
      <p className="mt-1.5 text-[15px] text-ink-soft">
        {project.format.replace(/s$/, "")} for {project.client}
      </p>
    </Link>
  );
}

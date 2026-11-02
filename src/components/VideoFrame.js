"use client";

import { useEffect, useRef } from "react";
import { mixkitPoster, mixkitVideo } from "@/lib/site";
import { cn } from "@/lib/utils";

// Muted looping footage that only loads and plays while on screen.
// With reduced motion the poster frame stays still.
export default function VideoFrame({ id, className, videoClassName, quality = 720, eager = false, playing, children }) {
  const ref = useRef(null);

  useEffect(() => {
    const video = ref.current;
    if (!video) return;
    const still = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    // Controlled mode: a parent decides (hover previews, active process step)
    if (playing !== undefined) {
      if (playing && !still) video.play().catch(() => {});
      else video.pause();
      return;
    }

    if (still) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) video.play().catch(() => {});
        else video.pause();
      },
      { rootMargin: "200px 0px" }
    );
    observer.observe(video);
    return () => observer.disconnect();
  }, [playing]);

  return (
    <div className={cn("relative overflow-hidden bg-screen", className)}>
      <video
        ref={ref}
        src={mixkitVideo(id, quality)}
        poster={mixkitPoster(id)}
        muted
        loop
        playsInline
        preload={eager ? "auto" : "none"}
        aria-hidden
        className={cn("absolute inset-0 size-full object-cover", videoClassName)}
      />
      {children}
    </div>
  );
}

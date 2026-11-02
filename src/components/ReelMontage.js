"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import VideoFrame from "./VideoFrame";

// Showreel stand-in: stacked clips that cross-fade on a fixed beat, only the visible one playing
export default function ReelMontage({ clips, interval = 4200, className, active = true }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (!active || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const timer = setInterval(() => setIndex((i) => (i + 1) % clips.length), interval);
    return () => clearInterval(timer);
  }, [active, clips.length, interval]);

  return (
    <div className={cn("relative bg-screen", className)}>
      {clips.map((id, i) => (
        <VideoFrame
          key={id}
          id={id}
          eager={i === 0}
          playing={active && i === index}
          className={cn("absolute inset-0 transition-opacity duration-1000 ease-film", i === index ? "opacity-100" : "opacity-0")}
        />
      ))}
    </div>
  );
}

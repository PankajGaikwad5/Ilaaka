"use client";

import { useEffect, useRef, useState } from "react";
import { Pause, Play } from "lucide-react";
import { mixkitPoster, mixkitVideo } from "@/lib/site";

// The project's lead footage, full width, with a play/pause control
export default function FilmPlayer({ id, title, quality = 1080 }) {
  const video = useRef(null);
  const [paused, setPaused] = useState(true);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    video.current
      ?.play()
      .then(() => setPaused(false))
      .catch(() => {});
  }, []);

  function toggle() {
    const el = video.current;
    if (el.paused) el.play().then(() => setPaused(false)).catch(() => {});
    else {
      el.pause();
      setPaused(true);
    }
  }

  return (
    <div data-reveal className="mx-auto max-w-368 px-5 sm:px-8 lg:px-12">
      <div className="relative aspect-video w-full overflow-hidden rounded-[4px] bg-screen">
        <video
          ref={video}
          src={mixkitVideo(id, quality)}
          poster={mixkitPoster(id)}
          muted
          loop
          playsInline
          preload="metadata"
          aria-label={`${title}, footage`}
          className="absolute inset-0 size-full object-cover"
        />
        <button
          type="button"
          onClick={toggle}
          aria-label={paused ? "Play footage" : "Pause footage"}
          className="absolute bottom-5 right-5 flex size-12 items-center justify-center rounded-full bg-paper text-ink transition-colors duration-500 hover:bg-fox hover:text-paper sm:bottom-6 sm:right-6"
        >
          {paused ? <Play size={18} strokeWidth={1.75} className="translate-x-px" /> : <Pause size={18} strokeWidth={1.75} />}
        </button>
      </div>
    </div>
  );
}

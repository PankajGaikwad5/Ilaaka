"use client";

import { useRef, useState } from "react";
import { gsap, useGSAP } from "@/lib/gsap";
import { isFirstLoad, markIntroPlayed, whenFontsReady } from "@/lib/intro";

// First visit: a cream veil holds until fonts are in, then dissolves.
// Every navigation: the new page simply fades in. No wipes, no holds.
export default function Template({ children }) {
  const veil = useRef(null);
  // Captured once per mount so React's dev double-invoked effects still see the original value
  const [first] = useState(isFirstLoad);

  useGSAP(() => {
    markIntroPlayed();
    if (!veil.current) return;
    const fade = gsap.to(veil.current, { autoAlpha: 0, duration: 0.9, ease: "power2.out", paused: true });
    whenFontsReady(() => fade.play());
  });

  return (
    <>
      {first && <div ref={veil} aria-hidden className="pointer-events-none fixed inset-0 z-70 bg-paper" />}
      <div className="page-in flex flex-1 flex-col">{children}</div>
    </>
  );
}

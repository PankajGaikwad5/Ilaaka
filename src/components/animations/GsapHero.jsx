"use client";

import { useRef } from "react";
import { gsap, useGSAP } from "@/lib/gsap";

/**
 * GsapHero demonstrates safe GSAP animations in Next.js App Router using the @gsap/react `useGSAP` hook.
 * Notice:
 * - Proper scoping with `scope: containerRef` ensures automatic cleanup on unmount.
 * - Fluid flex/grid layout rather than brittle absolute positioning.
 */
export default function GsapHero() {
  const containerRef = useRef(null);
  const headlineRef = useRef(null);
  const badgeRef = useRef(null);
  const ctaRef = useRef(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.from(badgeRef.current, {
        y: -20,
        opacity: 0,
        duration: 0.8,
      })
        .from(
          ".gsap-title-span",
          {
            y: 40,
            opacity: 0,
            duration: 1,
            stagger: 0.15,
          },
          "-=0.5"
        )
        .from(
          ctaRef.current,
          {
            y: 20,
            opacity: 0,
            duration: 0.8,
          },
          "-=0.6"
        );
    },
    { scope: containerRef }
  );

  return (
    <section
      ref={containerRef}
      className="relative w-full overflow-hidden border-b border-zinc-800/80 bg-gradient-to-b from-zinc-950 via-zinc-900 to-[#070709] py-20 px-6 sm:px-10 lg:px-16"
    >
      {/* Background ambient glow - using inset-0 with pointer-events-none and blur instead of brittle absolute pixels */}
      <div className="pointer-events-none absolute inset-0 -z-10 flex items-center justify-center opacity-30">
        <div className="h-96 w-96 rounded-full bg-amber-500/20 blur-3xl sm:h-[30rem] sm:w-[30rem]" />
      </div>

      <div className="mx-auto flex max-w-5xl flex-col items-center text-center">
        {/* Production Badge */}
        <div
          ref={badgeRef}
          className="inline-flex items-center gap-2 rounded-full border border-amber-500/30 bg-amber-500/10 px-4 py-1.5 text-xs font-medium uppercase tracking-widest text-amber-400 backdrop-blur-sm"
        >
          <span className="h-2 w-2 rounded-full bg-amber-400 animate-pulse" />
          Ilaaka Studios • Production Suite
        </div>

        {/* Studio Heading */}
        <h1
          ref={headlineRef}
          className="mt-6 flex flex-wrap justify-center gap-x-3 text-4xl font-extrabold tracking-tight text-white sm:text-6xl lg:text-7xl"
        >
          <span className="gsap-title-span">Cinematic</span>
          <span className="gsap-title-span bg-gradient-to-r from-amber-400 to-amber-200 bg-clip-text text-transparent">
            Visions.
          </span>
          <span className="gsap-title-span">Boundless</span>
          <span className="gsap-title-span">Stories.</span>
        </h1>

        <p className="mt-6 max-w-2xl text-base text-zinc-400 sm:text-lg">
          Crafted for high-end film, television, and visual storytelling. Fully
          configured with GSAP timelines, Framer Motion, and scalable Tailwind CSS layout architecture.
        </p>

        {/* Action Buttons */}
        <div
          ref={ctaRef}
          className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center"
        >
          <a
            href="#tailwind-guide"
            className="rounded-lg bg-amber-500 px-6 py-3 text-sm font-semibold text-black transition-all hover:bg-amber-400 hover:shadow-lg hover:shadow-amber-500/25 active:scale-95"
          >
            Explore Tailwind Architecture Guide
          </a>
          <a
            href="#demo-showcase"
            className="rounded-lg border border-zinc-700 bg-zinc-900/80 px-6 py-3 text-sm font-medium text-zinc-200 backdrop-blur-sm transition-colors hover:border-zinc-500 hover:bg-zinc-800 active:scale-95"
          >
            View Motion & GSAP Examples
          </a>
        </div>
      </div>
    </section>
  );
}


"use client";

import { useRef } from "react";
import { gsap, useGSAP } from "@/lib/gsap";
import { cn } from "@/lib/utils";

// The studio's mascot from the intro title card, redrawn as vector so it stays crisp at any size.
// Replace with the studio's own artwork when it's available; keep the group ids for the idle loop.
export default function Fox({ className, idle = true, title = "Ilaaka fox", decorative = false }) {
  const root = useRef(null);

  useGSAP(
    () => {
      if (!idle) return;
      const mm = gsap.matchMedia();
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        gsap.to(".fox-tail", {
          rotate: 5,
          svgOrigin: "120 222",
          duration: 1.8,
          ease: "sine.inOut",
          yoyo: true,
          repeat: -1,
        });

        // Blink, then the occasional ear flick, on an irregular loop so it doesn't feel mechanical
        const tl = gsap.timeline({ repeat: -1, repeatDelay: 2.6 });
        tl.to(".fox-eye", { scaleY: 0.1, svgOrigin: "72 74", duration: 0.08, ease: "power1.in" })
          .to(".fox-eye", { scaleY: 1, svgOrigin: "72 74", duration: 0.12, ease: "power1.out" })
          .to(".fox-ear-back", { rotate: -9, svgOrigin: "100 60", duration: 0.14, ease: "power2.out" }, "+=1.4")
          .to(".fox-ear-back", { rotate: 0, svgOrigin: "100 60", duration: 0.5, ease: "elastic.out(1, 0.4)" })
          .to(".fox-eye", { scaleY: 0.1, svgOrigin: "72 74", duration: 0.08, ease: "power1.in" }, "+=1.8")
          .to(".fox-eye", { scaleY: 1, svgOrigin: "72 74", duration: 0.12, ease: "power1.out" });
      });
      return () => mm.revert();
    },
    { scope: root, dependencies: [idle] }
  );

  return (
    <svg
      ref={root}
      viewBox="0 0 200 240"
      role={decorative ? undefined : "img"}
      aria-label={decorative ? undefined : title}
      aria-hidden={decorative || undefined}
      className={cn("overflow-visible", className)}
    >
      <ellipse cx="120" cy="232" rx="78" ry="5" fill="var(--ink)" opacity="0.12" />

      <g className="fox-tail">
        <path
          d="M118 214C140 214 168 200 178 176C186 158 198 170 196 190C193 214 168 232 130 232H104C104 224 110 216 118 214Z"
          fill="var(--fox)"
        />
        <path d="M180 170C185 157 197 163 197 181C193 177 186 174 180 170Z" fill="#fffaf3" />
      </g>

      <ellipse cx="128" cy="196" rx="30" ry="32" fill="#9c4522" />
      <path d="M74 104C64 134 60 176 66 222C80 228 120 228 136 220C142 184 132 140 112 102Z" fill="var(--fox)" />
      <ellipse cx="132" cy="226" rx="14" ry="4.5" fill="var(--bark)" />

      <path d="M79 170h12v52q0 6-6 6h-9q-4 0-1-4l4-4z" fill="var(--bark)" />
      <path d="M97 172h12v50q0 6-6 6h-9q-4 0-1-4l4-4z" fill="var(--bark)" />
      <path d="M80 106C72 132 74 164 90 192C104 166 108 132 104 104Z" fill="#fffaf3" />

      <path d="M70 92L115 74L118 112L72 112Z" fill="var(--fox)" />

      <g className="fox-ear-front">
        <path d="M62 64L58 28L84 54Z" fill="var(--fox)" />
        <path d="M65 58L63 38L78 53Z" fill="var(--bark)" />
      </g>
      <g className="fox-ear-back">
        <path d="M90 54L102 22L112 62Z" fill="var(--fox)" />
        <path d="M95 52L102 32L107 58Z" fill="var(--bark)" />
      </g>

      <path
        d="M58 66C66 54 88 50 106 58C116 64 118 80 110 92C102 104 86 108 74 104L34 90C30 89 30 86 34 84Z"
        fill="var(--fox)"
      />
      <path d="M34 90L70 103C80 105 90 102 96 97C86 96 74 93 62 88C52 85 42 86 34 90Z" fill="#fffaf3" />
      <circle cx="33" cy="87" r="3.6" fill="var(--ink)" />
      <g className="fox-eye">
        <ellipse cx="72" cy="74" rx="3.2" ry="3.7" fill="var(--ink)" />
        <circle cx="73.2" cy="72.6" r="0.9" fill="#fffaf3" />
      </g>
    </svg>
  );
}

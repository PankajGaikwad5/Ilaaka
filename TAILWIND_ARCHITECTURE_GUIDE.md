# Ilaaka Studios — Tailwind CSS & Motion Architecture Guide

This guide establishes layout rules for building scalable, responsive, and cinematic web interfaces for **Ilaaka Studios** without falling into the trap of brittle absolute positioning.

---

## 1. The Core Rule: Flow Over Coordinates

### Why avoid arbitrary absolute classes (`absolute top-[120px] left-[50px]`)?
- **Breaks Parent Heights**: Absolutely positioned elements are removed from normal document flow. Parents collapse to `height: 0` unless hardcoded, leading to endless layout patching.
- **Collides on Mobile / Resizing**: Screen width changes cause fixed coordinates to overlap text, truncate headlines, or spill offscreen.
- **Breaks Dynamic Content**: If a movie synopsis or title grows from 1 line to 3 lines, absolute positioning cannot push downstream elements down.
- **Accessibility & Focus Order**: Tab navigation and screen readers struggle when visual coordinate order contradicts DOM flow.

---

## 2. Proper Class Replacements (Side-by-Side Cheatsheet)

| Scenario | ❌ Brittle Absolute Approach | ✅ Proper Tailwind Semantic Approach |
| :--- | :--- | :--- |
| **Centering an item** | `absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2` | `grid place-items-center` or `flex items-center justify-center` |
| **Pushing element to right** | `absolute right-4` | `ml-auto` or parent `flex justify-between` |
| **Stacking vertical sections** | `absolute top-[200px]` | Parent `flex flex-col gap-8` |
| **Sticky Navigation Bar** | `absolute top-0 w-full` | `sticky top-0 z-50 backdrop-blur-md` |
| **Film Cast / Poster Grid** | Hardcoded pixel columns | `grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6` |
| **Hero Container** | `w-[1200px] h-[700px]` | `w-full max-w-7xl mx-auto px-4 sm:px-8 py-20` |
| **Cinema Video Player** | `w-[800px] h-[450px]` | `w-full aspect-video rounded-xl` or `aspect-[21/9]` |
| **Movie Poster Card** | Rigid pixel box | `w-full aspect-[2/3] object-cover rounded-lg` |

---

## 3. When Is `absolute` Actually Legitimate?

Only use `absolute` when an element is intentionally decorative or an overlay on top of existing content:

1. **Background Ambient Glows / Video Backdrops**:
   ```jsx
   <div className="relative min-h-[500px] overflow-hidden">
     {/* Ambient overlay - strictly non-interactive */}
     <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-t from-black via-transparent to-transparent" />
     
     {/* Normal flowing content */}
     <div className="relative mx-auto max-w-5xl px-6 py-24">
       <h1>Hero Headline</h1>
     </div>
   </div>
   ```

2. **Corner Badges (Inside a `relative` Card)**:
   ```jsx
   <article className="relative overflow-hidden rounded-xl bg-zinc-900 aspect-[2/3]">
     <img src="/poster.jpg" className="h-full w-full object-cover" />
     {/* Small isolated badge */}
     <span className="absolute top-3 right-3 rounded bg-black/70 px-2 py-0.5 text-xs text-amber-400">
       4K HDR
     </span>
   </article>
   ```

---

## 4. Animation Guidelines (GSAP & Motion in Next.js)

### GSAP Setup (`@gsap/react`)
Always use `@/lib/gsap.js` to ensure plugins are registered cleanly on the client:

```jsx
"use client";

import { useRef } from "react";
import { gsap, useGSAP } from "@/lib/gsap";

export default function CinemaReveal() {
  const container = useRef(null);

  useGSAP(
    () => {
      gsap.from(".reveal-item", {
        y: 30,
        opacity: 0,
        stagger: 0.1,
        duration: 0.8,
        ease: "power2.out",
      });
    },
    { scope: container } // Automatically cleans up memory on unmount
  );

  return (
    <div ref={container} className="flex flex-col gap-4">
      <h2 className="reveal-item">Feature Title</h2>
      <p className="reveal-item">Synopsis text...</p>
    </div>
  );
}
```

### Motion (`motion` / `framer-motion`)
Ideal for gestures, spring animations, and layout morphing:

```jsx
"use client";

import { motion } from "framer-motion";

export default function SlateButton() {
  return (
    <motion.button
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      transition={{ type: "spring", stiffness: 400, damping: 20 }}
      className="rounded-lg bg-amber-500 px-6 py-3 font-semibold text-black"
    >
      Play Trailer
    </motion.button>
  );
}
```

---

## 5. Studio Design System Tokens
- **Backgrounds**: `#070709` (Cinematic Onyx)
- **Surfaces**: `bg-zinc-900/60 border border-zinc-800`
- **Primary Accent**: Amber / Gold (`#e5a93b`, `text-amber-400`, `bg-amber-500`)
- **Aspect Ratios**:
  - `aspect-video` (16:9 standard screen)
  - `aspect-[21/9]` (2.39:1 Anamorphic Cinemascope)
  - `aspect-[2/3]` (One-sheet theatrical poster ratio)


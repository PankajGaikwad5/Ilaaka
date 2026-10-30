"use client";

import { CheckCircle2, XCircle, AlertTriangle } from "lucide-react";

const COMPARISONS = [
  {
    title: "1. Centering Content (Hero or Modal)",
    badDesc: "Arbitrary absolute transforms cause parent height collapse and mobile clipping.",
    badCode: `<div className="relative h-96">
  {/* ❌ Brittle absolute centering */}
  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px]">
    <h1>Title</h1>
  </div>
</div>`,
    goodDesc: "Grid or Flexbox keeps elements in natural document flow with zero math.",
    goodCode: `{/* ✅ Semantic Grid centering */}
<div className="min-h-96 grid place-items-center p-6">
  <div className="w-full max-w-md text-center">
    <h1>Title</h1>
  </div>
</div>

{/* ✅ Or Flexbox */}
<div className="min-h-96 flex flex-col items-center justify-center p-6">
  <div className="w-full max-w-md text-center">
    <h1>Title</h1>
  </div>
</div>`,
  },
  {
    title: "2. Cinema Video / Media Player Container",
    badDesc: "Fixed pixel dimensions break on mobile and don't maintain cinema aspect ratios.",
    badCode: `{/* ❌ Fixed widths break responsiveness */}
<div className="w-[1120px] h-[630px] absolute left-10 top-20">
  <video src="..." />
</div>`,
    goodDesc: "Aspect ratio utilities maintain exact theatrical 16:9 or 21:9 cinemascope ratios.",
    goodCode: `{/* ✅ Fluid responsive 16:9 or 2.39:1 Cinemascope */}
<div className="w-full max-w-6xl mx-auto px-4">
  <div className="relative aspect-video sm:aspect-[21/9] w-full overflow-hidden rounded-2xl bg-zinc-950">
    <video className="h-full w-full object-cover" src="..." />
  </div>
</div>`,
  },
  {
    title: "3. Card Badges & Floating Overlays",
    badDesc: "Over-relying on absolute positioning for title and metadata that should flex naturally.",
    badCode: `{/* ❌ Rigid absolute positioning inside card */}
<div className="relative h-64 border">
  <img src="..." className="h-full w-full" />
  <span className="absolute top-4 left-4">4K UHD</span>
  <h3 className="absolute bottom-10 left-4">Movie Title</h3>
  <p className="absolute bottom-4 left-4">2h 15m</p>
</div>`,
    goodDesc: "Keep text in a flex container with gap spacing; only use absolute for true background/ambient overlays.",
    goodCode: `{/* ✅ Natural flow with gradient overlay */}
<article className="group relative flex flex-col justify-end overflow-hidden rounded-xl aspect-[2/3] p-6 bg-zinc-900">
  {/* Isolated background layer */}
  <img className="absolute inset-0 h-full w-full object-cover -z-10" src="..." />
  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent -z-10" />

  {/* Top badge row via flexbox */}
  <div className="absolute top-4 inset-x-4 flex items-center justify-between">
    <span className="rounded-full bg-amber-500/20 px-2.5 py-0.5 text-xs text-amber-300">4K UHD</span>
    <span className="text-xs text-zinc-400">2026</span>
  </div>

  {/* Bottom details stack naturally */}
  <div className="flex flex-col gap-1">
    <h3 className="text-lg font-bold text-white">Movie Title</h3>
    <p className="text-sm text-zinc-300">2h 15m • Sci-Fi Thriller</p>
  </div>
</article>`,
  },
  {
    title: "4. Sticky Navigation Bar",
    badDesc: "Using absolute top-0 causes navbar to disconnect on scroll and overlap page content.",
    badCode: `{/* ❌ Absolute navbar scrolls out of view or overlaps content */}
<header className="absolute top-0 left-0 w-full z-50">
  <nav>...</nav>
</header>`,
    goodDesc: "Use sticky with top-0 and backdrop-blur for sleek cinematic translucent headers.",
    goodCode: `{/* ✅ Sticky navbar with natural viewport awareness */}
<header className="sticky top-0 z-50 w-full border-b border-zinc-800/80 bg-zinc-950/80 backdrop-blur-md">
  <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-8">
    <nav>...</nav>
  </div>
</header>`,
  },
];

export default function TailwindLayoutGuide() {
  return (
    <section id="tailwind-guide" className="w-full py-16 px-6 sm:px-10 lg:px-16 border-t border-zinc-800/80 bg-zinc-950">
      <div className="mx-auto max-w-5xl">
        <div className="flex items-center gap-2 text-amber-500 text-xs font-semibold uppercase tracking-wider">
          <AlertTriangle className="w-4 h-4" />
          <span>Tailwind Layout Blueprint</span>
        </div>
        <h2 className="text-3xl font-extrabold text-white mt-1">
          Proper Tailwind Classes vs. Brittle Absolute Positioning
        </h2>
        <p className="mt-2 text-sm text-zinc-400 max-w-3xl">
          Absolute positioning (`absolute top-[...] left-[...]`) detaches elements from the DOM document flow. It causes text collisions on mobile screens, breaks parent heights, and introduces maintenance headaches. Use semantic <strong>Flexbox</strong>, <strong>Grid</strong>, <strong>Auto Margins</strong>, and <strong>Spacing Scales</strong> whenever possible.
        </p>

        <div className="mt-10 space-y-8">
          {COMPARISONS.map((item, index) => (
            <div
              key={index}
              className="rounded-xl border border-zinc-800 bg-zinc-900/40 p-6 sm:p-8"
            >
              <h3 className="text-xl font-bold text-zinc-100">{item.title}</h3>

              <div className="mt-6 grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Anti-Pattern Box */}
                <div className="flex flex-col rounded-lg border border-red-500/30 bg-red-950/10 p-5">
                  <div className="flex items-center gap-2 text-red-400 font-semibold text-sm mb-2">
                    <XCircle className="w-4 h-4" />
                    <span>Avoid: Absolute / Hardcoded Hacks</span>
                  </div>
                  <p className="text-xs text-zinc-400 mb-3">{item.badDesc}</p>
                  <pre className="mt-auto overflow-x-auto rounded bg-black/60 p-3 text-xs font-mono text-red-200/90 leading-relaxed">
                    <code>{item.badCode}</code>
                  </pre>
                </div>

                {/* Best Practice Box */}
                <div className="flex flex-col rounded-lg border border-emerald-500/30 bg-emerald-950/10 p-5">
                  <div className="flex items-center gap-2 text-emerald-400 font-semibold text-sm mb-2">
                    <CheckCircle2 className="w-4 h-4" />
                    <span>Recommended: Semantic Fluid Classes</span>
                  </div>
                  <p className="text-xs text-zinc-400 mb-3">{item.goodDesc}</p>
                  <pre className="mt-auto overflow-x-auto rounded bg-black/60 p-3 text-xs font-mono text-emerald-200/90 leading-relaxed">
                    <code>{item.goodCode}</code>
                  </pre>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


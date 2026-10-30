import GsapHero from "@/components/animations/GsapHero";
import MotionShowcase from "@/components/animations/MotionShowcase";
import TailwindLayoutGuide from "@/components/guide/TailwindLayoutGuide";
import { Film, Clapperboard, Sparkles } from "lucide-react";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-[#070709] text-zinc-100">
      {/* Studio Header - Semantic sticky header */}
      <header className="sticky top-0 z-50 w-full border-b border-zinc-800/80 bg-[#070709]/80 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-8">
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-tr from-amber-600 to-amber-400 text-black shadow-lg shadow-amber-500/20">
              <Film className="h-5 w-5 stroke-[2.5]" />
            </div>
            <div className="flex flex-col">
              <span className="text-base font-black tracking-wider uppercase text-white leading-none">
                Ilaaka
              </span>
              <span className="text-[10px] font-semibold tracking-widest uppercase text-amber-400 leading-tight">
                Studios
              </span>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-400">
            <a href="#demo-showcase" className="transition-colors hover:text-white">
              Productions
            </a>
            <a href="#tailwind-guide" className="transition-colors hover:text-white">
              Tailwind Guide
            </a>
            <a
              href="https://gsap.com/docs/v3/"
              target="_blank"
              rel="noreferrer"
              className="transition-colors hover:text-white"
            >
              GSAP Docs
            </a>
            <a
              href="https://motion.dev"
              target="_blank"
              rel="noreferrer"
              className="transition-colors hover:text-white"
            >
              Motion Docs
            </a>
          </nav>

          <div className="flex items-center gap-3">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-400">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
              Ready for Dev
            </span>
          </div>
        </div>
      </header>

      {/* Main Content Sections */}
      <main className="flex-1 flex flex-col">
        {/* GSAP Hero Animation Showcase */}
        <GsapHero />

        {/* Framer Motion Interactive Repertoire */}
        <MotionShowcase />

        {/* Tailwind Layout Architecture Guide */}
        <TailwindLayoutGuide />
      </main>

      {/* Studio Footer */}
      <footer className="border-t border-zinc-800 bg-zinc-950 py-10 px-6 sm:px-10 lg:px-16 text-center text-xs text-zinc-500">
        <div className="mx-auto max-w-5xl flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>© 2026 Ilaaka Studios. Built with Next.js, Tailwind CSS, GSAP &amp; Motion.</p>
          <div className="flex items-center gap-4 text-zinc-400">
            <a href="#tailwind-guide" className="hover:text-amber-400 transition-colors">
              Tailwind Layout Rules
            </a>
            <span>•</span>
            <span className="text-zinc-500">Pure JavaScript Setup</span>
          </div>
        </div>
      </footer>
    </div>
  );
}

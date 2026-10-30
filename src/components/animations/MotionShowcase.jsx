"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Film, Clapperboard, Sparkles, Tv } from "lucide-react";

const CATEGORIES = [
  { id: "features", label: "Feature Films", icon: Film },
  { id: "series", label: "Original Series", icon: Tv },
  { id: "vfx", label: "VFX & Post", icon: Sparkles },
  { id: "docs", label: "Documentaries", icon: Clapperboard },
];

const PROJECTS = {
  features: [
    { title: "Mirage of the Sun", genre: "Sci-Fi / Drama", year: "2026", status: "In Production" },
    { title: "The Silent Valley", genre: "Psychological Thriller", year: "2025", status: "Post-Production" },
  ],
  series: [
    { title: "District 99", genre: "Crime Anthology", year: "Season 2", status: "Streaming" },
    { title: "Chrono Echo", genre: "Mystery / Speculative", year: "Season 1", status: "In Development" },
  ],
  vfx: [
    { title: "Hyper-Real Simulation", genre: "Unreal 5.5 Virtual Production", year: "2026", status: "Active Pipeline" },
    { title: "Dynamic Volumetrics", genre: "Houdini FX Suite", year: "2026", status: "Active Pipeline" },
  ],
  docs: [
    { title: "Voices of the Dunes", genre: "Wildlife & Anthropological", year: "2025", status: "Festival Run" },
    { title: "Celluloid Soul", genre: "Cinema History", year: "2026", status: "Shooting" },
  ],
};

export default function MotionShowcase() {
  const [activeTab, setActiveTab] = useState("features");

  return (
    <section id="demo-showcase" className="w-full py-16 px-6 sm:px-10 lg:px-16">
      <div className="mx-auto max-w-5xl">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-8">
          <div>
            <span className="text-xs font-semibold tracking-wider uppercase text-amber-500">
              Interactive Motion Demo
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mt-1">
              Studio Slate & Repertoire
            </h2>
          </div>
          <p className="text-sm text-zinc-400 max-w-sm">
            Powered by <code className="text-amber-400">framer-motion</code> / <code className="text-amber-400">motion</code> with spring physics and layout morphing.
          </p>
        </div>

        {/* Tab Controls with animated active pill */}
        <div className="flex flex-wrap gap-2 p-1.5 rounded-xl bg-zinc-900 border border-zinc-800">
          {CATEGORIES.map((cat) => {
            const Icon = cat.icon;
            const isActive = activeTab === cat.id;

            return (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                className={`relative flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-colors cursor-pointer ${
                  isActive ? "text-white" : "text-zinc-400 hover:text-zinc-200"
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeCategoryPill"
                    className="absolute inset-0 rounded-lg bg-amber-500/20 border border-amber-500/50"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
                <Icon className="w-4 h-4 z-10" />
                <span className="z-10">{cat.label}</span>
              </button>
            );
          })}
        </div>

        {/* Animated Project Cards Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6"
          >
            {PROJECTS[activeTab].map((item, index) => (
              <motion.div
                key={item.title}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className="group p-6 rounded-xl bg-zinc-900/60 border border-zinc-800 hover:border-zinc-700 transition-colors flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between text-xs text-zinc-400 mb-2">
                    <span>{item.genre}</span>
                    <span className="px-2 py-0.5 rounded-full bg-zinc-800 text-zinc-300 border border-zinc-700">
                      {item.year}
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold text-white group-hover:text-amber-400 transition-colors">
                    {item.title}
                  </h3>
                </div>
                <div className="mt-4 pt-4 border-t border-zinc-800/80 flex items-center justify-between">
                  <span className="text-xs text-amber-500/90 font-medium">
                    ● {item.status}
                  </span>
                  <span className="text-xs text-zinc-400 group-hover:translate-x-1 transition-transform">
                    View Details →
                  </span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}


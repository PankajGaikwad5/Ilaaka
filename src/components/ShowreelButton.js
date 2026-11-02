"use client";

import { useEffect, useState, useSyncExternalStore } from "react";
import { createPortal } from "react-dom";
import { AnimatePresence, motion } from "framer-motion";
import { useLenis } from "lenis/react";
import { Play, X } from "lucide-react";
import { SHOWREEL_YOUTUBE_ID } from "@/lib/site";
import { cn } from "@/lib/utils";

const EASE = [0.65, 0, 0.35, 1];
const noop = () => () => {};

// Opens the film linked from the studio's Instagram bio in a letterboxed player
export default function ShowreelButton({ label = "Watch the latest film", className, videoId = SHOWREEL_YOUTUBE_ID }) {
  const [open, setOpen] = useState(false);
  const lenis = useLenis();
  // Portals need document; false during prerender and hydration, true afterwards
  const mounted = useSyncExternalStore(noop, () => true, () => false);

  useEffect(() => {
    if (!open) return;
    lenis?.stop();
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => {
      lenis?.start();
      window.removeEventListener("keydown", onKey);
    };
  }, [open, lenis]);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className={cn("group inline-flex items-center gap-4 text-[15px] font-medium", className)}
      >
        <span className="flex size-14 items-center justify-center rounded-full border border-current transition-colors duration-500 ease-film group-hover:border-fox group-hover:bg-fox group-hover:text-paper">
          <Play size={18} strokeWidth={1.75} className="translate-x-px" />
        </span>
        {label}
      </button>

      {mounted &&
        createPortal(
          <AnimatePresence>
            {open && (
              <motion.div
                role="dialog"
                aria-modal="true"
                aria-label={label}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4, ease: EASE }}
                onClick={() => setOpen(false)}
                className="fixed inset-0 z-80 flex items-center justify-center bg-screen/95 p-4 sm:p-10"
              >
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  className="absolute right-4 top-4 flex size-12 items-center justify-center rounded-full border border-paper/30 text-paper transition-colors hover:border-paper sm:right-8 sm:top-8"
                  aria-label="Close player"
                >
                  <X size={20} strokeWidth={1.5} />
                </button>
                <motion.div
                  initial={{ clipPath: "inset(50% 0 50% 0)" }}
                  animate={{ clipPath: "inset(0% 0 0% 0)" }}
                  exit={{ clipPath: "inset(50% 0 50% 0)" }}
                  transition={{ duration: 0.7, ease: EASE }}
                  onClick={(e) => e.stopPropagation()}
                  className="aspect-video w-full max-w-6xl overflow-hidden bg-black"
                >
                  <iframe
                    src={`https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1`}
                    title={label}
                    allow="autoplay; encrypted-media; picture-in-picture; fullscreen"
                    allowFullScreen
                    className="size-full"
                  />
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>,
          document.body
        )}
    </>
  );
}

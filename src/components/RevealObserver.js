"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

const KEYFRAMES = [
  { opacity: 0, translate: "0 28px" },
  { opacity: 1, translate: "0 0" },
];

// Watches every [data-reveal] element and eases it up into place once it scrolls into view.
// The motion runs through the Web Animations API, so the DOM's attributes and classes are never
// touched: React can hydrate the server HTML even if an element is revealed before its segment hydrates.
export default function RevealObserver() {
  const pathname = usePathname();

  useEffect(() => {
    const still = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const seen = new WeakSet();

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const el = entry.target;
          observer.unobserve(el);
          el.animate(KEYFRAMES, {
            duration: still ? 0 : 1100,
            delay: still ? 0 : Number(el.getAttribute("data-reveal-delay")) || 0,
            easing: "cubic-bezier(0.22, 1, 0.36, 1)",
            fill: "both",
          });
        });
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.05 }
    );

    const watch = () =>
      document.querySelectorAll("[data-reveal]").forEach((el) => {
        if (seen.has(el)) return;
        seen.add(el);
        observer.observe(el);
      });

    watch();
    // Filters and accordions add elements after the first pass; batch checks to one per frame
    let frame = 0;
    const mutations = new MutationObserver(() => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(watch);
    });
    mutations.observe(document.body, { childList: true, subtree: true });

    return () => {
      cancelAnimationFrame(frame);
      observer.disconnect();
      mutations.disconnect();
    };
  }, [pathname]);

  return null;
}

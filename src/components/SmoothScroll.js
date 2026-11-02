"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { ReactLenis, useLenis } from "lenis/react";
import { ScrollTrigger } from "@/lib/gsap";
import "lenis/dist/lenis.css";

// Keeps GSAP ScrollTrigger in step with Lenis' smoothed scroll position
function ScrollTriggerSync() {
  const lenis = useLenis(() => ScrollTrigger.update());
  const pathname = usePathname();

  // The footer lives in the layout and survives page changes, so re-measure trigger positions after
  // every navigation and whenever the page height changes (video posters, fonts, filters).
  useEffect(() => {
    // Arriving with a hash (e.g. /services#music-videos) lands on that section, otherwise at the top
    const target = window.location.hash && document.getElementById(decodeURIComponent(window.location.hash.slice(1)));
    if (target) setTimeout(() => lenis?.scrollTo(target, { offset: -96, immediate: true }), 50);
    else lenis?.scrollTo(0, { immediate: true });

    let timer;
    const refresh = () => {
      clearTimeout(timer);
      timer = setTimeout(() => ScrollTrigger.refresh(), 150);
    };

    const observer = new ResizeObserver(refresh);
    observer.observe(document.body);
    refresh();

    return () => {
      clearTimeout(timer);
      observer.disconnect();
    };
  }, [pathname, lenis]);

  return null;
}

export default function SmoothScroll({ children }) {
  return (
    <ReactLenis root options={{ lerp: 0.1, smoothWheel: true, anchors: { offset: -96 } }}>
      <ScrollTriggerSync />
      {children}
    </ReactLenis>
  );
}

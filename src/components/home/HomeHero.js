"use client";

import { useRef } from "react";
import { gsap, useGSAP } from "@/lib/gsap";
import { isFirstLoad, whenFontsReady } from "@/lib/intro";
import Fox from "../Fox";
import ReelMontage from "../ReelMontage";
import ShowreelButton from "../ShowreelButton";

const REEL = [13329, 50325, 42251, 46353, 49326];

/*
  Opens on the studio's own intro title card (cream, ILAAKA, the fox).
  Scrolling holds it briefly while a slit opens through the card and widens into the reel,
  the wordmark drifts apart and the fox steps away.
*/
export default function HomeHero() {
  const root = useRef(null);
  const first = useRef(isFirstLoad());

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      const section = root.current;

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        // Arrival starts once the wordmark font is in and the veil is lifting, so nothing jumps
        const arrival = gsap
          .timeline({ paused: true })
          .from(".hero-letter", { yPercent: 110, duration: 1.6, ease: "power4.out", stagger: 0.07 })
          .from(".hero-hindi", { autoAlpha: 0, y: 16, duration: 1.2, ease: "power3.out" }, 0.55)
          .from(".hero-fox", { autoAlpha: 0, x: 30, duration: 1.4, ease: "power3.out" }, 0.65)
          .from(".hero-cue", { autoAlpha: 0, duration: 0.8 }, 1.1);
        whenFontsReady(() => gsap.delayedCall(first.current ? 0.35 : 0.15, () => arrival.play()));

        // One continuous move: the slit widens into the reel while the wordmark parts.
        // scrub: 1 adds a second of easing so the scene trails the scroll softly instead of snapping to it.
        const tl = gsap.timeline({
          defaults: { ease: "sine.inOut" },
          scrollTrigger: { trigger: section, start: "top top", end: "+=120%", scrub: 1, pin: true },
        });

        tl.to(".hero-cue", { autoAlpha: 0, duration: 0.1 }, 0)
          .fromTo(
            ".hero-screen",
            { clipPath: "inset(49.6% 50% 49.6% 50%)" },
            { clipPath: "inset(0% 0% 0% 0%)", duration: 0.8, ease: "power2.inOut" },
            0
          )
          .to(".hero-hindi-wrap", { autoAlpha: 0, y: -8, duration: 0.25 }, 0.05)
          // The fox stays seated while the screen starts to open, then turns and trots off with small hops.
          // Scroll motion lives on wrappers so it never fights the arrival animation on the same elements.
          .to(".hero-fox-wrap", { scaleX: -1, duration: 0.06, ease: "power1.inOut" }, 0.2)
          .to(".hero-fox-wrap", { x: "38vw", duration: 0.6, ease: "power1.in" }, 0.26)
          .to(".hero-fox-hop", { y: -16, duration: 0.06, repeat: 9, yoyo: true, ease: "sine.inOut" }, 0.26)
          .to(".hero-fox-wrap", { autoAlpha: 0, duration: 0.18 }, 0.68)
          .to(".hero-left", { xPercent: -40, autoAlpha: 0, duration: 0.55 }, 0.1)
          .to(".hero-right", { xPercent: 40, autoAlpha: 0, duration: 0.55 }, 0.1)
          .from(".hero-copy > *", { y: 24, autoAlpha: 0, stagger: 0.06, duration: 0.25, ease: "power1.out" }, 0.7)
          .to({}, { duration: 0.15 });
      });

      // Reduced motion: skip the card and show the opened reel straight away
      mm.add("(prefers-reduced-motion: reduce)", () => {
        gsap.set(".hero-screen", { clipPath: "inset(0% 0% 0% 0%)" });
        gsap.set(".hero-card, .hero-cue", { autoAlpha: 0 });
      });

      return () => mm.revert();
    },
    { scope: root }
  );

  return (
    <section ref={root} className="relative h-svh min-h-[560px] overflow-hidden bg-paper text-ink">
      <div className="hero-screen absolute inset-0 will-change-[clip-path] [clip-path:inset(49.6%_50%_49.6%_50%)]">
        <ReelMontage clips={REEL} className="absolute inset-0" />
        <div className="footage-fade absolute inset-0" />

        <div className="hero-copy absolute inset-x-0 bottom-0 mx-auto flex max-w-368 flex-col gap-8 px-5 pb-10 text-paper sm:px-8 lg:flex-row lg:items-end lg:justify-between lg:px-12 lg:pb-14">
          <p className="display text-[clamp(3.5rem,9.5vw,9.5rem)]">
            The creative
            <br />
            hood
          </p>
          <div className="flex max-w-sm flex-col gap-8 lg:pb-3">
            <p className="text-[17px] leading-[1.55] text-paper/80">
              A film and television studio making feature films, advertisements, short films and music videos, with
              stories from the streets we know.
            </p>
            <ShowreelButton className="text-paper" />
          </div>
        </div>
      </div>

      <div className="hero-card pointer-events-none absolute inset-0 flex flex-col items-center justify-center px-5">
        <h1 className="flex items-end">
          <span className="sr-only">Ilaaka Studios</span>
          <span aria-hidden className="flex font-logo text-[clamp(4.5rem,19vw,19rem)] font-medium leading-[0.86] tracking-[0.01em]">
            <span className="hero-left flex overflow-hidden">
              {"ILA".split("").map((c, i) => (
                <span key={i} className="hero-letter inline-block">
                  {c}
                </span>
              ))}
            </span>
            <span className="hero-right flex overflow-hidden">
              {"AKA".split("").map((c, i) => (
                <span key={i} className="hero-letter inline-block">
                  {c}
                </span>
              ))}
            </span>
          </span>
          <span className="hero-fox-wrap -ml-[1vw] mb-[-0.6vw] block w-[clamp(3.5rem,11vw,11rem)] shrink-0">
            <span className="hero-fox-hop block">
              <Fox decorative className="hero-fox block w-full" />
            </span>
          </span>
        </h1>
        <div className="hero-hindi-wrap">
          <p lang="hi" className="hero-hindi mt-4 font-hindi text-[clamp(1.5rem,3.4vw,3rem)] sm:mt-6">
            स्टूडीयोज़
          </p>
        </div>
      </div>

      <div className="hero-cue pointer-events-none absolute inset-x-0 bottom-8 flex flex-col items-center gap-3 text-[13px] font-medium text-ink-soft">
        Scroll
        <span className="relative h-10 w-px overflow-hidden bg-ink/15">
          <span className="reel-cue absolute inset-0 bg-ink" />
        </span>
      </div>
    </section>
  );
}

"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { useLenis } from "lenis/react";
import { CONTACT, NAV_LINKS } from "@/lib/site";
import { cn } from "@/lib/utils";
import Logo from "./Logo";
import Fox from "./Fox";

const EASE = [0.65, 0, 0.35, 1];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Always visible; once the page moves it settles onto a cream bar so links stay readable over anything
  const lenis = useLenis(({ scroll }) => setScrolled(scroll > 24));

  useEffect(() => {
    if (!lenis) return;
    if (open) lenis.stop();
    else lenis.start();
  }, [open, lenis]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 border-b text-ink transition-[background-color,border-color] duration-700 ease-out-film",
          scrolled ? "border-ink/10 bg-paper" : "border-transparent bg-transparent"
        )}
      >
        <div className="mx-auto flex h-20 max-w-368 items-center justify-between px-5 sm:px-8 lg:px-12">
          <Logo />

          <nav aria-label="Main" className="hidden md:block">
            <ul className="flex items-center gap-9">
              {NAV_LINKS.map((link) => {
                const active = pathname === link.href || pathname.startsWith(`${link.href}/`);
                return (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      aria-current={active ? "page" : undefined}
                      className="group relative block py-1.5 text-[15px] font-medium"
                    >
                      {link.label}
                      <span
                        aria-hidden
                        className={cn(
                          "absolute inset-x-0 bottom-0 h-px origin-right scale-x-0 bg-current transition-transform duration-500 ease-film group-hover:origin-left group-hover:scale-x-100",
                          active && "origin-left scale-x-100"
                        )}
                      />
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          <button
            type="button"
            onClick={() => setOpen(true)}
            aria-expanded={open}
            aria-controls="site-menu"
            className="flex h-11 items-center gap-3 text-[15px] font-medium md:hidden"
          >
            Menu
            <span aria-hidden className="flex w-7 flex-col gap-1.5">
              <span className="h-px w-full bg-current" />
              <span className="ml-auto h-px w-4/6 bg-current" />
            </span>
          </button>
        </div>
      </header>

      <AnimatePresence>
        {open && <MobileMenu pathname={pathname} onClose={() => setOpen(false)} />}
      </AnimatePresence>
    </>
  );
}

function MobileMenu({ pathname, onClose }) {
  return (
    <motion.div
      id="site-menu"
      role="dialog"
      aria-modal="true"
      aria-label="Site menu"
      initial={{ clipPath: "inset(0 0 100% 0)" }}
      animate={{ clipPath: "inset(0 0 0% 0)" }}
      exit={{ clipPath: "inset(0 0 100% 0)" }}
      transition={{ duration: 0.6, ease: EASE }}
      className="fixed inset-0 z-55 flex flex-col bg-ink text-paper"
    >
      <div className="flex h-20 items-center justify-between px-5 sm:h-24 sm:px-8">
        <Logo />
        <button type="button" onClick={onClose} className="h-11 text-[15px] font-medium">
          Close
        </button>
      </div>

      <nav aria-label="Main" className="flex flex-1 flex-col justify-center px-5 sm:px-8">
        <ul className="flex flex-col">
          {[{ label: "Home", href: "/" }, ...NAV_LINKS].map((link, i) => (
            <li key={link.href} className="overflow-hidden">
              <motion.div
                initial={{ y: "105%" }}
                animate={{ y: 0 }}
                exit={{ y: "105%" }}
                transition={{ duration: 0.6, ease: EASE, delay: 0.2 + i * 0.05 }}
              >
                <Link
                  href={link.href}
                  onClick={onClose}
                  className={cn("display block py-1 text-[clamp(3rem,13vw,5rem)]", pathname === link.href && "text-fox-light")}
                >
                  {link.label}
                </Link>
              </motion.div>
            </li>
          ))}
        </ul>
      </nav>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.4, delay: 0.45 }}
        className="flex items-end justify-between gap-6 border-t border-paper/15 px-5 py-6 sm:px-8"
      >
        <div className="flex flex-col gap-1 text-[15px]">
          <a href={`mailto:${CONTACT.email}`} className="underline decoration-paper/30 underline-offset-4">
            {CONTACT.email}
          </a>
          <a href={CONTACT.instagram.href} target="_blank" rel="noreferrer" className="text-paper/60">
            Instagram {CONTACT.instagram.label}
          </a>
        </div>
        <Fox decorative className="w-14 shrink-0" />
      </motion.div>
    </motion.div>
  );
}

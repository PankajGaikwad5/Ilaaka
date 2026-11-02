"use client";

import { useState } from "react";
import { Plus } from "lucide-react";
import { cn } from "@/lib/utils";

// Accordion; panels open by animating grid rows from 0fr to 1fr so height never needs measuring
export default function Faq({ items, title = "Questions we get asked" }) {
  const [open, setOpen] = useState(0);

  return (
    <section className="bg-paper">
      <div className="mx-auto grid max-w-368 gap-12 px-5 py-24 sm:px-8 sm:py-32 lg:grid-cols-12 lg:px-12">
        <h2 data-reveal className="display text-[clamp(2.5rem,4.6vw,4.5rem)] lg:col-span-4">
          {title}
        </h2>
        <ul data-reveal className="border-t border-ink/15 lg:col-span-7 lg:col-start-6">
          {items.map((item, i) => {
            const expanded = open === i;
            return (
              <li key={item.q} className="border-b border-ink/15">
                <h3>
                  <button
                    type="button"
                    aria-expanded={expanded}
                    aria-controls={`faq-${i}`}
                    onClick={() => setOpen(expanded ? -1 : i)}
                    className="flex w-full items-start justify-between gap-6 py-6 text-left"
                  >
                    <span className="text-[clamp(1.15rem,1.6vw,1.4rem)] font-medium leading-[1.3] tracking-[-0.01em]">{item.q}</span>
                    <span
                      className={cn(
                        "mt-1 flex size-8 shrink-0 items-center justify-center rounded-full border transition-[rotate,background-color,border-color,color] duration-500 ease-film",
                        expanded ? "rotate-45 border-fox bg-fox text-paper" : "border-ink/25"
                      )}
                    >
                      <Plus size={16} strokeWidth={1.75} />
                    </span>
                  </button>
                </h3>
                <div
                  id={`faq-${i}`}
                  className={cn(
                    "grid transition-[grid-template-rows] duration-600 ease-[cubic-bezier(0.45,0,0.2,1)]",
                    expanded ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                  )}
                >
                  <div className="overflow-hidden">
                    <p className="prose-justify max-w-[40rem] pb-7 text-[17px] leading-[1.7] text-ink-soft">{item.a}</p>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}

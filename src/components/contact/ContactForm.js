"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { CONTACT } from "@/lib/site";
import { cn } from "@/lib/utils";

const TYPES = ["Feature film", "Advertisement", "Short film", "Music video", "Something else"];
const BUDGETS = ["Under ₹5 lakh", "₹5–15 lakh", "₹15–50 lakh", "₹50 lakh+", "Not sure yet"];
const EASE = [0.22, 1, 0.36, 1];

const field =
  "w-full border-0 border-b border-ink/25 bg-transparent px-0 py-3 text-[17px] text-ink placeholder:text-ink/35 transition-colors focus:border-fox focus:outline-none focus:ring-0";

// No backend yet: the brief is turned into a pre-filled email in the visitor's mail app
export default function ContactForm() {
  const [type, setType] = useState(TYPES[1]);
  const [budget, setBudget] = useState(BUDGETS[4]);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");

  function onSubmit(e) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const name = data.get("name").trim();
    const email = data.get("email").trim();
    if (!name || !email) {
      setError("Add your name and email so we can reply.");
      return;
    }
    setError("");

    const body = [
      `Name: ${name}`,
      `Email: ${email}`,
      data.get("company") && `Brand / artist: ${data.get("company")}`,
      `Project: ${type}`,
      `Budget: ${budget}`,
      data.get("timeline") && `Timeline: ${data.get("timeline")}`,
      "",
      data.get("message"),
    ]
      .filter((line) => line !== null && line !== "")
      .join("\n");

    const subject = `New ${type.toLowerCase()} enquiry from ${name}`;
    window.location.href = `mailto:${CONTACT.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSent(true);
  }

  return (
    <AnimatePresence mode="wait" initial={false}>
      {sent ? (
        <motion.div
          key="sent"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: EASE }}
          className="border-t border-ink pt-10"
        >
          <h2 className="display text-[clamp(2.75rem,5vw,4.5rem)]">Your email is ready to send.</h2>
          <p className="mt-5 max-w-lg text-[17px] leading-[1.7] text-ink-soft">
            We&apos;ve opened your mail app with the brief filled in. Press send and we&apos;ll reply within two working
            days. If nothing opened, write to{" "}
            <a href={`mailto:${CONTACT.email}`} className="text-ink underline underline-offset-4">
              {CONTACT.email}
            </a>
            .
          </p>
          <button
            type="button"
            onClick={() => setSent(false)}
            className="mt-8 text-[15px] font-medium underline decoration-ink/30 underline-offset-4 hover:decoration-fox"
          >
            Edit the brief
          </button>
        </motion.div>
      ) : (
        <motion.form
          key="form"
          noValidate
          onSubmit={onSubmit}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.4, ease: EASE }}
          className="flex flex-col gap-10 border-t border-ink pt-10"
        >
          <div className="grid gap-8 sm:grid-cols-2">
            <label className="block">
              <span className="text-[14px] text-ink-soft">Your name</span>
              <input name="name" autoComplete="name" required className={field} placeholder="Full name" />
            </label>
            <label className="block">
              <span className="text-[14px] text-ink-soft">Email</span>
              <input name="email" type="email" autoComplete="email" required className={field} placeholder="you@example.com" />
            </label>
            <label className="block">
              <span className="text-[14px] text-ink-soft">Brand, label or artist</span>
              <input name="company" autoComplete="organization" className={field} placeholder="Optional" />
            </label>
            <label className="block">
              <span className="text-[14px] text-ink-soft">When do you need it?</span>
              <input name="timeline" className={field} placeholder="e.g. Shoot in March, live by April" />
            </label>
          </div>

          <ChipGroup label="What are we making?" options={TYPES} value={type} onChange={setType} />
          <ChipGroup label="Budget range" options={BUDGETS} value={budget} onChange={setBudget} />

          <label className="block">
            <span className="text-[14px] text-ink-soft">Tell us about it</span>
            <textarea
              name="message"
              rows={5}
              className={cn(field, "resize-none leading-[1.6]")}
              placeholder="The idea, the audience, anything you already have: a script, a track, a reference."
            />
          </label>

          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <p role="alert" className="min-h-6 text-[15px] text-fox">
              {error}
            </p>
            <button
              type="submit"
              className="group inline-flex h-14 items-center justify-center rounded-full bg-ink px-9 text-[16px] font-medium text-paper transition-colors duration-500 ease-film hover:bg-fox"
            >
              <span className="relative block overflow-hidden">
                <span className="block transition-transform duration-500 ease-film group-hover:-translate-y-full">Send the brief</span>
                <span aria-hidden className="absolute inset-0 block translate-y-full transition-transform duration-500 ease-film group-hover:translate-y-0">
                  Send the brief
                </span>
              </span>
            </button>
          </div>
        </motion.form>
      )}
    </AnimatePresence>
  );
}

function ChipGroup({ label, options, value, onChange }) {
  return (
    <fieldset>
      <legend className="text-[14px] text-ink-soft">{label}</legend>
      <div className="mt-4 flex flex-wrap gap-2">
        {options.map((option) => {
          const selected = value === option;
          return (
            <label
              key={option}
              className={cn(
                "cursor-pointer rounded-full border px-4 py-2.5 text-[15px] transition-colors duration-300 has-[:focus-visible]:outline-2 has-[:focus-visible]:outline-offset-2 has-[:focus-visible]:outline-fox",
                selected ? "border-ink bg-ink text-paper" : "border-ink/20 hover:border-ink/60"
              )}
            >
              <input
                type="radio"
                name={label}
                value={option}
                checked={selected}
                onChange={() => onChange(option)}
                className="sr-only"
              />
              {option}
            </label>
          );
        })}
      </div>
    </fieldset>
  );
}

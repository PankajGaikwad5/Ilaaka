import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Combines conditional class names and resolves Tailwind CSS conflicts cleanly.
 * Example: cn("px-4 py-2", isPrimary && "bg-amber-500", "px-6") -> "py-2 bg-amber-500 px-6"
 */
export function cn(...inputs) {
  return twMerge(clsx(inputs));
}


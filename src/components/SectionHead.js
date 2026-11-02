import { cn } from "@/lib/utils";

// The same opener for every section: title on the left, a short note (and optional action) on the right
export default function SectionHead({ title, note, action, as: Tag = "h2", className, dark = false }) {
  return (
    <div
      data-reveal
      className={cn("grid gap-6 lg:grid-cols-12 lg:items-end", className)}
    >
      <Tag className="display text-[clamp(2.5rem,4.6vw,4.5rem)] lg:col-span-7">{title}</Tag>
      {(note || action) && (
        <div className="flex flex-col gap-6 lg:col-span-4 lg:col-start-9 lg:pb-2">
          {note && (
            <p className={cn("max-w-md text-[17px] leading-[1.6]", dark ? "text-paper/70" : "text-ink-soft")}>{note}</p>
          )}
          {action}
        </div>
      )}
    </div>
  );
}

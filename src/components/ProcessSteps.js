import { PROCESS } from "@/lib/process";
import SectionHead from "./SectionHead";

const COLUMNS = "md:grid-cols-[4rem_minmax(0,1.1fr)_minmax(0,1.6fr)_minmax(0,1fr)_8rem]";

// The five stages laid out like a production call sheet: stage, what happens, who's on it, how long
export default function ProcessSteps({ title = "How we work" }) {
  return (
    <section className="bg-paper">
      <div className="mx-auto max-w-368 px-5 py-24 sm:px-8 sm:py-32 lg:px-12">
        <SectionHead
          title={title}
          note="Every project runs on the same call sheet, with one producer from the first call to delivery."
        />

        <div className="mt-14 border-t border-ink">
          <div className={`hidden gap-6 border-b border-ink/15 py-3 text-[13px] text-ink-soft md:grid ${COLUMNS}`}>
            <span>Scene</span>
            <span>Stage</span>
            <span>What happens</span>
            <span>On call</span>
            <span className="text-right">Typical length</span>
          </div>
          <ol>
            {PROCESS.map((step, i) => (
              <li
                key={step.title}
                data-reveal
                data-reveal-delay={String(i * 70)}
                className={`grid grid-cols-[3rem_1fr] gap-x-4 gap-y-3 border-b border-ink/15 py-7 md:gap-6 md:py-8 ${COLUMNS}`}
              >
                <span className="pt-1.5 text-[14px] tabular-nums text-ink-soft">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="display text-[clamp(1.75rem,2.4vw,2.25rem)]">{step.title}</h3>
                <p className="col-start-2 text-[16px] leading-[1.65] text-ink-soft md:col-start-auto md:pt-1.5">{step.body}</p>
                <p className="col-start-2 text-[15px] leading-[1.5] md:col-start-auto md:pt-1.5">{step.crew}</p>
                <p className="col-start-2 text-[15px] text-ink-soft md:col-start-auto md:pt-1.5 md:text-right">{step.length}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

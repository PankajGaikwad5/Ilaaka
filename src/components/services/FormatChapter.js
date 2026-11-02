import { PROJECTS } from "@/lib/projects";
import { cn } from "@/lib/utils";
import VideoFrame from "../VideoFrame";
import ProjectCard from "../ProjectCard";

// One format: footage on one side, what it is and what we handle on the other, then recent examples
export default function FormatChapter({ format, detail, flip = false }) {
  const related = PROJECTS.filter((p) => p.format.toLowerCase() === format.name.toLowerCase()).slice(0, 2);

  return (
    <section id={format.slug} className="scroll-mt-24 border-t border-ink/15 bg-paper">
      <div className="mx-auto max-w-368 px-5 py-24 sm:px-8 sm:py-32 lg:px-12">
        <div className="grid items-start gap-12 lg:grid-cols-12 lg:gap-10">
          <div data-reveal className={cn("lg:col-span-6", flip && "lg:order-2 lg:col-start-7")}>
            <VideoFrame id={format.video} className="aspect-[4/3] rounded-[4px]" />
          </div>

          <div className={cn("lg:col-span-5", flip ? "lg:order-1 lg:col-start-1" : "lg:col-start-8")}>
            <h2 data-reveal className="display text-[clamp(2.75rem,5vw,5rem)]">
              {format.name}
            </h2>
            <p data-reveal className="mt-4 text-[20px] leading-[1.45] text-ink">
              {format.line}
            </p>
            <p data-reveal className="prose-justify mt-6 text-[17px] leading-[1.75] text-ink-soft">
              {detail.intro}
            </p>
            <p data-reveal className="prose-justify mt-5 text-[17px] leading-[1.75] text-ink-soft">
              {detail.detail}
            </p>

            <div data-reveal>
              <h3 className="mt-10 text-[15px] font-medium">What we handle</h3>
              <ul className="mt-4 grid border-t border-ink/15 sm:grid-cols-2">
                {detail.handles.map((item) => (
                  <li key={item} className="flex items-center gap-3 border-b border-ink/15 py-3 text-[16px] sm:odd:pr-4">
                    <span aria-hidden className="size-1.5 shrink-0 rounded-full bg-fox" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {related.length > 0 && (
          <div className="mt-20">
            <h3 data-reveal className="text-[15px] font-medium">
              Recent {format.name.toLowerCase()}
            </h3>
            <div className="mt-6 grid gap-x-8 gap-y-12 sm:grid-cols-2">
              {related.map((project, i) => (
                <ProjectCard key={project.slug} project={project} delay={i ? "100" : undefined} />
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

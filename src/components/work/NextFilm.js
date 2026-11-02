import Link from "next/link";
import { mixkitPoster } from "@/lib/site";

// Quiet link to the next film: still on one side, title on the other
export default function NextFilm({ project }) {
  return (
    <section className="border-t border-ink/15 bg-paper">
      <Link
        href={`/work/${project.slug}`}
        data-reveal
        className="group mx-auto grid max-w-368 items-center gap-8 px-5 py-20 sm:px-8 md:grid-cols-12 lg:px-12 lg:py-28"
      >
        <div className="md:col-span-6">
          <p className="text-[15px] text-ink-soft">Next film</p>
          <p className="display mt-3 text-[clamp(2.75rem,5.5vw,5.5rem)] transition-colors duration-500 group-hover:text-fox">
            {project.title}
          </p>
          <p className="mt-3 text-[15px] text-ink-soft">
            {project.format.replace(/s$/, "")}, {project.year}
          </p>
        </div>
        <div className="aspect-[16/10] overflow-hidden rounded-[4px] md:col-span-5 md:col-start-8">
          <img
            src={mixkitPoster(project.video)}
            alt=""
            loading="lazy"
            className="size-full object-cover transition-[scale] duration-[1400ms] ease-out-film group-hover:scale-[1.03]"
          />
        </div>
      </Link>
    </section>
  );
}

import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { PROJECTS, nextProject, projectBySlug } from "@/lib/projects";
import { mixkitPoster } from "@/lib/site";
import FilmPlayer from "@/components/work/FilmPlayer";
import NextFilm from "@/components/work/NextFilm";

export function generateStaticParams() {
  return PROJECTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const project = projectBySlug(slug);
  if (!project) return {};
  return { title: project.title, description: project.logline };
}

export default async function ProjectPage({ params }) {
  const { slug } = await params;
  const project = projectBySlug(slug);
  if (!project) notFound();

  const credits = [
    ["Format", project.format.replace(/s$/, "")],
    ["Client", project.client],
    ["Year", project.year],
    ["Our role", project.role],
  ];

  return (
    <main className="flex-1 bg-paper">
      <section className="mx-auto max-w-368 px-5 pb-14 pt-32 sm:px-8 sm:pt-40 lg:px-12">
        <Link
          href="/work"
          className="group inline-flex items-center gap-2 text-[15px] text-ink-soft transition-colors duration-500 hover:text-ink"
        >
          <ArrowLeft size={16} strokeWidth={1.75} className="transition-transform duration-500 group-hover:-translate-x-1" />
          All work
        </Link>

        <h1 data-reveal className="display mt-8 max-w-[16ch] text-[clamp(3.25rem,7.5vw,7.5rem)]">
          {project.title}
        </h1>

        <div className="mt-10 grid gap-10 border-t border-ink/15 pt-8 lg:grid-cols-12">
          <p data-reveal className="display text-[clamp(1.6rem,2.4vw,2.25rem)] leading-[1.25] lg:col-span-6">
            {project.logline}
          </p>
          <dl data-reveal data-reveal-delay="100" className="grid grid-cols-2 gap-6 lg:col-span-5 lg:col-start-8">
            {credits.map(([label, value]) => (
              <div key={label}>
                <dt className="text-[13px] text-ink-soft">{label}</dt>
                <dd className="mt-1 text-[16px] leading-[1.45]">{value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <FilmPlayer id={project.video} title={project.title} quality={project.hd === false ? 720 : 1080} />

      <section className="mx-auto max-w-368 px-5 py-24 sm:px-8 sm:py-32 lg:px-12">
        <div className="grid gap-10 lg:grid-cols-12">
          <h2 data-reveal className="display text-[clamp(2.5rem,4.6vw,4.5rem)] lg:col-span-4">
            About the film
          </h2>
          <div className="grid gap-8 text-[17px] leading-[1.8] text-ink-soft md:grid-cols-2 md:gap-10 lg:col-span-7 lg:col-start-6">
            {project.synopsis.map((para, i) => (
              <p key={i} data-reveal data-reveal-delay={String(i * 100)} className="prose-justify">
                {para}
              </p>
            ))}
          </div>
        </div>

        <div className="mt-20 grid gap-6 sm:grid-cols-3 lg:mt-24">
          {project.stills.map((still, i) => (
            <figure key={`${still}-${i}`} data-reveal data-reveal-delay={String(i * 90)}>
              <img
                src={mixkitPoster(still)}
                alt={`Still ${i + 1} from ${project.title}`}
                loading="lazy"
                className="aspect-[16/10] w-full rounded-[4px] object-cover"
              />
            </figure>
          ))}
        </div>
      </section>

      <NextFilm project={nextProject(project.slug)} />
    </main>
  );
}

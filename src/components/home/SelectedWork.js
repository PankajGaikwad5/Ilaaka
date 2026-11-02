import { PROJECTS } from "@/lib/projects";
import SectionHead from "../SectionHead";
import ProjectCard from "../ProjectCard";
import RollLink from "../RollLink";

const FEATURED = "kaise-kahoon";
const MORE = ["livogen-iron-gummies", "pulekhe", "zee-tv-promo"];

// One film shown wide in scope, then three more in a row
export default function SelectedWork() {
  const lead = PROJECTS.find((p) => p.slug === FEATURED);
  const rest = MORE.map((slug) => PROJECTS.find((p) => p.slug === slug));

  return (
    <section className="bg-paper">
      <div className="mx-auto max-w-368 px-5 py-24 sm:px-8 sm:py-32 lg:px-12">
        <SectionHead
          title="Selected work"
          note="Recent films for brands, artists and ourselves. Hover any of them to see it move."
          action={
            <RollLink href="/work" variant="outline" className="self-start">
              See all work
            </RollLink>
          }
        />
        <ProjectCard project={lead} featured className="mt-14" />
        <div className="mt-16 grid gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
          {rest.map((project, i) => (
            <ProjectCard key={project.slug} project={project} delay={String(i * 100)} />
          ))}
        </div>
      </div>
    </section>
  );
}

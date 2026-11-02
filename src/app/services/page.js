import Link from "next/link";
import PageHero from "@/components/PageHero";
import FormatChapter from "@/components/services/FormatChapter";
import ProcessSteps from "@/components/ProcessSteps";
import Faq from "@/components/Faq";
import { FORMATS } from "@/lib/site";
import { FAQS, SERVICE_DETAILS } from "@/lib/services";

export const metadata = {
  title: "What we make",
  description: "Feature films, advertisements, short films and music videos, developed, shot and finished in-house.",
};

export default function ServicesPage() {
  return (
    <main className="flex-1">
      <PageHero
        title="Four formats, one crew"
        aside={
          <nav aria-label="Formats on this page">
            <ul className="flex flex-col border-t border-ink/15">
              {FORMATS.map((f) => (
                <li key={f.slug} className="border-b border-ink/15">
                  <Link
                    href={`#${f.slug}`}
                    className="group flex items-baseline justify-between py-3 text-[17px] transition-colors hover:text-fox"
                  >
                    {f.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        }
      >
        <p className="prose-justify">
          Whatever the length or the screen, every Ilaaka film is developed, shot and finished by the same in-house team.
          That&apos;s how a thirty-second spot gets the care of a short film, and a debut feature gets the discipline of a
          campaign.
        </p>
      </PageHero>

      {FORMATS.map((format, i) => (
        <FormatChapter key={format.slug} format={format} detail={SERVICE_DETAILS[format.slug]} flip={i % 2 === 1} />
      ))}

      <ProcessSteps title="How a project runs" />
      <Faq items={FAQS} />
    </main>
  );
}

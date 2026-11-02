import Link from "next/link";
import { FORMATS } from "@/lib/site";
import SectionHead from "../SectionHead";
import VideoFrame from "../VideoFrame";

// The four formats as tall cards of full-bleed footage, playing while they're on screen
export default function Formats() {
  return (
    <section className="bg-paper-deep">
      <div className="mx-auto max-w-368 px-5 py-24 sm:px-8 sm:py-32 lg:px-12">
        <SectionHead title="What we make" note="Four formats, made start to finish by one in-house crew." />
        <ul className="mt-14 grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
          {FORMATS.map((format, i) => (
            <li key={format.slug} data-reveal data-reveal-delay={String(i * 90)}>
              <Link href={`/services#${format.slug}`} className="group block">
                <VideoFrame
                  id={format.video}
                  className="aspect-[3/4] rounded-[4px]"
                  videoClassName="transition-[scale] duration-[1400ms] ease-out-film group-hover:scale-[1.04]"
                />
                <h3 className="display mt-5 text-[30px] transition-colors duration-500 group-hover:text-fox">{format.name}</h3>
                <p className="mt-2 text-[15px] leading-[1.55] text-ink-soft">{format.line}</p>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

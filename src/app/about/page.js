import PageHero from "@/components/PageHero";
import SectionHead from "@/components/SectionHead";
import MeetTheFox from "@/components/about/MeetTheFox";
import { mixkitPoster } from "@/lib/site";

export const metadata = {
  title: "About",
  description: "Ilaaka Studios is the creative hood: a film and television studio telling stories from the streets we know.",
};

const BELIEFS = [
  {
    title: "Local before generic",
    body: "The details that only someone from the neighbourhood would notice are what make a film feel true. We look for them on every job, from a feature to a thirty-second spot.",
  },
  {
    title: "Story before spectacle",
    body: "Kit, effects and locations are there to serve the idea. If a scene works on a phone in a single take, we won't dress it up just to fill a budget line.",
  },
  {
    title: "One crew, start to finish",
    body: "Writing, production and post sit under one roof, so the people who pitched the idea are the ones who grade the final frame. Nothing gets lost in a hand-off.",
  },
  {
    title: "Straight answers",
    body: "Honest budgets, realistic schedules and clear feedback. If something can't be done well for the money or the time, we'll say so before the shoot, not after.",
  },
];

// Every department the studio runs in-house, set like the end credits of a film
const CREDITS = [
  ["Written and developed by", "Our writers' room"],
  ["Directed by", "Ilaaka directors"],
  ["Produced by", "One producer, start to finish"],
  ["Cinematography", "Camera and lighting crew"],
  ["Production design", "Art, sets and styling"],
  ["Edited by", "Our edit suite"],
  ["Colour", "In-house grade"],
  ["Sound and music", "Design, mix and score"],
  ["Visual effects", "Compositing and finishing"],
];

export default function AboutPage() {
  return (
    <main className="flex-1">
      <PageHero title="The creative hood">
        <p className="prose-justify">
          Ilaaka Studios is a film and television studio making feature films, advertisements, short films and music
          videos. We&apos;re a crew of writers, directors, producers, cinematographers and editors who grew up on stories
          from the street and still go looking for them.
        </p>
      </PageHero>

      <section className="bg-paper">
        <div className="mx-auto grid max-w-368 gap-12 px-5 pb-24 sm:px-8 sm:pb-32 lg:grid-cols-12 lg:px-12">
          <figure data-reveal className="lg:col-span-5">
            <img
              src={mixkitPoster(40746)}
              alt="A city street at night"
              className="aspect-[4/5] w-full rounded-[4px] object-cover"
              loading="lazy"
            />
          </figure>
          <div className="lg:col-span-6 lg:col-start-7 lg:pt-10">
            <h2 data-reveal className="display text-[clamp(2.5rem,4.6vw,4.5rem)]">Why we&apos;re called Ilaaka</h2>
            <div data-reveal className="mt-10 grid gap-6 text-[17px] leading-[1.8] text-ink-soft">
              <p className="prose-justify">
                Ask anyone in India where they&apos;re from and they won&apos;t name a city first; they&apos;ll name their
                ilaaka. The lane, the colony, the corner where the same people have been arguing about cricket for
                thirty years. It&apos;s the most specific answer there is, and that&apos;s exactly why it&apos;s the
                most interesting.
              </p>
              <p className="prose-justify">
                We named the studio after that idea. Whether the brief is a brand film, a music video or a story of our
                own, we start by asking where it lives and who lives there. The texture that comes back from that
                question, the accents, the light, the small rituals, is what audiences recognise as real.
              </p>
              <p className="prose-justify">
                We call ourselves the creative hood because that&apos;s how we work: as a neighbourhood. Directors,
                writers, crew and clients who look out for each other and want the same thing, which is a film worth
                watching twice.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-paper-deep">
        <div className="mx-auto max-w-368 px-5 py-24 sm:px-8 sm:py-32 lg:px-12">
          <SectionHead title="What we hold on to" note="Four things that shape every project, whatever its size." />
          <div className="mt-14 grid border-t border-ink/15 md:grid-cols-2">
            {BELIEFS.map((b, i) => (
              <article
                key={b.title}
                data-reveal
                data-reveal-delay={String((i % 2) * 100)}
                className={`border-b border-ink/15 py-10 md:py-12 ${i % 2 === 0 ? "md:border-r md:pr-12" : "md:pl-12"}`}
              >
                <h3 className="display text-[clamp(2rem,2.8vw,2.75rem)]">{b.title}</h3>
                <p className="prose-justify mt-6 max-w-[34rem] text-[17px] leading-[1.75] text-ink-soft">{b.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <MeetTheFox />

      <section className="bg-screen text-paper">
        <div className="mx-auto max-w-4xl px-5 py-28 text-center sm:px-8 sm:py-36">
          <h2 data-reveal className="display text-[clamp(2.5rem,4.6vw,4.5rem)]">
            Under one roof
          </h2>
          <p data-reveal className="mx-auto mt-5 max-w-md text-[17px] leading-[1.6] text-paper/65">
            Every department a production needs, in-house and working together from day one.
          </p>
          <dl className="mt-16 grid gap-y-7">
            {CREDITS.map(([role, who], i) => (
              <div
                key={role}
                data-reveal
                data-reveal-delay={String(i * 60)}
                className="grid grid-cols-1 gap-1 sm:grid-cols-2 sm:gap-8"
              >
                <dt className="text-[13px] text-paper/50 sm:pt-2 sm:text-right sm:text-[14px]">{role}</dt>
                <dd className="display text-[clamp(1.6rem,2.4vw,2.1rem)] sm:text-left">{who}</dd>
              </div>
            ))}
          </dl>
          <p data-reveal className="mt-20 font-logo text-[28px] tracking-[0.02em]">
            ILAAKA
          </p>
        </div>
      </section>
    </main>
  );
}

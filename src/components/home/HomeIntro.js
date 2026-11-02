import RollLink from "../RollLink";

// Who the studio is: the statement on the left, one readable column of copy on the right
export default function HomeIntro() {
  return (
    <section className="bg-paper">
      <div className="mx-auto grid max-w-368 gap-12 px-5 py-24 sm:px-8 sm:py-32 lg:grid-cols-12 lg:gap-10 lg:px-12">
        <h2 data-reveal className="display text-[clamp(2.5rem,4.4vw,4.25rem)] leading-[1.04] lg:col-span-6">
          We make films about the places we know, with the kind of detail only a local would notice.
        </h2>

        <div className="max-w-[36rem] text-[18px] leading-[1.7] text-ink-soft lg:col-span-5 lg:col-start-8 lg:pt-3">
          <p data-reveal className="prose-justify">
            Ilaaka means neighbourhood: the lanes, the tea stall, the people you nod to on the way home. We built the
            studio on the belief that the most specific stories travel the furthest.
          </p>
          <p data-reveal data-reveal-delay="100" className="prose-justify mt-6">
            Writing, casting, production, edit, sound and colour all happen under one roof in Mumbai. Brands come to us
            for films people choose to watch, artists for pictures that match their sound, and storytellers for a
            partner who protects what made the idea worth making.
          </p>
          <div data-reveal data-reveal-delay="200" className="mt-10">
            <RollLink href="/about" variant="outline">
              About the studio
            </RollLink>
          </div>
        </div>
      </div>
    </section>
  );
}

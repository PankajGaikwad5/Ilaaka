import Fox from "../Fox";
import RollLink from "../RollLink";

// The studio mascot and why it's there
export default function MeetTheFox() {
  return (
    <section className="bg-paper">
      <div className="mx-auto grid max-w-368 items-center gap-14 px-5 py-24 sm:px-8 sm:py-32 lg:grid-cols-12 lg:px-12">
        <div data-reveal className="flex justify-center rounded-[4px] bg-paper-deep py-16 lg:col-span-5">
          <Fox className="w-[min(55vw,18rem)]" />
        </div>

        <div className="lg:col-span-6 lg:col-start-7">
          <h2 data-reveal className="display text-[clamp(2.5rem,4.6vw,4.5rem)]">
            Meet the fox
          </h2>
          <div data-reveal className="mt-8 grid gap-6 text-[17px] leading-[1.75] text-ink-soft">
            <p className="prose-justify">
              Every city has foxes, and almost nobody sees them. They know every shortcut, every rooftop, every gap in
              the fence. They&apos;re curious, a little cheeky and completely at home in the neighbourhood. That felt
              like the right company for a studio called Ilaaka.
            </p>
            <p className="prose-justify">
              You&apos;ll find our fox at the end of the intro card and on the Ask Us Anything highlight. It&apos;s a
              reminder of how we like to work: close to the ground, eyes open, and always happy to answer a question.
            </p>
          </div>
          <div data-reveal className="mt-10">
            <RollLink href="/contact">Ask the fox anything</RollLink>
          </div>
        </div>
      </div>
    </section>
  );
}

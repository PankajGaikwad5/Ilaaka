// Inner-page opener: title, then a short intro with an optional aside, all in the same reveal as the rest
export default function PageHero({ title, children, aside }) {
  return (
    <section className="bg-paper pt-36 sm:pt-44">
      <div className="mx-auto max-w-368 px-5 pb-16 sm:px-8 sm:pb-20 lg:px-12">
        <h1 data-reveal className="display max-w-[14ch] text-[clamp(3.25rem,7.5vw,7.5rem)]">
          {title}
        </h1>
        <div className="mt-12 grid gap-10 border-t border-ink/15 pt-8 lg:mt-14 lg:grid-cols-12">
          <div data-reveal data-reveal-delay="100" className="text-[18px] leading-[1.65] text-ink-soft lg:col-span-6">
            {children}
          </div>
          {aside && (
            <div data-reveal data-reveal-delay="200" className="lg:col-span-4 lg:col-start-9">
              {aside}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

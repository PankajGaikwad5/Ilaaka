import Fox from "@/components/Fox";
import RollLink from "@/components/RollLink";

export default function NotFound() {
  return (
    <main className="flex flex-1 items-center bg-paper">
      <div className="mx-auto flex max-w-368 flex-col items-center px-5 pb-24 pt-40 text-center sm:px-8">
        <Fox className="w-32 sm:w-40" />
        <h1 className="display mt-10 text-[clamp(3rem,8vw,7rem)]">
          This lane doesn&apos;t go anywhere.
        </h1>
        <p className="mt-6 max-w-md text-[17px] leading-[1.65] text-ink-soft">
          The page you were looking for has moved or never existed. The fox knows the way back.
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-3">
          <RollLink href="/">Back to home</RollLink>
          <RollLink href="/work" variant="outline">
            See the work
          </RollLink>
        </div>
      </div>
    </main>
  );
}

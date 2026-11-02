import Fox from "@/components/Fox";
import ContactForm from "@/components/contact/ContactForm";
import { CONTACT } from "@/lib/site";

export const metadata = {
  title: "Contact",
  description: "Start a project with Ilaaka Studios, or just ask us anything.",
};

export default function ContactPage() {
  return (
    <main className="flex-1 bg-paper">
      <section className="mx-auto grid max-w-368 gap-16 px-5 pb-28 pt-36 sm:px-8 sm:pt-44 lg:grid-cols-12 lg:gap-10 lg:px-12">
        <div className="lg:col-span-5">
          <h1 data-reveal className="display text-[clamp(3.25rem,7vw,7rem)]">
            Ask us anything
          </h1>
          <p data-reveal className="prose-justify mt-8 max-w-md text-[18px] leading-[1.7] text-ink-soft">
            Tell us what you&apos;re making and where it&apos;s at. A rough idea is plenty; we&apos;ll come back with
            questions, a point of view and an honest sense of time and budget.
          </p>

          <dl data-reveal className="mt-12 grid max-w-md gap-6 border-t border-ink/15 pt-8">
            <div>
              <dt className="text-[13px] text-ink-soft">Email</dt>
              <dd className="mt-1">
                <a href={`mailto:${CONTACT.email}`} className="text-[18px] underline decoration-ink/25 underline-offset-4 hover:decoration-fox">
                  {CONTACT.email}
                </a>
              </dd>
            </div>
            <div>
              <dt className="text-[13px] text-ink-soft">Instagram</dt>
              <dd className="mt-1">
                <a href={CONTACT.instagram.href} target="_blank" rel="noreferrer" className="text-[18px] hover:text-fox">
                  {CONTACT.instagram.label}
                </a>
              </dd>
            </div>
            <div>
              <dt className="text-[13px] text-ink-soft">Studio</dt>
              <dd className="mt-1 text-[18px]">{CONTACT.city}, India</dd>
            </div>
          </dl>

          <Fox className="mt-14 hidden w-32 lg:block" />
        </div>

        <div data-reveal data-reveal-delay="150" className="lg:col-span-6 lg:col-start-7 lg:pt-10">
          <ContactForm />
        </div>
      </section>
    </main>
  );
}

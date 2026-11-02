import Link from "next/link";
import { CONTACT, FORMATS, NAV_LINKS } from "@/lib/site";
import Fox from "./Fox";
import RollLink from "./RollLink";

export default function Footer() {
  return (
    <footer className="bg-ink text-paper">
      <div className="mx-auto max-w-368 px-5 pt-24 sm:px-8 sm:pt-32 lg:px-12">
        <div data-reveal className="grid gap-10 border-b border-paper/15 pb-16 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-8">
            <h2 className="display text-[clamp(3rem,6.5vw,6.5rem)]">Got a story? Let&apos;s make it.</h2>
            <p className="mt-6 max-w-lg text-[17px] leading-[1.65] text-paper/70">
              A script, a launch, a song that needs pictures. Tell us where it&apos;s at and we&apos;ll tell you how
              we&apos;d make it.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <RollLink href="/contact" variant="fox">
                Start a project
              </RollLink>
              <RollLink
                href={`mailto:${CONTACT.email}`}
                external
                className="border border-paper/25 bg-transparent text-paper hover:border-paper hover:bg-paper hover:text-ink"
              >
                {CONTACT.email}
              </RollLink>
            </div>
          </div>
          <div className="hidden justify-end lg:col-span-3 lg:col-start-10 lg:flex">
            <Fox decorative className="w-36" />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-x-6 gap-y-10 py-14 md:grid-cols-4">
          <FooterColumn title="Studio">
            {NAV_LINKS.map((l) => (
              <FooterLink key={l.href} href={l.href}>
                {l.label}
              </FooterLink>
            ))}
          </FooterColumn>
          <FooterColumn title="Formats">
            {FORMATS.map((f) => (
              <FooterLink key={f.slug} href={`/services#${f.slug}`}>
                {f.name}
              </FooterLink>
            ))}
          </FooterColumn>
          <FooterColumn title="Follow">
            <FooterLink href={CONTACT.instagram.href} external>
              Instagram
            </FooterLink>
            <FooterLink href={CONTACT.youtube.href} external>
              YouTube
            </FooterLink>
          </FooterColumn>
          <FooterColumn title="Studio address">
            <li className="text-[15px] leading-[1.6] text-paper/70">
              Ilaaka Studios
              <br />
              {CONTACT.city}, India
            </li>
          </FooterColumn>
        </div>
      </div>

      <div className="overflow-hidden px-3 sm:px-6">
        <p aria-hidden className="select-none text-center font-logo text-[23vw] leading-[0.8] tracking-[0.01em] text-paper/90">
          ILAAKA
        </p>
      </div>

      <div className="mx-auto flex max-w-368 flex-col gap-2 px-5 py-6 text-[13px] text-paper/50 sm:flex-row sm:justify-between sm:px-8 lg:px-12">
        <p>© 2026 Ilaaka Studios</p>
        <p>The creative hood</p>
      </div>
    </footer>
  );
}

function FooterColumn({ title, children }) {
  return (
    <div>
      <p className="text-[13px] text-paper/45">{title}</p>
      <ul className="mt-4 flex flex-col gap-2.5">{children}</ul>
    </div>
  );
}

function FooterLink({ href, children, external }) {
  const className = "text-[15px] text-paper/85 transition-colors duration-500 hover:text-fox-light";
  return (
    <li>
      {external ? (
        <a href={href} target="_blank" rel="noreferrer" className={className}>
          {children}
        </a>
      ) : (
        <Link href={href} className={className}>
          {children}
        </Link>
      )}
    </li>
  );
}

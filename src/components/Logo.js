import Link from "next/link";
import { cn } from "@/lib/utils";

// Type-set version of the profile-picture mark: Bodoni wordmark over the Devanagari "studios"
export function Wordmark({ className, hindiClassName }) {
  return (
    <span className={cn("inline-flex flex-col items-center leading-none", className)}>
      <span className="font-logo text-[1em] font-medium tracking-[0.02em]">ILAAKA</span>
      <span lang="hi" className={cn("mt-[0.12em] font-hindi text-[0.42em] tracking-normal", hindiClassName)}>
        स्टूडीयोज़
      </span>
    </span>
  );
}

export default function Logo({ className }) {
  return (
    <Link href="/" aria-label="Ilaaka Studios home" className={cn("inline-flex text-[26px] sm:text-[30px]", className)}>
      <Wordmark />
    </Link>
  );
}

import Link from "next/link";
import { cn } from "@/lib/utils";

const VARIANTS = {
  ink: "bg-ink text-paper hover:bg-fox",
  fox: "bg-fox text-paper hover:bg-ink",
  outline: "border border-ink/25 text-ink hover:border-ink hover:bg-ink hover:text-paper",
  paper: "bg-paper text-ink hover:bg-fox hover:text-paper",
};

// Plain pill button with a slow colour change on hover
export default function RollLink({ href, children, variant = "ink", className, external = false, ...rest }) {
  const classes = cn(
    "inline-flex h-12 items-center justify-center rounded-full px-7 text-[15px] font-medium transition-colors duration-500 ease-out-film",
    VARIANTS[variant],
    className
  );

  if (external) {
    return (
      <a href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noreferrer" className={classes} {...rest}>
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes} {...rest}>
      {children}
    </Link>
  );
}

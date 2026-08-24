import Link from "next/link";
import { clsx } from "clsx";

type Variant = "primary" | "secondary" | "ghost";

const variants: Record<Variant, string> = {
  primary:
    "bg-coral-500 text-white hover:bg-coral-600 shadow-sm shadow-coral-500/20",
  secondary:
    "bg-white text-navy-900 hover:bg-navy-50 border border-navy-900/10",
  ghost:
    "bg-white/10 text-white border border-white/30 hover:bg-white/20 backdrop-blur-sm",
};

export function Button({
  href,
  external = false,
  children,
  variant = "primary",
  className,
  onClick,
  type,
}: {
  href?: string;
  external?: boolean;
  children: React.ReactNode;
  variant?: Variant;
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit";
}) {
  const classes = clsx(
    "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold tracking-wide transition-colors duration-200",
    variants[variant],
    className,
  );

  if (href && external) {
    return (
      <a href={href} target="_blank" rel="noreferrer" className={classes}>
        {children}
      </a>
    );
  }

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type ?? "button"} onClick={onClick} className={classes}>
      {children}
    </button>
  );
}

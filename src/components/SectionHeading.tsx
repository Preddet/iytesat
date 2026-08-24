import { clsx } from "clsx";

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  light = false,
  className,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  light?: boolean;
  className?: string;
}) {
  return (
    <div
      className={clsx(
        "max-w-2xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      {eyebrow && (
        <p
          className={clsx(
            "mb-3 text-xs font-semibold tracking-[0.2em] uppercase",
            light ? "text-navy-200" : "text-coral-500",
          )}
        >
          {eyebrow}
        </p>
      )}
      <h2
        className={clsx(
          "text-balance text-3xl font-semibold sm:text-4xl",
          light ? "text-white" : "text-navy-950",
        )}
      >
        {title}
      </h2>
      {description && (
        <p
          className={clsx(
            "mt-4 text-base leading-relaxed",
            light ? "text-navy-100" : "text-neutral-600",
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}

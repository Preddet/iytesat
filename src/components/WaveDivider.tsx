import { clsx } from "clsx";

export function WaveDivider({
  flip = false,
  className,
  color = "fill-white",
}: {
  flip?: boolean;
  className?: string;
  color?: string;
}) {
  return (
    <div
      aria-hidden
      className={clsx(
        "pointer-events-none w-full overflow-hidden leading-none",
        flip && "rotate-180",
        className,
      )}
    >
      <svg
        viewBox="0 0 1440 90"
        preserveAspectRatio="none"
        className="h-[50px] w-full sm:h-[80px]"
      >
        <path
          d="M0,32 C240,80 480,0 720,24 C960,48 1200,88 1440,40 L1440,90 L0,90 Z"
          className={color}
        />
      </svg>
    </div>
  );
}

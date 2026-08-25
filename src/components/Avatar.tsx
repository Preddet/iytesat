import { clsx } from "clsx";
import Image from "next/image";

function initials(name: string) {
  return name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0])
    .join("")
    .toUpperCase();
}

const palettes = [
  "bg-navy-800 text-navy-100",
  "bg-coral-600 text-coral-50",
  "bg-navy-600 text-white",
];

export function Avatar({
  name,
  image,
  imagePosition = "center",
  className,
  seed = 0,
}: {
  name: string;
  image?: string;
  imagePosition?: string;
  className?: string;
  seed?: number;
}) {
  if (image) {
    return (
      <div
        className={clsx(
          "relative aspect-square w-full overflow-hidden rounded-2xl",
          className,
        )}
      >
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover"
          style={{ objectPosition: imagePosition }}
        />
      </div>
    );
  }

  const palette = palettes[seed % palettes.length];

  return (
    <div
      className={clsx(
        "flex aspect-square w-full items-center justify-center rounded-2xl text-2xl font-semibold",
        palette,
        className,
      )}
    >
      {initials(name)}
    </div>
  );
}

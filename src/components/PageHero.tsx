import { Container } from "./Container";
import { WaveDivider } from "./WaveDivider";

export function PageHero({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-navy-950 via-navy-900 to-navy-800 pt-36 pb-20 sm:pt-40 sm:pb-24">
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 20%, white 1px, transparent 1px), radial-gradient(circle at 70% 60%, white 1px, transparent 1px)",
          backgroundSize: "140px 140px, 90px 90px",
        }}
      />
      <Container className="relative">
        <p className="text-xs font-semibold tracking-[0.25em] text-coral-300 uppercase">
          {eyebrow}
        </p>
        <h1 className="mt-3 max-w-3xl text-balance text-4xl font-bold text-white sm:text-5xl">
          {title}
        </h1>
        {description && (
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-navy-200 sm:text-lg">
            {description}
          </p>
        )}
      </Container>
      <WaveDivider className="absolute bottom-0 left-0" color="fill-white" />
    </section>
  );
}

import Image from "next/image";
import Link from "next/link";
import { Anchor, Compass, GraduationCap, HeartHandshake, ArrowRight, Image as ImageIcon } from "lucide-react";
import { Container } from "@/components/Container";
import { Button } from "@/components/Button";
import { SectionHeading } from "@/components/SectionHeading";
import { WaveDivider } from "@/components/WaveDivider";
import { events } from "@/data/events";
import { site } from "@/data/site";

const pillars = [
  {
    icon: GraduationCap,
    title: "Eğitim",
    description:
      "Temel sualtı eğitiminden ileri seviye brövelere uzanan, güvenli ve rehberli bir öğrenme yolu.",
  },
  {
    icon: Compass,
    title: "Dalış & Keşif",
    description:
      "Ege ve Akdeniz kıyılarında düzenlenen dalış gezileriyle deneyim kazanma fırsatı.",
  },
  {
    icon: Anchor,
    title: "Topluluk Ruhu",
    description:
      "Aynı tutkuyu paylaşan öğrencilerle tanışma, birlikte üretme ve kalıcı dostluklar kurma imkânı.",
  },
  {
    icon: HeartHandshake,
    title: "Sosyal Sorumluluk Projeleri",
    description:
      "Kıyı temizlikleri ve toplum yararına düzenlenen projelerle çevreye ve topluma katkı sağlama.",
  },
];

function formatDate(date: string) {
  return new Date(date).toLocaleDateString("tr-TR", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });
}

export default function Home() {
  const featured = [...events]
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 3);

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden pt-40 pb-28 sm:pt-48 sm:pb-36">
        <Image
          src="/arkaplan.jpg"
          alt=""
          aria-hidden
          fill
          priority
          className="object-cover"
        />
        <div
          aria-hidden
          className="absolute inset-0 bg-gradient-to-b from-navy-950/85 via-navy-950/70 to-navy-900/90"
        />
        <Container className="relative flex flex-col items-center text-center">
          <Image
            src="/logo-trimmed.png"
            alt="İYTE SAT logosu"
            width={140}
            height={122}
            className="mb-8 h-36 w-auto drop-shadow-[0_8px_24px_rgba(0,0,0,0.35)] sm:h-44"
            priority
          />
          <h1 className="max-w-3xl text-balance text-4xl font-bold text-white sm:text-6xl">
            {site.fullName}
          </h1>
          <p className="mt-6 max-w-2xl text-balance text-base leading-relaxed text-navy-100 sm:text-lg">
            {site.shortDescription}
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Button href="/etkinlikler" variant="primary">
              Etkinlikleri Keşfet
              <ArrowRight size={16} />
            </Button>
            <Button href="/iletisim" variant="ghost">
              Bize Katıl
            </Button>
          </div>
        </Container>
        <WaveDivider className="absolute bottom-0 left-0" color="fill-white" />
      </section>

      {/* Pillars */}
      <section className="py-24 sm:py-28">
        <Container>
          <SectionHeading
            eyebrow="Neden İYTE SAT"
            title="Su altında öğrenmenin, keşfetmenin ve paylaşmanın adresi"
            description="Topluluğumuz, dalışı yeni öğrenenlerden deneyimli sualtı sporcularına kadar herkes için güvenli ve keyifli bir alan sunar."
          />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {pillars.map(({ icon: Icon, title, description }) => (
              <div
                key={title}
                className="group rounded-2xl border border-navy-950/8 bg-white p-7 shadow-sm shadow-navy-950/5 transition-shadow hover:shadow-md"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-navy-50 text-navy-600 transition-colors group-hover:bg-navy-600 group-hover:text-white">
                  <Icon size={22} />
                </div>
                <h3 className="mt-5 text-lg font-semibold text-navy-950">
                  {title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-neutral-600">
                  {description}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Featured events */}
      <section className="bg-sand-50 py-24 sm:py-28">
        <Container>
          <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
            <SectionHeading
              eyebrow="Etkinlikler"
              title="Geçmiş etkinliklerimizden kesitler"
              description="Düzenlediğimiz dalışlar, eğitimler ve sosyal etkinliklerin bir kısmına göz atın; fotoğraf albümlerine etkinlik sayfasından ulaşabilirsiniz."
              className="max-w-xl"
            />
            <Button href="/etkinlikler" variant="secondary" className="shrink-0">
              Tüm Etkinlikler
              <ArrowRight size={16} />
            </Button>
          </div>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {featured.map((event) => (
              <Link
                key={event.slug}
                href={`/etkinlikler/${event.slug}`}
                className="group flex flex-col overflow-hidden rounded-2xl bg-white shadow-sm shadow-navy-950/5 transition-shadow hover:shadow-md"
              >
                <div className="relative flex h-40 items-center justify-center overflow-hidden bg-gradient-to-br from-navy-800 to-navy-600">
                  {event.image ? (
                    <Image
                      src={event.image}
                      alt={event.title}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                      sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    />
                  ) : (
                    <ImageIcon className="text-white/40" size={36} />
                  )}
                  <span className="absolute top-3 left-3 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-navy-900">
                    {event.category}
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <p className="text-xs font-semibold tracking-wide text-coral-500 uppercase">
                    {formatDate(event.date)} · {event.location}
                  </p>
                  <h3 className="mt-2 text-lg font-semibold text-navy-950 transition-colors group-hover:text-coral-500">
                    {event.title}
                  </h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-neutral-600">
                    {event.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA band */}
      <section className="relative overflow-hidden bg-navy-950 py-20">
        <div
          aria-hidden
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 30% 40%, white 1px, transparent 1px)",
            backgroundSize: "120px 120px",
          }}
        />
        <Container className="relative flex flex-col items-center gap-6 text-center">
          <h2 className="max-w-xl text-balance text-3xl font-semibold text-white sm:text-4xl">
            Sualtı dünyasını keşfetmeye hazır mısın?
          </h2>
          <p className="max-w-lg text-navy-200">
            Deneyim seviyeni fark etmeksizin İYTE SAT ailesine katılabilir,
            bir sonraki dalışta aramızda olabilirsin.
          </p>
          <Button href="/iletisim" variant="primary">
            İletişime Geç
            <ArrowRight size={16} />
          </Button>
        </Container>
      </section>
    </>
  );
}

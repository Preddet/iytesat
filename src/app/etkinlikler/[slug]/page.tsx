import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  CalendarDays,
  ExternalLink,
  Image as ImageIcon,
  MapPin,
} from "lucide-react";
import { Container } from "@/components/Container";
import { events } from "@/data/events";

function formatDate(date: string) {
  return new Date(date).toLocaleDateString("tr-TR", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });
}

export function generateStaticParams() {
  return events.map((event) => ({ slug: event.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const event = events.find((e) => e.slug === slug);

  if (!event) {
    return { title: "Etkinlik Bulunamadı" };
  }

  return {
    title: event.title,
    description: event.description,
  };
}

export default async function EventDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const event = events.find((e) => e.slug === slug);

  if (!event) {
    notFound();
  }

  return (
    <>
      <section className="relative overflow-hidden bg-gradient-to-b from-navy-950 via-navy-900 to-navy-800 pt-36 pb-20 sm:pt-40 sm:pb-24">
        <Container className="relative">
          <div className="flex flex-wrap items-center gap-4">
            <Link
              href="/etkinlikler"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-navy-200 transition-colors hover:text-white"
            >
              <ArrowLeft size={16} />
              Tüm Etkinlikler
            </Link>
            <span className="inline-flex items-center rounded-full bg-white/10 px-3 py-1 text-xs font-semibold text-coral-300 uppercase">
              {event.category}
            </span>
          </div>
          <h1 className="mt-4 max-w-3xl text-balance text-3xl font-bold text-white sm:text-5xl">
            {event.title}
          </h1>
          <div className="mt-5 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-navy-200">
            <span className="flex items-center gap-1.5">
              <CalendarDays size={16} />
              {formatDate(event.date)}
            </span>
            <span className="flex items-center gap-1.5">
              <MapPin size={16} />
              {event.location}
            </span>
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-20">
        <Container className="grid gap-10 lg:grid-cols-[1.4fr_1fr]">
          <div>
            <div className="relative flex h-56 items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-br from-navy-800 to-navy-600 sm:h-72">
              {event.image ? (
                <Image
                  src={event.image}
                  alt={event.title}
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 60vw, 100vw"
                  priority
                />
              ) : (
                <ImageIcon className="text-white/40" size={48} />
              )}
            </div>
            <p className="mt-8 text-base leading-relaxed text-neutral-700">
              {event.description}
            </p>
          </div>

          <aside className="h-fit rounded-2xl border border-navy-950/8 bg-sand-50 p-6">
            <h2 className="text-sm font-semibold tracking-wide text-navy-950 uppercase">
              Etkinlik Bilgileri
            </h2>
            <dl className="mt-4 space-y-4 text-sm">
              <div>
                <dt className="text-neutral-500">Tarih</dt>
                <dd className="mt-1 font-medium text-navy-950">
                  {formatDate(event.date)}
                </dd>
              </div>
              <div>
                <dt className="text-neutral-500">Konum</dt>
                <dd className="mt-1 font-medium text-navy-950">
                  {event.location}
                </dd>
              </div>
              <div>
                <dt className="text-neutral-500">Kategori</dt>
                <dd className="mt-1 font-medium text-navy-950">
                  {event.category}
                </dd>
              </div>
            </dl>
            {event.albumUrl && (
              <a
                href={event.albumUrl}
                target="_blank"
                rel="noreferrer"
                className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-navy-700 transition-colors hover:text-coral-500"
              >
                Fotoğraf Albümü
                <ExternalLink size={14} />
              </a>
            )}
          </aside>
        </Container>
      </section>
    </>
  );
}

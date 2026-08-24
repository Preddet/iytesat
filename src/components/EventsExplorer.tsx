"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { clsx } from "clsx";
import { Image as ImageIcon, MapPin, ExternalLink } from "lucide-react";
import type { EventItem } from "@/data/events";

const categories = [
  "Tümü",
  "Dalış",
  "Eğitim",
  "Sosyal",
  "Dalış Gezisi",
  "Çevre",
] as const;

function formatDate(date: string) {
  return new Date(date).toLocaleDateString("tr-TR", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });
}

export function EventsExplorer({ events }: { events: EventItem[] }) {
  const [active, setActive] = useState<(typeof categories)[number]>("Tümü");

  const filtered = useMemo(() => {
    const list =
      active === "Tümü" ? events : events.filter((e) => e.category === active);
    return [...list].sort(
      (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
    );
  }, [events, active]);

  return (
    <div>
      <div className="flex flex-wrap gap-2">
        {categories.map((cat) => (
          <button
            key={cat}
            type="button"
            onClick={() => setActive(cat)}
            className={clsx(
              "rounded-full border px-4 py-2 text-sm font-medium transition-colors",
              active === cat
                ? "border-navy-900 bg-navy-900 text-white"
                : "border-navy-950/12 text-neutral-600 hover:border-navy-900/40",
            )}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((event) => (
          <Link
            key={event.slug}
            href={`/etkinlikler/${event.slug}`}
            className="group flex flex-col overflow-hidden rounded-2xl border border-navy-950/8 bg-white shadow-sm shadow-navy-950/5 transition-shadow hover:shadow-md"
          >
            <div className="relative flex h-36 items-center justify-center bg-gradient-to-br from-navy-800 to-navy-600">
              <ImageIcon className="text-white/40" size={32} />
              <span className="absolute top-3 left-3 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-navy-900">
                {event.category}
              </span>
            </div>
            <div className="flex flex-1 flex-col p-6">
              <p className="text-xs font-semibold tracking-wide text-coral-500 uppercase">
                {formatDate(event.date)}
              </p>
              <h3 className="mt-2 text-lg font-semibold text-navy-950 transition-colors group-hover:text-coral-500">
                {event.title}
              </h3>
              <p className="mt-1 flex items-center gap-1.5 text-xs text-neutral-500">
                <MapPin size={13} />
                {event.location}
              </p>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-neutral-600">
                {event.description}
              </p>
              <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-navy-700 transition-colors group-hover:text-coral-500">
                Detayları Gör
                <ExternalLink size={14} />
              </span>
            </div>
          </Link>
        ))}

        {filtered.length === 0 && (
          <p className="col-span-full py-16 text-center text-neutral-500">
            Bu kategoride henüz etkinlik bulunmuyor.
          </p>
        )}
      </div>
    </div>
  );
}

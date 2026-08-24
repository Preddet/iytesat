"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { clsx } from "clsx";
import { ChevronLeft, ChevronRight, MapPin } from "lucide-react";
import type { EventItem } from "@/data/events";

const weekdayLabels = ["Pzt", "Sal", "Çar", "Per", "Cum", "Cmt", "Paz"];
const monthLabels = [
  "Ocak",
  "Şubat",
  "Mart",
  "Nisan",
  "Mayıs",
  "Haziran",
  "Temmuz",
  "Ağustos",
  "Eylül",
  "Ekim",
  "Kasım",
  "Aralık",
];

function toDateKey(date: Date) {
  return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}-${String(date.getDate()).padStart(2, "0")}`;
}

function formatDate(date: string) {
  return new Date(date).toLocaleDateString("tr-TR", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });
}

export function EventsCalendar({ events }: { events: EventItem[] }) {
  const today = useMemo(() => {
    const d = new Date();
    d.setHours(0, 0, 0, 0);
    return d;
  }, []);

  const [cursor, setCursor] = useState(
    () => new Date(today.getFullYear(), today.getMonth(), 1),
  );
  const [selectedKey, setSelectedKey] = useState<string | null>(null);

  const eventsByDate = useMemo(() => {
    const map = new Map<string, EventItem[]>();
    for (const event of events) {
      const key = toDateKey(new Date(event.date));
      const list = map.get(key) ?? [];
      list.push(event);
      map.set(key, list);
    }
    return map;
  }, [events]);

  const weeks = useMemo(() => {
    const year = cursor.getFullYear();
    const month = cursor.getMonth();
    const firstDay = new Date(year, month, 1);
    const startOffset = (firstDay.getDay() + 6) % 7; // Monday-first
    const daysInMonth = new Date(year, month + 1, 0).getDate();

    const cells: (Date | null)[] = [
      ...Array(startOffset).fill(null),
      ...Array.from({ length: daysInMonth }, (_, i) => new Date(year, month, i + 1)),
    ];
    while (cells.length % 7 !== 0) cells.push(null);

    const rows: (Date | null)[][] = [];
    for (let i = 0; i < cells.length; i += 7) {
      rows.push(cells.slice(i, i + 7));
    }
    return rows;
  }, [cursor]);

  const selectedEvents = selectedKey ? (eventsByDate.get(selectedKey) ?? []) : [];

  return (
    <div className="w-full rounded-2xl border border-white/15 bg-white/10 p-4 shadow-[0_8px_32px_rgba(0,0,0,0.35)] backdrop-blur-2xl sm:p-5">
      <div className="flex items-center justify-between">
        <h3 className="text-sm font-semibold text-white">
          {monthLabels[cursor.getMonth()]} {cursor.getFullYear()}
        </h3>
        <div className="flex gap-1.5">
          <button
            type="button"
            aria-label="Önceki ay"
            onClick={() =>
              setCursor((c) => new Date(c.getFullYear(), c.getMonth() - 1, 1))
            }
            className="flex h-7 w-7 items-center justify-center rounded-full border border-white/20 text-white/80 transition-colors hover:bg-white/10 hover:text-white"
          >
            <ChevronLeft size={14} />
          </button>
          <button
            type="button"
            aria-label="Sonraki ay"
            onClick={() =>
              setCursor((c) => new Date(c.getFullYear(), c.getMonth() + 1, 1))
            }
            className="flex h-7 w-7 items-center justify-center rounded-full border border-white/20 text-white/80 transition-colors hover:bg-white/10 hover:text-white"
          >
            <ChevronRight size={14} />
          </button>
        </div>
      </div>

      <div className="mt-4 grid grid-cols-7 gap-1.5 text-center text-[10px] font-semibold text-navy-200/70 uppercase">
        {weekdayLabels.map((label) => (
          <div key={label}>{label}</div>
        ))}
      </div>

      <div className="mt-1.5 grid grid-cols-7 gap-1.5">
        {weeks.map((row, i) =>
          row.map((date, j) => {
            if (!date) return <div key={`${i}-${j}`} />;

            const key = toDateKey(date);
            const dayEvents = eventsByDate.get(key) ?? [];
            const hasEvents = dayEvents.length > 0;
            const isPast = date < today;
            const isToday = key === toDateKey(today);
            const isSelected = key === selectedKey;

            return (
              <button
                key={key}
                type="button"
                disabled={!hasEvents}
                onClick={() => setSelectedKey(isSelected ? null : key)}
                className={clsx(
                  "flex h-9 flex-col items-center justify-center rounded-lg text-xs transition-colors",
                  hasEvents
                    ? "cursor-pointer font-semibold hover:bg-white/15"
                    : "cursor-default text-navy-200/40",
                  hasEvents && !isSelected && "text-red-400",
                  isSelected && "bg-white text-navy-900 hover:bg-white",
                  isToday && !isSelected && "ring-1 ring-white/50",
                )}
              >
                <span>{date.getDate()}</span>
                {hasEvents && (
                  <span
                    className={clsx(
                      "mt-0.5 h-1 w-1 rounded-full",
                      isSelected
                        ? "bg-navy-900"
                        : isPast
                          ? "bg-white/40"
                          : "bg-emerald-400",
                    )}
                  />
                )}
              </button>
            );
          }),
        )}
      </div>

      <div className="mt-4 flex items-center gap-3 text-[11px] text-navy-200/70">
        <span className="flex items-center gap-1.5">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
          Yaklaşan
        </span>
        <span className="flex items-center gap-1.5">
          <span className="h-1.5 w-1.5 rounded-full bg-white/40" />
          Geçmiş
        </span>
      </div>

      {selectedEvents.length > 0 && (
        <div className="mt-4 space-y-2 border-t border-white/15 pt-4">
          {selectedEvents.map((event) => (
            <Link
              key={event.slug}
              href={`/etkinlikler/${event.slug}`}
              className="group block rounded-lg border border-white/15 bg-white/5 p-3 transition-colors hover:border-white/30 hover:bg-white/10"
            >
              <p className="text-[10px] font-semibold tracking-wide text-coral-300 uppercase">
                {formatDate(event.date)} · {event.category}
              </p>
              <p className="mt-1 text-xs font-semibold text-white transition-colors group-hover:text-coral-300">
                {event.title}
              </p>
              <p className="mt-1 flex items-center gap-1.5 text-[11px] text-navy-200/70">
                <MapPin size={11} />
                {event.location}
              </p>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

"use client";

import { useState } from "react";
import { clsx } from "clsx";
import { Container } from "./Container";
import { SectionHeading } from "./SectionHeading";
import { MemberGrid } from "./MemberGrid";
import type { BoardTerm } from "@/data/board";

export function BoardSection({ terms }: { terms: BoardTerm[] }) {
  const [activeYear, setActiveYear] = useState(terms[0]?.year);
  const term = terms.find((t) => t.year === activeYear) ?? terms[0];

  return (
    <>
      <section id="yonetim-kurulu" className="scroll-mt-32 bg-sand-50 py-20 sm:py-24">
        <Container>
          {terms.length > 1 && (
            <div className="mb-10 flex flex-wrap gap-2" role="group" aria-label="Dönem seçin">
              {terms.map((t) => {
                const active = t.year === term.year;
                return (
                  <button
                    key={t.year}
                    type="button"
                    onClick={() => setActiveYear(t.year)}
                    aria-pressed={active}
                    className={clsx(
                      "rounded-full border px-4 py-2 text-sm font-medium transition-colors",
                      active
                        ? "border-coral-500 bg-coral-500 text-white"
                        : "border-navy-950/12 bg-white text-neutral-600 hover:border-coral-500 hover:text-coral-500",
                    )}
                  >
                    {t.year}
                  </button>
                );
              })}
            </div>
          )}

          <SectionHeading
            title="Yönetim Kurulu"
            description={
              term.year === terms[0]?.year
                ? "Topluluğumuzun güncel dönem yönetim kurulu üyeleri."
                : `${term.year} dönemi yönetim kurulu üyeleri.`
            }
          />
          <div className="mt-10">
            <MemberGrid members={term.executiveBoard} />
          </div>
        </Container>
      </section>

      <section id="denetim-kurulu" className="scroll-mt-32 py-20 sm:py-24">
        <Container>
          <SectionHeading
            title="Denetim Kurulu"
            description={
              term.year === terms[0]?.year
                ? "Topluluğun tüzük ve yönetmeliklere uygun işleyişini denetleyen kurul üyeleri."
                : `${term.year} dönemi denetim kurulu üyeleri.`
            }
          />
          <div className="mt-10">
            <MemberGrid members={term.auditBoard} />
          </div>
        </Container>
      </section>
    </>
  );
}

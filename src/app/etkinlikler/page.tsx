import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { WaveDivider } from "@/components/WaveDivider";
import { EventsExplorer } from "@/components/EventsExplorer";
import { EventsCalendar } from "@/components/EventsCalendar";
import { events } from "@/data/events";

export const metadata: Metadata = {
  title: "Etkinlikler",
  description:
    "İYTE SAT'ın geçmiş dalışları, eğitimleri ve sosyal etkinlikleri; üyelerin fotoğraf albümlerine erişim linkleriyle birlikte.",
};

export default function EventsPage() {
  return (
    <>
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
        <Container className="relative grid gap-10 lg:grid-cols-[0.9fr_1fr] lg:items-center">
          <div>
            <p className="text-xs font-semibold tracking-[0.25em] text-coral-300 uppercase">
              Etkinlikler
            </p>
            <h1 className="mt-3 max-w-3xl text-balance text-4xl font-bold text-white sm:text-5xl">
              Geçmiş Etkinliklerimiz
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-navy-200 sm:text-lg">
              Düzenlediğimiz dalışlar, eğitimler, dalış gezileri ve sosyal
              etkinlikleri kategoriye göre filtreleyebilir, her etkinliğe ait
              fotoğraf albümüne ulaşabilirsiniz.
            </p>
          </div>
          <div className="w-full max-w-md justify-self-start lg:justify-self-end">
            <EventsCalendar events={events} />
          </div>
        </Container>
        <WaveDivider className="absolute bottom-0 left-0" color="fill-white" />
      </section>
      <section className="py-20 sm:py-24">
        <Container>
          <EventsExplorer events={events} />
        </Container>
      </section>
    </>
  );
}

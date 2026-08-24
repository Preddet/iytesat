import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { Container } from "@/components/Container";
import { FaqAccordion } from "@/components/FaqAccordion";
import { Button } from "@/components/Button";
import { faqs } from "@/data/faq";

export const metadata: Metadata = {
  title: "Sıkça Sorulan Sorular",
  description: "İYTE SAT'a üyelik, eğitimler ve etkinlikler hakkında sık sorulan sorular.",
};

export default function FaqPage() {
  return (
    <>
      <PageHero
        eyebrow="SSS"
        title="Sıkça Sorulan Sorular"
        description="Üyelik, eğitimler ve etkinliklerimizle ilgili en çok merak edilen soruları bir araya getirdik."
      />
      <section className="py-20 sm:py-24">
        <Container className="max-w-3xl">
          <FaqAccordion items={faqs} />
          <div className="mt-12 flex flex-col items-center gap-4 rounded-2xl bg-sand-50 p-8 text-center">
            <p className="text-neutral-600">
              Aradığınız cevabı bulamadınız mı?
            </p>
            <Button href="/iletisim" variant="primary">
              Bize Ulaşın
            </Button>
          </div>
        </Container>
      </section>
    </>
  );
}

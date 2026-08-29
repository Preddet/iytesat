import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";
import { MemberGrid } from "@/components/MemberGrid";
import { BoardSection } from "@/components/BoardSection";
import { boardTerms, instructors } from "@/data/board";

export const metadata: Metadata = {
  title: "Hakkımızda",
  description:
    "İYTE SAT'ın tarihçesi, yönetim kurulu, denetim kurulu ve topluluk eğitmeni hakkında bilgi edinin.",
};

const inPageNav = [
  { href: "#tarihce", label: "Tarihçe" },
  { href: "#yonetim-kurulu", label: "Yönetim Kurulu" },
  { href: "#denetim-kurulu", label: "Denetim Kurulu" },
  { href: "#egitmen", label: "Eğitmenimiz" },
];

export default function AboutPage() {
  return (
    <>
      <PageHero eyebrow="Hakkımızda" title="İYTE SAT'ı tanıyın" />

      <div className="sticky top-[68px] z-30 border-b border-navy-950/8 bg-white/95 backdrop-blur-sm">
        <Container>
          <nav className="flex gap-6 overflow-x-auto py-4 text-sm font-medium whitespace-nowrap text-neutral-600">
            {inPageNav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="transition-colors hover:text-coral-500"
              >
                {item.label}
              </a>
            ))}
          </nav>
        </Container>
      </div>

      <section id="tarihce" className="scroll-mt-32 py-20 sm:py-24">
        <Container>
          <SectionHeading title="Topluluk Tarihçesi" className="max-w-3xl" />
          <div className="prose prose-neutral mt-8 max-w-3xl text-neutral-700">
            <p className="leading-relaxed">
              İYTE SAT, İzmir Yüksek Teknoloji Enstitüsü öğrencilerinin sualtı
              sporlarına ve deniz kültürüne olan ilgisini bir araya getirmek
              amacıyla kurulmuş bir öğrenci topluluğudur.{" "}
              <span className="font-medium text-navy-900">2015</span>{" "}
              itibarıyla faaliyet gösteren topluluğumuz, zaman içinde
              düzenlediği eğitimler, dalış organizasyonları ve dalış gezileriyle
              üniversitemizdeki sualtı sporları kültürünün gelişmesine katkı
              sağlamıştır.
            </p>
          </div>
        </Container>
      </section>

      <BoardSection terms={boardTerms} />

      <section id="egitmen" className="scroll-mt-32 bg-sand-50 py-20 sm:py-24">
        <Container>
          <SectionHeading
            title="Topluluk Eğitmenimiz"
            description="Dalış eğitimlerimizi güvenle yürüten, deneyimli eğitmenimiz."
          />
          <div className="mt-10 max-w-sm">
            <MemberGrid members={instructors} size="lg" />
          </div>
        </Container>
      </section>
    </>
  );
}

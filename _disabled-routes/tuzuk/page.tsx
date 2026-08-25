import type { Metadata } from "next";
import { FileText, Download, Mail } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { Container } from "@/components/Container";
import { Button } from "@/components/Button";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Tüzük",
  description: "İYTE SAT topluluk tüzüğü hakkında bilgi ve belge erişimi.",
};

const articles = [
  {
    title: "Amaç ve Kapsam",
    text: "Topluluğun kuruluş amacını, faaliyet alanlarını ve tüzüğün kapsamını tanımlayan giriş maddeleridir.",
  },
  {
    title: "Üyelik Koşulları",
    text: "Topluluğa üye olma şartlarını, üyelik türlerini ve üyelikten çıkma/çıkarılma usullerini belirler.",
  },
  {
    title: "Organlar ve Görevleri",
    text: "Genel kurul, yönetim kurulu ve denetim kurulunun oluşumu, görev süreleri ve yetki/sorumluluklarını açıklar.",
  },
  {
    title: "Mali Hükümler",
    text: "Topluluk gelir kaynakları, bütçe ve harcamalara ilişkin usul ve esasları kapsar.",
  },
  {
    title: "Yürürlük",
    text: "Tüzüğün kabul tarihi, yürürlüğe giriş şartları ve değişiklik usullerini içerir.",
  },
];

export default function CharterPage() {
  return (
    <>
      <PageHero
        eyebrow="Tüzük"
        title="Topluluk Tüzüğü"
        description="İYTE SAT'ın kuruluş amacını, organlarını ve işleyiş kurallarını belirleyen resmi tüzük metni."
      />

      <section className="py-20 sm:py-24">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <h2 className="text-2xl font-semibold text-navy-950">
                Tüzükte yer alan başlıca maddeler
              </h2>
              <p className="mt-3 max-w-xl text-sm leading-relaxed text-neutral-600">
                Güncel tüzük metninin tamamı PDF olarak yayınlanacaktır.
                Aşağıda metnin genel bölümlerine dair kısa bir özet
                bulabilirsiniz.
              </p>
              <div className="mt-8 space-y-4">
                {articles.map((article, i) => (
                  <div
                    key={article.title}
                    className="flex gap-4 rounded-2xl border border-navy-950/8 bg-white p-5"
                  >
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-navy-50 text-sm font-semibold text-navy-700">
                      {i + 1}
                    </span>
                    <div>
                      <h3 className="font-semibold text-navy-950">
                        {article.title}
                      </h3>
                      <p className="mt-1 text-sm leading-relaxed text-neutral-600">
                        {article.text}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <aside className="h-fit rounded-2xl border border-navy-950/8 bg-sand-50 p-8">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-navy-900 text-white">
                <FileText size={22} />
              </div>
              <h3 className="mt-5 text-lg font-semibold text-navy-950">
                Tüzük Belgesi
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-neutral-600">
                Tüzüğün güncel PDF metni yayına hazırlandığında bu alandan
                indirilebilir olacaktır.
              </p>
              <Button
                variant="secondary"
                className="mt-6 w-full cursor-not-allowed opacity-60"
              >
                <Download size={16} />
                PDF İndir (Yakında)
              </Button>
              <a
                href={`mailto:${site.emails[0]}`}
                className="mt-4 flex items-center justify-center gap-2 text-sm font-medium text-navy-700 hover:text-coral-500"
              >
                <Mail size={15} />
                Sorularınız için bize ulaşın
              </a>
            </aside>
          </div>
        </Container>
      </section>
    </>
  );
}

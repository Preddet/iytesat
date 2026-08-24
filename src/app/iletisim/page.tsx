import type { Metadata } from "next";
import { ClipboardList, Mail, MapPin } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { Container } from "@/components/Container";
import { Button } from "@/components/Button";
import { InstagramIcon, LinkedinIcon } from "@/components/icons/SocialIcons";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "İletişim",
  description: "İYTE SAT ile iletişime geçin, sorularınızı iletin.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="İletişim"
        title="Bizimle İletişime Geçin"
        description="Sorularınız için Instagram'dan bize yazabilir, üyelik kaydınızı aşağıdaki formu doldurarak tamamlayabilirsiniz."
      />
      <section className="py-20 sm:py-24">
        <Container className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <h2 className="text-2xl font-semibold text-navy-950">
              İletişim Bilgileri
            </h2>
            <div className="mt-8 space-y-5">
              <div className="flex items-start gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-navy-50 text-navy-700">
                  <Mail size={18} />
                </span>
                <div>
                  <p className="text-sm font-medium text-navy-950">E-posta</p>
                  {site.emails.map((email) => (
                    <a
                      key={email}
                      href={`mailto:${email}`}
                      className="block text-sm text-neutral-600 hover:text-coral-500"
                    >
                      {email}
                    </a>
                  ))}
                </div>
              </div>
              <div className="flex items-start gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-navy-50 text-navy-700">
                  <MapPin size={18} />
                </span>
                <div>
                  <p className="text-sm font-medium text-navy-950">Adres</p>
                  <p className="text-sm text-neutral-600">{site.address}</p>
                </div>
              </div>
            </div>

            <div className="mt-10">
              <p className="text-sm font-medium text-navy-950">
                Sosyal Medya
              </p>
              <div className="mt-3 flex gap-3">
                <a
                  href={site.social.instagram}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Instagram"
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-navy-950/12 text-navy-900 transition-colors hover:bg-navy-900 hover:text-white"
                >
                  <InstagramIcon size={18} />
                </a>
                <a
                  href={site.social.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn"
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-navy-950/12 text-navy-900 transition-colors hover:bg-navy-900 hover:text-white"
                >
                  <LinkedinIcon size={18} />
                </a>
              </div>
            </div>

            <div className="mt-10 overflow-hidden rounded-2xl border border-navy-950/8">
              <iframe
                title="İYTE Kampüs Konumu"
                className="h-56 w-full grayscale"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                src="https://www.google.com/maps?q=%C4%B0zmir%20Y%C3%BCksek%20Teknoloji%20Enstit%C3%BCs%C3%BC&output=embed"
              />
            </div>
          </div>

          <div className="flex flex-col gap-6">
            <div className="rounded-2xl border border-navy-950/8 bg-sand-50 p-8">
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-navy-900 text-white">
                <InstagramIcon size={22} />
              </span>
              <h2 className="mt-5 text-2xl font-semibold text-navy-950">
                Bize Instagram&apos;dan Yazın
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-neutral-600">
                Sorularınız ya da merak ettikleriniz
                için en hızlı dönüş Instagram DM üzerinden gerçekleştirilecektir. Aşağıdaki
                butondan bize ulaşabilirsiniz.
              </p>
              <Button
                href={site.social.instagram}
                external
                variant="primary"
                className="mt-6"
              >
                <InstagramIcon size={16} />
                Instagram&apos;dan Yaz
              </Button>
            </div>

            <div className="rounded-2xl border border-navy-950/8 bg-white p-8">
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-navy-50 text-navy-700">
                <ClipboardList size={22} />
              </span>
              <h2 className="mt-5 text-2xl font-semibold text-navy-950">
                Üyelik Kaydı
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-neutral-600">
                Topluluğumuza katılmak için kayıt formunu doldurmanız
                yeterli. Kayıtlarınızı aşağıdaki formdan yapabilirsiniz.
              </p>
              <Button
                href={site.registrationForm}
                external
                variant="secondary"
                className="mt-6"
              >
                Kayıt Formunu Doldur
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}

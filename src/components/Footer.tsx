import Link from "next/link";
import Image from "next/image";
import { Mail, MapPin } from "lucide-react";
import { Container } from "./Container";
import { InstagramIcon, LinkedinIcon } from "./icons/SocialIcons";
import { navLinks, site } from "@/data/site";

export function Footer() {
  return (
    <footer className="bg-navy-950 text-navy-100">
      <Container className="grid gap-12 py-16 sm:grid-cols-2 lg:grid-cols-4">
        <div className="sm:col-span-2 lg:col-span-2">
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/logo-trimmed.png"
              alt="İYTE SAT logosu"
              width={88}
              height={76}
              className="h-20 w-auto"
            />
            <span className="text-lg font-bold text-white">İYTE SAT</span>
          </Link>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-navy-300">
            İzmir Yüksek Teknoloji Enstitüsü bünyesinde dalış, sualtı sporları
            ve deniz kültürünü öğrenciler arasında yaygınlaştırmak için
            2015&apos;te kurulmuş öğrenci topluluğu.
          </p>
          <div className="mt-6 flex gap-3">
            <a
              href={site.social.instagram}
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-white transition-colors hover:bg-white/10"
            >
              <InstagramIcon size={18} />
            </a>
            <a
              href={site.social.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-white transition-colors hover:bg-white/10"
            >
              <LinkedinIcon size={18} />
            </a>
          </div>
        </div>

        <div>
          <ul className="space-y-3">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm text-navy-300 transition-colors hover:text-white"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold tracking-wide text-white uppercase">
            İletişim
          </h3>
          <ul className="mt-4 space-y-3 text-sm text-navy-300">
            <li className="flex items-start gap-2">
              <Mail size={16} className="mt-0.5 shrink-0" />
              <div className="space-y-1">
                {site.emails.map((email) => (
                  <a
                    key={email}
                    href={`mailto:${email}`}
                    className="block transition-colors hover:text-white"
                  >
                    {email}
                  </a>
                ))}
              </div>
            </li>
            <li className="flex items-start gap-2">
              <MapPin size={16} className="mt-0.5 shrink-0" />
              <span>{site.address}</span>
            </li>
          </ul>
        </div>
      </Container>

      <div className="border-t border-white/10 py-6">
        <Container className="text-center text-xs text-navy-400">
          <p>
            © {new Date().getFullYear()} {site.fullName}
          </p>
        </Container>
      </div>
    </footer>
  );
}

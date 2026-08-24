"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { clsx } from "clsx";
import { navLinks } from "@/data/site";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [prevPathname, setPrevPathname] = useState(pathname);

  if (pathname !== prevPathname) {
    setPrevPathname(pathname);
    setOpen(false);
  }

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isHome = pathname === "/";
  const showBrand = !isHome || scrolled;

  return (
    <header
      className={clsx(
        "sticky top-0 z-50 w-full transition-colors duration-300",
        scrolled || open
          ? "bg-white/90 shadow-sm backdrop-blur-md"
          : "bg-transparent",
      )}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 lg:px-8">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/logo-trimmed.png"
            alt="İYTE SAT logosu"
            width={40}
            height={35}
            className={clsx(
              "h-9 w-auto transition-all duration-500 ease-out",
              showBrand
                ? "translate-y-0 opacity-100"
                : "pointer-events-none -translate-y-2 opacity-0",
            )}
            priority
          />
          <span
            className={clsx(
              "text-lg font-bold tracking-tight transition-all duration-500 ease-out",
              scrolled || open ? "text-navy-950" : "text-white",
              showBrand
                ? "translate-y-0 opacity-100"
                : "pointer-events-none -translate-y-2 opacity-0",
            )}
          >
            İYTE SAT
          </span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => {
            const active =
              link.href === "/"
                ? pathname === "/"
                : pathname.startsWith(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={clsx(
                  "text-sm font-medium tracking-wide transition-colors",
                  active
                    ? "text-coral-500"
                    : scrolled
                      ? "text-navy-950/80 hover:text-coral-500"
                      : "text-white/90 hover:text-white",
                )}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <Link
          href="/iletisim"
          className={clsx(
            "hidden rounded-full px-5 py-2.5 text-sm font-semibold transition-colors md:inline-flex",
            scrolled
              ? "bg-coral-500 text-white hover:bg-coral-600"
              : "bg-white text-navy-950 hover:bg-navy-50",
          )}
        >
          Bize Katıl
        </Link>

        <button
          type="button"
          aria-label={open ? "Menüyü kapat" : "Menüyü aç"}
          onClick={() => setOpen((v) => !v)}
          className={clsx(
            "inline-flex items-center justify-center rounded-full p-2 md:hidden",
            scrolled || open ? "text-navy-950" : "text-white",
          )}
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {open && (
        <div className="border-t border-navy-950/10 bg-white px-6 pb-6 md:hidden">
          <nav className="flex flex-col gap-1 pt-2">
            {navLinks.map((link) => {
              const active =
                link.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={clsx(
                    "rounded-lg px-3 py-3 text-base font-medium",
                    active
                      ? "bg-coral-50 text-coral-600"
                      : "text-navy-950/80 hover:bg-navy-50",
                  )}
                >
                  {link.label}
                </Link>
              );
            })}
            <Link
              href="/iletisim"
              className="mt-3 rounded-full bg-coral-500 px-5 py-3 text-center text-sm font-semibold text-white"
            >
              Bize Katıl
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}

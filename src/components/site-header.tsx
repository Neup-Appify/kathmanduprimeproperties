import Image from "next/image";
import Link from "next/link";
import { navLinks } from "@/data/site";

const LOGO_SRC = "https://neupgroup.com/ktmpp/logo.png";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-[color:var(--border)] bg-[color:var(--surface)]/95 backdrop-blur">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between gap-4 px-6 py-4 lg:px-8">
        <Link href="/" className="group flex items-center gap-3">
          <span className="flex h-11 w-11 items-center justify-center overflow-hidden rounded-xl border border-[color:var(--border)] bg-[color:var(--surface-strong)] transition-transform duration-200 group-hover:-translate-y-0.5">
            <Image
              src={LOGO_SRC}
              alt="Kathmandu Prime Properties logo"
              width={44}
              height={44}
              className="h-10 w-10 object-contain"
              priority
            />
          </span>
          <span>
            <span className="block font-display text-2xl leading-none tracking-wide text-[color:var(--foreground)]">
              Kathmandu Prime Properties
            </span>
            <span className="block text-[11px] uppercase tracking-[0.28em] text-[color:var(--muted)]">
              Estate Advisory
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-[color:var(--muted)] transition-colors hover:text-[color:var(--foreground)]"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <Link
          href="/properties"
          className="inline-flex h-11 items-center justify-center rounded-full border border-[color:var(--primary)] bg-[color:var(--primary)] px-5 text-sm font-semibold text-white transition-transform duration-200 hover:-translate-y-0.5 hover:bg-[color:var(--primary-strong)]"
        >
          Schedule viewing
        </Link>
      </div>
    </header>
  );
}

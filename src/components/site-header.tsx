import Link from "next/link";
import { navLinks } from "@/data/site";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-[color:var(--border)] bg-[color:var(--surface)]/90 backdrop-blur-xl">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between gap-4 px-6 py-4 lg:px-8">
        <Link href="/" className="group flex items-center gap-3">
          <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[color:var(--primary)] font-display text-lg text-white shadow-[0_10px_25px_rgba(198,30,58,0.25)] transition-transform duration-200 group-hover:-translate-y-0.5">
            KP
          </span>
          <span>
            <span className="block font-display text-lg tracking-tight text-[color:var(--foreground)]">
              Kathmandu Prime Properties
            </span>
            <span className="block text-xs uppercase tracking-[0.24em] text-[color:var(--muted)]">
              Real estate studio
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
          className="inline-flex h-11 items-center justify-center rounded-full bg-[color:var(--primary)] px-5 text-sm font-semibold text-white transition-transform duration-200 hover:-translate-y-0.5 hover:bg-[color:var(--primary-strong)]"
        >
          Book a viewing
        </Link>
      </div>
    </header>
  );
}
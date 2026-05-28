import type { Metadata } from "next";
import { aboutHighlights } from "@/data/site";

export const metadata: Metadata = {
  title: "About us",
  description: "Learn about the approach behind Kathmandu Prime Properties.",
};

export default function AboutPage() {
  return (
    <div className="mx-auto w-full max-w-7xl px-6 py-8 lg:px-8 lg:py-12">
      <section className="max-w-3xl space-y-4">
        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[color:var(--primary)]">
          About us
        </p>
        <h1 className="font-display text-5xl tracking-tight text-[color:var(--foreground)] sm:text-6xl">
          A real estate studio built around clarity, trust, and strong
          presentation.
        </h1>
        <p className="text-lg leading-8 text-[color:var(--muted)]">
          We help clients present property with more intent. That means sharper
          positioning, cleaner communication, and a buying experience that feels
          calm instead of cluttered.
        </p>
      </section>

      <section className="mt-12 grid gap-5 lg:grid-cols-3">
        {aboutHighlights.map((highlight) => (
          <div
            key={highlight}
            className="rounded-[1.8rem] border border-[color:var(--border)] bg-[color:var(--surface)] p-6 shadow-sm"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[color:var(--primary-soft)] font-display text-2xl text-[color:var(--primary)]">
              •
            </div>
            <p className="mt-5 font-display text-2xl text-[color:var(--foreground)]">
              {highlight}
            </p>
          </div>
        ))}
      </section>

      <section className="mt-16 grid gap-8 rounded-[2rem] border border-[color:var(--border)] bg-[color:var(--surface-strong)] p-6 shadow-sm lg:grid-cols-[0.95fr_1.05fr] lg:p-8">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[color:var(--primary)]">
            Our philosophy
          </p>
          <h2 className="mt-3 font-display text-4xl tracking-tight text-[color:var(--foreground)]">
            Minimal design, stronger market confidence.
          </h2>
        </div>
        <div className="space-y-4 text-sm leading-7 text-[color:var(--muted)]">
          <p>
            Good real estate marketing in Kathmandu does not need to be noisy. It
            needs to be clear, premium, and locally relevant.
          </p>
          <p>
            We keep the process focused on the essentials: a believable price,
            a polished presentation, and communication that helps people move
            faster.
          </p>
          <p>
            That approach works for sellers, buyers, and investors who want a
            direct path to a good decision.
          </p>
        </div>
      </section>
    </div>
  );
}
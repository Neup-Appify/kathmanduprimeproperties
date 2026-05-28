import type { Metadata } from "next";
import { featuredProperties, propertiesPageHero, sellingSteps } from "@/data/site";

export const metadata: Metadata = {
  title: "Properties",
  description: "Focused property listings for the Kathmandu market.",
};

export default function PropertiesPage() {
  return (
    <div className="mx-auto w-full max-w-7xl px-6 py-8 lg:px-8 lg:py-12">
      <section className="max-w-3xl space-y-4">
        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[color:var(--primary)]">
          Properties
        </p>
        <h1 className="font-display text-5xl tracking-tight text-[color:var(--foreground)] sm:text-6xl">
          {propertiesPageHero.title}
        </h1>
        <p className="text-lg leading-8 text-[color:var(--muted)]">
          {propertiesPageHero.description}
        </p>
      </section>

      <section className="mt-12 grid gap-5 lg:grid-cols-3">
        {featuredProperties.map((property) => (
          <article
            key={property.name}
            className="overflow-hidden rounded-[1.1rem] border border-[color:var(--border)] bg-[color:var(--surface-strong)] shadow-sm"
          >
            <div className="border-b border-[color:var(--border)] bg-[linear-gradient(180deg,rgba(110,31,45,0.1),rgba(255,255,255,1))] p-5">
              <div className="inline-flex rounded-full bg-white px-3 py-1 text-xs font-semibold uppercase tracking-[0.22em] text-[color:var(--primary)]">
                {property.type}
              </div>
              <h2 className="mt-4 font-display text-3xl text-[color:var(--foreground)]">
                {property.name}
              </h2>
              <p className="mt-2 text-sm text-[color:var(--muted)]">
                {property.location}
              </p>
            </div>
            <div className="space-y-5 p-5">
              <p className="text-sm leading-7 text-[color:var(--muted)]">
                {property.description}
              </p>
              <div className="flex items-center justify-between gap-4">
                <span className="font-display text-2xl text-[color:var(--foreground)]">
                  {property.price}
                </span>
                <span className="rounded-full bg-[color:var(--primary-soft)] px-3 py-1 text-xs font-semibold text-[color:var(--primary)]">
                  {property.highlight}
                </span>
              </div>
            </div>
          </article>
        ))}
      </section>

      <section className="mt-16 rounded-[1.25rem] border border-[color:var(--border)] bg-[color:var(--surface)] p-6 shadow-sm lg:p-8">
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[color:var(--primary)]">
              Buying and selling flow
            </p>
            <h2 className="mt-3 font-display text-4xl tracking-tight text-[color:var(--foreground)]">
              Structured process, cleaner outcomes.
            </h2>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {sellingSteps.map((step, index) => (
              <div
                key={step.title}
                className="rounded-3xl border border-[color:var(--border)] bg-white/70 p-5"
              >
                <div className="text-sm font-semibold uppercase tracking-[0.22em] text-[color:var(--primary)]">
                  0{index + 1}
                </div>
                <h3 className="mt-3 font-display text-2xl text-[color:var(--foreground)]">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-7 text-[color:var(--muted)]">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

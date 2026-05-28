import Link from "next/link";
import {
  featuredProperties,
  homeServices,
  homeStats,
  marketSignals,
  neighborhoods,
  sellingSteps,
  testimonials,
} from "@/data/site";

export const metadata = {
  title: "Home",
};

export default function Home() {
  return (
    <div className="mx-auto w-full max-w-7xl px-6 py-8 lg:px-8 lg:py-12">
      <section className="grid gap-10 lg:grid-cols-[1.08fr_0.92fr] lg:items-center">
        <div className="space-y-8">
          <div className="inline-flex items-center gap-2 rounded-full border border-[color:var(--border)] bg-[color:var(--surface)] px-4 py-2 text-sm font-medium text-[color:var(--muted)] shadow-sm backdrop-blur">
            <span className="h-2 w-2 rounded-full bg-[color:var(--primary)]" />
            Focused on Kathmandu, Lalitpur, and Bhaktapur
          </div>
          <div className="space-y-5">
            <h1 className="max-w-3xl font-display text-5xl leading-none tracking-tight text-[color:var(--foreground)] sm:text-6xl lg:text-7xl">
              Classic trust.
              <br />
              Neo-modern property advisory.
            </h1>
            <p className="max-w-2xl text-lg leading-8 text-[color:var(--muted)] sm:text-xl">
              We position each listing with clear pricing, refined presentation,
              and direct communication from first visit to final handover.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Link
              href="/properties"
            className="inline-flex h-12 items-center justify-center rounded-full bg-[color:var(--primary)] px-6 text-sm font-semibold text-white transition-transform duration-200 hover:-translate-y-0.5 hover:bg-[color:var(--primary-strong)]"
            >
              View properties
            </Link>
            <Link
              href="/about"
              className="inline-flex h-12 items-center justify-center rounded-full border border-[color:var(--border)] bg-white/70 px-6 text-sm font-semibold text-[color:var(--foreground)] transition-transform duration-200 hover:-translate-y-0.5 hover:bg-white"
            >
              About our approach
            </Link>
          </div>
          <div className="grid gap-4 sm:grid-cols-3">
            {homeStats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-3xl border border-[color:var(--border)] bg-[color:var(--surface)] p-5 shadow-sm backdrop-blur"
              >
                <div className="text-3xl font-display text-[color:var(--foreground)]">
                  {stat.value}
                </div>
                <div className="mt-1 text-sm text-[color:var(--muted)]">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="relative overflow-hidden rounded-[1.25rem] border border-[color:var(--border)] bg-[color:var(--surface-strong)] p-5 shadow-[0_14px_40px_rgba(23,19,17,0.08)]">
            <div className="rounded-2xl border border-[color:var(--border)] bg-[linear-gradient(180deg,rgba(110,31,45,0.08),rgba(255,255,255,1)_36%)] p-6">
              <div className="flex items-center justify-between gap-4 border-b border-[color:var(--border)] pb-5">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[color:var(--primary)]">
                    Featured listing
                  </p>
                  <h2 className="mt-2 font-display text-3xl text-[color:var(--foreground)]">
                    Lazimpat skyline residence
                  </h2>
                </div>
                <div className="rounded-full bg-white px-4 py-2 text-sm font-semibold text-[color:var(--primary)] shadow-sm">
                  Rs 4.8 Cr
                </div>
              </div>
              <div className="grid gap-4 py-5 sm:grid-cols-3">
                {marketSignals.map((signal) => (
                  <div
                    key={signal.label}
                    className="rounded-2xl bg-white/80 p-4 shadow-sm"
                  >
                    <div className="text-sm text-[color:var(--muted)]">
                      {signal.label}
                    </div>
                    <div className="mt-2 font-display text-2xl text-[color:var(--foreground)]">
                      {signal.value}
                    </div>
                  </div>
                ))}
              </div>
              <div className="rounded-2xl border border-[color:var(--border)] bg-white/80 p-4">
                <p className="text-sm font-semibold text-[color:var(--foreground)]">
                  Designed for serious buyers
                </p>
                <p className="mt-2 text-sm leading-6 text-[color:var(--muted)]">
                  Clear visuals, concise details, and careful positioning help
                  each home feel premium without looking busy.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-16 grid gap-5 rounded-[1.25rem] border border-[color:var(--border)] bg-[color:var(--surface)] p-6 shadow-sm lg:grid-cols-3">
        {homeServices.map((service) => (
          <div key={service.title} className="rounded-3xl bg-white/70 p-6">
            <div className="text-sm font-semibold uppercase tracking-[0.22em] text-[color:var(--primary)]">
              {service.tag}
            </div>
            <h3 className="mt-3 font-display text-2xl text-[color:var(--foreground)]">
              {service.title}
            </h3>
            <p className="mt-3 text-sm leading-7 text-[color:var(--muted)]">
              {service.description}
            </p>
          </div>
        ))}
      </section>

      <section className="mt-24 grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="space-y-4">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[color:var(--primary)]">
            Featured properties
          </p>
          <h2 className="font-display text-4xl tracking-tight text-[color:var(--foreground)] sm:text-5xl">
            Focused inventory. Stronger decisions.
          </h2>
          <p className="max-w-xl text-base leading-7 text-[color:var(--muted)]">
            Each home is presented with only the details that matter most.
          </p>
          <Link
            href="/properties"
            className="inline-flex items-center text-sm font-semibold text-[color:var(--primary)] transition-colors hover:text-[color:var(--primary-strong)]"
          >
            See the full property page
          </Link>
        </div>
        <div className="grid gap-5 md:grid-cols-2">
          {featuredProperties.slice(0, 2).map((property) => (
            <article
              key={property.name}
            className="overflow-hidden rounded-[1.1rem] border border-[color:var(--border)] bg-[color:var(--surface-strong)] shadow-sm"
            >
              <div className="border-b border-[color:var(--border)] bg-[linear-gradient(180deg,rgba(198,30,58,0.16),rgba(255,255,255,1))] p-5">
                <div className="inline-flex rounded-full bg-white px-3 py-1 text-xs font-semibold uppercase tracking-[0.22em] text-[color:var(--primary)]">
                  {property.type}
                </div>
                <h3 className="mt-4 font-display text-2xl text-[color:var(--foreground)]">
                  {property.name}
                </h3>
                <p className="mt-2 text-sm text-[color:var(--muted)]">
                  {property.location}
                </p>
              </div>
              <div className="space-y-4 p-5">
                <p className="text-sm leading-7 text-[color:var(--muted)]">
                  {property.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-[color:var(--muted)]">
                    {property.price}
                  </span>
                  <span className="rounded-full bg-[color:var(--primary-soft)] px-3 py-1 text-xs font-semibold text-[color:var(--primary)]">
                    {property.highlight}
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="mt-24 grid gap-8 lg:grid-cols-[1fr_1fr]">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[color:var(--primary)]">
            How we work
          </p>
          <h2 className="mt-3 font-display text-4xl tracking-tight text-[color:var(--foreground)] sm:text-5xl">
            A simple process that keeps the market moving.
          </h2>
          <p className="mt-4 max-w-xl text-base leading-7 text-[color:var(--muted)]">
            From valuation to final negotiation, we stay close to the details so
            buyers and sellers can move with confidence.
          </p>
        </div>
        <div className="space-y-4">
          {sellingSteps.map((step, index) => (
            <div
              key={step.title}
              className="flex gap-4 rounded-3xl border border-[color:var(--border)] bg-[color:var(--surface)] p-5 shadow-sm"
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[color:var(--primary)] font-display text-lg text-white">
                0{index + 1}
              </div>
              <div>
                <h3 className="font-display text-2xl text-[color:var(--foreground)]">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-7 text-[color:var(--muted)]">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-24 rounded-[1.25rem] border border-[color:var(--border)] bg-[color:var(--surface)] p-6 shadow-sm lg:p-8">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[color:var(--primary)]">
              Kathmandu neighborhoods
            </p>
            <h2 className="mt-3 font-display text-4xl tracking-tight text-[color:var(--foreground)] sm:text-5xl">
              Service areas with consistent demand.
            </h2>
            <p className="mt-4 text-base leading-7 text-[color:var(--muted)]">
              We focus where presentation and local context have the most impact.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {neighborhoods.map((neighborhood) => (
              <div
                key={neighborhood.name}
                className="rounded-3xl border border-[color:var(--border)] bg-white/70 p-5"
              >
                <div className="text-sm font-semibold uppercase tracking-[0.22em] text-[color:var(--primary)]">
                  {neighborhood.scope}
                </div>
                <h3 className="mt-3 font-display text-2xl text-[color:var(--foreground)]">
                  {neighborhood.name}
                </h3>
                <p className="mt-2 text-sm leading-7 text-[color:var(--muted)]">
                  {neighborhood.note}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mt-24 grid gap-5 lg:grid-cols-3">
        {testimonials.map((testimonial) => (
          <blockquote
            key={testimonial.name}
            className="rounded-[1.8rem] border border-[color:var(--border)] bg-[color:var(--surface-strong)] p-6 shadow-sm"
          >
            <p className="text-base leading-7 text-[color:var(--foreground)]">
              “{testimonial.quote}”
            </p>
            <footer className="mt-5">
              <div className="font-semibold text-[color:var(--foreground)]">
                {testimonial.name}
              </div>
              <div className="text-sm text-[color:var(--muted)]">
                {testimonial.role}
              </div>
            </footer>
          </blockquote>
        ))}
      </section>

      <section className="mt-24 rounded-[1.25rem] bg-[color:var(--primary)] px-6 py-10 text-white shadow-[0_20px_50px_rgba(110,31,45,0.28)] lg:px-10">
        <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-white/70">
              Start with a valuation
            </p>
            <h2 className="mt-3 font-display text-4xl tracking-tight sm:text-5xl">
              Ready to present your property with confidence?
            </h2>
            <p className="mt-4 max-w-2xl text-white/80">
              We help you price, present, and position for the right buyers.
            </p>
          </div>
          <Link
            href="/about"
            className="inline-flex h-12 items-center justify-center rounded-full bg-white px-6 text-sm font-semibold text-[color:var(--primary)] transition-transform duration-200 hover:-translate-y-0.5"
          >
            Meet the team
          </Link>
        </div>
      </section>
    </div>
  );
}

import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { PropertyCard } from "@/components/property-card";
import { getAgentProfileByNeupId } from "@/lib/properties";

type AgentPageProps = {
  params: Promise<{
    neupid: string;
  }>;
};

export async function generateMetadata({
  params,
}: AgentPageProps): Promise<Metadata> {
  const { neupid } = await params;
  const agent = await getAgentProfileByNeupId(neupid);

  if (!agent) {
    return {
      title: "Agent not found",
    };
  }

  return {
    title: agent.displayName,
    description: `Property listings represented by ${agent.displayName}.`,
  };
}

export default async function AgentProfilePage({ params }: AgentPageProps) {
  const { neupid } = await params;
  const agent = await getAgentProfileByNeupId(neupid);

  if (!agent) {
    notFound();
  }

  const propertyCountText =
    agent.properties.length === 1
      ? "1 active property listing"
      : `${agent.properties.length} active property listings`;

  return (
    <div className="mx-auto w-full max-w-7xl px-6 py-8 lg:px-8 lg:py-12">
      <section className="rounded-[1.4rem] border border-[color:var(--border)] bg-[color:var(--surface-strong)] p-6 shadow-sm lg:p-8">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center">
          <div className="flex h-24 w-24 items-center justify-center overflow-hidden rounded-full border border-[color:var(--border)] bg-[color:var(--surface)]">
            {agent.displayImage ? (
              <Image
                src={agent.displayImage}
                alt={agent.displayName}
                width={96}
                height={96}
                className="h-full w-full object-cover"
              />
            ) : (
              <span className="font-display text-3xl text-[color:var(--primary)]">
                {agent.displayName
                  .split(" ")
                  .map((part) => part[0])
                  .join("")
                  .slice(0, 2)
                  .toUpperCase()}
              </span>
            )}
          </div>

          <div className="min-w-0 flex-1">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[color:var(--primary)]">
              Agent profile
            </p>
            <h1 className="mt-2 font-display text-4xl tracking-tight text-[color:var(--foreground)] sm:text-5xl">
              {agent.displayName}
            </h1>
            <p className="mt-3 text-sm leading-7 text-[color:var(--muted)]">
              {agent.neupId ? `@${agent.neupId}` : "Verified listing agent"}
            </p>
            <p className="mt-2 text-sm font-medium text-[color:var(--muted)]">
              {propertyCountText}
            </p>
          </div>
        </div>
      </section>

      <section className="mt-10 grid gap-5 lg:grid-cols-3">
        {agent.properties.map((property) => (
          <PropertyCard key={property.id} property={property} compact />
        ))}
      </section>
    </div>
  );
}

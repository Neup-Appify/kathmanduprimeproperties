/*
::neup.documentation::property-bridge-listings
::function getProperties()
::title Property Bridge Listings

::public

Fetches the public property feed for the site from the Neup Estate bridge and
normalizes each entry into the website listing shape.

::returns
::datatype Promise<PropertyListing[]>

A promise that resolves to the normalized property listings used by the home and
properties pages.

::public end

::private

The bridge contract uses `agency_id` on `/property/list`. The implementation
also accepts legacy `PROPERTIES_ACCOUNT_ID` environment configuration as a
fallback source for the agency identifier.

::private end

::end
*/
const DEFAULT_PROPERTIES_API_URL =
  "https://neupgroup.com/estate/bridge/api.v1/property/list";
const DEFAULT_ACCOUNT_LOOKUP_API_URL =
  "https://neupgroup.com/estate/bridge/api.v1/accounts/lookup";
const DEFAULT_AGENCY_ID = "2a1511da-1092-4c1a-bb4a-973c301d2670";

export type PropertyApiAgency = {
  id?: string;
  name?: string;
  logoUrl?: string;
};

export type PropertyApiItem = {
  id?: string;
  slug?: string;
  title?: string;
  price?: number | string;
  location?: string;
  purpose?: string;
  category?: string;
  type?: string;
  images?: string[];
  agency?: PropertyApiAgency;
  listingAgent?: string;
  status?: string;
  createdAt?: string;
  updatedAt?: string;
};

export type PropertyApiResponse = {
  success?: boolean;
  properties?: PropertyApiItem[];
  totalCount?: number;
  limit?: number;
  offset?: number;
  fields?: string[];
};

export type AccountLookupRecord = {
  accountId?: string;
  displayName?: string;
  displayImage?: string;
  accountType?: string;
  neupId?: string;
};

export type AccountLookupResponse = {
  success?: boolean;
  hasDisplayName?: boolean;
  account?: AccountLookupRecord;
};

export type PropertyListing = {
  id: string;
  slug: string;
  title: string;
  location: string;
  purpose: string;
  category: string;
  type: string;
  priceLabel: string;
  priceValue: number | null;
  agencyName: string;
  agencyLogoUrl: string;
  status: string;
  images: string[];
  imageUrl: string | null;
  imageCount: number;
  summary: string;
  listingAgent: string;
  listingAgentAccountId: string;
  listingAgentNeupId: string;
  listingAgentImageUrl: string;
  createdAt: string | null;
};

export type AgentProfile = {
  accountId: string;
  displayName: string;
  displayImage: string;
  neupId: string;
  properties: PropertyListing[];
};

type AccountDirectory = Map<string, AccountLookupRecord>;

function getPropertiesApiUrl() {
  const baseUrl = process.env.PROPERTIES_API_URL ?? DEFAULT_PROPERTIES_API_URL;
  const agencyId =
    process.env.PROPERTIES_AGENCY_ID ??
    process.env.PROPERTIES_ACCOUNT_ID ??
    DEFAULT_AGENCY_ID;
  const url = new URL(baseUrl);

  if (!url.searchParams.has("agency_id")) {
    url.searchParams.set("agency_id", agencyId);
  }

  url.searchParams.delete("account_id");

  return url.toString();
}

function getAccountLookupApiUrl(accountId: string) {
  const url = new URL(
    process.env.PROPERTIES_ACCOUNT_LOOKUP_API_URL ??
      DEFAULT_ACCOUNT_LOOKUP_API_URL,
  );

  url.searchParams.set("accountId", accountId);

  return url.toString();
}

function formatPrice(priceValue: number | null) {
  if (priceValue === null || Number.isNaN(priceValue)) {
    return "Price on request";
  }

  return `Rs ${new Intl.NumberFormat("en-IN", {
    maximumFractionDigits: 0,
  }).format(priceValue)}`;
}

async function getAccountDirectory(
  properties: PropertyApiItem[],
): Promise<AccountDirectory> {
  const accountIds = Array.from(
    new Set(
      properties.flatMap((property) =>
        [property.agency?.id?.trim(), property.listingAgent?.trim()].filter(
          (accountId): accountId is string => Boolean(accountId),
        ),
      ),
    ),
  );

  const accountEntries = await Promise.all(
    accountIds.map(async (accountId) => {
      try {
        const response = await fetch(getAccountLookupApiUrl(accountId), {
          next: {
            revalidate: 300,
          },
        });

        if (!response.ok) {
          return null;
        }

        const data = (await response.json()) as AccountLookupResponse;

        if (!data.success || !data.account?.accountId) {
          return null;
        }

        return [data.account.accountId, data.account] as const;
      } catch {
        return null;
      }
    }),
  );

  return new Map(
    accountEntries.filter(
      (entry): entry is readonly [string, AccountLookupRecord] => Boolean(entry),
    ),
  );
}

function normalizeProperty(
  item: PropertyApiItem,
  accountDirectory: AccountDirectory,
): PropertyListing | null {
  const title = item.title?.trim();
  const slug = item.slug?.trim();

  if (!title || !slug) {
    return null;
  }

  const agencyId = item.agency?.id?.trim() || "";
  const agencyAccount = accountDirectory.get(agencyId);
  const listingAgentId = item.listingAgent?.trim() || "";
  const listingAgentAccount = accountDirectory.get(listingAgentId);
  const priceValue = typeof item.price === "number" ? item.price : Number(item.price);
  const agencyName =
    agencyAccount?.displayName?.trim() || item.agency?.name?.trim() || "Owner";
  const images = item.images?.filter((image) => Boolean(image?.trim())) ?? [];
  const imageUrl = images[0] ?? null;
  const location = item.location?.trim() || "Location unavailable";
  const purpose = item.purpose?.trim() || "Listing";
  const category = item.category?.trim() || "Property";
  const type = item.type?.trim() || "Listing";
  const listingAgent =
    listingAgentAccount?.displayName?.trim() ||
    item.listingAgent?.trim() ||
    `${agencyName} Desk`;
  const listingAgentAccountId =
    listingAgentAccount?.accountId?.trim() || item.listingAgent?.trim() || "";
  const listingAgentNeupId = listingAgentAccount?.neupId?.trim() || "";
  const listingAgentImageUrl = listingAgentAccount?.displayImage?.trim() || "";

  return {
    id: item.id ?? slug,
    slug,
    title,
    location,
    purpose,
    category,
    type,
    priceLabel: formatPrice(Number.isFinite(priceValue) ? priceValue : null),
    priceValue: Number.isFinite(priceValue) ? priceValue : null,
    agencyName,
    agencyLogoUrl:
      agencyAccount?.displayImage?.trim() || item.agency?.logoUrl?.trim() || "",
    status: item.status?.trim() || "UNKNOWN",
    images,
    imageUrl,
    imageCount: images.length,
    summary: `${purpose} ${category.toLowerCase()} in ${location}.`,
    listingAgent,
    listingAgentAccountId,
    listingAgentNeupId,
    listingAgentImageUrl,
    createdAt: item.createdAt?.trim() || null,
  };
}

export async function getProperties(): Promise<PropertyListing[]> {
  try {
    const response = await fetch(getPropertiesApiUrl(), {
      next: {
        revalidate: 300,
      },
    });

    if (!response.ok) {
      return [];
    }

    const data = (await response.json()) as PropertyApiResponse;

    if (!data.success || !Array.isArray(data.properties)) {
      return [];
    }

    const accountDirectory = await getAccountDirectory(data.properties);

    return data.properties
      .map((item) => normalizeProperty(item, accountDirectory))
      .filter((item): item is PropertyListing => Boolean(item));
  } catch {
    return [];
  }
}

export async function getAgentProfileByNeupId(
  neupId: string,
): Promise<AgentProfile | null> {
  const normalizedNeupId = neupId.trim().toLowerCase();

  if (!normalizedNeupId) {
    return null;
  }

  const properties = await getProperties();
  const agentProperties = properties.filter(
    (property) => property.listingAgentNeupId.toLowerCase() === normalizedNeupId,
  );

  if (agentProperties.length === 0) {
    return null;
  }

  const [firstProperty] = agentProperties;

  return {
    accountId: firstProperty.listingAgentAccountId,
    displayName: firstProperty.listingAgent,
    displayImage: firstProperty.listingAgentImageUrl,
    neupId: firstProperty.listingAgentNeupId,
    properties: agentProperties,
  };
}

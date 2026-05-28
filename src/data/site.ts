export const navLinks = [
  { href: "/properties", label: "Properties" },
  { href: "/about", label: "About us" },
  { href: "/team", label: "Our team" },
] as const;

export const footerLinks = [
  { href: "/", label: "Home" },
  { href: "/properties", label: "Properties" },
  { href: "/about", label: "About us" },
  { href: "/team", label: "Our team" },
] as const;

export const serviceAreas = ["Kathmandu", "Lalitpur", "Bhaktapur"] as const;

export const homeStats = [
  { value: "120+", label: "Homes positioned" },
  { value: "3", label: "Core service areas" },
  { value: "14 days", label: "Typical launch window" },
] as const;

export const marketSignals = [
  { label: "Bedrooms", value: "3" },
  { label: "Baths", value: "3" },
  { label: "View", value: "City" },
] as const;

export const homeServices = [
  {
    tag: "Selling",
    title: "Make the listing market-ready.",
    description:
      "We shape the story, photography direction, and pricing strategy so a property looks premium from the first scroll.",
  },
  {
    tag: "Buying",
    title: "Shortlist homes worth a visit.",
    description:
      "Buyers get clean options, local context, and honest guidance on what stands out in Kathmandu's market.",
  },
  {
    tag: "Valuation",
    title: "Lead with a realistic number.",
    description:
      "A credible valuation helps protect time, reduce noise, and attract buyers who are actually ready.",
  },
] as const;

export const featuredProperties = [
  {
    name: "Lazimpat skyline residence",
    location: "Lazimpat, Kathmandu",
    type: "Luxury apartment",
    price: "Rs 4.8 Cr",
    highlight: "City-facing balcony",
    description:
      "A polished three-bedroom home with a calm interior palette, premium finishes, and strong access to central Kathmandu.",
  },
  {
    name: "Buddhanagar family villa",
    location: "Buddhanagar, Kathmandu",
    type: "Independent villa",
    price: "Rs 7.2 Cr",
    highlight: "Private garden",
    description:
      "A spacious family home with a generous layout, natural light, and a setting that balances privacy with convenience.",
  },
  {
    name: "Jhamsikhel investor flat",
    location: "Jhamsikhel, Lalitpur",
    type: "Urban apartment",
    price: "Rs 3.1 Cr",
    highlight: "High rental demand",
    description:
      "A compact, high-appeal apartment designed for buyers who want steady rental potential and a central lifestyle base.",
  },
] as const;

export const sellingSteps = [
  {
    title: "Discover",
    description:
      "We assess the home, service area, and market position before we commit to a launch direction.",
  },
  {
    title: "Present",
    description:
      "We refine copy, visuals, and pricing so the listing feels polished, accurate, and easy to trust.",
  },
  {
    title: "Close",
    description:
      "We manage buyer conversations and negotiation points with a calm, outcome-focused process.",
  },
] as const;

export const neighborhoods = [
  {
    scope: "Central Kathmandu",
    name: "Lazimpat and nearby districts",
    note:
      "For buyers who value access, executive housing, and strong presentation.",
  },
  {
    scope: "Kathmandu core",
    name: "Buddhanagar and surrounding areas",
    note:
      "For family homes and properties that need clear, credible positioning.",
  },
  {
    scope: "Valley lifestyle",
    name: "Jhamsikhel and central Lalitpur",
    note:
      "For buyers who want a mix of convenience, rental appeal, and walkable amenities.",
  },
  {
    scope: "City fringe",
    name: "Bhaktapur premium pockets",
    note:
      "For larger plots and homes that benefit from a quieter setting and careful market framing.",
  },
] as const;

export const testimonials = [
  {
    name: "Anika Shrestha",
    role: "Property seller, Kathmandu",
    quote:
      "The listing looked sharper, the communication was clean, and the buyer conversations started faster than expected.",
  },
  {
    name: "Rohit Manandhar",
    role: "Investor, Lalitpur",
    quote:
      "The team was direct about pricing and market fit, which made it much easier to choose the right property.",
  },
  {
    name: "Sita Koirala",
    role: "Homebuyer, Kathmandu",
    quote:
      "I liked how each home was presented with just enough detail. It felt premium without being overwhelming.",
  },
] as const;

export const propertiesPageHero = {
  title: "Properties curated for Kathmandu buyers and sellers.",
  description:
    "Browse a focused set of homes with clear pricing, practical context, and a presentation style that helps each listing stand out.",
} as const;

export const aboutHighlights = [
  "Minimal presentation, stronger trust.",
  "Pricing shaped by local context.",
  "Listings built to feel premium and readable.",
] as const;

export const teamMembers = [
  {
    name: "Sanjay Basnet",
    role: "Founder and principal advisor",
    focus: "Strategy, valuation, and seller representation",
    bio:
      "Leads the team with a calm market-first approach and a bias toward clear communication.",
  },
  {
    name: "Mira Thapa",
    role: "Buyer advisor",
    focus: "Shortlists, tours, and neighborhood guidance",
    bio:
      "Helps buyers compare options quickly and identify homes that are worth serious consideration.",
  },
  {
    name: "Aarav KC",
    role: "Listing specialist",
    focus: "Presentation, copy, and launch coordination",
    bio:
      "Shapes each listing so it looks intentional, precise, and ready for the market.",
  },
  {
    name: "Nisha Ghimire",
    role: "Client operations",
    focus: "Scheduling, follow-up, and deal support",
    bio:
      "Keeps the process organized so clients always know the next step.",
  },
] as const;
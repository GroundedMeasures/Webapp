// Central place for contact details and other site-wide values.
// Update here and the change propagates everywhere it's used.

export const CONTACT = {
  phoneDisplay: "(724) 221-7521",
  phoneHref: "tel:7242217521",
  email: "mrisnear@groundedmeasures.com",
  emailHref: "mailto:mrisnear@groundedmeasures.com",
  hours: "Mon–Fri 7:00 AM – 5:00 PM EST",
  region: "Western Pennsylvania Headquarters",
} as const;

export const BRAND = {
  name: "Grounded Measures LLC",
  title: "Grounded Measures LLC | Civil 3D Earthwork Takeoffs & Bid Checks",
  logoUrl:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuC4Gwir5zczHSjccYcHGp8wq3JBhSttVvWEShtP4ZLjKgYp3SJnkw4tUQ-XkP6vzKsyXLukzR0Ninsm5GS032u7XLoJsRz7B4kD1Pejam9EK2KrxRypVQKoE8RUiYfpQ30RbIrcnQUwk8US3xug0xuDZ6NedZJoKE1qctwW-_tXaOBfsAHEOp4kqX_lE6gnwEaRo3jyZ0CCgzFSk4Vq0Lpb6vhppYwdaKpnV-sUTjtBiTwD_IkCPzvq5wC1QpxAO4fslyQ",
  logoUrlDark:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuArNcAWcXj_d-KIriHHoGXvmkiSQgB2vSJpz0UwN-qW5_Fg8ccMDwkGez_gHNAJC5EBpLxhMKxDaIlcCYzO33iUXXx-2ymvNcfjAkiMSAtIR7aDZ5j7NmXuu0QRl4OdqUKacOiC0y1iFEc64IQv9HeAG4CEhCxTMR5X8xjOJRHMgU6rzmefNYsp94CIGfWnP5QnuIqXMGpJN1pVVE2e36Dkc1uU6o_ZdAwUePrMtTKJQGM-vEN9VVnbEiRxby4eGy78U5s",
} as const;

export const NAV_LINKS = [
  { label: "Services", href: "#services" },
  { label: "Deliverables", href: "#deliverables" },
  { label: "Flat Pricing", href: "#pricing" },
  { label: "File Upload", href: "#upload-desk" },
] as const;

export const HERO_TRUST_BADGES = [
  { icon: "verified", label: "Free file check" },
  { icon: "lock", label: "Strict NDA privacy" },
  { icon: "schedule", label: "24-hr rush available" },
] as const;

export const HERO_INFO_CARDS = [
  {
    accentClass: "border-l-amber-500",
    labelClass: "text-amber-700",
    label: "Fast Turnaround",
    title: "Standard 48 - 72 Hr Delivery",
    description: "Fast response for residential & commercial bids",
    badge: "24-HR",
    badgeSubtext: "Rush Available",
    badgeClass: "bg-amber-50 text-amber-800 border-amber-200",
  },
  {
    accentClass: "border-l-blue-600",
    labelClass: "text-blue-700",
    label: "Field-Ready Deliverables",
    title: "Color Cut/Fill Heatmaps",
    description: "High-contrast elevation plan with volume grid overlay",
    badge: "PDF & CAD",
    badgeSubtext: null,
    badgeClass: "bg-blue-50 text-blue-800 border-blue-200",
  },
  {
    accentClass: "border-l-emerald-600",
    labelClass: "text-emerald-700",
    label: "Verified Accuracy",
    title: "Seasoned Principal Estimator",
    description: "Earthwork and Utility Takeoff",
    badge: "7+ YEARS",
    badgeSubtext: "Experience",
    badgeClass: "bg-emerald-50 text-emerald-800 border-emerald-200",
  },
] as const;

export const DELIVERABLES = [
  {
    icon: "check_circle",
    iconWrapClass: "bg-emerald-50 border-emerald-200 text-emerald-600",
    title: "Volume Summary Report",
    description: "Precise net dirt quantities required to hit your proposed subgrade.",
  },
  {
    icon: "layers",
    iconWrapClass: "bg-amber-50 border-amber-200 text-amber-600",
    title: "Visual Cut & Fill Heat Map",
    description:
      "High-visibility surface grid overlays showing exact cut and fill volumes across the entire site footprint.",
  },
  {
    icon: "tune",
    iconWrapClass: "bg-slate-100 border-slate-300 text-slate-700",
    title: "Additional Services Upon Request",
    description:
      "Need topsoil stripped/respread volumes, utility trenching/bedding by the linear foot, or pavement area takeoffs? Just ask in your upload notes. Deliverable presentation is customizable upon request.",
  },
] as const;

export const PRICING_TIERS = [
  {
    tier: "TIER 1",
    sizeLabel: "UNDER 2 ACRES",
    name: "Small Sites & Pads",
    description: "Single-family lots, gas stations, fast-food pads, single warehouse pads.",
    priceQualifier: "Starting at",
    price: "$350",
    priceUnit: "/ Starting",
    turnaround: "2–3 Business Day Turnaround",
    features: [
      "Net Cut & Fill Volume Summary (CY)",
      '22"x34" Color Cut/Fill Gradient PDF',
      "Shrink / Swell calculations included",
    ],
    ctaLabel: "Upload Plans for Tier 1 ($350)",
    featured: false,
  },
  {
    tier: "TIER 2",
    sizeLabel: "2 TO 10 ACRES",
    name: "Medium Developments",
    description: "Subdivisions, retail strips, distribution centers, parking expansions.",
    priceQualifier: "Starting at",
    price: "$850",
    priceUnit: "/ Starting",
    turnaround: "2-3 Business Day Turnaround",
    features: [
      "Volume Breakdown by Individual Pad & Basin",
      "50'x50' Cut/Fill Grid Layout with Stationing",
      "Direct Phone Q&A with Takeoff Estimator",
    ],
    ctaLabel: "Upload Plans for Tier 2 ($850)",
    featured: true,
    featuredBadge: "MOST REQUESTED",
  },
  {
    tier: "TIER 3",
    sizeLabel: "10+ ACRES / ROADWAY",
    name: "Large & Corridor Sites",
    description: "Multi-phase developments, highway alignments, massive earthmoving.",
    priceQualifier: null,
    price: "Custom",
    priceUnit: "/ Fast Scope Quote",
    turnaround: "Quotes provided within 1 business day",
    features: [
      "GPS Machine Control TIN (.LandXML) Surfaces",
      "Corridor Cross-Section Volume Audits",
      "Pre-Bid Strategy & Phasing Consultation",
      "Complete Civil 3D Surface Model Audit",
    ],
    ctaLabel: "Request Custom Proposal",
    featured: false,
  },
] as const;

export const INTAKE_CHECKLIST = [
  {
    step: "01",
    title: "Send Whatever You Have",
    description: "Full sets, single grading sheets, CAD files (.dwg), or scanned bid sets.",
  },
  {
    step: "02",
    title: "Strict NDA & Bid Privacy",
    description: "Your bid identity, location data, and subcontractors remain strictly private.",
  },
  {
    step: "03",
    title: "Prompt Scope Review",
    description:
      "We review your plan set and follow up directly to confirm project details, sscope, and deliverable timelines.",
  },
] as const;

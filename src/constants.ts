// Central place for contact details and other site-wide values.
// Update here and the change propagates everywhere it's used.

export const CONTACT = {
  phoneDisplay: "(724) 221-7521",
  phoneHref: "tel:7242217521",
  email: "bids@groundedmeasures.com",
  emailHref: "mailto:bids@groundedmeasures.com",
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
  copyrightYear: 2025,
} as const;

export const NAV_LINKS = [
  { label: "Services", href: "#services" },
  { label: "Deliverables", href: "#deliverables" },
  { label: "Flat Pricing", href: "#pricing" },
  { label: "Sample Heatmap", href: "#samples" },
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
    label: "Turnaround SLA",
    title: "Standard 48–72 Hr Delivery",
    description: "Fast response for residential & commercial bids",
    badge: "2–3 DAYS",
    badgeSubtext: "Guaranteed",
    badgeClass: "bg-amber-50 text-amber-800 border-amber-200",
  },
  {
    accentClass: "border-l-blue-600",
    labelClass: "text-blue-700",
    label: "Field-Ready Deliverables",
    title: "Color Cut/Fill Heatmaps",
    description: "High-contrast grid & daylight tie-in overlays",
    badge: "PDF & CAD",
    badgeSubtext: null,
    badgeClass: "bg-blue-50 text-blue-800 border-blue-200",
  },
  {
    accentClass: "border-l-emerald-600",
    labelClass: "text-emerald-700",
    label: "Verified Accuracy",
    title: "Trained Civil 3D Specialists",
    description: "Grading, subgrades, and plan bust detection",
    badge: "7+ YEARS",
    badgeSubtext: null,
    badgeClass: "bg-emerald-50 text-emerald-800 border-emerald-200",
  },
] as const;

export const DELIVERABLES = [
  {
    icon: "check_circle",
    iconWrapClass: "bg-emerald-50 border-emerald-200 text-emerald-600",
    title: "Volume Summary Reports",
    description: "Precise net dirt quantities required to hit your proposed subgrade.",
  },
  {
    icon: "layers",
    iconWrapClass: "bg-amber-50 border-amber-200 text-amber-600",
    title: "Visual Color-Coded Maps",
    description:
      "High-visibility surface grid overlays showing exact cut and fill depths across the entire site footprint.",
  },
  {
    icon: "table_chart",
    iconWrapClass: "bg-blue-50 border-blue-200 text-blue-700",
    title: "Elevation Tables",
    description: "Clear, professional data tables ready to drop straight into your bid spreadsheets.",
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
    price: "$350",
    priceUnit: "/ Flat Fee",
    turnaround: "2–3 Business Day Turnaround",
    features: [
      "Net Cut & Fill Volume Summary (CY)",
      '24"x36" Color Cut/Fill Gradient PDF',
      "Elevation & Boundary Daylight Audit",
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
    price: "$850",
    priceUnit: "/ Flat Fee",
    turnaround: "2–3 Business Day Guaranteed SLA",
    features: [
      "Volume Breakdown by Individual Pad & Basin",
      "50'x50' Cut/Fill Grid Layout with Stationing",
      "Complete Civil 3D Surface Model Audit",
      "Excel Export + Multi-Page Color PDF Maps",
      "Direct Phone Q&A with Takeoff Engineer",
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
    price: "Custom",
    priceUnit: "/ Fast Scope Quote",
    turnaround: "Quotes provided within 2-4 hours",
    features: [
      "Phased Mass Haul & Staging Calculations",
      "GPS Machine Control TIN (.LandXML) Surfaces",
      "Corridor Cross-Section Volume Audits",
      "Priority Estimator Project Check-In Call",
    ],
    ctaLabel: "Request Custom Proposal",
    featured: false,
  },
] as const;

export const SURFACE_METRICS = [
  { label: "Cut Volume", value: "12,500 CY", colorClass: "text-rose-400", valueClass: "text-white" },
  { label: "Fill Volume", value: "14,200 CY", colorClass: "text-blue-400", valueClass: "text-white" },
  { label: "Net Balance", value: "+1,700 CY (FILL)", colorClass: "text-amber-400", valueClass: "text-amber-300" },
  { label: "Perimeter Ties", value: "100% Verified", colorClass: "text-emerald-400", valueClass: "text-emerald-300" },
] as const;

export const SAMPLE_HEATMAP_IMAGE_URL =
  "https://lh3.googleusercontent.com/aida/AEtjO1WEgYBo-wlf_9OkWgT8wetxgMhQnF4rR1H5xdBRrDdVeQTxSH7G96ePxn3PIOm2J4Qm5fylrCv8jiita86esLModanvAGgxybJqX2c4heevS3X7WpFjfp4wbsBmUlFDxoKlzobYk6nOAOIHwrbVCjkmxCEl0LHXq2peLUvGrfs70qq8tfgFSRFjMXlKlw0ohPWKuyu8Fwq-DNbYUYTA_fHeloot2cyg_IHo1VEIw2Y3lTP7hDT3N2JvUtQ";

export const CUT_FILL_ROWS = [
  { zone: "STA 0+00 – 1+50", exist: "248.50'", prop: "245.00'", diff: "-3.50' CUT", type: "cut" },
  { zone: "STA 1+50 – 3+00", exist: "246.00'", prop: "248.00'", diff: "+2.00' FILL", type: "fill" },
  { zone: "Building Pad A", exist: "254.00'", prop: "248.50'", diff: "-5.50' CUT", type: "cut" },
  { zone: "Retaining Wall Heel", exist: "244.20'", prop: "241.00'", diff: "-3.20' CUT", type: "cut" },
  { zone: "Basin Forebay Sump", exist: "242.00'", prop: "238.50'", diff: "-3.50' CUT", type: "cut" },
  { zone: "Parking Stall Swale", exist: "247.10'", prop: "248.90'", diff: "+1.80' FILL", type: "fill" },
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
    title: "Speak With the Modeler",
    description: "You talk directly to the civil takeoff specialist calculating your site volumes.",
  },
] as const;

export const FOOTER_LINKS = [
  { label: "Civil 3D Methodology", href: "#services" },
  { label: "Flat Rate Pricing Table", href: "#pricing" },
  { label: "Sample Surface Heatmaps", href: "#samples" },
  { label: "Contractor Intake Portal", href: "#upload-desk" },
  { label: "24-Hour Rush Desk", href: CONTACT.phoneHref },
] as const;

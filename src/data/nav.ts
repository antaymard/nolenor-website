export interface NavLink {
  label: string;
  href: string;
}

// One list, used by both Nav.astro and Footer.astro, so the two can't
// drift — they had already drifted onto #how-it-works, an anchor the page
// stopped having when that section was unplugged.
//
// Every href here must match an id in src/pages/index.astro. Four is the
// ceiling: the nav bar also carries the logo, Login and the CTA, and a
// fifth link starts crowding them at 1024px.
export const primaryNavLinks: NavLink[] = [
  { label: "Features", href: "#features" },
  { label: "Nodes", href: "#nodes" },
  { label: "Who it's for", href: "#who-its-for" },
  { label: "FAQ", href: "#faq" },
];

export const footerProductLinks: NavLink[] = primaryNavLinks;

export const footerLegalLinks: NavLink[] = [
  { label: "Privacy", href: "/privacy" },
  { label: "Terms", href: "/terms" },
];

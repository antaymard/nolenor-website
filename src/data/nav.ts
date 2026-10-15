export interface NavLink {
  label: string;
  href: string;
}

// One list, used by both Nav.astro and Footer.astro, so the two can't
// drift — they had already drifted onto #how-it-works, an anchor the page
// stopped having when that section was unplugged.
//
// Every href here must match an id in src/pages/index.astro. Four is the
// ceiling: the nav bar also carries the logo, Help, Login and the CTA, and
// a fifth link starts crowding them at 1024px.
//
// Rooted at "/" so they still lead somewhere from /help and the legal
// pages; on the home page itself the browser treats them as plain in-page
// jumps.
export const primaryNavLinks: NavLink[] = [
  { label: "Features", href: "/#features" },
  { label: "Nodes", href: "/#nodes" },
  { label: "Who it's for", href: "/#who-its-for" },
  { label: "FAQ", href: "/#faq" },
];

export const helpLink: NavLink = { label: "Help", href: "/help" };

export const footerProductLinks: NavLink[] = [...primaryNavLinks, helpLink];

export const footerLegalLinks: NavLink[] = [
  { label: "Privacy", href: "/privacy" },
  { label: "Terms", href: "/terms" },
];

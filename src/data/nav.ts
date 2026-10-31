import type { Lang } from "@/i18n";
import { localizePath } from "@/i18n";

export interface NavLink {
  label: string;
  href: string;
}

// One list, used by both Nav.astro and Footer.astro, so the two can't
// drift — they had already drifted onto #how-it-works, an anchor the page
// stopped having when that section was unplugged.
//
// Every href here must match an id in src/views/Home.astro. Four is the
// ceiling: the nav bar also carries the logo, Help, Login and the CTA, and
// a fifth link starts crowding them at 1024px. French labels run longer,
// so keep them short too.
//
// Rooted at "/" so they still lead somewhere from /help and the legal
// pages; on the home page itself the browser treats them as plain in-page
// jumps. The hrefs are written once, in English paths, and localized below.

type Labels = Record<Lang, string>;
interface RawLink {
  label: Labels;
  href: string;
}

const primary: RawLink[] = [
  { label: { en: "Features", fr: "Fonctionnalités" }, href: "/#features" },
  { label: { en: "Nodes", fr: "Nœuds" }, href: "/#nodes" },
  { label: { en: "Who it's for", fr: "Pour qui" }, href: "/#who-its-for" },
  { label: { en: "FAQ", fr: "FAQ" }, href: "/#faq" },
];

const help: RawLink = { label: { en: "Help", fr: "Aide" }, href: "/help" };

const productExtra: RawLink[] = [
  { label: { en: "Use cases", fr: "Cas d’usage" }, href: "/use-cases" },
  help,
  { label: { en: "Developers", fr: "Développeurs" }, href: "/developers" },
];

const about: RawLink[] = [
  { label: { en: "Manifesto", fr: "Manifeste" }, href: "/manifesto" },
  { label: { en: "Principles", fr: "Principes" }, href: "/principles" },
];

const legal: RawLink[] = [
  { label: { en: "Privacy", fr: "Confidentialité" }, href: "/privacy" },
  { label: { en: "Terms", fr: "Conditions" }, href: "/terms" },
];

const resolve = (links: RawLink[], lang: Lang): NavLink[] =>
  links.map((link) => ({ label: link.label[lang], href: localizePath(link.href, lang) }));

export function getNav(lang: Lang) {
  const primaryNavLinks = resolve(primary, lang);
  const [helpLink] = resolve([help], lang);
  return {
    primaryNavLinks,
    helpLink,
    footerProductLinks: [...primaryNavLinks, ...resolve(productExtra, lang)],
    footerAboutLinks: resolve(about, lang),
    footerLegalLinks: resolve(legal, lang),
  };
}

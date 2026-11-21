import type { Lang } from "@/i18n";
import { localizePath } from "@/i18n";
import { GITHUB_REPO_URL } from "@/lib/constants";

export interface NavLink {
  label: string;
  href: string;
  external?: boolean;
}

// One list, used by both Nav.astro and Footer.astro, so the two can't
// drift. Hrefs are written once, as English root paths, and localized
// below. Four links in the bar is the ceiling: it also carries the logo,
// Login, the language switch and the CTA, and French labels run longer.

type Labels = Record<Lang, string>;
interface RawLink {
  label: Labels;
  href: string;
  external?: boolean;
}

const primary: RawLink[] = [
  { label: { en: "Product", fr: "Produit" }, href: "/product" },
  { label: { en: "Nolë", fr: "Nolë" }, href: "/nole" },
  { label: { en: "Use cases", fr: "Cas d’usage" }, href: "/use-cases" },
  { label: { en: "Pricing", fr: "Tarifs" }, href: "/pricing" },
];

const product: RawLink[] = [
  { label: { en: "Product tour", fr: "Le produit" }, href: "/product" },
  { label: { en: "Nolë, the agent", fr: "Nolë, l’agent" }, href: "/nole" },
  { label: { en: "Pricing", fr: "Tarifs" }, href: "/pricing" },
  { label: { en: "Developers", fr: "Développeurs" }, href: "/developers" },
  { label: { en: "Help", fr: "Aide" }, href: "/help" },
];

const useCases: RawLink[] = [
  { label: { en: "Founders", fr: "Fondateurs" }, href: "/use-cases/founders" },
  { label: { en: "Consultants", fr: "Consultants" }, href: "/use-cases/consultants" },
  { label: { en: "Research & synthesis", fr: "Recherche & synthèse" }, href: "/use-cases/research" },
  { label: { en: "Personal projects", fr: "Projets perso" }, href: "/use-cases/personal" },
];

const compare: RawLink[] = [
  { label: { en: "vs ChatGPT & Claude", fr: "vs ChatGPT & Claude" }, href: "/compare/chatgpt" },
  { label: { en: "vs Notion", fr: "vs Notion" }, href: "/compare/notion" },
  { label: { en: "vs Miro", fr: "vs Miro" }, href: "/compare/miro" },
  { label: { en: "vs Heptabase & Kosmik", fr: "vs Heptabase & Kosmik" }, href: "/compare/heptabase" },
];

const company: RawLink[] = [
  { label: { en: "Manifesto", fr: "Manifeste" }, href: "/manifesto" },
  { label: { en: "About", fr: "À propos" }, href: "/about" },
  { label: { en: "GitHub", fr: "GitHub" }, href: GITHUB_REPO_URL, external: true },
  { label: { en: "Privacy", fr: "Confidentialité" }, href: "/privacy" },
  { label: { en: "Terms", fr: "Conditions" }, href: "/terms" },
];

const resolve = (links: RawLink[], lang: Lang): NavLink[] =>
  links.map((link) => ({
    label: link.label[lang],
    href: link.external ? link.href : localizePath(link.href, lang),
    external: link.external,
  }));

export function getNav(lang: Lang) {
  return {
    primaryNavLinks: resolve(primary, lang),
    footerProductLinks: resolve(product, lang),
    footerUseCaseLinks: resolve(useCases, lang),
    footerCompareLinks: resolve(compare, lang),
    footerCompanyLinks: resolve(company, lang),
  };
}

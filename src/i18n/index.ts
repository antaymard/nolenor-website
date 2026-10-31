// The site's two languages. English lives at the root ("/help"), French
// under a prefix ("/fr/help"); astro.config.mjs declares the same pair.
//
// How translation works across the site:
//   - Components read the language with `getLang(Astro.currentLocale)`.
//   - Short interface strings shared by several components (nav, footer,
//     forms) live in `ui` below.
//   - Copy that belongs to one component or one data file sits next to it,
//     keyed by language: `const copy = { en: {...}, fr: {...} }[lang]`, or a
//     data file exporting `Record<Lang, T>`. A missing French key is a type
//     error, so the two versions can't silently drift apart.
//   - Internal links go through `localizePath()`, so a French reader stays
//     in French when they follow one.

export const languages = {
  en: "English",
  fr: "Français",
} as const;

export type Lang = keyof typeof languages;

export const defaultLang: Lang = "en";

export const langs = Object.keys(languages) as Lang[];

// BCP 47 tags for <html lang> and og:locale.
export const htmlLang: Record<Lang, string> = { en: "en", fr: "fr" };
export const ogLocale: Record<Lang, string> = { en: "en_US", fr: "fr_FR" };

export function getLang(locale: string | undefined): Lang {
  return locale === "fr" ? "fr" : defaultLang;
}

// Strips the language prefix: "/fr/help" -> "/help", "/fr" -> "/".
export function stripLang(pathname: string): string {
  for (const lang of langs) {
    if (lang === defaultLang) continue;
    if (pathname === `/${lang}` || pathname === `/${lang}/`) return "/";
    if (pathname.startsWith(`/${lang}/`)) return pathname.slice(lang.length + 1);
  }
  return pathname;
}

// Turns a root-relative link ("/help", "/#faq", "/") into the same link in
// `lang`. External URLs, mailto:, and pure in-page anchors pass through.
export function localizePath(href: string, lang: Lang): string {
  if (!href.startsWith("/") || href.startsWith("//")) return href;
  if (lang === defaultLang) return href;
  if (href === "/") return `/${lang}/`;
  if (href.startsWith("/#")) return `/${lang}/${href.slice(1)}`;
  return `/${lang}${href}`;
}

// The same page in another language, for the switcher and hreflang links.
export function translatePath(pathname: string, lang: Lang): string {
  return localizePath(stripLang(pathname), lang);
}

// Interface strings shared across components.
const uiEn = {
  "nav.sections": "Page sections",
  "nav.login": "Login",
  "nav.cta": "Try it for free",
  "nav.switchTo": "Lire en français",
  "logo.home": "Nolënor home",
  "footer.product": "Product",
  "footer.about": "About",
  "footer.legal": "Legal",
  "footer.language": "Language",
  "footer.updates.title": "Get product updates",
  "footer.updates.body": "Occasional news about new features. No spam.",
  "footer.updates.email": "Email address",
  "footer.updates.placeholder": "you@company.com",
  "footer.updates.submit": "Subscribe",
  "footer.updates.sending": "Sending…",
  "footer.updates.already": "You're already on the list.",
  "footer.updates.success": "You're in! Thanks for subscribing.",
  "footer.updates.error": "Something went wrong. Please try again later.",
  "footer.rights": "All rights reserved.",
  "footer.github": "Nolënor on GitHub",
};

export type UiKey = keyof typeof uiEn;

const uiFr: Record<UiKey, string> = {
  "nav.sections": "Sections de la page",
  "nav.login": "Connexion",
  "nav.cta": "Essayer gratuitement",
  "nav.switchTo": "Read in English",
  "logo.home": "Accueil Nolënor",
  "footer.product": "Produit",
  "footer.about": "À propos",
  "footer.legal": "Juridique",
  "footer.language": "Langue",
  "footer.updates.title": "Suivre les nouveautés",
  "footer.updates.body": "De temps en temps, les nouveautés du produit. Jamais de spam.",
  "footer.updates.email": "Adresse e-mail",
  "footer.updates.placeholder": "vous@entreprise.com",
  "footer.updates.submit": "S’abonner",
  "footer.updates.sending": "Envoi…",
  "footer.updates.already": "Cette adresse est déjà inscrite.",
  "footer.updates.success": "C’est noté, merci !",
  "footer.updates.error": "Quelque chose a coincé. Réessayez un peu plus tard.",
  "footer.rights": "Tous droits réservés.",
  "footer.github": "Nolënor sur GitHub",
};

export const ui: Record<Lang, Record<UiKey, string>> = { en: uiEn, fr: uiFr };

export function useTranslations(lang: Lang) {
  return (key: UiKey): string => ui[lang][key];
}

import { localizePath, type Lang } from "@/i18n";

// A deliberately tiny inline formatter for the site's copy: **bold**,
// *italic*, `code` and [links](/path). Copy is written by us, but it is
// still escaped first so a stray "<" can never become markup. Internal
// links ("/pricing") are localized, so French copy links to French pages.
const escape = (s: string) =>
  s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

// French puts a non-breaking space inside « » and before : ; ! ?, so a
// quote mark or a colon never starts a line on its own.
export function typo(text: string, lang: Lang): string {
  if (lang !== "fr") return text;
  return text
    .replace(/« /g, "«\u00a0")
    .replace(/ »/g, "\u00a0»")
    .replace(/ ([:;!?])/g, "\u00a0$1");
}

export function md(text: string, lang: Lang): string {
  return escape(typo(text, lang))
    .replace(/`([^`]+)`/g, "<code>$1</code>")
    .replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>")
    .replace(/\*([^*]+)\*/g, "<em>$1</em>")
    .replace(/\[([^\]]+)\]\(([^)]+)\)/g, (_m, label: string, href: string) => {
      const external = /^(https?:|mailto:)/.test(href);
      const target = external ? href : localizePath(href, lang);
      const attrs = external ? ' target="_blank" rel="noopener noreferrer"' : "";
      return `<a class="text-link" href="${target}"${attrs}>${label}</a>`;
    });
}

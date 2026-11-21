import type { Lang } from "@/i18n";
import type { Card } from "@/components/site/types";

// TO VALIDATE with Antoine before launch: bio wording, a photo, and a
// contact address (CONTACT_EMAIL in src/lib/constants.ts).

export interface AboutCopy {
  meta: { title: string; description: string };
  hero: { eyebrow: string; title: string; lede: string };
  why: { title: string; paragraphs: string[] };
  how: { title: string; cards: Card[] };
  facts: { title: string; items: string[] };
  contact: { title: string; withEmail: string; withoutEmail: string };
  close: { title: string; secondary: string };
}

const fr: AboutCopy = {
  meta: {
    title: "À propos · Nolënor",
    description: "Nolënor est construit par une personne, à découvert, depuis la Bretagne. Code ouvert, produit utilisé tous les jours par celui qui le fait.",
  },
  hero: {
    eyebrow: "À propos",
    title: "Nolënor est construit par une personne, à découvert.",
    lede:
      "Je m’appelle Antoine Aymard. Je construis Nolënor depuis la Bretagne, seul pour l’instant, et je m’en sers tous les jours : la veille concurrentielle, les specs, le plan de lancement et ce site ont été pensés sur des canvas Nolënor.",
  },
  why: {
    title: "Pourquoi",
    paragraphs: [
      "Je suis docteur en pharmacie, diplômé de l’ESSEC, et je développe depuis plus de dix ans. J’ai été cofondateur, designer UX indépendant, puis responsable produit dans la medtech.",
      "Partout, le même constat : les outils nous font ranger, taper et relire, et l’IA, telle qu’on nous la vend, nous pousse à déléguer ce qui fait notre métier. J’ai voulu l’outil inverse.",
    ],
  },
  how: {
    title: "Comment",
    cards: [
      { title: "Le code est ouvert", text: "Licence AGPL-3.0. Vous pouvez lire chaque ligne, et l’héberger vous-même.", href: "https://github.com/antaymard/nolenor", linkLabel: "GitHub" },
      { title: "Le produit avance à découvert", text: "Chaque modification du code est publique sur GitHub. Ce qui n’existe pas encore est écrit noir sur blanc.", href: "/product#not-yet", linkLabel: "Pas encore" },
      { title: "Je réponds moi-même", text: "À chaque message, à chaque retour. C’est l’avantage d’une petite équipe : la personne qui vous lit est celle qui code." },
    ],
  },
  facts: {
    title: "Les chiffres, honnêtement",
    items: [
      "Une personne.",
      "Une première version stable (1.0) en novembre 2026.",
      "Aucun investisseur pour l’instant.",
    ],
  },
  contact: {
    title: "Me joindre",
    withEmail: "Écrivez-moi à [EMAIL]. Je lis tout.",
    withoutEmail: "Le plus simple aujourd’hui : ouvrir une discussion sur [GitHub](https://github.com/antaymard/nolenor).",
  },
  close: { title: "Le plus simple, c’est d’essayer.", secondary: "Lire le manifeste" },
};

const en: AboutCopy = {
  meta: {
    title: "About · Nolënor",
    description: "Nolënor is built by one person, in the open, from Brittany. Open source, used every day by the person who makes it.",
  },
  hero: {
    eyebrow: "About",
    title: "Nolënor is built by one person, in the open.",
    lede:
      "I’m Antoine Aymard. I build Nolënor from Brittany, France, on my own for now, and I use it every day: the competitive research, the specs, the launch plan and this website were thought through on Nolënor canvases.",
  },
  why: {
    title: "Why",
    paragraphs: [
      "I hold a doctorate in pharmacy and a degree from ESSEC business school, and I’ve been writing software for more than ten years. I’ve been a co-founder, a freelance UX designer, then head of product in medtech.",
      "Everywhere, the same pattern: our tools make us file, type and proofread, and AI, the way it’s sold to us, pushes us to delegate the very thing that makes our craft. I wanted the opposite tool.",
    ],
  },
  how: {
    title: "How",
    cards: [
      { title: "The code is open", text: "AGPL-3.0 licence. You can read every line, and host it yourself.", href: "https://github.com/antaymard/nolenor", linkLabel: "GitHub" },
      { title: "The product moves in the open", text: "Every change to the code is public on GitHub. What doesn’t exist yet is written down plainly.", href: "/product#not-yet", linkLabel: "Not yet" },
      { title: "I answer myself", text: "Every message, every piece of feedback. That’s the upside of a small team: the person reading you is the one writing the code." },
    ],
  },
  facts: {
    title: "The numbers, honestly",
    items: ["One person.", "A first stable version (1.0) in November 2026.", "No investors so far."],
  },
  contact: {
    title: "Get in touch",
    withEmail: "Write to me at [EMAIL]. I read everything.",
    withoutEmail: "The simplest way today: open a discussion on [GitHub](https://github.com/antaymard/nolenor).",
  },
  close: { title: "The easiest way is to try it.", secondary: "Read the manifesto" },
};

export const about: Record<Lang, AboutCopy> = { en, fr };

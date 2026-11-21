import type { Lang } from "@/i18n";
import type { Card, FaqItem } from "@/components/site/types";

// The five commitments are a PROPOSAL written for the site rewrite: they
// commit Nolënor publicly. Antoine must confirm, edit or remove them
// before this page goes live (see the "Tarifs" doc on the GTM canvas).

export interface PricingCopy {
  meta: { title: string; description: string };
  hero: { eyebrow: string; title: string; lede: string };
  plan: { name: string; price: string; per: string; intro: string; items: string[]; fineprint: string; cta: string };
  promises: { eyebrow: string; title: string; items: Card[] };
  thinking: { title: string; paragraphs: string[] };
  faq: { title: string; items: FaqItem[] };
  close: { title: string; text: string };
}

const fr: PricingCopy = {
  meta: {
    title: "Tarifs · Nolënor",
    description: "Nolënor est gratuit aujourd’hui, IA comprise, sans carte bancaire. Et voici nos engagements pour la suite.",
  },
  hero: {
    eyebrow: "Tarifs",
    title: "Gratuit aujourd’hui. Lisible demain.",
    lede:
      "Nolënor est gratuit pendant son lancement, IA comprise, sans carte bancaire. Des formules payantes viendront. Voici dès maintenant ce que nous nous engageons à respecter.",
  },
  plan: {
    name: "Aujourd’hui",
    price: "0 €",
    per: "IA comprise",
    intro: "Tout le produit, sans limite de canvas :",
    items: [
      "Le canvas et ses 17 types de nœuds",
      "Nolë en mode Auto, recherche web, apps, génération d’images et de vidéos",
      "Recherche dans les PDF, les images et les transcriptions",
      "Espaces de travail, partage, publication web",
      "Export Markdown et JSON, serveur MCP",
    ],
    fineprint:
      "Des limites de débit protègent le service (par exemple 30 messages par minute à Nolë). Vous ne les croiserez pas en travaillant normalement.",
    cta: "Commencer gratuitement",
  },
  promises: {
    eyebrow: "Nos engagements",
    title: "Ce qui ne changera pas quand le prix arrivera.",
    items: [
      { eyebrow: "1", title: "Une formule gratuite restera.", text: "On pourra y vivre, pas seulement y goûter." },
      { eyebrow: "2", title: "Prévenu 30 jours avant.", text: "Au moins 30 jours avant tout changement qui vous concerne." },
      { eyebrow: "3", title: "Rien de rétroactif.", text: "Ce que vous avez construit reste accessible, quoi qu’il arrive à votre formule." },
      { eyebrow: "4", title: "L’export reste gratuit, toujours.", text: "Tout canvas sort en Markdown et JSON." },
      { eyebrow: "5", title: "Le coût de l’IA, lisible avant.", text: "Vous saurez ce que coûte une tâche avant de la lancer. Pas de crédits opaques qui fondent sans qu’on sache pourquoi." },
    ],
  },
  thinking: {
    title: "Un prix d’atelier, pas d’usine.",
    paragraphs: [
      "Nolënor n’est pas fait pour faire tourner des agents toute la nuit, et son prix ne sera pas fait pour ça non plus.",
      "Aujourd’hui, le coût de chaque message à Nolë est mesuré, et vous le voyez dans vos réglages. C’est ce qui nous servira à fixer un prix juste, avec vous. Ce que nous envisageons : une formule gratuite durable, une formule pour un usage professionnel, puis une formule équipe. Rien n’est arrêté.",
    ],
  },
  faq: {
    title: "Questions",
    items: [
      { q: "Faut-il une carte bancaire ?", a: "Non." },
      { q: "Y a-t-il des limites ?", a: "Des limites de débit (messages, générations par minute) et de taille de fichier : 100 Mo pour un PDF ou un document Office, 500 Mo pour une vidéo, 200 Mo pour un audio." },
      { q: "Puis-je utiliser ma propre clé d’API ?", a: "Pas sur le service hébergé aujourd’hui. Si vous hébergez Nolënor vous-même, vous utilisez votre propre clé OpenRouter." },
      { q: "Et pour une équipe ?", a: "Les espaces de travail et le partage existent déjà, gratuitement. L’offre équipe (SSO, facturation au siège) n’existe pas encore." },
      { q: "Puis-je héberger Nolënor moi-même ?", a: "Oui. Le code est sous licence AGPL-3.0, avec une documentation d’installation. [Voir sur GitHub](https://github.com/antaymard/nolenor)" },
    ],
  },
  close: { title: "Rien à payer pour essayer. Rien à perdre pour partir.", text: "Gratuit aujourd’hui, IA comprise. Sans carte bancaire." },
};

const en: PricingCopy = {
  meta: {
    title: "Pricing · Nolënor",
    description: "Nolënor is free today, AI included, no credit card. And here are our commitments for what comes next.",
  },
  hero: {
    eyebrow: "Pricing",
    title: "Free today. Readable tomorrow.",
    lede:
      "Nolënor is free while it launches, AI included, no credit card. Paid plans will come. Here, starting now, is what we commit to.",
  },
  plan: {
    name: "Today",
    price: "€0",
    per: "AI included",
    intro: "The whole product, with no limit on canvases:",
    items: [
      "The canvas and its 17 node types",
      "Nolë in Auto mode, web search, apps, image and video generation",
      "Search across PDFs, images and transcripts",
      "Workspaces, sharing, web publishing",
      "Markdown and JSON export, MCP server",
    ],
    fineprint:
      "Rate limits protect the service (for example 30 messages a minute to Nolë). You won’t run into them in normal work.",
    cta: "Start for free",
  },
  promises: {
    eyebrow: "Our commitments",
    title: "What won’t change when pricing arrives.",
    items: [
      { eyebrow: "1", title: "A free plan will stay.", text: "One you can actually live in, not just taste." },
      { eyebrow: "2", title: "30 days’ notice.", text: "At least 30 days before any change that affects you." },
      { eyebrow: "3", title: "Nothing retroactive.", text: "What you’ve built stays accessible, whatever happens to your plan." },
      { eyebrow: "4", title: "Export stays free, always.", text: "Every canvas comes out as Markdown and JSON." },
      { eyebrow: "5", title: "AI cost, readable upfront.", text: "You’ll know what a task costs before you run it. No opaque credits melting away without explanation." },
    ],
  },
  thinking: {
    title: "A workshop price, not a factory price.",
    paragraphs: [
      "Nolënor isn’t built to run agents all night, and its price won’t be built for that either.",
      "Today, the cost of every message to Nolë is measured, and you can see it in your settings. That’s what we’ll use to set a fair price, with you. What we have in mind: a lasting free plan, a plan for professional use, then a team plan. Nothing is set yet.",
    ],
  },
  faq: {
    title: "Questions",
    items: [
      { q: "Do I need a credit card?", a: "No." },
      { q: "Are there limits?", a: "Rate limits (messages and generations per minute) and file sizes: 100 MB for a PDF or Office document, 500 MB for a video, 200 MB for audio." },
      { q: "Can I use my own API key?", a: "Not on the hosted service today. If you host Nolënor yourself, you use your own OpenRouter key." },
      { q: "What about teams?", a: "Workspaces and sharing already exist, for free. A team plan (SSO, per-seat billing) doesn’t exist yet." },
      { q: "Can I host Nolënor myself?", a: "Yes. The code is AGPL-3.0, with installation docs. [See it on GitHub](https://github.com/antaymard/nolenor)" },
    ],
  },
  close: { title: "Nothing to pay to try. Nothing to lose to leave.", text: "Free today, AI included. No credit card." },
};

export const pricing: Record<Lang, PricingCopy> = { en, fr };

import type { Lang } from "@/i18n";
import type { Card, Prompt } from "@/components/site/types";

export interface NoleCopy {
  meta: { title: string; description: string };
  hero: { eyebrow: string; title: string; lede: string; note: string };
  how: { eyebrow: string; title: string; steps: Card[] };
  can: { title: string; intro: string; items: string[] };
  cannot: { title: string; intro: string; items: string[] };
  prompts: { title: string; intro: string; items: Prompt[] };
  models: { eyebrow: string; title: string; text: string };
  why: { title: string; text: string; link: string };
  close: { title: string; text: string };
}

const fr: NoleCopy = {
  meta: {
    title: "Nolë, l’agent qui travaille à découvert · Nolënor",
    description:
      "Nolë lit ce que vous lui montrez, agit sur votre canvas, signe chaque modification. Ce qu’il fait, comment, et ce qu’il ne fait pas.",
  },
  hero: {
    eyebrow: "Nolë, l’agent",
    title: "Un agent que vous voyez travailler.",
    lede:
      "Nolë ne vous rend pas un pavé à relire. Il travaille sur votre canvas, sur les objets que vous lui montrez, et chaque chose qu’il touche porte sa signature. C’est un apprenti doué : rapide, endurant, et qui gagne à être guidé.",
    note: "Gratuit aujourd’hui, IA comprise · Sans carte bancaire",
  },
  how: {
    eyebrow: "Comment Nolë travaille",
    title: "Quatre temps, tous visibles.",
    steps: [
      { eyebrow: "1", title: "Vous montrez.", text: "Alt+clic sur les nœuds qui comptent, ou @mention dans votre message. Alt+clic dans le vide pour dire « pose le résultat ici ». Nolë sait aussi sur quelle partie du canvas vous regardez." },
      { eyebrow: "2", title: "Nolë lit et cherche.", text: "Il lit les nœuds montrés, fouille le reste du canvas et vos autres canvas si c’est utile, ouvre des pages web." },
      { eyebrow: "3", title: "Nolë agit sur le canvas.", text: "Il crée une table, la remplit, réécrit un paragraphe sans toucher aux autres, relie deux sources, construit une app. Vous voyez les nœuds changer pendant qu’il travaille." },
      { eyebrow: "4", title: "Vous vérifiez.", text: "À la fin : la liste de ce qu’il a lu et modifié, chaque nœud à un clic. Dans l’historique, ses versions sont séparées des vôtres. Une version se restaure en un clic." },
    ],
  },
  can: {
    title: "Ce que Nolë sait faire.",
    intro: "Tout se passe sur le canvas, avec des objets que vous pouvez reprendre à la main.",
    items: [
      "**Écrire sur le canvas** : créer, relier, regrouper, déplacer des nœuds ; éditer un document bloc par bloc ; remplir et restructurer des tables et des databases ; créer des nœuds sur mesure.",
      "**Construire des apps** branchées sur vos données : simulateurs, graphiques, tableaux de bord.",
      "**Chercher sur le web** et lire des pages, trouver des images et des lieux.",
      "**Analyser des données** sur son propre ordinateur : une machine Linux par canvas, où il exécute du Python sur vos fichiers.",
      "**Générer des images et des vidéos**, à partir de vos images de référence, au prix affiché.",
      "**Travailler en arrière-plan** : confier une partie du travail à un sous-agent, continuer pendant que vous passez à autre chose. Le résultat arrive dans votre Inbox, à revoir.",
      "**Se souvenir de vous** : une mémoire courte que vous pouvez lire et corriger dans les réglages, et des *skills*, vos façons de faire écrites une fois.",
      "**Vous écouter** : dictez votre demande au lieu de la taper.",
    ],
  },
  cannot: {
    title: "Ce que Nolë ne fait pas.",
    intro: "Et c’est voulu, ou pas encore là.",
    items: [
      "**Il ne travaille pas seul la nuit.** Nolë ne se programme pas encore à heure fixe : il avance quand vous le lui demandez.",
      "**Il n’a pas plus de droits que vous.** Ils sont vérifiés à chaque modification. Sur un canvas que vous pouvez seulement voir, il répond sans rien changer.",
      "**Il ne regarde pas vos vidéos** : il lit leur transcription.",
      "**Il n’agit pas dans vos autres outils** (mail, agenda, CRM) aujourd’hui.",
      "**Il ne fait pas le tri à votre place.** Il peut proposer trente pistes ; c’est vous qui savez lesquelles couper.",
    ],
  },
  prompts: {
    title: "Des demandes réelles, à copier.",
    intro: "Le geste d’abord, la phrase ensuite. Pas de prompt magique.",
    items: [
      { context: "Alt+clic sur 6 captures", text: "Fais une table avec l’offre, le prix mensuel et la limite du plan gratuit de chacun." },
      { context: "Alt+clic sur un PDF de 140 pages", text: "Résume les chapitres 3 et 4 dans un document à côté, avec les chiffres clés dans une table." },
      { context: "Alt+clic sur une transcription d’entretien", text: "Ajoute à la table Retours chaque problème cité, avec la minute." },
      { context: "Alt+clic sur une table de scénarios", text: "Construis un simulateur avec des curseurs pour le loyer, le taux et la durée." },
      { context: "Sans rien sélectionner", text: "Regroupe tout ce que j’ai posé cette semaine sur les prix dans une frame, et dis-moi ce qui manque." },
    ],
  },
  models: {
    eyebrow: "Les modèles et le coût",
    title: "Le bon modèle pour chaque demande. Le coût sous les yeux.",
    text:
      "En mode **Auto**, un petit modèle évalue chaque demande et choisit le modèle suffisant : Claude Haiku pour une question simple, Sonnet pour le travail courant, Opus pour le plus difficile. Vous pouvez aussi choisir Mistral Large. Chaque message affiche son coût, et une page récapitule votre usage par jour et par modèle. Aujourd’hui, c’est inclus.",
  },
  why: {
    title: "Pourquoi un apprenti, et pas un remplaçant.",
    text:
      "Un agent qui fait à votre place vous fait décrocher : vous ne comprenez plus ce qui a été fait, donc vous ne pouvez plus guider, donc vous déléguez encore plus. Nolë a les mains ; vous gardez le coup d’œil.",
    link: "Lire le manifeste",
  },
  close: { title: "Montrez-lui votre prochain projet.", text: "Gratuit aujourd’hui, IA comprise. Sans carte bancaire." },
};

const en: NoleCopy = {
  meta: {
    title: "Nolë, the agent that works in plain sight · Nolënor",
    description:
      "Nolë reads what you show it, acts on your canvas, and signs every change. What it does, how, and what it doesn’t do.",
  },
  hero: {
    eyebrow: "Nolë, the agent",
    title: "An agent you can watch at work.",
    lede:
      "Nolë doesn’t hand you a wall of text to review. It works on your canvas, on the objects you show it, and everything it touches carries its signature. Think of a gifted apprentice: fast, tireless, and better for being guided.",
    note: "Free today, AI included · No credit card",
  },
  how: {
    eyebrow: "How Nolë works",
    title: "Four steps, all visible.",
    steps: [
      { eyebrow: "1", title: "You show.", text: "Alt+click the nodes that matter, or @mention them in your message. Alt+click an empty spot to say “put the result here”. Nolë also knows which part of the canvas you’re looking at." },
      { eyebrow: "2", title: "Nolë reads and searches.", text: "It reads the nodes you showed, looks through the rest of the canvas and your other canvases when useful, and opens web pages." },
      { eyebrow: "3", title: "Nolë acts on the canvas.", text: "It creates a table, fills it, rewrites one paragraph without touching the others, links two sources, builds an app. You watch the nodes change as it works." },
      { eyebrow: "4", title: "You check.", text: "At the end: the list of what it read and changed, each node one click away. In the history, its versions are kept apart from yours. Any version comes back in one click." },
    ],
  },
  can: {
    title: "What Nolë can do.",
    intro: "It all happens on the canvas, with objects you can take over by hand.",
    items: [
      "**Write on the canvas**: create, link, group and move nodes; edit a document block by block; fill and restructure tables and databases; create custom nodes.",
      "**Build apps** wired to your data: simulators, charts, dashboards.",
      "**Search the web** and read pages, find images and places.",
      "**Analyse data** on its own computer: a Linux machine per canvas, where it runs Python on your files.",
      "**Generate images and videos**, from your reference images, at the price shown.",
      "**Work in the background**: hand part of the work to a sub-agent and keep going while you move on. The result lands in your Inbox, to review.",
      "**Remember you**: a short memory you can read and correct in settings, and *skills*, your ways of doing things written down once.",
      "**Listen**: dictate your request instead of typing it.",
    ],
  },
  cannot: {
    title: "What Nolë doesn’t do.",
    intro: "On purpose, or not yet.",
    items: [
      "**It doesn’t work alone overnight.** Nolë can’t be scheduled yet: it moves forward when you ask.",
      "**It has no more permissions than you.** They’re checked on every change. On a canvas you can only view, it answers without changing anything.",
      "**It doesn’t watch your videos**: it reads their transcript.",
      "**It doesn’t act in your other tools** (email, calendar, CRM) today.",
      "**It doesn’t decide what to cut.** It can suggest thirty leads; you’re the one who knows which to drop.",
    ],
  },
  prompts: {
    title: "Real requests, ready to copy.",
    intro: "The gesture first, then the sentence. No magic prompt.",
    items: [
      { context: "Alt+click on 6 screenshots", text: "Make a table with each one’s plan, monthly price and free tier limit." },
      { context: "Alt+click on a 140-page PDF", text: "Summarise chapters 3 and 4 in a document next to it, with the key figures in a table." },
      { context: "Alt+click on an interview transcript", text: "Add every problem mentioned to the Feedback table, with the minute." },
      { context: "Alt+click on a table of scenarios", text: "Build a simulator with sliders for rent, rate and duration." },
      { context: "With nothing selected", text: "Group everything I dropped this week about pricing into a frame, and tell me what’s missing." },
    ],
  },
  models: {
    eyebrow: "Models and cost",
    title: "The right model for each request. The cost in plain sight.",
    text:
      "In **Auto** mode, a small model assesses each request and picks the one that’s enough: Claude Haiku for a simple question, Sonnet for everyday work, Opus for the hardest. You can also pick Mistral Large. Every message shows its cost, and a page sums up your usage by day and by model. Today, it’s included.",
  },
  why: {
    title: "Why an apprentice, not a replacement.",
    text:
      "An agent that does the work for you makes you lose the thread: you no longer understand what was done, so you can’t guide it, so you delegate even more. Nolë has the hands; you keep the eye.",
    link: "Read the manifesto",
  },
  close: { title: "Show it your next project.", text: "Free today, AI included. No credit card." },
};

export const nole: Record<Lang, NoleCopy> = { en, fr };

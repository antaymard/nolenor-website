/*
 * Use cases, written from the Nolënor canvas:
 * - the flagship scenario from "Wedge, positionnement et persona" (a
 *   consultant exploring a market for a new client);
 * - the vignettes from "Procédures — Use cases concrets" (the medical
 *   science liaison, the packaging toxicologist) and "Use case :
 *   prototyping" (specs and prototypes on the canvas).
 *
 * Deliberately left out: the automated job hunt from the same note (an
 * agent that applies on your behalf is the factory, not the workshop),
 * students and personal knowledge management (the persona notes advise
 * against that audience), and every "3 hours down to 20 minutes" figure —
 * time saved is the productivity pitch the brand tone avoids, and none of
 * those numbers were measured.
 *
 * These are illustrative scenarios, not testimonials, and the page says
 * so. Real people's names from the notes stay off the site. Each step only
 * uses what the product does today: web search and page reading, PDF
 * reading, creating and connecting nodes, tables, documents, App nodes.
 * Nothing claims a file export the product doesn't make.
 *
 * Every step splits the work three ways — what you do, what Nolë does,
 * what you check — because that split is the argument.
 */

import type { Lang } from "@/i18n";

export interface FlagshipStep {
  you: string;
  nole: string;
  check?: string;
}

export interface Flagship {
  craft: string;
  title: string;
  brief: string;
  steps: FlagshipStep[];
  outcome: string;
}

export interface Vignette {
  craft: string;
  icon: string;
  brief: string;
  steps: { nole: string; check: string }[];
  keeps: string;
}

export const flagship: Record<Lang, Flagship> = {
  en: {
    craft: "Independent consultant",
    title: "Getting to grips with a market in one sitting",
    brief:
      "A new client in fintech. Before the first workshop, you need to understand the Buy Now, Pay Later landscape in Europe: who the players are, how they make money, what regulation is coming.",
    steps: [
      {
        you: "You open a canvas and say it in one line: “I need to understand the BNPL landscape in Europe.”",
        nole: "Nolë searches the web and sets down a node for each of the main players, with links to its sources.",
        check: "You glance at the list and drop the one that isn't relevant.",
      },
      {
        you: "Meanwhile you lay out your own frame: Regulation, Business models, Risks. Three nodes, still empty.",
        nole: "Nothing. Those are your nodes and the shape of your thinking.",
      },
      {
        you: "One player stands out. You drop their latest annual report on the canvas and Alt-click it.",
        nole: "Nolë reads the PDF and fills the player's node with the figures that matter.",
        check: "You open the report and check the numbers yourself.",
      },
      {
        you: "You link players to your themes as patterns appear. Two of them share a model; one is exposed to a coming rule.",
        nole: "Asked to, Nolë compares the business models across the nodes you've linked and writes it up in a table.",
        check: "You cut the columns you don't need. The table stays editable.",
      },
    ],
    outcome:
      "By the end, the canvas is the map of the market: your structure, the agent's research hung on it, every figure one click from its source. It's the basis of your deliverable, and you can explain every part of it, because you built it.",
  },
  fr: {
    craft: "Consultant indépendant",
    title: "Monter en compétence sur un marché, d’une traite",
    brief:
      "Nouvelle mission, pour un client de la fintech. Avant l’atelier de cadrage, il vous faut y voir clair sur le paiement fractionné (BNPL) en Europe : qui sont les acteurs, comment ils se rémunèrent, quelle réglementation se prépare.",
    steps: [
      {
        you: "Vous ouvrez un canevas et posez le sujet en une ligne : « J’ai besoin de comprendre le BNPL en Europe. »",
        nole: "Nolë fait ses recherches sur le web et pose un nœud par acteur majeur, sources en lien.",
        check: "Vous parcourez la liste et écartez celui qui n’a rien à faire là.",
      },
      {
        you: "En parallèle, vous posez votre propre grille de lecture : Réglementation, Modèles économiques, Risques. Trois nœuds, vides pour l’instant.",
        nole: "Rien. Ces nœuds sont à vous : ils dessinent votre raisonnement.",
      },
      {
        you: "Un acteur sort du lot. Vous glissez son dernier rapport annuel sur le canevas et faites Alt-clic dessus.",
        nole: "Nolë lit le PDF et remplit le nœud de l’acteur avec les chiffres qui comptent.",
        check: "Vous ouvrez le rapport et contrôlez les chiffres vous-même.",
      },
      {
        you: "Des recoupements apparaissent, et vous reliez les acteurs à vos thèmes au fur et à mesure. Deux d’entre eux ont le même modèle ; un autre est exposé à une règle en préparation.",
        nole: "Si vous le lui demandez, Nolë compare les modèles économiques des nœuds que vous avez reliés et met le tout dans un tableau.",
        check: "Vous supprimez les colonnes en trop. Le tableau reste modifiable.",
      },
    ],
    outcome:
      "En fin de séance, le canevas est devenu la cartographie du marché : votre grille, les recherches de l’agent accrochées dessus, chaque chiffre à un clic de sa source. Votre livrable part de là, et vous pouvez en justifier chaque élément, puisque c’est vous qui l’avez construit.",
  },
};

// Icons are shared by both languages, in vignette order.
const vignetteIcons = ["lucide:flask-conical", "lucide:shield-check", "lucide:pen-tool"] as const;

type VignetteCopy = Omit<Vignette, "icon">;

const vignettesEn: VignetteCopy[] = [
  {
    craft: "Medical science liaison",
    brief: "Turning a new clinical study into a presentation for doctors.",
    steps: [
      {
        nole: "Reads the study PDF and pulls out the key figures and tables into a structured summary.",
        check: "You choose which figures make the cut.",
      },
      {
        nole: "Searches for related studies and current guidelines, and sets them down as context.",
        check: "You add the sources you trust.",
      },
      {
        nole: "Drafts the deck slide by slide in a document: titles, points, figures.",
        check: "You rewrite the wording in your own voice.",
      },
    ],
    keeps: "Next time a similar study comes out, the canvas is already there to start from.",
  },
  {
    craft: "Packaging toxicologist",
    brief: "Assessing whether a food packaging is safe, substance by substance.",
    steps: [
      {
        nole: "Lists the materials, additives and treatments from the composition you hand it.",
        check: "You correct and complete the list.",
      },
      {
        nole: "Looks each substance up on official sources and builds a table: substance, regulatory status, source link.",
        check: "You open the sources and verify.",
      },
      {
        nole: "Drafts the report in a document, in the sections your assessment requires.",
        check: "You edit and sign off the conclusions.",
      },
    ],
    keeps: "Every status in the report points back to the source it came from.",
  },
  {
    craft: "Product designer or founder",
    brief: "Going from a look at the competition to a prototype you can click.",
    steps: [
      {
        nole: "Gathers the competing products into a table you can sort and annotate.",
        check: "You mark what's worth keeping and what isn't.",
      },
      {
        nole: "Writes up the spec with you in a document, from the decisions on the canvas.",
        check: "You decide the scope.",
      },
      {
        nole: "Builds a working prototype as an App node, connected to the spec it came from.",
        check: "You try it and point at what's wrong.",
      },
    ],
    keeps: "Research, spec and prototype sit side by side, linked: anyone can see why it was built that way.",
  },
];

const vignettesFr: VignetteCopy[] = [
  {
    craft: "MSL en laboratoire pharmaceutique",
    brief: "Faire d’une étude clinique qui vient de paraître un support de présentation pour des médecins.",
    steps: [
      {
        nole: "Lit le PDF de l’étude et reprend les résultats et les tableaux clés dans une synthèse structurée.",
        check: "Vous choisissez les données à retenir.",
      },
      {
        nole: "Cherche les études proches et les recommandations en vigueur, et les pose à côté pour le contexte.",
        check: "Vous ajoutez vos références de confiance.",
      },
      {
        nole: "Rédige le support diapo par diapo dans un document : titres, messages clés, chiffres.",
        check: "Vous réécrivez le texte avec vos mots.",
      },
    ],
    keeps: "À la prochaine étude du même type, vous ne partez pas de zéro : le canevas est déjà là.",
  },
  {
    craft: "Toxicologue réglementaire (emballages)",
    brief: "Évaluer l’aptitude au contact alimentaire d’un emballage, substance par substance.",
    steps: [
      {
        nole: "Dresse l’inventaire des matériaux, additifs et traitements à partir de la composition que vous lui fournissez.",
        check: "Vous corrigez et complétez l’inventaire.",
      },
      {
        nole: "Cherche chaque substance dans les sources officielles et monte un tableau : substance, statut réglementaire, lien vers la source.",
        check: "Vous ouvrez les sources et contrôlez.",
      },
      {
        nole: "Rédige le rapport dans un document, selon le plan qu’exige votre évaluation.",
        check: "Vous reprenez les conclusions et les signez.",
      },
    ],
    keeps: "Chaque statut cité dans le rapport renvoie à sa source.",
  },
  {
    craft: "Designer produit ou fondateur",
    brief: "Passer du benchmark concurrentiel à un prototype cliquable.",
    steps: [
      {
        nole: "Rassemble les produits concurrents dans un tableau que vous pouvez trier et annoter.",
        check: "Vous marquez ce qui est à garder et ce qui est à laisser.",
      },
      {
        nole: "Rédige les specs avec vous dans un document, à partir des décisions prises sur le canevas.",
        check: "Vous arrêtez le périmètre.",
      },
      {
        nole: "Construit un prototype fonctionnel dans un nœud App, relié aux specs dont il découle.",
        check: "Vous le testez et pointez ce qui cloche.",
      },
    ],
    keeps: "Recherche, specs et prototype restent côte à côte, reliés : n’importe qui peut retrouver pourquoi le produit a été conçu ainsi.",
  },
];

const withIcons = (copy: VignetteCopy[]): Vignette[] =>
  copy.map((vignette, index) => ({ ...vignette, icon: vignetteIcons[index] }));

export const vignettes: Record<Lang, Vignette[]> = {
  en: withIcons(vignettesEn),
  fr: withIcons(vignettesFr),
};

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
    title: "Prendre la mesure d’un marché en une seule séance",
    brief:
      "Un nouveau client dans la fintech. Avant le premier atelier, vous devez comprendre le paysage du paiement fractionné (BNPL) en Europe : qui sont les acteurs, comment ils gagnent leur argent, quelle réglementation se prépare.",
    steps: [
      {
        you: "Vous ouvrez un canevas et le dites en une ligne : « Je dois comprendre le paysage du BNPL en Europe. »",
        nole: "Nolë cherche sur le web et pose un nœud pour chacun des principaux acteurs, avec les liens vers ses sources.",
        check: "Vous parcourez la liste et retirez celui qui n’a rien à y faire.",
      },
      {
        you: "Pendant ce temps, vous posez votre propre cadre : Réglementation, Modèles économiques, Risques. Trois nœuds, encore vides.",
        nole: "Rien. Ce sont vos nœuds, et la forme de votre pensée.",
      },
      {
        you: "Un acteur se détache. Vous déposez son dernier rapport annuel sur le canevas et faites un Alt-clic dessus.",
        nole: "Nolë lit le PDF et remplit le nœud de l’acteur avec les chiffres qui comptent.",
        check: "Vous ouvrez le rapport et vérifiez les chiffres vous-même.",
      },
      {
        you: "À mesure que des motifs se dessinent, vous reliez les acteurs à vos thèmes. Deux d’entre eux partagent un modèle ; un autre est exposé à une règle à venir.",
        nole: "À votre demande, Nolë compare les modèles économiques des nœuds que vous avez reliés et en tire un tableau.",
        check: "Vous supprimez les colonnes inutiles. Le tableau reste modifiable.",
      },
    ],
    outcome:
      "À la fin, le canevas est la carte du marché : votre structure, les recherches de l’agent accrochées dessus, chaque chiffre à un clic de sa source. C’est la base de votre livrable, et vous pouvez en expliquer chaque partie, puisque c’est vous qui l’avez bâti.",
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
    craft: "Responsable scientifique médical (MSL)",
    brief: "Transformer une nouvelle étude clinique en présentation pour des médecins.",
    steps: [
      {
        nole: "Lit le PDF de l’étude et en extrait les chiffres et tableaux clés dans une synthèse structurée.",
        check: "Vous choisissez les chiffres qui seront retenus.",
      },
      {
        nole: "Cherche les études apparentées et les recommandations en vigueur, et les pose en contexte.",
        check: "Vous ajoutez les sources qui font foi pour vous.",
      },
      {
        nole: "Rédige la présentation diapositive par diapositive dans un document : titres, points, chiffres.",
        check: "Vous reformulez le tout avec vos propres mots.",
      },
    ],
    keeps: "À la prochaine étude du même genre, le canevas est déjà là pour repartir.",
  },
  {
    craft: "Toxicologue des emballages",
    brief: "Évaluer si un emballage alimentaire est sûr, substance par substance.",
    steps: [
      {
        nole: "Dresse la liste des matériaux, additifs et traitements à partir de la composition que vous lui confiez.",
        check: "Vous corrigez et complétez la liste.",
      },
      {
        nole: "Recherche chaque substance dans les sources officielles et construit un tableau : substance, statut réglementaire, lien vers la source.",
        check: "Vous ouvrez les sources et vérifiez.",
      },
      {
        nole: "Rédige le rapport dans un document, selon les sections qu’exige votre évaluation.",
        check: "Vous retouchez les conclusions et les validez.",
      },
    ],
    keeps: "Chaque statut du rapport renvoie à la source dont il provient.",
  },
  {
    craft: "Designer produit ou fondateur",
    brief: "Passer d’un tour d’horizon de la concurrence à un prototype cliquable.",
    steps: [
      {
        nole: "Rassemble les produits concurrents dans un tableau que vous pouvez trier et annoter.",
        check: "Vous marquez ce qui mérite d’être gardé, et ce qui ne le mérite pas.",
      },
      {
        nole: "Rédige la spécification avec vous dans un document, à partir des décisions prises sur le canevas.",
        check: "Vous fixez le périmètre.",
      },
      {
        nole: "Construit un prototype fonctionnel sous forme de nœud App, relié à la spécification dont il découle.",
        check: "Vous l’essayez et pointez ce qui ne va pas.",
      },
    ],
    keeps: "Recherche, spécification et prototype côte à côte, reliés : chacun peut voir pourquoi le produit a été construit ainsi.",
  },
];

const withIcons = (copy: VignetteCopy[]): Vignette[] =>
  copy.map((vignette, index) => ({ ...vignette, icon: vignetteIcons[index] }));

export const vignettes: Record<Lang, Vignette[]> = {
  en: withIcons(vignettesEn),
  fr: withIcons(vignettesFr),
};

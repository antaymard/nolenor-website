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

export interface FlagshipStep {
  you: string;
  nole: string;
  check?: string;
}

export interface Vignette {
  craft: string;
  icon: string;
  brief: string;
  steps: { nole: string; check: string }[];
  keeps: string;
}

export const flagship = {
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
  ] satisfies FlagshipStep[],
  outcome:
    "By the end, the canvas is the map of the market: your structure, the agent's research hung on it, every figure one click from its source. It's the basis of your deliverable, and you can explain every part of it, because you built it.",
};

export const vignettes: Vignette[] = [
  {
    craft: "Medical science liaison",
    icon: "lucide:flask-conical",
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
    icon: "lucide:shield-check",
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
    icon: "lucide:pen-tool",
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

import type { Lang } from "@/i18n";

// The manifesto, signed by Antoine. It tightens the "Vision — L'atelier,
// pas l'usine" note of the Nolënor canvas and absorbs the old /principles
// page (which now redirects to #principles).

export interface ManifestoCopy {
  meta: { title: string; description: string };
  hero: { eyebrow: string; title: string; lede: string };
  chapters: { title: string; paragraphs: string[] }[];
  table: { headers: [string, string]; rows: [string, string][] };
  principles: { title: string; items: string[] };
  signature: string;
  close: { title: string; secondary: string };
  newsletter: { title: string; text: string };
}

const fr: ManifestoCopy = {
  meta: {
    title: "Manifeste : restons des artisans · Nolënor",
    description: "Pourquoi Nolënor existe : un atelier, pas une usine. L’humain fait le travail, l’IA l’amplifie.",
  },
  hero: {
    eyebrow: "Manifeste",
    title: "Ne soyons pas des opérateurs. Restons des artisans.",
    lede: "Pourquoi Nolënor existe, et ce qu’il refuse de devenir.",
  },
  chapters: [
    {
      title: "Travailler n’est pas produire",
      paragraphs: [
        "Travailler change celui qui travaille : on apprend, on progresse, on tire fierté de ce qui marche et leçon de ce qui rate. Produire, c’est remplir des cases.",
        "Avec le numérique, beaucoup de métiers sont devenus de la production. On est devenu opérateur : l’interface entre la vie réelle et celle de l’outil. Archiviste devant l’arborescence, dactylo devant le chat, et maintenant relecteur de ce que l’agent a fait pendant la nuit.",
      ],
    },
    {
      title: "L’apprenti doué",
      paragraphs: [
        "L’agent est un apprenti. Il fait un travail que vous sauriez faire, plus vite, parfois mieux. Il ne fatigue pas, il explore des pistes que vous n’auriez pas eu l’énergie de suivre.",
        "Mais il a le défaut d’un apprenti doué : il construit des cathédrales quand une poutre suffit. Il ne sait pas couper.",
        "**L’apprenti a les mains. L’artisan a le coup d’œil.**",
      ],
    },
    {
      title: "Savoir faire moins",
      paragraphs: [
        "L’artisanat, ce n’est pas faire plus. C’est savoir ce qu’on ne fait pas. Le médecin débutant prescrit mille examens ; l’expérimenté écarte, cible, sans s’inquiéter. Aucun agent ne fait ce tri à votre place : il faut tenir la vision du tout pour savoir quoi sacrifier.",
      ],
    },
    {
      title: "La spirale",
      paragraphs: [
        "L’agent qui remplace fait décrocher. Vous ne comprenez plus ce qui a été fait, donc vous ne pouvez plus guider, donc vous déléguez encore plus.",
        "Rester artisan demande un effort : rester en phase avec son ouvrage. Le canvas est ce qui vous garde en phase : vous voyez chaque étape, ce que l’agent a touché, où il regarde, ce qu’il a posé.",
      ],
    },
    {
      title: "Le test du charpentier",
      paragraphs: [
        "Un charpentier de marine à qui on coupe l’électricité reprend le ciseau et la scie à main. Plus lent, mais il sait faire. C’est la ligne entre un outil et une dépendance.",
        "Nolënor fonctionne sans IA. Le jour où on la coupe, votre travail et votre compréhension sont toujours là, sur le canvas.",
      ],
    },
  ],
  table: {
    headers: ["L’usine", "L’atelier"],
    rows: [
      ["Une armée d’agents qui tourne toute la nuit", "Un apprenti à côté de vous, quand vous lui montrez où regarder"],
      ["Du travail en masse, à relire au matin", "Un ouvrage sur l’établi, que vous comprenez"],
      ["L’humain contrôle la qualité", "L’humain fait, l’IA amplifie"],
      ["Des crédits qui brûlent", "Faire moins, mais juste"],
    ],
  },
  principles: {
    title: "Nos principes",
    items: [
      "**Montrer avant de dire.** Une fonction qu’on ne peut pas montrer n’est pas annoncée.",
      "**Tout marche sans IA.** L’IA s’ajoute ; elle ne tient pas la structure.",
      "**Rien ne se fait dans le dos.** Chaque modification de l’agent est visible, signée, réversible.",
      "**Vos données repartent avec vous.** Formats ouverts, export gratuit, code ouvert.",
      "**Sobriété.** Le modèle suffisant plutôt que le plus gros, et pas de travail pour rien.",
      "**On dit ce qui n’existe pas encore.**",
      "**Un outil précis pour des gens précis.** Il ne plaira pas à tout le monde, et c’est bien.",
    ],
  },
  signature: "Un atelier, pas une usine. — Antoine",
  close: { title: "Essayez l’atelier.", secondary: "À propos de Nolënor" },
  newsletter: {
    title: "Le journal de bord",
    text: "Ce qui a été construit, et pourquoi. Une lettre quand ça en vaut la peine, pas plus.",
  },
};

const en: ManifestoCopy = {
  meta: {
    title: "Manifesto: let’s stay craftspeople · Nolënor",
    description: "Why Nolënor exists: a workshop, not a factory. People do the work, AI amplifies it.",
  },
  hero: {
    eyebrow: "Manifesto",
    title: "Let’s not be operators. Let’s stay craftspeople.",
    lede: "Why Nolënor exists, and what it refuses to become.",
  },
  chapters: [
    {
      title: "Working is not producing",
      paragraphs: [
        "Working changes the person doing it: you learn, you get better, you take pride in what works and a lesson from what fails. Producing is filling in boxes.",
        "With software, many crafts turned into production. We became operators: the interface between real life and the tool’s. Archivists in front of the page tree, typists in front of the chat, and now proofreaders of whatever the agent did overnight.",
      ],
    },
    {
      title: "The gifted apprentice",
      paragraphs: [
        "The agent is an apprentice. It does work you could do, faster, sometimes better. It never tires, and it follows leads you wouldn’t have had the energy for.",
        "But it has a gifted apprentice’s flaw: it builds cathedrals when a beam would do. It doesn’t know what to cut.",
        "**The apprentice has the hands. The craftsperson has the eye.**",
      ],
    },
    {
      title: "Knowing what not to do",
      paragraphs: [
        "Craft isn’t doing more. It’s knowing what you won’t do. A junior doctor orders a thousand tests; an experienced one rules things out and aims, calmly. No agent makes that call for you: you need to hold the whole picture to know what to give up.",
      ],
    },
    {
      title: "The spiral",
      paragraphs: [
        "An agent that replaces you makes you lose the thread. You no longer understand what was done, so you can’t guide it, so you delegate even more.",
        "Staying a craftsperson takes effort: staying in touch with your work. The canvas is what keeps you in touch: you see every step, what the agent touched, where it’s looking, what it put down.",
      ],
    },
    {
      title: "The carpenter test",
      paragraphs: [
        "Cut a boat carpenter’s power and they pick up the chisel and the hand saw. Slower, but they can still do it. That’s the line between a tool and a dependency.",
        "Nolënor works without AI. The day you switch it off, your work and your understanding are still there, on the canvas.",
      ],
    },
  ],
  table: {
    headers: ["The factory", "The workshop"],
    rows: [
      ["An army of agents running all night", "An apprentice beside you, when you show it where to look"],
      ["Work in bulk, to proofread in the morning", "A piece on the bench that you understand"],
      ["People do quality control", "People do the work, AI amplifies it"],
      ["Credits burning", "Doing less, but right"],
    ],
  },
  principles: {
    title: "Our principles",
    items: [
      "**Show before telling.** A feature we can’t show isn’t announced.",
      "**Everything works without AI.** AI is added on; it doesn’t hold the structure.",
      "**Nothing happens behind your back.** Every change the agent makes is visible, signed, reversible.",
      "**Your data leaves with you.** Open formats, free export, open code.",
      "**Restraint.** The model that’s enough rather than the biggest, and no work for nothing.",
      "**We say what doesn’t exist yet.**",
      "**A precise tool for precise people.** It won’t please everyone, and that’s fine.",
    ],
  },
  signature: "A workshop, not a factory. — Antoine",
  close: { title: "Try the workshop.", secondary: "About Nolënor" },
  newsletter: {
    title: "The workshop log",
    text: "What was built, and why. A letter when it’s worth it, nothing more.",
  },
};

export const manifesto: Record<Lang, ManifestoCopy> = { en, fr };

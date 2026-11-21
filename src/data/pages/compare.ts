import type { Lang } from "@/i18n";
import type { Card } from "@/components/site/types";

// Copy of the Compare hub (/compare) and the four comparison pages
// (/compare/<slug>). The French is the master (the "Comparer" doc of the
// "Refonte du site" zone, Go To Market canvas); the English follows it.
//
// Rule of these pages: we say what the other tool does better, and we never
// trash it. Competitor prices and plans were checked on 21 November 2026;
// check them again before any update, and change `priceNote` with them.

export const compareSlugs = ["chatgpt", "notion", "miro", "heptabase"] as const;
export type CompareSlug = (typeof compareSlugs)[number];

interface Meta {
  title: string;
  description: string;
}

export interface CompareHubCopy {
  meta: Meta;
  hero: { eyebrow: string; title: string; lede: string };
  table: { headers: string[]; rows: string[][] };
  kosmik: string;
}

export interface ComparePageCopy {
  meta: Meta;
  /** Short name used in the cards that link between comparisons. */
  name: string;
  hero: { title: string; lede: string };
  keep: { title: string; items: string[] };
  take: { title: string; items: string[] };
  table: { headers: string[]; rows: string[][] };
  together?: string;
  kosmik?: { title: string; text: string };
}

export interface CompareCommonCopy {
  eyebrow: string;
  duoTitle: string;
  tableTitle: string;
  priceNote: string;
  togetherTitle: string;
  othersTitle: string;
  readMore: string;
  close: { title: string; text: string };
}

// ---------------------------------------------------------------- French

const frCommon: CompareCommonCopy = {
  eyebrow: "Comparer",
  duoTitle: "Lequel choisir ?",
  tableTitle: "Point par point",
  priceNote: "Informations sur les autres outils relevées le 21 novembre 2026.",
  togetherTitle: "Les utiliser ensemble",
  othersTitle: "Les autres comparaisons",
  readMore: "Lire la comparaison",
  close: {
    title: "Essayez sur votre prochain projet.",
    text: "Gratuit aujourd’hui, IA comprise. Sans carte bancaire.",
  },
};

const frHub: CompareHubCopy = {
  meta: {
    title: "Comparer Nolënor à ChatGPT, Claude, Notion, Miro et Heptabase",
    description:
      "Nolënor à côté de ChatGPT, Claude, Notion, Miro et Heptabase : ce que chaque outil fait le mieux, et quand Nolënor vaut la peine.",
  },
  hero: {
    eyebrow: "Comparer",
    title: "Nolënor à côté de vos outils.",
    lede: "Vous n’avez pas besoin de tout quitter. Voici, honnêtement, ce que chaque outil fait le mieux, et quand Nolënor vaut la peine.",
  },
  table: {
    headers: ["", "Fait le mieux", "Nolënor apporte"],
    rows: [
      ["[ChatGPT, Claude](/compare/chatgpt)", "Répondre, rédiger, expliquer", "Un projet qui tient dans la durée, un agent qui travaille sur vos objets"],
      ["[Notion](/compare/notion)", "Documenter une équipe", "Penser en vrac, lire PDF et audios, un agent inclus"],
      ["[Miro](/compare/miro)", "Animer un atelier", "Le travail de fond, sur de vrais objets"],
      ["[Heptabase](/compare/heptabase)", "Apprendre et relier ses notes", "Un agent qui agit, des tables et des apps, un accès gratuit"],
    ],
  },
  kosmik:
    "**Vous veniez de Kosmik ?** Kosmik a fermé le 31 mai 2026. Nolënor garde l’idée d’un espace visuel où tout se pose (images, PDF, liens, vidéos) et y ajoute un agent. [Voir la comparaison avec Heptabase et Kosmik →](/compare/heptabase)",
};

const frPages: Record<CompareSlug, ComparePageCopy> = {
  chatgpt: {
    meta: {
      title: "Nolënor ou ChatGPT et Claude pour un projet long",
      description:
        "ChatGPT et Claude excellent pour une question. Pour un projet de plusieurs semaines, Nolënor met tout sur un canvas où l’agent travaille.",
    },
    name: "ChatGPT et Claude",
    hero: {
      title: "ChatGPT et Claude pour la question. Nolënor pour le projet.",
      lede: "Les assistants de chat sont excellents pour une question, un brouillon, une explication. Quand un projet dure des semaines et s’appuie sur beaucoup de sources, c’est le fil qui devient le problème : le contexte à redire, les réponses enterrées, les résultats à recopier ailleurs. Nolënor met le projet sur un canvas, et l’agent travaille dessus.",
    },
    keep: {
      title: "Gardez ChatGPT ou Claude pour",
      items: [
        "Une question ponctuelle",
        "Un texte à écrire d’une traite",
        "La voix sur téléphone",
        "Leur large choix d’intégrations",
      ],
    },
    take: {
      title: "Prenez Nolënor pour",
      items: [
        "Un projet de plusieurs semaines",
        "Beaucoup de fichiers (PDF, captures, enregistrements)",
        "Des résultats structurés (tables, apps)",
        "Savoir exactement ce que l’IA a changé",
      ],
    },
    table: {
      headers: ["", "Chat IA", "Nolënor"],
      rows: [
        ["Où vit le résultat", "Dans le fil, parfois dans un document à part", "Sur le canvas, comme un objet éditable"],
        ["Le contexte", "Ce que vous tapez et joignez ; les Projets gardent des fichiers et des consignes", "Ce que vous montrez d’un Alt+clic, et tout le canvas lisible"],
        ["Ce qu’a fait l’IA", "Une réponse à relire", "Liste des nœuds lus et modifiés, historique signé"],
        ["Formes de résultat", "Texte, code, artefacts", "Documents, tables, databases, apps branchées sur vos données"],
        ["Sans IA", "—", "Tout le canvas fonctionne"],
        ["Modèles", "Ceux de l’éditeur", "Claude (Haiku, Sonnet, Opus) en mode Auto, ou Mistral Large"],
        ["Prix", "Formules payantes autour de 20 $/mois", "Gratuit aujourd’hui, IA comprise"],
      ],
    },
    together:
      "Branchez Claude Desktop ou Claude Code sur vos canvas avec le serveur MCP de Nolënor. Il lit et écrit le canvas avec vos droits, et ses modifications sont versionnées comme celles de Nolë. [Développeurs →](/developers)",
  },
  notion: {
    meta: {
      title: "Nolënor ou Notion pour mener un projet avec l’IA",
      description:
        "Notion pour documenter une équipe, Nolënor pour mener un projet en vrac, avec un agent IA inclus. Ce que chacun fait le mieux, point par point.",
    },
    name: "Notion",
    hero: {
      title: "Notion pour la base de l’équipe. Nolënor pour le projet en cours.",
      lede: "Notion est l’un des meilleurs outils pour documenter une équipe. Son principe, ce sont des pages rangées dans des pages. Nolënor part de l’inverse : on pose d’abord, en vrac, et on structure quand le projet le demande. L’agent travaille sur ce que vous voyez.",
    },
    keep: {
      title: "Gardez Notion pour",
      items: [
        "Le wiki et les process d’une équipe",
        "Des dizaines de collaborateurs",
        "Ses intégrations et sa galerie de modèles",
        "Les commentaires",
      ],
    },
    take: {
      title: "Prenez Nolënor pour",
      items: [
        "Un projet d’exploration (marché, recherche, décision)",
        "Une matière hétérogène (PDF, audios, captures)",
        "Voir le projet entier d’un coup d’œil",
        "Un agent inclus sans changer de formule",
      ],
    },
    table: {
      headers: ["", "Notion", "Nolënor"],
      rows: [
        ["Organisation", "Pages imbriquées", "Canvas libre, frames, sous-canvas"],
        ["Bases de données", "Très complètes, mature", "Tables, databases, vues Kanban / Galerie / Timeline, nœuds sur mesure"],
        ["Fichiers", "Intégrés à la page", "Lus et cherchables : OCR, texte des images, transcription audio et vidéo"],
        ["IA", "Notion AI, agent complet sur le plan Business", "Nolë, sur les objets du canvas, historique signé"],
        ["Apps", "Intégrations", "Apps écrites par Nolë, branchées en direct sur vos données"],
        ["Commentaires", "Oui", "Pas encore"],
        ["Import", "—", "Pas encore d’import Notion ; les tables passent par CSV"],
        ["Code", "Propriétaire", "Open source (AGPL-3.0)"],
      ],
    },
    together:
      "Gardez Notion pour ce qui est décidé et documenté. Menez dans Nolënor ce qui est encore en train de se penser, puis rapportez la synthèse.",
  },
  miro: {
    meta: {
      title: "Nolënor ou Miro : le canvas pour le travail de fond",
      description:
        "Miro pour l’atelier en direct, Nolënor pour le travail de fond sur de vrais objets (PDF, tables, apps), avec un agent. Comparaison point par point.",
    },
    name: "Miro",
    hero: {
      title: "Miro pour l’atelier. Nolënor pour le travail qui suit.",
      lede: "Miro est fait pour réfléchir à plusieurs, en direct : post-its, schémas, ateliers. Nolënor est un canvas pour le travail de fond : chaque élément est un vrai objet (un PDF qu’on lit, une table qu’on trie, une app qui calcule), et l’agent travaille sur ces objets.",
    },
    keep: {
      title: "Gardez Miro pour",
      items: [
        "Animer un atelier",
        "Dessiner un schéma à main levée",
        "Les curseurs et commentaires en direct",
        "Ses modèles d’atelier",
      ],
    },
    take: {
      title: "Prenez Nolënor pour",
      items: [
        "La semaine de travail après l’atelier",
        "Des documents, des tables et des PDF qu’on lit sur place",
        "Retrouver une phrase dans un enregistrement",
        "Un agent qui produit des objets, pas des post-its",
      ],
    },
    table: {
      headers: ["", "Miro", "Nolënor"],
      rows: [
        ["Élément de base", "Post-it, forme, connecteur", "Document, table, PDF, audio, app, nœud sur mesure"],
        ["Pensé pour", "La séance collective", "Le projet qui dure"],
        ["Recherche", "Dans le tableau", "Dans le contenu de chaque fichier"],
        ["IA", "Assistants et crédits IA par membre", "Nolë, sur les objets, historique signé"],
        ["Curseurs, commentaires", "Oui", "Présence et temps réel oui, curseurs et commentaires pas encore"],
        ["Dessin libre", "Oui", "Non"],
      ],
    },
  },
  heptabase: {
    meta: {
      title: "Alternative à Heptabase et Kosmik, avec un agent et un accès gratuit",
      description:
        "Heptabase pour apprendre, Nolënor pour mener un projet : un agent qui agit sur le canvas, des tables, des apps, un accès gratuit. Et l’après-Kosmik.",
    },
    name: "Heptabase et Kosmik",
    hero: {
      title: "Heptabase pour apprendre. Nolënor pour mener un projet.",
      lede: "Heptabase est un très bel outil pour lire, relier ses notes et construire sa compréhension d’un sujet. Nolënor partage l’idée du canvas visuel, avec une autre priorité : faire avancer un projet, avec un agent qui agit sur vos objets.",
    },
    keep: {
      title: "Gardez Heptabase pour",
      items: ["L’étude au long cours", "Les cartes de notes", "Le journal", "Une méthode PKM éprouvée"],
    },
    take: {
      title: "Prenez Nolënor pour",
      items: [
        "Des tables, des databases et des apps à côté des notes",
        "Un agent qui écrit sur le canvas",
        "La recherche dans les audios et les scans",
        "Un accès gratuit et un code ouvert",
      ],
    },
    table: {
      headers: ["", "Heptabase", "Nolënor"],
      rows: [
        ["Pensé pour", "Apprendre, comprendre", "Mener un projet"],
        ["IA", "Assistant et crédits IA", "Nolë agit sur le canvas, historique signé"],
        ["Données", "Cartes, tags, propriétés", "Tables, databases et vues, nœuds sur mesure, apps"],
        ["Prix d’entrée", "Pas de plan gratuit (essai 7 jours)", "Gratuit aujourd’hui"],
        ["Code", "Propriétaire", "Open source (AGPL-3.0)"],
      ],
    },
    kosmik: {
      title: "Vous veniez de Kosmik ?",
      text: "Kosmik a fermé le 31 mai 2026. Si vous aimiez y poser images, PDF, liens et vidéos côte à côte, Nolënor fait la même chose, lit le contenu de tout ce que vous posez, et ajoute un agent. Il n’y a pas d’import Kosmik : glissez simplement vos fichiers exportés sur un canvas.",
    },
  },
};

// --------------------------------------------------------------- English

const enCommon: CompareCommonCopy = {
  eyebrow: "Compare",
  duoTitle: "Which one to pick?",
  tableTitle: "Point by point",
  priceNote: "Details about other tools checked on 21 November 2026.",
  togetherTitle: "Use them together",
  othersTitle: "Other comparisons",
  readMore: "Read the comparison",
  close: {
    title: "Try it on your next project.",
    text: "Free today, AI included. No credit card.",
  },
};

const enHub: CompareHubCopy = {
  meta: {
    title: "Compare Nolënor with ChatGPT, Claude, Notion, Miro and Heptabase",
    description:
      "Nolënor next to ChatGPT, Claude, Notion, Miro and Heptabase: what each tool does best, and when Nolënor is worth it.",
  },
  hero: {
    eyebrow: "Compare",
    title: "Nolënor next to your tools.",
    lede: "You don’t have to leave everything behind. Here, honestly, is what each tool does best, and when Nolënor is worth it.",
  },
  table: {
    headers: ["", "Does best", "What Nolënor adds"],
    rows: [
      ["[ChatGPT, Claude](/compare/chatgpt)", "Answering, drafting, explaining", "A project that holds up over time, an agent that works on your objects"],
      ["[Notion](/compare/notion)", "Documenting a team", "Messy thinking, reading PDFs and audio, an agent included"],
      ["[Miro](/compare/miro)", "Running a workshop", "Deep work, on real objects"],
      ["[Heptabase](/compare/heptabase)", "Learning and linking your notes", "An agent that acts, tables and apps, free access"],
    ],
  },
  kosmik:
    "**Coming from Kosmik?** Kosmik closed on 31 May 2026. Nolënor keeps the idea of a visual space where everything gets laid out (images, PDFs, links, videos) and adds an agent. [See the comparison with Heptabase and Kosmik →](/compare/heptabase)",
};

const enPages: Record<CompareSlug, ComparePageCopy> = {
  chatgpt: {
    meta: {
      title: "Nolënor or ChatGPT and Claude for a long project",
      description:
        "ChatGPT and Claude are excellent for a question. For a project that runs for weeks, Nolënor puts it all on a canvas the agent works on.",
    },
    name: "ChatGPT and Claude",
    hero: {
      title: "ChatGPT and Claude for the question. Nolënor for the project.",
      lede: "Chat assistants are excellent for a question, a draft, an explanation. When a project runs for weeks and draws on many sources, the thread becomes the problem: context to explain again, answers buried, results to copy somewhere else. Nolënor puts the project on a canvas, and the agent works on it.",
    },
    keep: {
      title: "Keep ChatGPT or Claude for",
      items: [
        "A one-off question",
        "A text to write in one go",
        "Voice on your phone",
        "Their wide choice of integrations",
      ],
    },
    take: {
      title: "Choose Nolënor for",
      items: [
        "A project that lasts several weeks",
        "Lots of files (PDFs, screenshots, recordings)",
        "Structured results (tables, apps)",
        "Knowing exactly what the AI changed",
      ],
    },
    table: {
      headers: ["", "AI chat", "Nolënor"],
      rows: [
        ["Where the result lives", "In the thread, sometimes in a separate document", "On the canvas, as an object you can edit"],
        ["Context", "What you type and attach; Projects keep files and instructions", "What you show with an Alt+click, and the whole canvas, which it can read"],
        ["What the AI did", "An answer to review", "A list of the nodes read and changed, signed history"],
        ["Kinds of result", "Text, code, artifacts", "Documents, tables, databases, apps connected to your data"],
        ["Without AI", "—", "The whole canvas works"],
        ["Models", "The vendor’s own", "Claude (Haiku, Sonnet, Opus) in Auto mode, or Mistral Large"],
        ["Price", "Paid plans around $20/month", "Free today, AI included"],
      ],
    },
    together:
      "Connect Claude Desktop or Claude Code to your canvases with Nolënor’s MCP server. It reads and writes the canvas with your permissions, and its changes are versioned just like Nolë’s. [Developers →](/developers)",
  },
  notion: {
    meta: {
      title: "Nolënor or Notion for running a project with AI",
      description:
        "Notion for documenting a team, Nolënor for running a messy project, with an AI agent included. What each one does best, point by point.",
    },
    name: "Notion",
    hero: {
      title: "Notion for the team’s knowledge base. Nolënor for the project underway.",
      lede: "Notion is one of the best tools for documenting a team. Its principle is pages filed inside pages. Nolënor starts from the opposite end: you lay things down first, in no particular order, and add structure when the project calls for it. The agent works on what you see.",
    },
    keep: {
      title: "Keep Notion for",
      items: [
        "A team’s wiki and processes",
        "Dozens of collaborators",
        "Its integrations and template gallery",
        "Comments",
      ],
    },
    take: {
      title: "Choose Nolënor for",
      items: [
        "An exploration project (market, research, decision)",
        "Mixed material (PDFs, audio, screenshots)",
        "Seeing the whole project at a glance",
        "An agent included, without switching plans",
      ],
    },
    table: {
      headers: ["", "Notion", "Nolënor"],
      rows: [
        ["Organization", "Nested pages", "Free-form canvas, frames, sub-canvases"],
        ["Databases", "Very complete, mature", "Tables, databases, Kanban / Gallery / Timeline views, custom nodes"],
        ["Files", "Embedded in the page", "Read and searchable: OCR, text in images, audio and video transcription"],
        ["AI", "Notion AI, full agent on the Business plan", "Nolë, on the canvas objects, signed history"],
        ["Apps", "Integrations", "Apps written by Nolë, connected live to your data"],
        ["Comments", "Yes", "Not yet"],
        ["Import", "—", "No Notion import yet; tables come in through CSV"],
        ["Code", "Proprietary", "Open source (AGPL-3.0)"],
      ],
    },
    together:
      "Keep Notion for what has been decided and documented. Work through what is still being figured out in Nolënor, then bring the summary back.",
  },
  miro: {
    meta: {
      title: "Nolënor or Miro: the canvas for deep work",
      description:
        "Miro for the live workshop, Nolënor for deep work on real objects (PDFs, tables, apps), with an agent. A point-by-point comparison.",
    },
    name: "Miro",
    hero: {
      title: "Miro for the workshop. Nolënor for the work that follows.",
      lede: "Miro is made for thinking together, live: sticky notes, diagrams, workshops. Nolënor is a canvas for deep work: every element is a real object (a PDF you read, a table you sort, an app that calculates), and the agent works on those objects.",
    },
    keep: {
      title: "Keep Miro for",
      items: [
        "Running a workshop",
        "Sketching a diagram by hand",
        "Live cursors and comments",
        "Its workshop templates",
      ],
    },
    take: {
      title: "Choose Nolënor for",
      items: [
        "The week of work after the workshop",
        "Documents, tables and PDFs you read right there",
        "Finding a sentence in a recording",
        "An agent that produces objects, not sticky notes",
      ],
    },
    table: {
      headers: ["", "Miro", "Nolënor"],
      rows: [
        ["Basic element", "Sticky note, shape, connector", "Document, table, PDF, audio, app, custom node"],
        ["Built for", "The group session", "The project that lasts"],
        ["Search", "In the board", "In the content of every file"],
        ["AI", "Assistants and AI credits per member", "Nolë, on the objects, signed history"],
        ["Cursors, comments", "Yes", "Presence and real time, yes; cursors and comments, not yet"],
        ["Freehand drawing", "Yes", "No"],
      ],
    },
  },
  heptabase: {
    meta: {
      title: "An alternative to Heptabase and Kosmik, with an agent and free access",
      description:
        "Heptabase for learning, Nolënor for running a project: an agent that acts on the canvas, tables, apps, free access. And life after Kosmik.",
    },
    name: "Heptabase and Kosmik",
    hero: {
      title: "Heptabase for learning. Nolënor for running a project.",
      lede: "Heptabase is a beautiful tool for reading, linking your notes and building your understanding of a subject. Nolënor shares the idea of a visual canvas, with a different priority: moving a project forward, with an agent that acts on your objects.",
    },
    keep: {
      title: "Keep Heptabase for",
      items: ["Long-term study", "Note cards", "The journal", "A proven PKM method"],
    },
    take: {
      title: "Choose Nolënor for",
      items: [
        "Tables, databases and apps next to your notes",
        "An agent that writes on the canvas",
        "Search inside audio and scans",
        "Free access and open source code",
      ],
    },
    table: {
      headers: ["", "Heptabase", "Nolënor"],
      rows: [
        ["Built for", "Learning, understanding", "Running a project"],
        ["AI", "Assistant and AI credits", "Nolë acts on the canvas, signed history"],
        ["Data", "Cards, tags, properties", "Tables, databases and views, custom nodes, apps"],
        ["Entry price", "No free plan (7-day trial)", "Free today"],
        ["Code", "Proprietary", "Open source (AGPL-3.0)"],
      ],
    },
    kosmik: {
      title: "Coming from Kosmik?",
      text: "Kosmik closed on 31 May 2026. If you liked laying out images, PDFs, links and videos side by side there, Nolënor does the same, reads the content of everything you put down, and adds an agent. There is no Kosmik import: just drag your exported files onto a canvas.",
    },
  },
};

export const compareCommon: Record<Lang, CompareCommonCopy> = { en: enCommon, fr: frCommon };
export const compareHub: Record<Lang, CompareHubCopy> = { en: enHub, fr: frHub };
export const comparePages: Record<Lang, Record<CompareSlug, ComparePageCopy>> = { en: enPages, fr: frPages };

/** Cards linking to the other comparisons, from the page's own headline. */
export function otherComparisons(slug: CompareSlug, lang: Lang): Card[] {
  const pages = comparePages[lang];
  return compareSlugs
    .filter((s) => s !== slug)
    .map((s) => ({
      title: pages[s].name,
      text: pages[s].hero.title,
      href: `/compare/${s}`,
      linkLabel: compareCommon[lang].readMore,
    }));
}

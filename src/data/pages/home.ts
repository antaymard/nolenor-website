import type { Lang } from "@/i18n";
import type { Card, FaqItem, GestureStep } from "@/components/site/types";
import addNodesVid from "@/assets/vid/add-nodes.mp4?url";
import addAttachmentsVid from "@/assets/vid/add-attachments.mp4?url";
import historyImg from "@/assets/img/history.png";

// Copy of the home page. The French is the master (written in the
// "Refonte du site" zone of the Go To Market canvas); the English follows it.

export interface HomeCopy {
  meta: { title: string; description: string };
  hero: { eyebrow: string; title: string; lede: string; demo: string; note: string; alt: string };
  problem: { eyebrow: string; title: string; intro: string; roles: Card[]; kicker: string };
  gestures: { eyebrow: string; title: string; steps: GestureStep[] };
  example: { eyebrow: string; title: string; intro: string; headers: string[]; rows: string[][]; outro: string };
  grows: { title: string; cards: Card[]; more: string };
  audience: { title: string; cards: Card[]; notFor: string };
  compare: { title: string; headers: string[]; rows: string[][]; more: string };
  trust: { title: string; cards: Card[] };
  faq: { title: string; items: FaqItem[] };
  newsletter: { title: string; text: string };
  close: { title: string; text: string; secondary: string };
}

const media = {
  show: { id: "home-show", kind: "video" as const, src: addAttachmentsVid },
  lay: { id: "home-lay", kind: "video" as const, src: addNodesVid },
  keep: { id: "home-keep", kind: "image" as const, src: historyImg.src },
};

const fr: HomeCopy = {
  meta: {
    title: "Nolënor : le canvas où vous travaillez avec l’IA, à découvert",
    description:
      "Posez toute la matière d’un projet sur un canvas. Nolë, l’agent IA, travaille directement dessus, sous vos yeux. Gratuit aujourd’hui.",
  },
  hero: {
    eyebrow: "Un canvas de travail avec un agent IA",
    title: "Vos projets ne tiennent pas dans un chat.",
    lede:
      "Nolënor est un canvas où vous posez toute la matière d’un projet : PDF, notes, tableaux, liens, enregistrements. Nolë, son agent IA, travaille directement dessus. Vous voyez ce qu’il lit et ce qu’il change. Le travail reste le vôtre.",
    demo: "Voir un vrai canvas",
    note: "Gratuit aujourd’hui, IA comprise · Sans carte bancaire · Export à tout moment",
    alt: "Un canvas Nolënor : documents, tables, liens et une app côte à côte, avec le panneau de Nolë ouvert",
  },
  problem: {
    eyebrow: "Le problème",
    title: "Vos outils vous ont donné un rôle. Ce n’était pas le bon.",
    intro: "Plus un projet grossit, plus l’outil vous fait travailler pour lui.",
    roles: [
      {
        eyebrow: "« Où est-ce que je range ça ? »",
        title: "Archiviste",
        text: "Les pages imbriquées vous font classer avant de penser. Ce qui ne rentre dans aucune case finit oublié.",
      },
      {
        eyebrow: "« Je t’ai déjà expliqué tout ça. »",
        title: "Dactylo",
        text: "Le chat ne voit que ce que vous tapez. À chaque nouveau fil, il faut tout redire, et la bonne réponse est enterrée trois semaines plus haut.",
      },
      {
        eyebrow: "« Qu’est-ce qu’il a fait, exactement ? »",
        title: "Relecteur",
        text: "L’agent qui travaille à votre place vous rend un pavé à relire. Vous ne savez plus d’où vient chaque chiffre, alors vous déléguez encore plus.",
      },
    ],
    kicker: "Nolënor vous rend votre place : celle de la personne qui fait le travail.",
  },
  gestures: {
    eyebrow: "Comment ça marche",
    title: "Trois gestes. Aucune méthode à apprendre.",
    steps: [
      {
        title: "Posez tout. Ne rangez rien.",
        text: "Glissez vos PDF, vos captures, vos liens, vos tableaux, l’enregistrement d’une réunion. Tout se pose sur le canvas, là où vous le lâchez. Nolënor lit chaque fichier, y compris les scans, le texte des images et ce qui se dit dans un audio. Vous retrouvez une phrase sans vous souvenir où vous l’avez mise.",
        bullets: [
          "PDF, Word, Excel et PowerPoint lus sur place",
          "Le texte des captures d’écran devient cherchable",
          "Audios et vidéos transcrits, avec l’horodatage",
        ],
        media: { ...media.lay, alt: "Des fichiers glissés sur le canvas deviennent des nœuds : document, table, PDF, image" },
      },
      {
        title: "Montrez au lieu de réexpliquer.",
        text: "Alt+clic sur trois nœuds, une phrase : *« Compare leurs prix. »* Nolë lit ce que vous lui montrez, cherche ce qui manque sur le web, et pose une table à côté. Pas un pavé à recopier : un vrai tableau, que vous pouvez trier et corriger.",
        bullets: [
          "Le contexte se donne d’un geste : Alt+clic ou @mention",
          "Nolë crée, relie, remplit une table, réécrit un paragraphe",
          "À la fin, la liste des nœuds lus et modifiés",
        ],
        media: { ...media.show, alt: "Des nœuds désignés d’un Alt+clic, puis Nolë qui travaille sur le canvas" },
      },
      {
        title: "Gardez la main.",
        text: "Nolë travaille sous vos yeux, sur la même surface que vous. Chaque modification est signée : l’historique sépare ce que vous avez écrit de ce que Nolë a changé, et une version se restaure en un clic. Fermez le panneau de Nolë : tout est encore là, et tout se modifie à la main.",
        bullets: [
          "Un historique par nœud, où Nolë est distingué de vous",
          "Nolë agit avec vos droits, jamais plus",
          "Canvas, tables, recherche et partage marchent sans IA",
        ],
        media: { ...media.keep, alt: "L’historique d’un nœud : les versions de Nolë et les vôtres, une version sélectionnée" },
      },
    ],
  },
  example: {
    eyebrow: "Un exemple",
    title: "Une veille concurrentielle, du vrac au tableau.",
    intro:
      "Hugo lance un outil de facturation pour artisans. Il a trois concurrents en tête, des captures de leurs pages de tarifs et deux rapports en PDF. Voici sa première heure.",
    headers: ["", "Vous", "Nolë"],
    rows: [
      ["Poser", "Vous glissez 6 captures, 2 PDF et une note vocale de 4 minutes enregistrée dans le train.", "Rien. Tant que vous ne demandez rien, Nolë ne touche à rien."],
      ["Montrer", "Alt+clic sur les 6 captures : *« Fais une table : offre, prix mensuel, limite du plan gratuit. »*", "Lit les captures et pose une table de 6 lignes à côté."],
      ["Creuser", "Vous ajoutez une colonne « Ce qui m’agace chez eux » et la remplissez vous-même. *« Vérifie ces prix sur leurs sites. »*", "Ouvre les pages, corrige 2 cellules. L’historique montre lesquelles."],
      ["Décider", "Vous écrivez votre positionnement dans un document, à côté de la table.", "Relit si vous le lui demandez. Sinon, rien."],
    ],
    outro: "**Ce qui reste à la fin** : une table, un document, les sources, et une trace claire de qui a fait quoi.",
  },
  grows: {
    title: "Ce qui commence en vrac finit structuré. Sans changer d’outil.",
    cards: [
      { title: "Documents", text: "Des notes riches, éditées à plusieurs, où Nolë réécrit un paragraphe sans toucher au reste." },
      { title: "Tables et databases", text: "Des colonnes typées, et des vues Kanban, Galerie et Timeline posées à côté." },
      { title: "Nœuds sur mesure", text: "Un « Candidat », un « Deal », un « Bien ». Vous définissez les champs, Nolë les remplit." },
      { title: "Apps", text: "Un simulateur, un graphique, un tableau de bord, écrits par Nolë et branchés en direct sur vos données." },
      { title: "Frames, boards, sous-canvas", text: "Regroupez, repliez, imbriquez quand le projet prend de l’ampleur." },
      { title: "Médias", text: "Réunions transcrites, images et vidéos générées, avec le prix affiché avant." },
    ],
    more: "Faire le tour du produit",
  },
  audience: {
    title: "Pour les projets qui demandent de réfléchir.",
    cards: [
      { title: "Fondateurs", text: "Veille, entretiens, spec. Tout le produit sur un canvas, que votre agent de code peut lire aussi.", href: "/use-cases/founders", linkLabel: "Voir le cas" },
      { title: "Consultants", text: "Une mission, ses sources, son livrable. Chaque chiffre reste relié à son origine.", href: "/use-cases/consultants", linkLabel: "Voir le cas" },
      { title: "Recherche & synthèse", text: "40 PDF, 12 entretiens, et une synthèse que vous pouvez défendre.", href: "/use-cases/research", linkLabel: "Voir le cas" },
      { title: "Projets perso", text: "Un achat immobilier, un grand voyage, un budget. Les décisions qui méritent mieux qu’une note.", href: "/use-cases/personal", linkLabel: "Voir le cas" },
    ],
    notFor:
      "**Ce n’est pas pour vous si** vous cherchez une IA qui travaille seule pendant la nuit, un tableau blanc pour animer un atelier, ou un outil de notes local en markdown.",
  },
  compare: {
    title: "Gardez vos outils. Donnez un endroit à vos projets.",
    headers: ["", "Parfait pour", "Moins bon pour"],
    rows: [
      ["Un chat IA (ChatGPT, Claude)", "Une question, un brouillon, une idée à creuser", "Un projet de plusieurs semaines : le contexte se perd d’un fil à l’autre"],
      ["Un wiki (Notion)", "La documentation d’une équipe installée", "Penser en vrac : il faut ranger d’abord"],
      ["Un tableau blanc (Miro)", "Un atelier à plusieurs", "Le travail de fond : des post-its, pas des données"],
      ["**Nolënor**", "**Un projet qui dure, avec beaucoup de matière, mené avec l’IA**", "Une base documentaire pour 200 personnes (pas encore)"],
    ],
    more: "Comparer en détail",
  },
  trust: {
    title: "Construit à découvert.",
    cards: [
      { title: "Fait par quelqu’un qui s’en sert", text: "Antoine Aymard construit Nolënor depuis la Bretagne. La veille, les specs et ce site ont été pensés sur des canvas Nolënor.", href: "/about", linkLabel: "À propos" },
      { title: "Code ouvert", text: "Licence AGPL-3.0, sur GitHub. Vous pouvez lire chaque ligne, et l’héberger vous-même." },
      { title: "Vos données repartent quand vous voulez", text: "Export Markdown et JSON de chaque canvas, CSV pour les tables. Et un serveur MCP pour y travailler depuis Claude ou Cursor." },
      { title: "Un prix écrit avant d’être appliqué", text: "Gratuit aujourd’hui. Pour la suite, nos engagements sont publics.", href: "/pricing", linkLabel: "Voir les tarifs" },
    ],
  },
  faq: {
    title: "Questions",
    items: [
      { q: "Nolënor, c’est quoi, en une phrase ?", a: "Un canvas infini où chaque élément d’un projet est un vrai objet (document, table, PDF, app), et où un agent IA, Nolë, travaille directement sur ces objets avec vous." },
      { q: "En quoi c’est différent de ChatGPT ou Claude ?", a: "Le chat répond dans un fil. Nolë travaille sur le canvas : il crée une table, complète un document, relie deux sources. Le résultat reste à sa place le lendemain, et vous n’avez rien à réexpliquer : le contexte, c’est ce que vous montrez. [Comparer en détail](/compare/chatgpt)" },
      { q: "Faut-il tout organiser avant de commencer ?", a: "Non. Posez en vrac. La recherche lit le contenu de tout ce que vous déposez, et vous regroupez quand le projet le demande." },
      { q: "Nolë peut-il modifier mon travail sans que je le sache ?", a: "Chaque modification de Nolë est signée dans l’historique du nœud et se restaure en un clic. Nolë agit avec vos droits : sur un canvas que vous ne pouvez que consulter, il répond sans rien modifier." },
      { q: "Quels modèles d’IA ?", a: "Par défaut, le mode Auto choisit le modèle suffisant pour chaque demande (Claude Haiku, Sonnet ou Opus). Vous pouvez aussi choisir Mistral Large. Le coût de chaque message est visible." },
      { q: "Combien ça coûte ?", a: "Rien aujourd’hui, IA comprise, sans carte bancaire. Des formules payantes viendront, avec des engagements écrits dès maintenant. [Voir les tarifs](/pricing)" },
      { q: "Je peux travailler à plusieurs ?", a: "Oui : espaces de travail, droits par canvas, édition en temps réel, publication en lecture seule sur le web." },
      { q: "Et sur téléphone ?", a: "Nolënor s’installe sur mobile pour consulter, chercher et dicter à Nolë. Le vrai travail se fait sur un ordinateur." },
      { q: "Et si Nolënor s’arrête ?", a: "Vous exportez tout en Markdown et JSON, et le code est open source : il peut tourner sans nous." },
    ],
  },
  newsletter: {
    title: "Pas encore le moment ?",
    text: "Recevez le journal de bord : une lettre quand quelque chose de neuf mérite d’être raconté, avec le pourquoi. Rien de plus.",
  },
  close: {
    title: "Posez votre prochain projet sur un canvas.",
    text: "Gratuit aujourd’hui, IA comprise. Sans carte bancaire.",
    secondary: "Lire le manifeste",
  },
};

const en: HomeCopy = {
  meta: {
    title: "Nolënor: the canvas where you work with AI, in plain sight",
    description:
      "Lay out everything a project needs on a canvas. Nolë, the AI agent, works right on it, where you can see it. Free today.",
  },
  hero: {
    eyebrow: "A working canvas with an AI agent built in",
    title: "Your projects don’t fit in a chat.",
    lede:
      "Nolënor is a canvas where you lay out everything a project needs: PDFs, notes, tables, links, recordings. Nolë, its AI agent, works right on it. You see what it reads and what it changes. The work stays yours.",
    demo: "See a real canvas",
    note: "Free today, AI included · No credit card · Export anytime",
    alt: "A Nolënor canvas: documents, tables, links and an app side by side, with Nolë’s panel open",
  },
  problem: {
    eyebrow: "The problem",
    title: "Your tools gave you a job. It wasn’t the right one.",
    intro: "The bigger a project gets, the more the tool makes you work for it.",
    roles: [
      {
        eyebrow: "“Where do I file this?”",
        title: "Archivist",
        text: "Nested pages make you sort before you think. Whatever fits no box ends up forgotten.",
      },
      {
        eyebrow: "“I already explained all this.”",
        title: "Typist",
        text: "A chat only sees what you type. Every new thread, you say it all again, and the right answer is buried three weeks up.",
      },
      {
        eyebrow: "“What did it actually do?”",
        title: "Proofreader",
        text: "The agent that works instead of you hands back a wall of text to review. You no longer know where each number comes from, so you delegate even more.",
      },
    ],
    kicker: "Nolënor gives you your place back: the person doing the work.",
  },
  gestures: {
    eyebrow: "How it works",
    title: "Three gestures. No method to learn.",
    steps: [
      {
        title: "Lay it all down. File nothing.",
        text: "Drop your PDFs, screenshots, links, spreadsheets, a meeting recording. Everything lands on the canvas where you let go. Nolënor reads every file, scans included, the text inside images, and what is said in a recording. You find a sentence without remembering where you put it.",
        bullets: [
          "PDF, Word, Excel and PowerPoint read in place",
          "Text inside screenshots becomes searchable",
          "Audio and video transcribed, with timestamps",
        ],
        media: { ...media.lay, alt: "Files dropped on the canvas become nodes: a document, a table, a PDF, an image" },
      },
      {
        title: "Show it instead of explaining again.",
        text: "Alt+click three nodes, one sentence: *“Compare their prices.”* Nolë reads what you showed it, looks up what’s missing on the web, and drops a table next to them. Not a wall of text to copy: a real table you can sort and correct.",
        bullets: [
          "Context is a gesture: Alt+click or @mention",
          "Nolë creates, links, fills a table, rewrites a paragraph",
          "At the end, the list of nodes it read and changed",
        ],
        media: { ...media.show, alt: "Nodes picked with Alt+click, then Nolë working on the canvas" },
      },
      {
        title: "Stay in charge.",
        text: "Nolë works in plain sight, on the same surface as you. Every change is signed: the history separates what you wrote from what Nolë changed, and any version comes back in one click. Close Nolë’s panel: everything is still there, and everything can be edited by hand.",
        bullets: [
          "A history per node, with Nolë told apart from you",
          "Nolë acts with your permissions, never more",
          "Canvas, tables, search and sharing work without AI",
        ],
        media: { ...media.keep, alt: "A node’s version history: Nolë’s versions and yours, one version selected" },
      },
    ],
  },
  example: {
    eyebrow: "An example",
    title: "A competitive review, from loose pile to table.",
    intro:
      "Hugo is launching an invoicing tool for tradespeople. He has three competitors in mind, screenshots of their pricing pages and two PDF reports. Here is his first hour.",
    headers: ["", "You", "Nolë"],
    rows: [
      ["Lay down", "You drop 6 screenshots, 2 PDFs and a 4-minute voice memo recorded on the train.", "Nothing. Until you ask, Nolë touches nothing."],
      ["Show", "Alt+click the 6 screenshots: *“Make a table: plan, monthly price, free tier limit.”*", "Reads the screenshots and drops a 6-row table next to them."],
      ["Dig in", "You add a column, “What annoys me about them”, and fill it yourself. *“Check these prices on their sites.”*", "Opens the pages, fixes 2 cells. The history shows which ones."],
      ["Decide", "You write your positioning in a document, next to the table.", "Reviews it if you ask. Otherwise, nothing."],
    ],
    outro: "**What’s left at the end**: a table, a document, the sources, and a clear record of who did what.",
  },
  grows: {
    title: "What starts as a pile ends up structured. Same tool.",
    cards: [
      { title: "Documents", text: "Rich notes, edited together, where Nolë rewrites one paragraph without touching the rest." },
      { title: "Tables and databases", text: "Typed columns, with Kanban, Gallery and Timeline views placed alongside." },
      { title: "Custom nodes", text: "A “Candidate”, a “Deal”, a “Property”. You define the fields, Nolë fills them." },
      { title: "Apps", text: "A simulator, a chart, a dashboard, written by Nolë and wired live to your data." },
      { title: "Frames, boards, sub-canvases", text: "Group, fold and nest as the project grows." },
      { title: "Media", text: "Meetings transcribed, images and videos generated, with the price shown first." },
    ],
    more: "Take the product tour",
  },
  audience: {
    title: "For projects that take thinking.",
    cards: [
      { title: "Founders", text: "Research, interviews, spec. Your whole product on one canvas, which your coding agent can read too.", href: "/use-cases/founders", linkLabel: "See the case" },
      { title: "Consultants", text: "One engagement, its sources, its deliverable. Every number stays linked to where it came from.", href: "/use-cases/consultants", linkLabel: "See the case" },
      { title: "Research & synthesis", text: "40 PDFs, 12 interviews, and a synthesis you can defend.", href: "/use-cases/research", linkLabel: "See the case" },
      { title: "Personal projects", text: "Buying a home, a long trip, a yearly budget. Decisions that deserve better than a note.", href: "/use-cases/personal", linkLabel: "See the case" },
    ],
    notFor:
      "**It isn’t for you if** you want an AI that works alone overnight, a whiteboard to run a workshop, or a local markdown notes app.",
  },
  compare: {
    title: "Keep your tools. Give your projects a place.",
    headers: ["", "Great for", "Less good for"],
    rows: [
      ["An AI chat (ChatGPT, Claude)", "A question, a draft, an idea to explore", "A project lasting weeks: context gets lost from one thread to the next"],
      ["A wiki (Notion)", "Documentation for an established team", "Messy thinking: you have to file first"],
      ["A whiteboard (Miro)", "A workshop with several people", "Deep work: sticky notes, not data"],
      ["**Nolënor**", "**A long project, with lots of material, done with AI**", "A knowledge base for 200 people (not yet)"],
    ],
    more: "Compare in detail",
  },
  trust: {
    title: "Built in the open.",
    cards: [
      { title: "Made by someone who uses it", text: "Antoine Aymard builds Nolënor from Brittany, France. The research, the specs and this website were thought through on Nolënor canvases.", href: "/about", linkLabel: "About" },
      { title: "Open source", text: "AGPL-3.0 licence, on GitHub. You can read every line, and host it yourself." },
      { title: "Your data leaves when you want", text: "Markdown and JSON export for every canvas, CSV for tables. And an MCP server to work on it from Claude or Cursor." },
      { title: "A price written down before it applies", text: "Free today. For what comes next, our commitments are public.", href: "/pricing", linkLabel: "See pricing" },
    ],
  },
  faq: {
    title: "Questions",
    items: [
      { q: "What is Nolënor, in one sentence?", a: "An infinite canvas where every part of a project is a real object (document, table, PDF, app), and where an AI agent, Nolë, works directly on those objects with you." },
      { q: "How is it different from ChatGPT or Claude?", a: "A chat answers in a thread. Nolë works on the canvas: it creates a table, completes a document, links two sources. The result is still in its place tomorrow, and there’s nothing to explain again: the context is what you show. [Compare in detail](/compare/chatgpt)" },
      { q: "Do I need to organise everything first?", a: "No. Drop things in a pile. Search reads the content of everything you drop, and you group things when the project calls for it." },
      { q: "Can Nolë change my work without me knowing?", a: "Every change Nolë makes is signed in the node’s history and can be restored in one click. Nolë acts with your permissions: on a canvas you can only view, it answers without changing anything." },
      { q: "Which AI models?", a: "By default, Auto mode picks the model that’s enough for each request (Claude Haiku, Sonnet or Opus). You can also pick Mistral Large. The cost of every message is shown." },
      { q: "How much does it cost?", a: "Nothing today, AI included, no credit card. Paid plans will come, with commitments written down now. [See pricing](/pricing)" },
      { q: "Can I work with others?", a: "Yes: workspaces, per-canvas permissions, real-time editing, read-only publishing on the web." },
      { q: "What about my phone?", a: "Nolënor installs on mobile to view, search and dictate to Nolë. The real work happens on a computer." },
      { q: "What if Nolënor shuts down?", a: "You export everything as Markdown and JSON, and the code is open source: it can run without us." },
    ],
  },
  newsletter: {
    title: "Not the right time yet?",
    text: "Get the workshop log: a letter when something new is worth telling, with the why behind it. Nothing more.",
  },
  close: {
    title: "Put your next project on a canvas.",
    text: "Free today, AI included. No credit card.",
    secondary: "Read the manifesto",
  },
};

export const home: Record<Lang, HomeCopy> = { en, fr };

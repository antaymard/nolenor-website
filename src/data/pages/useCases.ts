import type { Lang } from "@/i18n";
import type { Card, FaqItem } from "@/components/site/types";

// Copy of the use-case pages: the hub (/use-cases) and one page per case
// (/use-cases/<slug>). The French is the master (written in the "Refonte du
// site" zone of the Go To Market canvas); the English follows it.

export const useCaseSlugs = ["founders", "consultants", "research", "personal"] as const;
export type UseCaseSlug = (typeof useCaseSlugs)[number];

export interface UseCasesHubCopy {
  meta: { title: string; description: string };
  hero: { eyebrow: string; title: string; lede: string };
  doors: Card[];
  close: { title: string; text: string };
}

export interface UseCaseCopy {
  meta: { title: string; description: string };
  hero: { eyebrow: string; title: string; lede: string; demo: string };
  /** The pain, as people live it today. */
  today: { title: string; text: string };
  /** The canvas: its zones as cards, or (personal) a described example. */
  canvas: { eyebrow?: string; title: string; intro?: string; zones?: Card[]; text?: string };
  steps: { title: string; headers: string[]; rows: string[][] };
  /** "What's left at the end", shown as the section's closing line. */
  left: string;
  proof?: string;
  faq?: { title: string; items: FaqItem[] };
  close: { title: string; text: string };
}

const closeFr = {
  title: "Posez votre prochain projet sur un canvas.",
  text: "Gratuit aujourd’hui, IA comprise. Sans carte bancaire.",
};
const closeEn = {
  title: "Put your next project on a canvas.",
  text: "Free today, AI included. No credit card.",
};

const headersFr = ["Étape", "Vous", "Nolë", "Vous vérifiez"];
const headersEn = ["Step", "You", "Nolë", "You check"];

export const useCasesHub: Record<Lang, UseCasesHubCopy> = {
  fr: {
    meta: {
      title: "Cas d’usage · Nolënor",
      description:
        "Un canvas par projet. Fondateurs, consultants, recherche et synthèse, projets perso : quatre façons de se servir de Nolënor.",
    },
    hero: {
      eyebrow: "Cas d’usage",
      title: "Un canvas par projet. Quatre façons de s’en servir.",
      lede:
        "Le point commun : un projet qui dure, beaucoup de matière, et des choix à faire. Choisissez la porte la plus proche de votre travail.",
    },
    doors: [
      { title: "Fondateurs", text: "Votre produit entier sur un canvas. Votre agent de code compris.", href: "/use-cases/founders", linkLabel: "Voir le cas" },
      { title: "Consultants", text: "Une mission, ses sources, son livrable. Au même endroit.", href: "/use-cases/consultants", linkLabel: "Voir le cas" },
      { title: "Recherche & synthèse", text: "40 PDF, 12 entretiens. Une synthèse que vous pouvez défendre.", href: "/use-cases/research", linkLabel: "Voir le cas" },
      { title: "Projets perso", text: "Les grandes décisions méritent mieux qu’une note dans le téléphone.", href: "/use-cases/personal", linkLabel: "Voir le cas" },
    ],
    close: closeFr,
  },
  en: {
    meta: {
      title: "Use cases · Nolënor",
      description:
        "One canvas per project. Founders, consultants, research and synthesis, personal projects: four ways to use Nolënor.",
    },
    hero: {
      eyebrow: "Use cases",
      title: "One canvas per project. Four ways to use it.",
      lede:
        "What they have in common: a project that lasts, a lot of material, and choices to make. Pick the door closest to your work.",
    },
    doors: [
      { title: "Founders", text: "Your whole product on one canvas. Your coding agent included.", href: "/use-cases/founders", linkLabel: "See the case" },
      { title: "Consultants", text: "One engagement, its sources, its deliverable. All in one place.", href: "/use-cases/consultants", linkLabel: "See the case" },
      { title: "Research & synthesis", text: "40 PDFs, 12 interviews. A synthesis you can defend.", href: "/use-cases/research", linkLabel: "See the case" },
      { title: "Personal projects", text: "Big decisions deserve better than a note on your phone.", href: "/use-cases/personal", linkLabel: "See the case" },
    ],
    close: closeEn,
  },
};

export const useCases: Record<UseCaseSlug, Record<Lang, UseCaseCopy>> = {
  founders: {
    fr: {
      meta: {
        title: "Pour les fondateurs · Nolënor",
        description:
          "Veille, entretiens, spec, lancement : tout votre produit sur un canvas, avec un agent IA qui travaille sous vos yeux et un serveur MCP pour votre agent de code.",
      },
      hero: {
        eyebrow: "Pour les fondateurs",
        title: "Votre produit entier sur un canvas. Votre agent de code compris.",
        lede:
          "Veille concurrentielle, entretiens utilisateurs, spec, lancement : tout ce qui fait votre produit au même endroit, avec Nolë pour le travail de fond. Et Claude Code ou Cursor lisent la spec directement sur le canvas.",
        demo: "Voir ce canvas en vrai",
      },
      today: {
        title: "Aujourd’hui",
        text: "La spec dans Notion, les concurrents dans un tableur, quinze fils ChatGPT, des captures sur le bureau, les entretiens quelque part dans Zoom. Chaque nouvelle conversation commence par *« Pour rappel, mon produit… »*.",
      },
      canvas: {
        title: "Le canvas",
        intro: "Quatre frames.",
        zones: [
          { title: "Marché", text: "Captures, table comparative." },
          { title: "Utilisateurs", text: "Entretiens transcrits, database Retours en vue Kanban." },
          { title: "Produit", text: "La spec, la table des tâches." },
          { title: "Lancement", text: "Posts, visuels." },
        ],
      },
      steps: {
        title: "Étape par étape",
        headers: headersFr,
        rows: [
          ["Veille", "Vous glissez les captures des pages de tarifs et les URL des concurrents.", "Pose une table comparative et vérifie les prix sur leurs sites.", "Les cellules changées, dans l’historique."],
          ["Entretiens", "Vous enregistrez l’appel (touche R) ou déposez l’audio, puis lancez la transcription.", "Ajoute chaque problème cité à la database Retours, avec la minute.", "Un clic sur la minute, vous réécoutez."],
          ["Spec", "Vous écrivez la spec dans un document.", "Complète les cas limites que vous lui montrez.", "Le diff, bloc par bloc."],
          ["Code", "Votre agent de code se connecte en MCP.", "—", "Il lit la spec et passe la tâche à « Fait » dans la table."],
          ["Lancement", "Vous écrivez le post.", "Génère trois visuels à partir de vos captures, au prix affiché.", "Vous gardez celui qui vous ressemble."],
        ],
      },
      left: "Ce qui reste à la fin : un produit dont toute l’histoire est lisible. Six mois plus tard, la phrase de l’entretien n°7 se retrouve en Ctrl+K.",
      proof: "**La preuve** : Nolënor se construit comme ça. La veille, les specs et ce site vivent sur des canvas Nolënor.",
      faq: {
        title: "Questions",
        items: [
          { q: "Mon agent de code peut-il écrire sur le canvas ?", a: "Oui, avec un jeton en écriture. Il agit avec vos droits, et ses modifications sont versionnées. [Développeurs →](/developers)" },
          { q: "Ça remplace Linear ou Jira ?", a: "Non. Pour un fondateur seul, une table ou un kanban suffit souvent. Pour une équipe d’ingénieurs, gardez votre outil de tickets." },
        ],
      },
      close: closeFr,
    },
    en: {
      meta: {
        title: "For founders · Nolënor",
        description:
          "Market research, interviews, spec, launch: your whole product on one canvas, with an AI agent that works where you can see it and an MCP server for your coding agent.",
      },
      hero: {
        eyebrow: "For founders",
        title: "Your whole product on one canvas. Your coding agent included.",
        lede:
          "Competitor research, user interviews, spec, launch: everything that makes up your product in one place, with Nolë for the groundwork. And Claude Code or Cursor read the spec straight from the canvas.",
        demo: "See this canvas for real",
      },
      today: {
        title: "Today",
        text: "The spec in Notion, competitors in a spreadsheet, fifteen ChatGPT threads, screenshots on your desktop, interviews somewhere in Zoom. Every new conversation starts with *“Quick reminder: my product…”*",
      },
      canvas: {
        title: "The canvas",
        intro: "Four frames.",
        zones: [
          { title: "Market", text: "Screenshots, a comparison table." },
          { title: "Users", text: "Transcribed interviews, a Feedback database in Kanban view." },
          { title: "Product", text: "The spec, the task table." },
          { title: "Launch", text: "Posts, visuals." },
        ],
      },
      steps: {
        title: "Step by step",
        headers: headersEn,
        rows: [
          ["Research", "You drop in screenshots of competitors’ pricing pages, and their URLs.", "Sets up a comparison table and checks the prices on their sites.", "The changed cells, in the history."],
          ["Interviews", "You record the call (R key) or drop in the audio, then start the transcription.", "Adds every problem mentioned to the Feedback database, with the minute.", "One click on the minute and you hear it again."],
          ["Spec", "You write the spec in a document.", "Fills in the edge cases you point it to.", "The diff, block by block."],
          ["Code", "Your coding agent connects over MCP.", "—", "It reads the spec and moves the task to “Done” in the table."],
          ["Launch", "You write the post.", "Generates three visuals from your screenshots, at the price shown.", "You keep the one that feels like you."],
        ],
      },
      left: "What’s left at the end: a product whose whole history you can read. Six months later, the quote from interview #7 is one Ctrl+K away.",
      proof: "**The proof**: Nolënor is built this way. The research, the specs and this website live on Nolënor canvases.",
      faq: {
        title: "Questions",
        items: [
          { q: "Can my coding agent write on the canvas?", a: "Yes, with a write token. It acts with your permissions, and its changes are versioned. [Developers →](/developers)" },
          { q: "Does it replace Linear or Jira?", a: "No. For a solo founder, a table or a kanban board is often enough. For a team of engineers, keep your ticketing tool." },
        ],
      },
      close: closeEn,
    },
  },

  consultants: {
    fr: {
      meta: {
        title: "Pour les consultants · Nolënor",
        description:
          "Le brief, les rapports, les entretiens et le livrable d’une mission sur un même canvas. Nolë fait les relevés, chaque chiffre reste relié à sa source.",
      },
      hero: {
        eyebrow: "Pour les consultants",
        title: "Une mission, ses sources, son livrable. Au même endroit.",
        lede:
          "Posez le brief, les rapports et les comptes rendus. Construisez votre analyse avec Nolë, et gardez chaque chiffre relié à son origine. Le jour du rendu, vous savez d’où vient tout.",
        demo: "Voir ce canvas en vrai",
      },
      today: {
        title: "Aujourd’hui",
        text: "ChatGPT pour défricher, Google Docs pour rédiger, Miro pour l’atelier, un dossier de PDF. Et la veille du comité : *« D’où sort ce chiffre, déjà ? »*",
      },
      canvas: {
        title: "Le canvas",
        zones: [
          { title: "Brief", text: "La demande du client, vos hypothèses." },
          { title: "Sources", text: "Rapports annuels, études, liens." },
          { title: "Analyse", text: "Une table par question, une matrice 2×2 en board." },
          { title: "Livrable", text: "Le document de synthèse." },
        ],
      },
      steps: {
        title: "Étape par étape",
        headers: headersFr,
        rows: [
          ["Cadrer", "Vous posez le brief et votre grille en titres : régulation, modèles économiques, risques.", "Rien.", "—"],
          ["Défricher", "*« Cartographie les acteurs du paiement fractionné en Europe, un nœud par acteur, avec la source. »*", "Cherche sur le web, pose un nœud par acteur avec ses liens.", "Vous retirez ceux qui ne comptent pas."],
          ["Approfondir", "Alt+clic sur un rapport annuel de 140 pages : *« Les chiffres clés dans la table. »*", "Lit le PDF, remplit la ligne.", "Le PDF ouvert à côté, page par page."],
          ["Synthétiser", "Vous écrivez la synthèse.", "Reformule un paragraphe quand vous le demandez.", "Votre version reste dans l’historique."],
          ["Rendre", "Vous publiez le canvas en lecture seule pour le client, ou exportez en Markdown vers votre gabarit.", "—", "—"],
        ],
      },
      left: "Ce qui reste à la fin : un livrable que vous avez écrit, et un canvas qui montre le chemin. Utile pour la soutenance, et pour la mission suivante.",
      faq: {
        title: "Questions",
        items: [
          { q: "Et la confidentialité des données client ?", a: "Vos canvas sont privés par défaut, les droits se règlent canvas par canvas, et Nolë n’a jamais plus de droits que vous. Pour les dossiers les plus sensibles, le code est open source et s’héberge chez vous." },
          { q: "Nolënor fait-il mes slides ?", a: "Non. Vous exportez en Markdown vers votre outil de présentation, ou partagez le canvas." },
        ],
      },
      close: closeFr,
    },
    en: {
      meta: {
        title: "For consultants · Nolënor",
        description:
          "The brief, reports, interviews and deliverable of an engagement on one canvas. Nolë pulls out the figures, and every number stays linked to its source.",
      },
      hero: {
        eyebrow: "For consultants",
        title: "One engagement, its sources, its deliverable. All in one place.",
        lede:
          "Lay out the brief, the reports and the meeting notes. Build your analysis with Nolë, and keep every number linked to where it came from. On delivery day, you know where everything comes from.",
        demo: "See this canvas for real",
      },
      today: {
        title: "Today",
        text: "ChatGPT to explore, Google Docs to write, Miro for the workshop, a folder of PDFs. And the night before the steering committee: *“Where did this number come from again?”*",
      },
      canvas: {
        title: "The canvas",
        zones: [
          { title: "Brief", text: "The client’s request, your hypotheses." },
          { title: "Sources", text: "Annual reports, studies, links." },
          { title: "Analysis", text: "One table per question, a 2×2 matrix on a board." },
          { title: "Deliverable", text: "The summary document." },
        ],
      },
      steps: {
        title: "Step by step",
        headers: headersEn,
        rows: [
          ["Frame", "You lay out the brief and your framework as headings: regulation, business models, risks.", "Nothing.", "—"],
          ["Explore", "*“Map the buy-now-pay-later players in Europe, one node per player, with the source.”*", "Searches the web, adds one node per player with its links.", "You remove the ones that don’t matter."],
          ["Dig in", "Alt+click on a 140-page annual report: *“The key figures in the table.”*", "Reads the PDF, fills in the row.", "The PDF open alongside, page by page."],
          ["Synthesise", "You write the synthesis.", "Rewords a paragraph when you ask.", "Your version stays in the history."],
          ["Deliver", "You publish the canvas read-only for the client, or export it as Markdown into your template.", "—", "—"],
        ],
      },
      left: "What’s left at the end: a deliverable you wrote, and a canvas that shows how you got there. Useful for the final presentation, and for the next engagement.",
      faq: {
        title: "Questions",
        items: [
          { q: "What about client confidentiality?", a: "Your canvases are private by default, permissions are set canvas by canvas, and Nolë never has more permissions than you. For the most sensitive work, the code is open source and you can host it yourself." },
          { q: "Does Nolënor make my slides?", a: "No. You export to Markdown for your presentation tool, or share the canvas." },
        ],
      },
      close: closeEn,
    },
  },

  research: {
    fr: {
      meta: {
        title: "Pour la recherche et la synthèse · Nolënor",
        description:
          "Déposez vos PDF, scans et enregistrements tels quels. Nolënor les lit tous, Nolë fait les relevés, vous construisez l’argument.",
      },
      hero: {
        eyebrow: "Pour la recherche et la synthèse",
        title: "40 PDF, 12 entretiens. Une synthèse que vous pouvez défendre.",
        lede:
          "Déposez vos sources telles quelles. Nolënor les lit toutes, scans et enregistrements compris. Vous construisez l’argument ; Nolë fait les relevés, et vous montre où il les a pris.",
        demo: "Voir ce canvas en vrai",
      },
      today: {
        title: "Aujourd’hui",
        text: "Des dossiers de PDF, des notes éparpillées, les transcriptions dans un autre outil. Et cette phrase : *« Je sais que je l’ai lu quelque part. »*",
      },
      canvas: {
        title: "Le canvas",
        zones: [
          { title: "Corpus", text: "Les PDF, en vrac." },
          { title: "Terrain", text: "Les entretiens enregistrés et transcrits." },
          { title: "Relevés", text: "Une table thème / source / passage." },
          { title: "Synthèse", text: "Le document que vous écrivez." },
        ],
      },
      steps: {
        title: "Étape par étape",
        headers: headersFr,
        rows: [
          ["Déposer", "Vous glissez 40 PDF, dont des scans.", "Rien. La recherche les indexe, OCR compris.", "Ctrl+K sur une phrase que vous connaissez."],
          ["Transcrire", "Vous déposez 12 entretiens et lancez la transcription.", "Rien : la transcription produit le texte horodaté, le résumé et les chapitres.", "Vous corrigez un nom mal entendu."],
          ["Relever", "Vous posez 4 thèmes. *« Pour chaque entretien, les passages sur ces thèmes, avec la minute. »*", "Remplit la table des relevés.", "Un clic sur la minute, vous réécoutez."],
          ["Croiser", "*« Qu’est-ce qui revient dans les PDF et pas dans les entretiens ? »*", "Propose une liste, chaque point relié à ses sources.", "Vous gardez ce qui tient."],
          ["Écrire", "Vous écrivez la synthèse.", "Relit, signale les affirmations sans source dans la table.", "—"],
        ],
      },
      left: "Ce qui reste à la fin : une synthèse dont chaque affirmation se remonte jusqu’à son passage.",
      faq: {
        title: "Questions",
        items: [
          { q: "Gère-t-il une bibliographie ?", a: "Non, ce n’est pas un gestionnaire de références. Gardez Zotero pour les citations formatées." },
          { q: "Les PDF scannés ?", a: "Oui, ils passent par l’OCR. Le texte visible dans les images est cherchable aussi." },
        ],
      },
      close: closeFr,
    },
    en: {
      meta: {
        title: "For research and synthesis · Nolënor",
        description:
          "Drop in your PDFs, scans and recordings as they are. Nolënor reads them all, Nolë pulls out the passages, and you build the argument.",
      },
      hero: {
        eyebrow: "For research and synthesis",
        title: "40 PDFs, 12 interviews. A synthesis you can defend.",
        lede:
          "Drop in your sources as they are. Nolënor reads every one of them, scans and recordings included. You build the argument; Nolë pulls out the passages, and shows you where it found them.",
        demo: "See this canvas for real",
      },
      today: {
        title: "Today",
        text: "Folders of PDFs, scattered notes, transcripts in another tool. And that familiar line: *“I know I read it somewhere.”*",
      },
      canvas: {
        title: "The canvas",
        zones: [
          { title: "Corpus", text: "The PDFs, in a pile." },
          { title: "Fieldwork", text: "The interviews, recorded and transcribed." },
          { title: "Extracts", text: "A theme / source / passage table." },
          { title: "Synthesis", text: "The document you write." },
        ],
      },
      steps: {
        title: "Step by step",
        headers: headersEn,
        rows: [
          ["Drop", "You drag in 40 PDFs, some of them scans.", "Nothing. Search indexes them, OCR included.", "Ctrl+K on a sentence you know."],
          ["Transcribe", "You drop in 12 interviews and start the transcription.", "Nothing: the transcription produces the timestamped text, the summary and the chapters.", "You fix a misheard name."],
          ["Extract", "You set 4 themes. *“For each interview, the passages on these themes, with the minute.”*", "Fills in the extracts table.", "One click on the minute and you hear it again."],
          ["Cross-check", "*“What comes up in the PDFs but not in the interviews?”*", "Suggests a list, each point linked to its sources.", "You keep what holds up."],
          ["Write", "You write the synthesis.", "Reads it over and flags unsourced claims in the table.", "—"],
        ],
      },
      left: "What’s left at the end: a synthesis where every claim traces back to its passage.",
      faq: {
        title: "Questions",
        items: [
          { q: "Does it manage a bibliography?", a: "No, it isn’t a reference manager. Keep Zotero for formatted citations." },
          { q: "What about scanned PDFs?", a: "Yes, they go through OCR. Text visible in images is searchable too." },
        ],
      },
      close: closeEn,
    },
  },

  personal: {
    fr: {
      meta: {
        title: "Pour les projets perso · Nolënor",
        description:
          "Un achat immobilier, un déménagement, un budget : posez annonces, devis et PDF sur un canvas. Nolë compare et calcule, vous décidez.",
      },
      hero: {
        eyebrow: "Pour les projets perso",
        title: "Les grandes décisions méritent mieux qu’une note dans le téléphone.",
        lede:
          "Un achat immobilier, un déménagement, un grand voyage, le budget de l’année : posez les annonces, les devis, les PDF et vos questions sur un canvas. Nolë compare, calcule, et vous décidez, à deux si besoin.",
        demo: "Voir ce canvas en vrai",
      },
      today: {
        title: "Aujourd’hui",
        text: "Des onglets ouverts depuis trois semaines, des captures d’annonces, un tableur commencé puis abandonné, et un fil WhatsApp avec votre conjoint.",
      },
      canvas: {
        eyebrow: "Un vrai canvas",
        title: "L’exemple",
        text: "Un investissement locatif. Les annonces en liens, les diagnostics en PDF, une fiche par bien, une table de scénarios et un simulateur.",
      },
      steps: {
        title: "Étape par étape",
        headers: headersFr,
        rows: [
          ["Rassembler", "Vous collez les liens des annonces et glissez les diagnostics.", "Rien. Chaque lien s’affiche avec son aperçu.", "—"],
          ["Comparer", "*« Fais une fiche par bien : prix, surface, DPE, charges, quartier. »*", "Crée un type « Bien » et remplit une fiche par annonce.", "Vous corrigez la surface mal lue."],
          ["Calculer", "Alt+clic sur la table de scénarios : *« Un simulateur avec des curseurs pour le loyer, le taux, le montant et la durée. »*", "Construit l’app, branchée sur la table.", "Vous bougez un curseur, la mensualité suit."],
          ["Décider à deux", "Vous invitez votre conjoint (Peut modifier).", "—", "Vous voyez ses modifications en direct."],
        ],
      },
      left: "Ce qui reste à la fin : une décision dont vous connaissez toutes les raisons.",
      close: closeFr,
    },
    en: {
      meta: {
        title: "For personal projects · Nolënor",
        description:
          "Buying a home, moving, a budget: put listings, quotes and PDFs on a canvas. Nolë compares and calculates, you decide.",
      },
      hero: {
        eyebrow: "For personal projects",
        title: "Big decisions deserve better than a note on your phone.",
        lede:
          "Buying a home, moving, a big trip, the year’s budget: put the listings, the quotes, the PDFs and your questions on a canvas. Nolë compares and calculates, and you decide, together if you need to.",
        demo: "See this canvas for real",
      },
      today: {
        title: "Today",
        text: "Tabs open for three weeks, screenshots of listings, a spreadsheet started then abandoned, and a WhatsApp thread with your partner.",
      },
      canvas: {
        eyebrow: "A real canvas",
        title: "The example",
        text: "A rental investment. The listings as links, the property inspection reports as PDFs, one card per property, a scenarios table and a simulator.",
      },
      steps: {
        title: "Step by step",
        headers: headersEn,
        rows: [
          ["Gather", "You paste the listing links and drag in the inspection reports.", "Nothing. Each link shows up with its preview.", "—"],
          ["Compare", "*“Make one card per property: price, floor area, energy rating, service charges, neighbourhood.”*", "Creates a “Property” type and fills in one card per listing.", "You fix the floor area it misread."],
          ["Calculate", "Alt+click on the scenarios table: *“A simulator with sliders for the rent, the rate, the amount and the term.”*", "Builds the app, connected to the table.", "You move a slider, and the monthly payment follows."],
          ["Decide together", "You invite your partner (Can edit).", "—", "You see their changes live."],
        ],
      },
      left: "What’s left at the end: a decision you know every reason for.",
      close: closeEn,
    },
  },
};

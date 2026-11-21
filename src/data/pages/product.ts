import type { Lang } from "@/i18n";

export interface Chapter {
  id: string;
  eyebrow: string;
  title: string;
  intro: string;
  items: string[];
  more?: { label: string; href: string };
}

export interface ProductCopy {
  meta: { title: string; description: string };
  hero: { eyebrow: string; title: string; lede: string; demo: string; note: string; tocLabel: string };
  chapters: Chapter[];
  notYet: { eyebrow: string; title: string; intro: string; items: string[] };
  close: { title: string; text: string };
}

const fr: ProductCopy = {
  meta: {
    title: "Le produit · Nolënor",
    description:
      "Documents, tables, PDF, apps et un agent IA sur le même canvas. Tout ce que fait Nolënor aujourd’hui, et ce qu’il ne fait pas encore.",
  },
  hero: {
    eyebrow: "Le produit",
    title: "Tout ce que fait Nolënor. Et ce qu’il ne fait pas encore.",
    lede: "Une visite en sept chapitres, sans superlatifs. Tout ce qui est décrit ici est en ligne aujourd’hui.",
    demo: "Voir un vrai canvas",
    note: "Gratuit aujourd’hui, IA comprise · Sans carte bancaire",
    tocLabel: "Sommaire",
  },
  chapters: [
    {
      id: "canvas",
      eyebrow: "1 · Le canvas",
      title: "Une surface où chaque chose est un vrai objet.",
      intro:
        "Sur un tableau blanc, tout est post-it. Sur Nolënor, un PDF reste un PDF qu’on lit sur place, une table reste une table qu’on trie, une note reste un document qu’on édite à plusieurs.",
      items: [
        "**17 types de nœuds** : document, table, database, image, audio, vidéo, fichier, lien, valeur, app, titre, frame, board, sous-canvas, raccourci, nœud sur mesure.",
        "**Fichiers lus sur place** : PDF, Word en pages, Excel et CSV en grille, PowerPoint en diapositives.",
        "**Glisser, coller, enregistrer** : un fichier, une URL, un CSV qui devient une table. Touche R pour un mémo vocal, même pour une réunion de plusieurs heures.",
        "**Ranger plus tard, si besoin** : frames repliables, boards en colonnes (une carte dans « Fait » est faite), sous-canvas avec fil d’Ariane.",
        "**Travailler confortablement** : fenêtres en onglets, jusqu’à 4 côte à côte, palette de commandes Ctrl+P, signets sur une vue.",
      ],
    },
    {
      id: "search",
      eyebrow: "2 · Retrouver",
      title: "Rien ne se perd. Pas même ce qui est dit dans un audio.",
      intro:
        "Ctrl+K cherche dans le canvas ou dans tout l’espace de travail, par mots-clés et par sens. Et la recherche lit vraiment le contenu.",
      items: [
        "**PDF, scans compris** (OCR), Word, PowerPoint, cellules Excel.",
        "**Le texte visible dans vos images** : une capture d’écran se retrouve par ce qu’elle montre.",
        "**Audios et vidéos** : transcription à la demande, texte horodaté cliquable, résumé et chapitres, export .srt, .vtt ou .md.",
        "**Les pages web** de vos liens, résumées et indexées.",
      ],
    },
    {
      id: "data",
      eyebrow: "3 · Les données",
      title: "Des tables qui se comportent comme des tables.",
      intro: "Quand le vrac devient une liste, la liste devient une table. Sans quitter le canvas.",
      items: [
        "**Tables typées** : texte, nombre, date, statut, choix, URL, fichier… Tri, filtres, import et export CSV.",
        "**Databases** : une collection de fiches, avec des vues Table, Kanban, Galerie et Timeline posées comme des nœuds à côté. On déplace une barre de la timeline, la date change.",
        "**Nœuds sur mesure** : définissez un type (« Candidat », « Deal », « Bien à visiter ») avec ses champs, une carte pour le canvas et une fiche pour le détail.",
        "**Une ligne sur le canvas** : projetez une fiche de la database sur le canvas. Elle reste synchronisée.",
      ],
    },
    {
      id: "apps",
      eyebrow: "4 · Les apps",
      title: "De petites apps, branchées sur vos données.",
      intro:
        "Demandez à Nolë un simulateur, un graphique ou un tableau de bord. Il écrit l’app, qui s’affiche sur le canvas et lit **en direct** les nœuds que vous lui reliez. Modifiez une cellule, le graphique suit.",
      items: [
        "Un curseur pilote un calcul ; un kanban dans l’app met à jour le statut dans la table.",
        "L’app tourne isolée dans le canvas, avec un état qui persiste.",
        "Son code est versionné, et téléchargeable.",
        "Exemple réel : un simulateur d’investissement locatif (loyer, taux, montant, durée) relié à une table de scénarios.",
      ],
    },
    {
      id: "nole",
      eyebrow: "5 · Nolë",
      title: "Un agent qui travaille sur le canvas, pas à côté.",
      intro:
        "Nolë ne répond pas par un pavé : il agit sur les objets. Vous lui montrez quoi regarder d’un Alt+clic, et vous voyez ce qu’il a lu et modifié.",
      items: [
        "Il crée et relie des nœuds, réécrit un paragraphe sans toucher au reste, remplit une table, construit une app.",
        "Il cherche sur le web, lit des pages, génère des images et des vidéos.",
        "Il peut continuer en arrière-plan pendant que vous travaillez ailleurs.",
        "Chacune de ses modifications est signée dans l’historique.",
      ],
      more: { label: "Tout savoir sur Nolë", href: "/nole" },
    },
    {
      id: "share",
      eyebrow: "6 · Partager",
      title: "Seul d’abord. À plusieurs quand il faut.",
      intro: "Nolënor se pense d’abord pour une personne, et s’ouvre aux autres sans changer d’outil.",
      items: [
        "**Espaces de travail** avec rôles Admin, Membre, Invité.",
        "**Droits par canvas** : accès complet, peut modifier, peut voir. Ils se transmettent aux sous-canvas.",
        "**Invitations par email**, même à quelqu’un qui n’a pas encore de compte.",
        "**Temps réel** : on voit qui est sur le canvas, les modifications arrivent en direct, y compris celles de Nolë.",
        "**Publication sur le web** en lecture seule, sans compte pour le lecteur.",
      ],
    },
    {
      id: "free",
      eyebrow: "7 · Rester libre",
      title: "Votre travail ne dépend ni de l’IA, ni de nous.",
      intro: "L’IA s’ajoute au canvas ; elle n’en tient pas la structure. Et rien ne vous retient.",
      items: [
        "**Sans IA, tout marche** : canvas, documents, tables, recherche, partage, versions.",
        "**Historique par nœud** : chaque version garde son auteur, vous ou Nolë, avec les différences surlignées. 30 jours d’historique, versions nommées conservées.",
        "**Export** : un zip par canvas, en Markdown et JSON ; CSV pour les tables ; transcriptions en .srt ou .md.",
        "**Serveur MCP** : Claude, Cursor ou tout client MCP lit et écrit vos canvas, avec vos droits.",
        "**Open source** : code sous licence AGPL-3.0, hébergeable chez vous.",
        "**Mobile** : installable sur téléphone pour consulter, chercher et dicter à Nolë.",
      ],
      more: { label: "Développeurs", href: "/developers" },
    },
  ],
  notYet: {
    eyebrow: "Pas encore",
    title: "Ce qui n’existe pas encore.",
    intro: "On préfère vous le dire ici que vous le découvrir après l’inscription.",
    items: [
      "**Automatisations** : Nolë ne se programme pas encore à heure fixe. Il travaille quand vous le lui demandez.",
      "**Commentaires** et curseurs des collaborateurs.",
      "**Dupliquer un canvas** et partir d’un modèle.",
      "**Importer depuis Notion.**",
      "**Offre équipe** : SSO, facturation au siège, contrat de traitement des données.",
      "**Application native** et mode hors ligne.",
    ],
  },
  close: { title: "Le plus simple, c’est d’essayer.", text: "Gratuit aujourd’hui, IA comprise. Sans carte bancaire." },
};

const en: ProductCopy = {
  meta: {
    title: "The product · Nolënor",
    description:
      "Documents, tables, PDFs, apps and an AI agent on the same canvas. Everything Nolënor does today, and what it doesn’t do yet.",
  },
  hero: {
    eyebrow: "The product",
    title: "Everything Nolënor does. And what it doesn’t do yet.",
    lede: "A tour in seven chapters, without superlatives. Everything described here is live today.",
    demo: "See a real canvas",
    note: "Free today, AI included · No credit card",
    tocLabel: "Contents",
  },
  chapters: [
    {
      id: "canvas",
      eyebrow: "1 · The canvas",
      title: "A surface where everything is a real object.",
      intro:
        "On a whiteboard, everything is a sticky note. On Nolënor, a PDF stays a PDF you read in place, a table stays a table you sort, a note stays a document you edit together.",
      items: [
        "**17 node types**: document, table, database, image, audio, video, file, link, value, app, title, frame, board, sub-canvas, shortcut, custom node.",
        "**Files read in place**: PDFs, Word as pages, Excel and CSV as a grid, PowerPoint as slides.",
        "**Drop, paste, record**: a file, a URL, a CSV that becomes a table. Press R for a voice memo, even for a meeting several hours long.",
        "**Tidy up later, if ever**: foldable frames, column boards (a card in “Done” is done), sub-canvases with breadcrumbs.",
        "**Work comfortably**: tabbed windows, up to 4 side by side, a Ctrl+P command palette, bookmarks on a view.",
      ],
    },
    {
      id: "search",
      eyebrow: "2 · Find",
      title: "Nothing gets lost. Not even what’s said in a recording.",
      intro: "Ctrl+K searches the canvas or the whole workspace, by keyword and by meaning. And search actually reads the content.",
      items: [
        "**PDFs, scans included** (OCR), Word, PowerPoint, Excel cells.",
        "**Text visible in your images**: a screenshot can be found by what it shows.",
        "**Audio and video**: transcription on demand, clickable timestamped text, summary and chapters, export as .srt, .vtt or .md.",
        "**The web pages** behind your links, summarised and indexed.",
      ],
    },
    {
      id: "data",
      eyebrow: "3 · Data",
      title: "Tables that behave like tables.",
      intro: "When the pile becomes a list, the list becomes a table. Without leaving the canvas.",
      items: [
        "**Typed tables**: text, number, date, status, select, URL, file… Sort, filters, CSV import and export.",
        "**Databases**: a collection of records, with Table, Kanban, Gallery and Timeline views placed as nodes alongside. Drag a bar on the timeline, the date changes.",
        "**Custom nodes**: define a type (“Candidate”, “Deal”, “Property to visit”) with its fields, a card for the canvas and a page for the details.",
        "**A row on the canvas**: project a database record onto the canvas. It stays in sync.",
      ],
    },
    {
      id: "apps",
      eyebrow: "4 · Apps",
      title: "Small apps, wired to your data.",
      intro:
        "Ask Nolë for a simulator, a chart or a dashboard. It writes the app, which shows on the canvas and reads the nodes you connect to it **live**. Change a cell, the chart follows.",
      items: [
        "A slider drives a calculation; a kanban inside the app updates the status in the table.",
        "The app runs sandboxed on the canvas, with state that persists.",
        "Its code is versioned, and downloadable.",
        "A real example: a rental investment simulator (rent, rate, amount, duration) wired to a table of scenarios.",
      ],
    },
    {
      id: "nole",
      eyebrow: "5 · Nolë",
      title: "An agent that works on the canvas, not beside it.",
      intro: "Nolë doesn’t answer with a wall of text: it acts on objects. You show it what to look at with Alt+click, and you see what it read and changed.",
      items: [
        "It creates and links nodes, rewrites one paragraph without touching the rest, fills a table, builds an app.",
        "It searches the web, reads pages, generates images and videos.",
        "It can keep going in the background while you work elsewhere.",
        "Every change it makes is signed in the history.",
      ],
      more: { label: "All about Nolë", href: "/nole" },
    },
    {
      id: "share",
      eyebrow: "6 · Share",
      title: "Alone first. Together when it matters.",
      intro: "Nolënor is designed for one person first, and opens up to others without switching tools.",
      items: [
        "**Workspaces** with Admin, Member and Guest roles.",
        "**Per-canvas permissions**: full access, can edit, can view. They carry down to sub-canvases.",
        "**Email invitations**, even to someone without an account yet.",
        "**Real time**: you see who is on the canvas, and changes arrive live, Nolë’s included.",
        "**Web publishing**, read-only, no account needed to read.",
      ],
    },
    {
      id: "free",
      eyebrow: "7 · Stay free",
      title: "Your work depends neither on AI nor on us.",
      intro: "AI is added to the canvas; it doesn’t hold its structure. And nothing keeps you in.",
      items: [
        "**Without AI, everything works**: canvas, documents, tables, search, sharing, versions.",
        "**History per node**: each version keeps its author, you or Nolë, with the differences highlighted. 30 days of history, named versions kept.",
        "**Export**: one zip per canvas, as Markdown and JSON; CSV for tables; transcripts as .srt or .md.",
        "**MCP server**: Claude, Cursor or any MCP client reads and writes your canvases, with your permissions.",
        "**Open source**: AGPL-3.0 code you can host yourself.",
        "**Mobile**: installable on your phone to view, search and dictate to Nolë.",
      ],
      more: { label: "Developers", href: "/developers" },
    },
  ],
  notYet: {
    eyebrow: "Not yet",
    title: "What doesn’t exist yet.",
    intro: "We’d rather tell you here than have you find out after signing up.",
    items: [
      "**Automations**: Nolë can’t be scheduled yet. It works when you ask.",
      "**Comments** and collaborators’ cursors.",
      "**Duplicating a canvas** and starting from a template.",
      "**Importing from Notion.**",
      "**A team plan**: SSO, per-seat billing, a data processing agreement.",
      "**A native app** and offline mode.",
    ],
  },
  close: { title: "The easiest way is to try it.", text: "Free today, AI included. No credit card." },
};

export const product: Record<Lang, ProductCopy> = { en, fr };

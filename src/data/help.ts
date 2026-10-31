/*
 * Content of the /help page.
 *
 * Every gesture and shortcut below was checked against the product repo
 * (antaymard/nolenor) rather than written from memory — the bindings live
 * in src/hooks/useCreateNodeHotkeys.ts, src/components/canvas/CanvasFlow.tsx,
 * src/components/windows/WindowsContainer.tsx,
 * src/hooks/useToggleCanvasUiHotkey.ts and the welcome modal's
 * pointerSteps(). If a binding changes there, it changes here.
 *
 * Keys are written as tokens, not as labels: "Mod" and "Alt" are rendered
 * per platform by Kbd.astro (Ctrl/⌘, Alt/⌥), so the copy never has to say
 * "Ctrl (or Cmd on a Mac)". The tokens are the same in every language;
 * Kbd.astro turns them into the reader's labels (Shift → Maj, Enter →
 * Entrée in French).
 */

import type { Lang } from "@/i18n";

export type KeyCombo = string[];

export type IllustrationName =
  | "navigate"
  | "create"
  | "open"
  | "connect"
  | "context"
  | "tasks"
  | "history";

export interface HelpStep {
  id: string;
  title: string;
  body: string[];
  illustration: IllustrationName;
  alt: string;
  /** The one gesture to try, shown under the text. */
  tryIt?: { label: string; keys: KeyCombo[] }[];
}

export interface HelpTip {
  icon: string;
  title: string;
  body: string;
  keys?: KeyCombo[];
}

export interface ShortcutRow {
  action: string;
  keys: KeyCombo[];
  /** Read as "or" between combos unless set — "then" for sequences. */
  joiner?: string;
}

export interface ShortcutGroup {
  title: string;
  rows: ShortcutRow[];
}

export interface FurtherEntry {
  icon: string;
  title: string;
  body: string;
  where: string;
}

const basicsEn: HelpStep[] = [
  {
    id: "move-around",
    title: "Move around",
    body: [
      "Hold the middle mouse button and drag to pan. Hold Ctrl and scroll to zoom. On a trackpad, two fingers pan.",
      "Prefer the left button? Pick the hand in the toolbar and drag anywhere. On a tablet or a phone, one finger pans and a pinch zooms.",
    ],
    illustration: "navigate",
    alt: "A canvas with a few nodes, a mouse with its middle button highlighted, and arrows in four directions",
    tryIt: [
      { label: "Zoom", keys: [["Mod", "scroll"]] },
      { label: "Pan", keys: [["middle-drag"]] },
    ],
  },
  {
    id: "add-nodes",
    title: "Add a node",
    body: [
      "Right-click the canvas and choose what to add. Or skip the menu: point where you want it and tap a single letter. The node lands under your cursor, ready to type in.",
      "Pasting and dropping work too. An image, a PDF, an audio file, a CSV, a URL or plain text each becomes the right kind of node.",
    ],
    illustration: "create",
    alt: "A row of keys — T, D, A, I, L — with D highlighted, and a new document node appearing under the cursor",
    tryIt: [
      { label: "Title", keys: [["T"]] },
      { label: "Document", keys: [["D"]] },
      { label: "Table", keys: [["A"]] },
      { label: "Image", keys: [["I"]] },
      { label: "Link", keys: [["L"]] },
    ],
  },
  {
    id: "open-nodes",
    title: "Open and edit",
    body: [
      "Double-click a node to open it in a window, with room to read and write. Select a node to reveal its toolbar, then hit the pencil to edit it in place.",
      "Select several nodes and press Enter: they open side by side, up to four at once.",
    ],
    illustration: "open",
    alt: "A small selected node on the canvas expanding into a large window with a document inside",
    tryIt: [
      { label: "Open", keys: [["double-click"]] },
      { label: "Open the selection", keys: [["Enter"]] },
    ],
  },
  {
    id: "connect-nodes",
    title: "Connect ideas",
    body: [
      "Drag from the dot on a node's edge to another node to link them. Double-click a connection to give it a label.",
      "Right-click a connection to make it thick, dashed or dotted, or to jump to either end. Links are read by Nolë too: they tell it how things relate.",
    ],
    illustration: "connect",
    alt: "Three nodes joined by curved connections, one of them labelled “supports”",
    tryIt: [{ label: "Label a link", keys: [["double-click"]] }],
  },
];

const withNoleEn: HelpStep[] = [
  {
    id: "give-context",
    title: "Choose what Nolë sees",
    body: [
      "Nolë doesn't read your whole canvas by default: you hand it what matters. Type @ in the message box to mention a node, or hold Alt and click a node to attach it.",
      "Alt-click an empty spot of the canvas to point at a place: “put the summary here” then means exactly there.",
    ],
    illustration: "context",
    alt: "A node outlined in brand colour on the canvas, linked to a chip with its name in Nolë's message box",
    tryIt: [
      { label: "Mention", keys: [["@"]] },
      { label: "Attach", keys: [["Alt", "click"]] },
    ],
  },
  {
    id: "run-tasks",
    title: "Ask, then keep working",
    body: [
      "Ask from the bar at the bottom of any canvas, or press N for the full panel. You don't have to watch: each request runs as its own task, several can run side by side, and the results appear on the canvas as they're made.",
      "Thought of something mid-answer? Send it anyway. It's added to the running response after the current step, no need to stop and start over.",
    ],
    illustration: "tasks",
    alt: "The message bar at the bottom of the canvas with three tasks stacked above it: one running, one queued, one done",
    tryIt: [
      { label: "Nolë panel", keys: [["N"]] },
      { label: "Dictate", keys: [["Ctrl", "Alt"]] },
    ],
  },
  {
    id: "review-changes",
    title: "Review what it changed",
    body: [
      "Every edit is kept. Open a node and its history lists each version, with Nolë's changes set apart from yours. Read what it did, compare, and restore any earlier version in one click.",
      "History survives deletion, and the canvas has a trash: nothing you build is one wrong click away from gone.",
    ],
    illustration: "history",
    alt: "A version timeline alternating between the user's edits and Nolë's, with a Restore button on one entry",
  },
];

const proTipsEn: HelpTip[] = [
  {
    icon: "lucide:magnet",
    title: "Snap into line",
    body: "Hold Shift while you drag or resize. Edges, centres and gaps snap to the nodes around, with guides drawn as you go.",
    keys: [["Shift"]],
  },
  {
    icon: "lucide:frame",
    title: "Group with frames",
    body: "Press F and draw around a set of nodes. The frame moves them together, and Nolë can be pointed at a whole frame.",
    keys: [["F"]],
  },
  {
    icon: "lucide:bookmark",
    title: "Bookmark your places",
    body: "Right-click a node, then Bookmark. Press B to open your bookmarks and jump straight back, however big the canvas gets.",
    keys: [["B"]],
  },
  {
    icon: "lucide:search",
    title: "Search inside everything",
    body: "PDFs, audio and video are transcribed and indexed. Search a sentence you only remember hearing and land on the node.",
    keys: [["Mod", "K"]],
  },
  {
    icon: "lucide:command",
    title: "Jump between canvases",
    body: "The command center finds any canvas by name and takes you there, without going back to the home page.",
    keys: [["Mod", "P"]],
  },
  {
    icon: "lucide:copy",
    title: "Duplicate in one stroke",
    body: "Duplicate a selection in place, or copy it and paste it on another canvas. Pasting works with your clipboard too.",
    keys: [["Mod", "D"]],
  },
  {
    icon: "lucide:mic",
    title: "Think out loud",
    body: "Press R to record a voice memo straight onto the canvas. It's transcribed, so it's searchable and Nolë can read it.",
    keys: [["R"]],
  },
  {
    icon: "lucide:layout-dashboard",
    title: "Ask for a tool, not an answer",
    body: "“Chart the status column of this table.” Nolë builds an App node wired to your data, and it stays live as the table changes.",
  },
  {
    icon: "lucide:hash",
    title: "Hand nodes to other assistants",
    body: "Right-click, Copy ID, and paste it into Claude or ChatGPT connected through MCP. They'll find the exact node you mean.",
  },
];

const shortcutGroupsEn: ShortcutGroup[] = [
  {
    title: "Canvas",
    rows: [
      { action: "Pan", keys: [["middle-drag"]] },
      { action: "Zoom", keys: [["Mod", "scroll"]] },
      { action: "Snap while dragging or resizing", keys: [["Shift"]] },
      { action: "Undo", keys: [["Mod", "Z"]] },
      { action: "Redo", keys: [["Mod", "Shift", "Z"]] },
      { action: "Duplicate the selection", keys: [["Mod", "D"]] },
      { action: "Copy and paste nodes", keys: [["Mod", "C"], ["Mod", "V"]], joiner: "then" },
      { action: "Draw a frame", keys: [["F"]] },
      { action: "Bookmarks", keys: [["B"]] },
      // The key under Esc, whatever the layout: ² on AZERTY, ` on QWERTY.
      { action: "Hide the interface", keys: [["²"], ["`"], ["Mod", "\\"]] },
    ],
  },
  {
    title: "Create",
    rows: [
      { action: "Title", keys: [["T"]] },
      { action: "Document", keys: [["D"]] },
      { action: "Table", keys: [["A"]] },
      { action: "Image", keys: [["I"]] },
      { action: "Link", keys: [["L"]] },
      { action: "Voice memo", keys: [["R"]] },
    ],
  },
  {
    title: "Open & find",
    rows: [
      { action: "Open the selection", keys: [["Enter"]] },
      { action: "Search everything", keys: [["Mod", "K"]] },
      { action: "Command center", keys: [["Mod", "P"]] },
      { action: "Save the window in front", keys: [["Mod", "S"]] },
      { action: "Find in the window in front", keys: [["Mod", "F"]] },
    ],
  },
  {
    title: "Nolë",
    rows: [
      { action: "Open or close the panel", keys: [["N"]] },
      { action: "Mention a node", keys: [["@"]] },
      { action: "Attach a node or a spot", keys: [["Alt", "click"]] },
      { action: "Dictate (hold)", keys: [["Ctrl", "Alt"]] },
    ],
  },
];

const goingFurtherEn: FurtherEntry[] = [
  {
    icon: "lucide:sparkles",
    title: "Skills",
    body: "Teach Nolë a way of working once, with instructions and files. It loads the skill when a task calls for it.",
    where: "Settings → Skills",
  },
  {
    icon: "lucide:brain",
    title: "Agent memory",
    body: "What Nolë keeps about you and your work between conversations. Read it, correct it, delete what you'd rather it forgot.",
    where: "Settings → Agent Memory",
  },
  {
    icon: "lucide:calendar-clock",
    title: "Routines",
    body: "Give Nolë a task to run on its own: every hour, every day, on chosen days, or once at a set time.",
    where: "Settings → Routines",
  },
  {
    icon: "lucide:shapes",
    title: "Custom nodes",
    body: "Design a node type with exactly the fields you need, a compact look for the canvas and a full one for its window.",
    where: "Settings → Custom nodes",
  },
  {
    icon: "lucide:plug",
    title: "MCP & API tokens",
    body: "Open your canvases to Claude, ChatGPT, Cursor or any MCP client. Create a token, choose its permission, paste the command.",
    where: "Settings → MCP & API tokens",
  },
  {
    icon: "lucide:download",
    title: "Export",
    body: "Take everything with you, in open formats: Markdown, JSON and CSV. Your thinking stays yours.",
    where: "Settings → Export my data",
  },
];

// French. Ids, illustrations, icons and key tokens mirror the English
// entries one for one; only the words change.

const basicsFr: HelpStep[] = [
  {
    id: "move-around",
    title: "Se déplacer",
    body: [
      "Maintenez la molette enfoncée et faites glisser pour vous déplacer. Pour zoomer, maintenez Ctrl et tournez la molette. Sur un pavé tactile, glissez à deux doigts.",
      "Vous préférez le bouton gauche ? Prenez la main dans la barre d’outils, puis faites glisser n’importe où. Sur tablette ou sur téléphone, glissez d’un doigt pour vous déplacer et pincez pour zoomer.",
    ],
    illustration: "navigate",
    alt: "Un canevas avec quelques nœuds, une souris à la molette surlignée et des flèches dans les quatre directions",
    tryIt: [
      { label: "Zoomer", keys: [["Mod", "scroll"]] },
      { label: "Se déplacer", keys: [["middle-drag"]] },
    ],
  },
  {
    id: "add-nodes",
    title: "Ajouter un nœud",
    body: [
      "Faites un clic droit sur le canevas et choisissez ce que vous voulez ajouter. Plus rapide : pointez l’endroit voulu et tapez une lettre. Le nœud apparaît sous le curseur, vous pouvez écrire tout de suite.",
      "Vous pouvez aussi coller ou glisser-déposer. Image, PDF, fichier audio, CSV, URL ou simple texte : chacun devient le nœud qui lui correspond.",
    ],
    illustration: "create",
    alt: "Une rangée de touches T, D, A, I et L, le D surligné, et un nouveau nœud document qui apparaît sous le curseur",
    tryIt: [
      { label: "Titre", keys: [["T"]] },
      { label: "Document", keys: [["D"]] },
      { label: "Tableau", keys: [["A"]] },
      { label: "Image", keys: [["I"]] },
      { label: "Lien", keys: [["L"]] },
    ],
  },
  {
    id: "open-nodes",
    title: "Ouvrir et modifier",
    body: [
      "Double-cliquez sur un nœud pour l’ouvrir dans une fenêtre, avec de la place pour lire et écrire. Pour le modifier sur place, sélectionnez-le : sa barre d’outils apparaît, cliquez sur le crayon.",
      "Sélectionnez plusieurs nœuds et appuyez sur Entrée : ils s’ouvrent côte à côte, quatre au maximum.",
    ],
    illustration: "open",
    alt: "Un petit nœud sélectionné sur le canevas s’agrandit en une grande fenêtre qui affiche un document",
    tryIt: [
      { label: "Ouvrir", keys: [["double-click"]] },
      { label: "Ouvrir la sélection", keys: [["Enter"]] },
    ],
  },
  {
    id: "connect-nodes",
    title: "Relier les idées",
    body: [
      "Pour relier deux nœuds, faites glisser le point situé au bord de l’un jusqu’à l’autre. Double-cliquez sur le lien pour lui donner un libellé.",
      "Faites un clic droit sur un lien pour l’épaissir, le passer en tirets ou en pointillés, ou sauter à l’une de ses extrémités. Nolë lit aussi les liens : ils lui disent comment vos idées s’articulent.",
    ],
    illustration: "connect",
    alt: "Trois nœuds reliés par des liens courbes, dont l’un porte le libellé « soutient »",
    tryIt: [{ label: "Nommer un lien", keys: [["double-click"]] }],
  },
];

const withNoleFr: HelpStep[] = [
  {
    id: "give-context",
    title: "Montrer à Nolë ce qui compte",
    body: [
      "Nolë ne lit pas tout le canevas d’office : il travaille sur ce que vous lui montrez. Tapez @ dans la zone de message pour mentionner un nœud, ou cliquez sur un nœud en maintenant Alt pour le joindre.",
      "Faites Alt-clic dans une zone vide du canevas pour désigner un endroit précis. « Placez le résumé ici » voudra dire : là, exactement.",
    ],
    illustration: "context",
    alt: "Sur le canevas, un nœud entouré de la couleur de la marque, relié à une pastille à son nom dans la zone de message de Nolë",
    tryIt: [
      { label: "Mentionner", keys: [["@"]] },
      { label: "Joindre", keys: [["Alt", "click"]] },
    ],
  },
  {
    id: "run-tasks",
    title: "Demander, puis continuer",
    body: [
      "Posez votre question depuis la barre en bas de chaque canevas, ou appuyez sur N pour ouvrir le panneau complet. Inutile de rester à regarder : chaque demande devient une tâche à part, plusieurs tournent en parallèle et les résultats arrivent sur le canevas au fur et à mesure.",
      "Une idée vous vient pendant la réponse ? Envoyez-la sans attendre. Nolë l’intègre à la réponse en cours dès la fin de l’étape actuelle. Pas besoin de tout arrêter pour recommencer.",
    ],
    illustration: "tasks",
    alt: "La barre de message en bas du canevas, surmontée de trois tâches : une en cours, une en attente, une terminée",
    tryIt: [
      { label: "Panneau Nolë", keys: [["N"]] },
      { label: "Dicter", keys: [["Ctrl", "Alt"]] },
    ],
  },
  {
    id: "review-changes",
    title: "Relire ce que Nolë a changé",
    body: [
      "Chaque modification est conservée. Ouvrez un nœud : son historique liste toutes les versions et distingue les changements de Nolë des vôtres. Lisez ce qu’il a fait, comparez, et restaurez une version antérieure en un clic.",
      "L’historique survit même à la suppression, et le canevas a sa corbeille : un faux clic ne suffit jamais à perdre votre travail.",
    ],
    illustration: "history",
    alt: "Une chronologie de versions où alternent les modifications de l’utilisateur et celles de Nolë, avec un bouton Restaurer sur l’une d’elles",
  },
];

const proTipsFr: HelpTip[] = [
  {
    icon: "lucide:magnet",
    title: "Aligner au cordeau",
    body: "Maintenez Maj pendant que vous déplacez ou redimensionnez. Bords, centres et espacements s’aimantent aux nœuds voisins, et des repères s’affichent à mesure.",
    keys: [["Shift"]],
  },
  {
    icon: "lucide:frame",
    title: "Regrouper avec des cadres",
    body: "Appuyez sur F et tracez un cadre autour de plusieurs nœuds. Ils se déplacent ensuite d’un bloc, et vous pouvez montrer tout le cadre à Nolë.",
    keys: [["F"]],
  },
  {
    icon: "lucide:bookmark",
    title: "Garder vos repères",
    body: "Faites un clic droit sur un nœud, puis choisissez Favori. Appuyez sur B pour afficher vos favoris et y revenir d’un saut, même sur un très grand canevas.",
    keys: [["B"]],
  },
  {
    icon: "lucide:search",
    title: "Chercher jusque dans les fichiers",
    body: "PDF, audio et vidéo sont transcrits puis indexés. Tapez une phrase que vous avez seulement entendue : la recherche vous mène droit au nœud.",
    keys: [["Mod", "K"]],
  },
  {
    icon: "lucide:command",
    title: "Passer d’un canevas à l’autre",
    body: "Tapez le nom d’un canevas dans le centre de commandes : il vous y emmène, sans repasser par l’accueil.",
    keys: [["Mod", "P"]],
  },
  {
    icon: "lucide:copy",
    title: "Dupliquer d’un geste",
    body: "Dupliquez une sélection sur place, ou copiez-la et collez-la sur un autre canevas. Vous pouvez aussi coller ce que contient votre presse-papiers.",
    keys: [["Mod", "D"]],
  },
  {
    icon: "lucide:mic",
    title: "Penser à voix haute",
    body: "Appuyez sur R pour enregistrer un mémo vocal directement sur le canevas. Il est transcrit : vous le retrouverez par la recherche, et Nolë peut le lire.",
    keys: [["R"]],
  },
  {
    icon: "lucide:layout-dashboard",
    title: "Demander un outil plutôt qu’une réponse",
    body: "« Faites un graphique de la colonne Statut de ce tableau. » Nolë construit un nœud App branché sur vos données, qui se met à jour quand le tableau change.",
  },
  {
    icon: "lucide:hash",
    title: "Partager un nœud avec d’autres assistants",
    body: "Faites un clic droit, puis Copier l’ID, et collez-le dans Claude ou ChatGPT connecté via MCP. Ils trouveront le nœud exact dont vous parlez.",
  },
];

const shortcutGroupsFr: ShortcutGroup[] = [
  {
    title: "Canevas",
    rows: [
      { action: "Se déplacer", keys: [["middle-drag"]] },
      { action: "Zoomer", keys: [["Mod", "scroll"]] },
      { action: "Aligner en déplaçant ou en redimensionnant", keys: [["Shift"]] },
      { action: "Annuler", keys: [["Mod", "Z"]] },
      { action: "Rétablir", keys: [["Mod", "Shift", "Z"]] },
      { action: "Dupliquer la sélection", keys: [["Mod", "D"]] },
      { action: "Copier et coller des nœuds", keys: [["Mod", "C"], ["Mod", "V"]], joiner: "puis" },
      { action: "Tracer un cadre", keys: [["F"]] },
      { action: "Favoris", keys: [["B"]] },
      // The key under Esc, whatever the layout: ² on AZERTY, ` on QWERTY.
      { action: "Masquer l’interface", keys: [["²"], ["`"], ["Mod", "\\"]] },
    ],
  },
  {
    title: "Créer",
    rows: [
      { action: "Titre", keys: [["T"]] },
      { action: "Document", keys: [["D"]] },
      { action: "Tableau", keys: [["A"]] },
      { action: "Image", keys: [["I"]] },
      { action: "Lien", keys: [["L"]] },
      { action: "Mémo vocal", keys: [["R"]] },
    ],
  },
  {
    title: "Ouvrir et chercher",
    rows: [
      { action: "Ouvrir la sélection", keys: [["Enter"]] },
      { action: "Tout rechercher", keys: [["Mod", "K"]] },
      { action: "Centre de commandes", keys: [["Mod", "P"]] },
      { action: "Enregistrer la fenêtre active", keys: [["Mod", "S"]] },
      { action: "Rechercher dans la fenêtre active", keys: [["Mod", "F"]] },
    ],
  },
  {
    title: "Nolë",
    rows: [
      { action: "Ouvrir ou fermer le panneau", keys: [["N"]] },
      { action: "Mentionner un nœud", keys: [["@"]] },
      { action: "Joindre un nœud ou un endroit", keys: [["Alt", "click"]] },
      { action: "Dicter (maintenir)", keys: [["Ctrl", "Alt"]] },
    ],
  },
];

const goingFurtherFr: FurtherEntry[] = [
  {
    icon: "lucide:sparkles",
    title: "Compétences",
    body: "Apprenez une méthode à Nolë une fois pour toutes, avec des instructions et des fichiers. Il charge la compétence dès qu’une tâche le demande.",
    where: "Paramètres → Compétences",
  },
  {
    icon: "lucide:brain",
    title: "Mémoire de l’agent",
    body: "Ce que Nolë retient de vous et de votre travail d’une conversation à l’autre. Lisez-la, corrigez-la, effacez ce que vous préférez qu’il oublie.",
    where: "Paramètres → Mémoire de l’agent",
  },
  {
    icon: "lucide:calendar-clock",
    title: "Routines",
    body: "Confiez à Nolë une tâche qu’il mène seul : toutes les heures, chaque jour, les jours de votre choix, ou une seule fois à l’heure dite.",
    where: "Paramètres → Routines",
  },
  {
    icon: "lucide:shapes",
    title: "Nœuds personnalisés",
    body: "Créez un type de nœud avec exactement les champs dont vous avez besoin, une vue compacte pour le canevas et une vue complète pour sa fenêtre.",
    where: "Paramètres → Nœuds personnalisés",
  },
  {
    icon: "lucide:plug",
    title: "Tokens MCP & API",
    body: "Ouvrez vos canevas à Claude, ChatGPT, Cursor ou n’importe quel client MCP. Créez un token, choisissez ses droits, collez la commande.",
    where: "Paramètres → Tokens MCP & API",
  },
  {
    icon: "lucide:download",
    title: "Export",
    body: "Repartez avec tout, en formats ouverts : Markdown, JSON et CSV. Vos idées restent à vous.",
    where: "Paramètres → Exporter mes données",
  },
];

export const basics: Record<Lang, HelpStep[]> = { en: basicsEn, fr: basicsFr };
export const withNole: Record<Lang, HelpStep[]> = { en: withNoleEn, fr: withNoleFr };
export const proTips: Record<Lang, HelpTip[]> = { en: proTipsEn, fr: proTipsFr };
export const shortcutGroups: Record<Lang, ShortcutGroup[]> = { en: shortcutGroupsEn, fr: shortcutGroupsFr };
export const goingFurther: Record<Lang, FurtherEntry[]> = { en: goingFurtherEn, fr: goingFurtherFr };

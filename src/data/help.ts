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
 * "Ctrl (or Cmd on a Mac)".
 */

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

export const basics: HelpStep[] = [
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

export const withNole: HelpStep[] = [
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

export const proTips: HelpTip[] = [
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

export const shortcutGroups: ShortcutGroup[] = [
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

export const goingFurther: FurtherEntry[] = [
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

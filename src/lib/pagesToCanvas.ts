// The "pages to canvas" slider: one project, first in a page tool, then laid
// out on a Nolënor canvas. Shared by the component (markup) and its script
// (motion), so a coordinate lives in one place.
//
// Everything is drawn on a fixed 1280 × 720 stage, scaled to its frame. The
// node renders in /public/morph are screenshots of the app's own components
// (at 2×), taken from the product repo's tutorial kit, not illustrations.

export const STAGE = { w: 1280, h: 720 };
export type R = { x: number; y: number; w: number; h: number };

export const WS = "Northbound Studio";
export const PAGE = "WMS rollout";
export const WEEKLY = "Weekly sync · 18 Nov";

export const MAIN: R = { x: 240, y: 0, w: 1040, h: 720 };
export const CANVAS: R = { x: 210, y: 10, w: 650, h: 700 };
export const DOCK: R = { x: 870, y: 52, w: 400, h: 658 };
export const TOOLBAR: R = { x: 366, y: 651, w: 340, h: 50 };

/** Each travelling element: where it starts (the page tool), where it lands (the canvas), and its native sizes. */
export const FLIGHTS = {
  weekly: { a: { x: 432, y: 8, w: 190, h: 30 }, b: { x: 445, y: 470, w: 150, h: 160 }, start: 0.22, node: true },
  pagebody: { a: { x: 440, y: 100, w: 600, h: 228 }, b: { x: 890, y: 110, w: 360, h: 290 }, start: 0.2, node: false },
  tab: { a: { x: 252, y: 8, w: 170, h: 30 }, b: { x: 874, y: 10, w: 150, h: 32 }, start: 0.16, node: false },
  disc: { a: { x: 8, y: 298, w: 224, h: 28 }, b: { x: 250, y: 72, w: 170, h: 100 }, start: 0.1, node: true },
  specs: { a: { x: 8, y: 326, w: 224, h: 28 }, b: { x: 445, y: 72, w: 170, h: 100 }, start: 0.13, node: true },
  golive: { a: { x: 8, y: 354, w: 224, h: 28 }, b: { x: 640, y: 72, w: 170, h: 100 }, start: 0.16, node: true },
  db: { a: { x: 440, y: 392, w: 600, h: 230 }, b: { x: 250, y: 210, w: 300, h: 200 }, start: 0.3, node: true },
  board: { a: { x: 520, y: 420, w: 66, h: 22 }, b: { x: 640, y: 210, w: 170, h: 200 }, start: 0.36, node: true },
  cal: { a: { x: 590, y: 420, w: 80, h: 22 }, b: { x: 640, y: 470, w: 170, h: 160 }, start: 0.39, node: true },
  img: { a: { x: 620, y: 342, w: 170, h: 28 }, b: { x: 250, y: 470, w: 150, h: 90 }, start: 0.42, node: true },
  pdf: { a: { x: 440, y: 342, w: 170, h: 28 }, b: { x: 250, y: 600, w: 150, h: 36 }, start: 0.45, node: true },
} satisfies Record<string, { a: R; b: R; start: number; node: boolean }>;
export type FlightKey = keyof typeof FLIGHTS;
export const FLIGHT = 0.36;

export const CRUMB = { a: { x: 256, y: 52, w: 330, h: 28 }, b: { x: 222, y: 20, w: 380, h: 36 }, start: 0.18 };

/** The links, as the app draws them between the landed nodes (floating bezier + open arrow). */
export const EDGES = [
  { d: "M 550 310 C 586 310, 604 310, 640 310", arrow: "632.5,316 640,310 632.5,304" },
  { d: "M 725 410 C 725 440, 725 440, 725 470", arrow: "719,462.5 725,470 731,462.5" },
  { d: "M 520 470 C 520 416.33, 400 463.67, 400 410", arrow: "406,417.5 400,410 394,417.5" },
  { d: "M 325 560 C 325 580, 325 580, 325 600", arrow: "319,592.5 325,600 331,592.5" },
];

/** The sidebar: rows with a `b` slide to their place in the canvas tree; the others fold away. */
export type Row = { label: string; icon: string; depth: number; a: number; b: number | null; tile?: string; active?: boolean; open?: boolean };
export const ROWS: Row[] = [
  { label: "Home", icon: "lucide:house", depth: 0, a: 74, b: null },
  { label: "Inbox", icon: "lucide:inbox", depth: 0, a: 102, b: null },
  { label: "Workstreams", icon: "lucide:table", depth: 0, a: 158, b: null },
  { label: "Clients", icon: "lucide:file-text", depth: 0, a: 214, b: 134, tile: "#0ea5e9", open: true },
  { label: "Halden Logistics", icon: "lucide:file-text", depth: 1, a: 242, b: 166, tile: "#f97316", open: true },
  { label: PAGE, icon: "lucide:file-text", depth: 2, a: 270, b: 198, tile: "#14b8a6", active: true, open: true },
  { label: "Kestrel Retail", icon: "lucide:file-text", depth: 1, a: 382, b: 230, tile: "#ec4899" },
  { label: "Arbor Health", icon: "lucide:file-text", depth: 1, a: 410, b: null },
  { label: "Internal", icon: "lucide:file-text", depth: 0, a: 438, b: 262, tile: "#a855f7" },
];

// ── Timing helpers ──────────────────────────────────────────────────────
export const clamp = (v: number) => Math.max(0, Math.min(1, v));
export const ease = (v: number) => (v < 0.5 ? 4 * v * v * v : 1 - Math.pow(-2 * v + 2, 3) / 2);
export const range = (t: number, a: number, b: number) => clamp((t - a) / (b - a));
export const win = (t: number, a: number, b: number) => ease(range(t, a, b));
export const lerp = (a: number, b: number, p: number) => a + (b - a) * p;
export const lerpR = (a: R, b: R, p: number): R => ({ x: lerp(a.x, b.x, p), y: lerp(a.y, b.y, p), w: lerp(a.w, b.w, p), h: lerp(a.h, b.h, p) });
export const mix = (c1: number[], c2: number[], p: number) => `rgb(${c1.map((c, i) => Math.round(lerp(c, c2[i], p))).join(",")})`;

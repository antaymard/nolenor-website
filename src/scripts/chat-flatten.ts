import { prefersReducedMotion } from "./reduced-motion";
import { typeInto } from "./typewriter";

/*
 * Drives problem item 1: a scripted exchange where the human beats are slow
 * and typed and the machine beats land instantly. Every step either types
 * into the input, sends what is in it, or reveals the next thread rows —
 * CSS owns every transition, this only advances the story.
 *
 * The pauses are the point, so they are named rather than uniform: the wait
 * before a user message is someone hesitating, the wait before an answer is
 * a machine not needing to.
 */

interface Step {
  /** Type one of the two typed messages into the input, over `wait` ms. */
  type?: "first" | "last";
  /** Clear the input and press send. */
  send?: boolean;
  /** How many thread rows are visible from here on. */
  rows?: number;
  /** How long this step lasts, in ms. */
  wait: number;
}

const SCRIPT: Step[] = [
  { wait: 400 },
  // Working out what to say while typing it, right up to the "but—".
  { type: "first", wait: 2600 },
  { wait: 350 },
  { send: true, rows: 1, wait: 550 },
  // No pause at all: the whole page was apparently already built.
  { rows: 2, wait: 2000 },
  { rows: 3, wait: 1300 },
  { rows: 4, wait: 1900 },
  // The silence where they give up trying to finish the thought.
  { wait: 900 },
  { type: "last", wait: 1300 },
  { wait: 450 },
  { send: true, rows: 5, wait: 2600 },
];

export function initChatFlatten(): void {
  document
    .querySelectorAll<HTMLElement>("[data-chat-flatten]")
    .forEach(setupScene);
}

function setupScene(root: HTMLElement): void {
  const field = root.querySelector<HTMLElement>("[data-cf-text]");
  const rows = Array.from(root.querySelectorAll<HTMLElement>("[data-chat-row]"));
  const texts = {
    first: root.dataset.cfFirst ?? "",
    last: root.dataset.cfLast ?? "",
  };

  const showRows = (count: number) =>
    rows.forEach((row, index) => row.classList.toggle("is-on", index < count));

  if (prefersReducedMotion()) {
    root.dataset.phase = "still";
    showRows(rows.length);
    return;
  }

  let stepTimer = 0;
  let typeTimer = 0;

  const halt = () => {
    window.clearTimeout(stepTimer);
    window.clearInterval(typeTimer);
  };

  const run = (index: number) => {
    // One-shot: the last step just holds, so the closing line stays on
    // screen instead of being wiped by a replay.
    if (index >= SCRIPT.length) return;
    const step = SCRIPT[index];

    if (step.type && field) {
      root.dataset.phase = "typing";
      typeTimer = typeInto(field, texts[step.type], step.wait);
    } else if (step.send) {
      root.dataset.phase = "sent";
      if (field) field.textContent = "";
    } else if (root.dataset.phase === "sent") {
      root.dataset.phase = "idle";
    }
    // Any other step keeps the current phase — the pause after typing is
    // someone looking at what they wrote, caret still blinking.

    if (step.rows !== undefined) showRows(step.rows);

    stepTimer = window.setTimeout(() => run(index + 1), step.wait);
  };

  const observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        halt();
        if (field) field.textContent = "";

        if (entry.isIntersecting) {
          root.dataset.phase = "idle";
          showRows(0);
          run(0);
        } else {
          root.dataset.phase = "idle";
          showRows(0);
        }
      }
    },
    { threshold: 0.35 },
  );

  observer.observe(root);
}

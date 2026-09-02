import { prefersReducedMotion } from "./reduced-motion";

// Drives the chat-flattening illustration: a phase name on the root element,
// plus how many thread rows are visible at that point. CSS owns every
// transition; this only advances the story and types the prompt.
type Phase =
  | "thinking"
  | "collapse"
  | "typing"
  | "sent"
  | "answer"
  | "retry"
  | "reset";

interface Beat {
  phase: Phase;
  duration: number;
  rows: number;
}

const TIMELINE: Beat[] = [
  { phase: "thinking", duration: 2800, rows: 2 },
  { phase: "collapse", duration: 1200, rows: 2 },
  { phase: "typing", duration: 2200, rows: 2 },
  { phase: "sent", duration: 800, rows: 3 },
  { phase: "answer", duration: 1300, rows: 4 },
  { phase: "retry", duration: 1100, rows: 6 },
  { phase: "retry", duration: 1100, rows: 8 },
  { phase: "retry", duration: 1100, rows: 9 },
  { phase: "reset", duration: 800, rows: 2 },
];

export function initChatFlatten(): void {
  document
    .querySelectorAll<HTMLElement>("[data-chat-flatten]")
    .forEach(setupScene);
}

function setupScene(root: HTMLElement): void {
  const field = root.querySelector<HTMLElement>("[data-cf-text]");
  const rows = Array.from(root.querySelectorAll<HTMLElement>("[data-cf-row]"));
  const prompt = root.dataset.cfPrompt ?? "";

  const showRows = (count: number) =>
    rows.forEach((row, index) => row.classList.toggle("is-on", index < count));

  if (prefersReducedMotion()) {
    root.dataset.phase = "still";
    if (field) field.textContent = prompt;
    showRows(2);
    return;
  }

  let beat = 0;
  let beatTimer = 0;
  let typeTimer = 0;

  const TICK = 16;

  const type = (duration: number) => {
    if (!field || !prompt) return;
    // Reveal a fixed number of characters per frame rather than one per tick,
    // so the sentence always lands inside the beat however long it is.
    const ticks = Math.max(1, Math.floor((duration * 0.8) / TICK));
    const perTick = Math.max(1, Math.ceil(prompt.length / ticks));
    let typed = 0;
    typeTimer = window.setInterval(() => {
      typed = Math.min(prompt.length, typed + perTick);
      field.textContent = prompt.slice(0, typed);
      if (typed >= prompt.length) window.clearInterval(typeTimer);
    }, TICK);
  };

  const halt = () => {
    window.clearTimeout(beatTimer);
    window.clearInterval(typeTimer);
  };

  const play = () => {
    const current = TIMELINE[beat];
    root.dataset.phase = current.phase;
    showRows(current.rows);

    if (current.phase === "typing") type(current.duration);
    // The prompt leaves the box the moment it becomes a message.
    if (current.phase === "sent" && field) field.textContent = "";

    beatTimer = window.setTimeout(() => {
      beat = (beat + 1) % TIMELINE.length;
      play();
    }, current.duration);
  };

  // Always restart from the first beat when the scene comes back into view —
  // half a story caught mid-scroll reads as a glitch.
  const observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        halt();
        if (field) field.textContent = "";

        if (entry.isIntersecting) {
          beat = 0;
          play();
        } else {
          root.dataset.phase = "idle";
          showRows(2);
        }
      }
    },
    { threshold: 0.35 },
  );

  observer.observe(root);
}

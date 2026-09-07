import { prefersReducedMotion } from "./reduced-motion";

// Plays a stack of status lines once per entrance: each row lands after its
// own pause, pushing the earlier ones up the thread. It never loops —
// leaving the viewport resets it, coming back plays it again from the top.
export function initStatusStack(): void {
  document
    .querySelectorAll<HTMLElement>("[data-status-stack]")
    .forEach(setupStack);
}

function setupStack(root: HTMLElement): void {
  const rows = Array.from(root.querySelectorAll<HTMLElement>("[data-status-row]"));
  if (!rows.length) return;

  if (prefersReducedMotion()) {
    rows.forEach((row) => row.classList.add("is-on"));
    return;
  }

  let timers: number[] = [];

  const stop = () => {
    timers.forEach((timer) => window.clearTimeout(timer));
    timers = [];
  };

  const play = () => {
    let at = 0;
    for (const row of rows) {
      at += Number(row.dataset.delay ?? 0);
      timers.push(window.setTimeout(() => row.classList.add("is-on"), at));
    }
  };

  const observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        stop();

        if (entry.isIntersecting) {
          play();
        } else {
          rows.forEach((row) => row.classList.remove("is-on"));
        }
      }
    },
    { threshold: 0.35 },
  );

  observer.observe(root);
}

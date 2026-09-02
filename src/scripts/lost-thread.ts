import { prefersReducedMotion } from "./reduced-motion";
import { typeInto } from "./typewriter";

// Scrolls a long thread past the viewport so the one legible card in it
// surfaces, holds for a beat, then gets carried off. Distances are measured
// rather than hard-coded, so the card lands centred whatever the text does
// at a given width. Plays once per entrance, like the status stack.
const TYPING = 1400;
const RUSH = 2000;
const FOUND = 1300;
const LOST = 2200;

export function initLostThread(): void {
  document
    .querySelectorAll<HTMLElement>("[data-lost-thread]")
    .forEach(setupThread);
}

function setupThread(root: HTMLElement): void {
  const query = root.querySelector<HTMLElement>("[data-lt-query]");
  const viewport = root.querySelector<HTMLElement>("[data-lt-viewport]");
  const stream = root.querySelector<HTMLElement>("[data-lt-stream]");
  const card = root.querySelector<HTMLElement>("[data-lt-card]");
  if (!query || !viewport || !stream || !card) return;

  const queryText = query.dataset.text ?? "Where did we discuss this?";

  // Offset that puts the card in the middle of the viewport, and the one
  // that runs the thread out to its end.
  const offsets = () => ({
    found: card.offsetTop + card.offsetHeight / 2 - viewport.clientHeight / 2,
    end: stream.scrollHeight - viewport.clientHeight,
  });

  const shift = (to: number, duration: number, easing: string) => {
    stream.style.transition = `transform ${duration}ms ${easing}`;
    stream.style.transform = `translateY(${-to}px)`;
  };

  if (prefersReducedMotion()) {
    root.dataset.phase = "found";
    query.textContent = queryText;
    stream.style.transform = `translateY(${-offsets().found}px)`;
    return;
  }

  let timers: number[] = [];

  const stop = () => {
    timers.forEach((timer) => window.clearTimeout(timer));
    timers.forEach((timer) => window.clearInterval(timer));
    timers = [];
  };

  const reset = () => {
    root.dataset.phase = "idle";
    query.textContent = "";
    stream.style.transition = "none";
    stream.style.transform = "translateY(0)";
  };

  const play = () => {
    reset();
    // Read back the layout so the reset transform applies before the first
    // shift, otherwise the browser collapses the two into one jump.
    void stream.offsetHeight;

    root.dataset.phase = "typing";
    timers.push(typeInto(query, queryText, TYPING));

    timers.push(
      window.setTimeout(() => {
        root.dataset.phase = "rush";
        shift(offsets().found, RUSH, "cubic-bezier(0.16, 1, 0.3, 1)");
      }, TYPING),
    );

    timers.push(
      window.setTimeout(() => {
        root.dataset.phase = "found";
      }, TYPING + RUSH),
    );

    timers.push(
      window.setTimeout(() => {
        root.dataset.phase = "lost";
        shift(offsets().end, LOST, "cubic-bezier(0.7, 0, 0.84, 0)");
      }, TYPING + RUSH + FOUND),
    );

    timers.push(
      window.setTimeout(() => {
        root.dataset.phase = "end";
      }, TYPING + RUSH + FOUND + LOST),
    );
  };

  const observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        stop();
        if (entry.isIntersecting) play();
        else reset();
      }
    },
    { threshold: 0.35 },
  );

  observer.observe(root);
}

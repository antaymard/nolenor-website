import { prefersReducedMotion } from "./reduced-motion";

/*
 * Runs the "Which chat was it?" illustration. One motion only: the cursor
 * rakes down the conversation list and back up, over and over, and each
 * title lights up as it passes.
 *
 * Both the travel and the moment each row is passed are measured from the
 * laid-out list rather than hard-coded, so the highlight stays under the
 * cursor at any width. It loops for as long as the scene is on screen —
 * there is no punchline to catch mid-replay here, the whole point is that
 * the search doesn't end.
 */

const SWEEP_DOWN = 3400;
const HOLD_BOTTOM = 600;
const SWEEP_UP = 2900;
const HOLD_TOP = 500;

export function initLostThread(): void {
  document
    .querySelectorAll<HTMLElement>("[data-lost-thread]")
    .forEach(setupThread);
}

function setupThread(root: HTMLElement): void {
  const view = root.querySelector<HTMLElement>("[data-lt-listview]");
  const pointer = root.querySelector<HTMLElement>("[data-lt-pointer]");
  const items = Array.from(root.querySelectorAll<HTMLElement>("[data-lt-item]"));
  if (!view || !pointer || !items.length) return;
  const note = pointer.querySelector<HTMLElement>(".lt-note");

  // Sidebar coordinates: the list, the viewport clipping it and the cursor
  // all share the sidebar as their offset parent. The bottom of the sweep is
  // pulled up by however far the label hangs below the cursor, so the label
  // never runs out of the frame.
  const bounds = () => {
    const tail = note ? note.offsetTop + note.offsetHeight + 6 : 0;
    const from = view.offsetTop + view.clientHeight * 0.08;
    return {
      from,
      to: Math.max(from, view.offsetTop + view.clientHeight - tail),
    };
  };

  const clearHover = () =>
    items.forEach((item) => item.classList.remove("is-hover"));

  if (prefersReducedMotion()) {
    const { from, to } = bounds();
    root.dataset.phase = "still";
    pointer.style.transform = `translateY(${(from + to) / 2}px)`;
    return;
  }

  let timers: number[] = [];

  const stop = () => {
    timers.forEach((timer) => window.clearTimeout(timer));
    timers = [];
  };

  // One pass of the cursor, plus a timer per row for the moment the cursor
  // reaches its middle. The move is linear, so that moment is just where the
  // row sits along the travel.
  const sweep = (from: number, to: number, duration: number) => {
    const down = to > from;
    pointer.style.transition = `transform ${duration}ms linear`;
    pointer.style.transform = `translateY(${to}px)`;

    for (const item of items) {
      // The tip of the cursor is its top-left corner, so a row lights up as
      // the tip crosses into it — its top edge going down, its bottom edge
      // coming back up.
      const edge = down ? item.offsetTop : item.offsetTop + item.offsetHeight;
      const progress = (edge - from) / (to - from);
      if (progress < 0 || progress > 1) continue;
      timers.push(
        window.setTimeout(() => {
          clearHover();
          item.classList.add("is-hover");
        }, progress * duration),
      );
    }
  };

  const cycle = () => {
    const { from, to } = bounds();

    sweep(from, to, SWEEP_DOWN);
    timers.push(
      window.setTimeout(() => {
        sweep(to, from, SWEEP_UP);
        timers.push(window.setTimeout(cycle, SWEEP_UP + HOLD_TOP));
      }, SWEEP_DOWN + HOLD_BOTTOM),
    );
  };

  const park = () => {
    stop();
    clearHover();
    root.dataset.phase = "idle";
    pointer.style.transition = "none";
    pointer.style.transform = `translateY(${bounds().from}px)`;
  };

  const observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        park();
        if (!entry.isIntersecting) continue;

        // Read the layout back so parking lands before the first sweep,
        // otherwise the browser collapses the two into one jump.
        void pointer.offsetHeight;
        root.dataset.phase = "hunt";
        cycle();
      }
    },
    { threshold: 0.35 },
  );

  observer.observe(root);
}

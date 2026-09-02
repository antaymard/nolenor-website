import { prefersReducedMotion } from "./reduced-motion";

// Runs the "Which chat was it?" illustration: open on the conversation, mark
// the one real idea in it, then abandon it for the sidebar and hunt. The
// list's travel is measured rather than hard-coded, so the cursor comes to
// rest on the same conversation whatever the list does at a given width.
// Plays once per entrance, like the status stack.
interface Beat {
  phase: string;
  duration: number;
}

const TIMELINE: Beat[] = [
  { phase: "open", duration: 1100 },
  { phase: "idea", duration: 1300 },
  { phase: "search", duration: 900 },
  { phase: "hunt", duration: 1900 },
  { phase: "stuck", duration: 1500 },
  // Holds here: the closing line runs its own fade in, hold and fade out.
  { phase: "end", duration: 3600 },
];

export function initLostThread(): void {
  document
    .querySelectorAll<HTMLElement>("[data-lost-thread]")
    .forEach(setupThread);
}

function setupThread(root: HTMLElement): void {
  const view = root.querySelector<HTMLElement>("[data-lt-listview]");
  const list = root.querySelector<HTMLElement>("[data-lt-list]");
  const mark = root.querySelector<HTMLElement>("[data-lt-mark]");
  if (!view || !list || !mark) return;

  // Where the cursor starts and settles inside the list, and how far the list
  // has to travel for the marked conversation to end up under it.
  const place = () => {
    const start = view.offsetTop + view.clientHeight * 0.2;
    const rest = view.offsetTop + view.clientHeight * 0.58;
    root.style.setProperty("--lt-start", `${start}px`);
    root.style.setProperty("--lt-rest", `${rest}px`);
    return mark.offsetTop - view.clientHeight * 0.58;
  };

  if (prefersReducedMotion()) {
    root.dataset.phase = "stuck";
    list.style.transform = `translateY(${-place()}px)`;
    return;
  }

  let timers: number[] = [];

  const stop = () => {
    timers.forEach((timer) => window.clearTimeout(timer));
    timers = [];
  };

  const reset = () => {
    root.dataset.phase = "idle";
    list.style.transition = "none";
    list.style.transform = "translateY(0)";
  };

  const play = () => {
    reset();
    const travel = place();
    // Read the layout back so the reset lands before the scroll starts,
    // otherwise the browser collapses the two into a single jump.
    void list.offsetHeight;

    let at = 0;
    for (const beat of TIMELINE) {
      const start = at;
      timers.push(
        window.setTimeout(() => {
          root.dataset.phase = beat.phase;
          if (beat.phase === "hunt") {
            list.style.transition = `transform ${beat.duration}ms cubic-bezier(0.16, 1, 0.3, 1)`;
            list.style.transform = `translateY(${-travel}px)`;
          }
        }, start),
      );
      at += beat.duration;
    }
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

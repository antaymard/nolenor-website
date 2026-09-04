interface Pair {
  link: HTMLAnchorElement;
  section: HTMLElement;
}

// Where a section counts as "the one you're reading": a fifth of the way
// down the viewport, under the sticky bar rather than at the very top of
// the screen.
const READING_LINE = 0.22;

// Marks the nav anchor for the section the reader is currently in. Purely
// additive: without this the links are ordinary working anchors, just never
// highlighted.
//
// Deliberately geometry on every frame rather than an IntersectionObserver.
// The observer only fires when something crosses its band, so any jump that
// skips the band — an in-page anchor, a restored scroll position, a
// scrollTo — leaves the previous section marked. Recomputing from the
// sections' positions has no memory to go stale, and four
// getBoundingClientRect calls per animation frame cost nothing.
export function initNavActive(): void {
  const bar = document.querySelector("[data-nav-links]");
  if (!bar) return;

  const pairs = Array.from(bar.querySelectorAll<HTMLAnchorElement>('a[href^="#"]'))
    .map((link) => ({ link, section: document.querySelector<HTMLElement>(link.hash) }))
    .filter((pair): pair is Pair => pair.section !== null);

  if (!pairs.length) return;

  const paint = () => {
    const line = window.innerHeight * READING_LINE;

    // The last section whose top has passed the line. Above the first one —
    // the hero — that is none of them, and nothing is marked.
    let current: HTMLAnchorElement | null = null;
    for (const { link, section } of pairs) {
      if (section.getBoundingClientRect().top <= line) current = link;
    }

    for (const { link } of pairs) link.toggleAttribute("data-active", link === current);
  };

  let queued = false;
  const schedule = () => {
    if (queued) return;
    queued = true;
    requestAnimationFrame(() => {
      queued = false;
      paint();
    });
  };

  paint();
  window.addEventListener("scroll", schedule, { passive: true });
  window.addEventListener("resize", schedule, { passive: true });
}

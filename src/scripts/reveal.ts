import { prefersReducedMotion } from "./reduced-motion";

// Fades/slides in any [data-reveal] element the first time it enters the
// viewport, then stops observing it — reveals should never re-hide when
// scrolling back up.
export function initScrollReveal(): void {
  const targets = document.querySelectorAll<HTMLElement>("[data-reveal]");
  if (!targets.length) return;

  if (prefersReducedMotion()) {
    targets.forEach((el) => el.classList.add("is-visible"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries, obs) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          obs.unobserve(entry.target);
        }
      }
    },
    { threshold: 0.15, rootMargin: "0px 0px -10% 0px" },
  );

  targets.forEach((el) => observer.observe(el));
}

import { prefersReducedMotion } from "./reduced-motion";

// Swaps the sticky media on the right as each text step on the left crosses
// the middle of the viewport. Steps only ever activate — never deactivate —
// so the current media holds at the section's edges, and scrolling back up
// restores the earlier step's media.
export function initStickyScroll(): void {
  const sections = document.querySelectorAll<HTMLElement>("[data-sticky-scroll]");

  for (const section of sections) {
    const steps = section.querySelectorAll<HTMLElement>("[data-sticky-step]");
    const medias = section.querySelectorAll<HTMLElement>("[data-sticky-media]");
    if (steps.length < 2 || !medias.length) continue;

    const activate = (index: number) => {
      medias.forEach((media, mediaIndex) => {
        const isActive = mediaIndex === index;
        media.dataset.active = String(isActive);
        media.toggleAttribute("aria-hidden", !isActive);

        const video = media.querySelector("video");
        if (!video) return;

        if (isActive && !prefersReducedMotion()) {
          video.currentTime = 0;
          // play() rejects under some autoplay policies — non-fatal.
          void video.play().catch(() => {});
        } else {
          video.pause();
        }
      });
    };

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          activate(Number((entry.target as HTMLElement).dataset.stickyStep));
        }
      },
      { rootMargin: "-50% 0px -50% 0px", threshold: 0 },
    );

    steps.forEach((step) => observer.observe(step));
  }
}

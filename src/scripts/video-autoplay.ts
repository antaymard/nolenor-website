import { prefersReducedMotion } from "./reduced-motion";

// Plays a demo video as it scrolls into view and pauses it as it leaves —
// the core precut.app-style mechanic. Under reduced-motion, videos simply
// stay on their poster frame and are never auto-played.
export function initScrollVideos(): void {
  const videos = document.querySelectorAll<HTMLVideoElement>(
    "video[data-autoplay-on-scroll]",
  );
  if (!videos.length || prefersReducedMotion()) return;

  const observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        const video = entry.target as HTMLVideoElement;
        if (entry.isIntersecting) {
          // play() returns a promise that can reject under autoplay
          // policies (e.g. Safari) — expected, non-fatal, safe to ignore.
          void video.play().catch(() => {});
          if (video.dataset.restartOnExit === "true") {
            video.currentTime = 0;
          }
        } else {
          video.pause();
        }
      }
    },
    { threshold: 0.35 },
  );

  videos.forEach((video) => observer.observe(video));
}

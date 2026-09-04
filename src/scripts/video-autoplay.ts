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

/*
 * Warms the demo videos so they are buffered before anyone scrolls to them.
 *
 * They ship with preload="metadata" so the initial page load only fetches
 * their headers, competing with nothing. This starts the real download once
 * the page itself has finished loading, and does it one file at a time, in
 * document order: the first video someone reaches gets the whole pipe rather
 * than sharing it with the ones further down.
 *
 * Only the copies the current layout actually renders are warmed — every
 * demo exists twice, once inline for narrow screens and once in the sticky
 * desktop stack, and the hidden set of the two has no client rects.
 */

interface SaverConnection {
  saveData?: boolean;
  effectiveType?: string;
}

const CAP = 8000;

export function initVideoWarmup(): void {
  const begin = () => {
    const conn = (navigator as Navigator & { connection?: SaverConnection })
      .connection;
    // Four megabytes nobody asked for is rude on a metered or 2G connection.
    if (conn?.saveData) return;
    if (conn?.effectiveType && /2g$/.test(conn.effectiveType)) return;

    const videos = Array.from(
      document.querySelectorAll<HTMLVideoElement>("video[src]"),
    ).filter(warmable);

    warmNext(videos, 0);
  };

  // Safari only grew requestIdleCallback in 18.2, hence the fallback.
  const soon = () => {
    if (typeof window.requestIdleCallback === "function") {
      window.requestIdleCallback(begin, { timeout: 2000 });
    } else {
      window.setTimeout(begin, 200);
    }
  };

  if (document.readyState === "complete") soon();
  else window.addEventListener("load", soon, { once: true });
}

function warmable(video: HTMLVideoElement): boolean {
  // load() resets the element, so never touch one that is already running:
  // a priority video (the hero) autoplays from the moment it can.
  if (video.autoplay || !video.paused || video.currentTime > 0) return false;
  return video.getClientRects().length > 0;
}

function warmNext(videos: HTMLVideoElement[], index: number): void {
  const video = videos[index];
  if (!video) return;

  let done = false;
  const advance = () => {
    if (done) return;
    done = true;
    window.clearTimeout(cap);
    video.removeEventListener("canplaythrough", advance);
    video.removeEventListener("error", advance);
    warmNext(videos, index + 1);
  };

  // A file that stalls, 404s, or is simply long must not hold up the queue.
  const cap = window.setTimeout(advance, CAP);
  video.addEventListener("canplaythrough", advance);
  video.addEventListener("error", advance);

  video.preload = "auto";
  video.load();
}

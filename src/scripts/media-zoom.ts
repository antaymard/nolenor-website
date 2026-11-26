/*
 * On a phone, a screenshot of the app at 350px is too small to read. Every
 * still or clip in a `.media` frame of the home page gets a small zoom badge.
 * A tap on a still opens it full screen at the largest size the screen
 * allows, nothing to pan: held upright, the picture lies sideways across the
 * screen (tilt the phone to read it); turned, it fills the landscape screen.
 * A clip goes to the system's full-screen player, in landscape. The dialog
 * closes with its button, Escape, the back gesture or a tap on the picture. Desktop never sees any of it (the badge is hidden from 40rem).
 */
const PHONE = "(max-width: 39.99rem)";

const LABELS = {
  fr: { open: "Agrandir", close: "Fermer" },
  en: { open: "Enlarge", close: "Close" },
};

export function initMediaZoom() {
  const frames = [...document.querySelectorAll<HTMLElement>("main .media")].filter((f) => f.querySelector("img, video"));
  if (!frames.length) return;
  const t = LABELS[document.documentElement.lang.startsWith("fr") ? "fr" : "en"];

  const dialog = document.createElement("dialog");
  dialog.className = "zoom";
  dialog.setAttribute("aria-label", t.open);
  dialog.innerHTML = `
    <button type="button" class="zoom__close" aria-label="${t.close}">
      <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"><path d="M18 6 6 18M6 6l12 12"/></svg>
    </button>
    <div class="zoom__stage"></div>`;
  document.body.append(dialog);
  const stage = dialog.querySelector<HTMLElement>(".zoom__stage")!;
  const orientation = screen.orientation as ScreenOrientation & { lock?: (o: string) => Promise<void> };
  const close = () => dialog.open && dialog.close();
  dialog.querySelector(".zoom__close")!.addEventListener("click", close);
  // Any tap closes it, the picture included: there is nothing else to do.
  stage.addEventListener("click", close);
  dialog.addEventListener("close", () => {
    stage.replaceChildren();
    document.documentElement.removeAttribute("data-zoom-open");
    if (document.fullscreenElement === dialog) document.exitFullscreen().catch(() => {});
    orientation?.unlock?.();
  });

  // A clip goes to the system's own full screen, turned to landscape where
  // the phone allows it: no strip to pan. Returns false if not available.
  const fullscreenVideo = (video: HTMLVideoElement): boolean => {
    const v = video as HTMLVideoElement & { webkitEnterFullscreen?: () => void };
    if (v.requestFullscreen) {
      v.requestFullscreen()
        .then(() => orientation?.lock?.("landscape").catch(() => {}))
        .catch(() => {});
      const onExit = () => {
        if (!document.fullscreenElement) {
          orientation?.unlock?.();
          document.removeEventListener("fullscreenchange", onExit);
        }
      };
      document.addEventListener("fullscreenchange", onExit);
      return true;
    }
    if (v.webkitEnterFullscreen) {
      // iOS: the player turns with the phone by itself.
      v.webkitEnterFullscreen();
      return true;
    }
    return false;
  };

  const open = (frame: HTMLElement) => {
    // The picture shown: the visible clip if there are several (AI on/off).
    const media =
      [...frame.querySelectorAll<HTMLImageElement | HTMLVideoElement>("img, video")].find(
        (m) => getComputedStyle(m).visibility !== "hidden" && getComputedStyle(m).opacity !== "0",
      ) ?? frame.querySelector<HTMLImageElement | HTMLVideoElement>("img, video")!;
    if (media instanceof HTMLVideoElement && fullscreenVideo(media)) return;
    if (media instanceof HTMLVideoElement) return;
    const img = document.createElement("img");
    img.src = media.currentSrc || media.src;
    img.alt = media.alt;
    img.className = "zoom__media";
    stage.replaceChildren(img);
    document.documentElement.setAttribute("data-zoom-open", "");
    dialog.showModal();
    // Where the phone allows it (Android), true full screen, in landscape.
    if (dialog.requestFullscreen && window.matchMedia("(orientation: portrait)").matches) {
      dialog
        .requestFullscreen()
        .then(() => orientation?.lock?.("landscape"))
        .catch(() => {});
    }
  };

  frames.forEach((frame) => {
    const badge = document.createElement("button");
    badge.type = "button";
    badge.className = "zoom-badge";
    badge.setAttribute("aria-label", t.open);
    badge.innerHTML = `<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7"/></svg>`;
    badge.addEventListener("click", (e) => {
      e.stopPropagation();
      open(frame);
    });
    frame.append(badge);
    // The whole picture is a target too, on a phone.
    frame.addEventListener("click", (e) => {
      if (!window.matchMedia(PHONE).matches) return;
      if ((e.target as HTMLElement).closest("a, button:not(.zoom-badge)")) return;
      open(frame);
    });
  });
}

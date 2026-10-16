const OS_KEY = "nolenor-help-os";

type Os = "mac" | "win";

function detectOs(): Os {
  return /mac|iphone|ipad/i.test(navigator.platform || navigator.userAgent) ? "mac" : "win";
}

function readStoredOs(): Os | null {
  try {
    const value = localStorage.getItem(OS_KEY);
    return value === "mac" || value === "win" ? value : null;
  } catch {
    return null;
  }
}

function applyOs(os: Os): void {
  document.documentElement.dataset.os = os;
  document.querySelectorAll<HTMLButtonElement>("[data-os-option]").forEach((button) => {
    button.setAttribute("aria-pressed", String(button.dataset.osOption === os));
  });
}

// Keycaps on the help page are written once and shown as Ctrl/Alt or ⌘/⌥
// depending on html[data-os]. The platform is guessed, then the reader can
// override it — someone reading on a PC about the Mac they use at work.
export function initOsSwitch(): void {
  const buttons = document.querySelectorAll<HTMLButtonElement>("[data-os-option]");
  if (!buttons.length) return;

  applyOs(readStoredOs() ?? detectOs());

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      const os = button.dataset.osOption === "mac" ? "mac" : "win";
      applyOs(os);
      try {
        localStorage.setItem(OS_KEY, os);
      } catch {
        // Private mode: the choice simply doesn't survive a reload.
      }
    });
  });
}

// Same geometry-per-frame approach as nav-active.ts, for the same reason:
// it never goes stale after an anchor jump.
export function initHelpToc(): void {
  const toc = document.querySelector("[data-help-toc]");
  if (!toc) return;

  const pairs = Array.from(toc.querySelectorAll<HTMLAnchorElement>('a[href^="#"]'))
    .map((link) => ({ link, section: document.querySelector<HTMLElement>(link.hash) }))
    .filter((pair): pair is { link: HTMLAnchorElement; section: HTMLElement } => pair.section !== null);

  if (!pairs.length) return;

  const paint = () => {
    const line = window.innerHeight * 0.3;
    let current: HTMLAnchorElement | null = pairs[0].link;
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

initOsSwitch();
initHelpToc();

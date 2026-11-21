// A thin wrapper over the PostHog snippet loaded in BaseHead. If PostHog
// is blocked or not loaded yet, events are simply dropped.
type Props = Record<string, string | number | boolean | undefined>;

export function track(event: string, props: Props = {}): void {
  const ph = (window as unknown as { posthog?: { capture?: (e: string, p: Props) => void } }).posthog;
  try {
    ph?.capture?.(event, { ...props, path: window.location.pathname });
  } catch {
    // Analytics must never break the page.
  }
}

// Every link carrying data-cta reports a click: which kind of action
// (signup, demo canvas, read more), where on the page, and where it leads.
export function initCtaTracking(): void {
  document.addEventListener("click", (event) => {
    const link = (event.target as Element | null)?.closest?.<HTMLAnchorElement>("a[data-cta]");
    if (!link) return;
    const kind = link.dataset.cta ?? "link";
    track(kind === "demo" ? "demo_canvas_open" : "cta_click", {
      kind,
      placement: link.dataset.ctaPlacement,
      target: link.href,
    });
  });
}

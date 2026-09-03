/*
 * The problem section's accordion: one panel open, the rest collapsed to a
 * strip. CSS owns the widths and the transition; this only moves the
 * data-open attribute and publishes one measurement.
 *
 * That measurement is the open panel's width in pixels. The panel's body is
 * laid out at that width from the moment it is shown, so the text doesn't
 * re-wrap and the illustration doesn't rescale while the panel is sliding
 * open — it is simply revealed by the panel growing past it.
 */

export function initProblemAccordion(): void {
  document
    .querySelectorAll<HTMLElement>("[data-problem-rail]")
    .forEach(setupRail);
}

function setupRail(rail: HTMLElement): void {
  const panels = Array.from(rail.querySelectorAll<HTMLElement>("[data-panel]"));
  const tabs = Array.from(
    rail.querySelectorAll<HTMLButtonElement>("[data-panel-tab]"),
  );
  if (panels.length !== tabs.length || !panels.length) return;

  const px = (name: string) =>
    parseFloat(getComputedStyle(rail).getPropertyValue(name)) || 0;

  const measure = () => {
    const aside = (panels.length - 1) * (px("--pb-strip") + px("--pb-gap"));
    rail.style.setProperty("--pb-open", `${rail.clientWidth - aside}px`);
  };

  const show = (index: number) => {
    panels.forEach((panel, i) => {
      const isOpen = i === index;
      panel.toggleAttribute("data-open", isOpen);
      tabs[i].setAttribute("aria-expanded", String(isOpen));
    });
  };

  tabs.forEach((tab, i) => {
    tab.addEventListener("click", () => {
      // Only reachable on the stacked layout, where the open panel keeps its
      // row: tapping it again closes it. Wide, the open panel has no strip.
      show(panels[i].hasAttribute("data-open") ? -1 : i);
    });
  });

  measure();
  new ResizeObserver(measure).observe(rail);
}

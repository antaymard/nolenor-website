/*
 * The problem section's switcher: one panel open at a time. CSS owns the
 * layout (tabs side by side when wide, an accordion when narrow); this only
 * moves the data-open attribute and keeps aria-expanded in step.
 */

// Matches the breakpoint in Problem.astro where the tabs sit side by side.
const WIDE = "(min-width: 60rem)";

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

  const wide = window.matchMedia(WIDE);

  const show = (index: number) => {
    panels.forEach((panel, i) => {
      const isOpen = i === index;
      panel.toggleAttribute("data-open", isOpen);
      tabs[i].setAttribute("aria-expanded", String(isOpen));
    });
  };

  tabs.forEach((tab, i) => {
    tab.addEventListener("click", () => {
      const isOpen = panels[i].hasAttribute("data-open");
      // Wide, a tab row always has one tab picked; tapping it again does
      // nothing. Stacked, the open row closes on a second tap.
      if (isOpen && wide.matches) return;
      show(isOpen ? -1 : i);
    });
  });

  // Coming back to wide with every row closed would leave an empty stage.
  wide.addEventListener("change", (event) => {
    if (event.matches && !panels.some((p) => p.hasAttribute("data-open"))) show(0);
  });
}

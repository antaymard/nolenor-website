// Reveals text a few characters per frame rather than one per tick, so a
// sentence always finishes inside the beat it was given, however long it is.
// Returns the interval id so the caller can cancel it.
export function typeInto(
  target: HTMLElement,
  text: string,
  duration: number,
): number {
  const TICK = 16;
  const ticks = Math.max(1, Math.floor((duration * 0.8) / TICK));
  const perTick = Math.max(1, Math.ceil(text.length / ticks));
  let typed = 0;

  const timer = window.setInterval(() => {
    typed = Math.min(text.length, typed + perTick);
    target.textContent = text.slice(0, typed);
    if (typed >= text.length) window.clearInterval(timer);
  }, TICK);

  return timer;
}

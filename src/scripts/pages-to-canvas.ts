import { prefersReducedMotion } from "./reduced-motion";
import {
  CANVAS,
  CRUMB,
  DOCK,
  FLIGHT,
  FLIGHTS,
  MAIN,
  ROWS,
  STAGE,
  lerp,
  lerpR,
  mix,
  range,
  win,
  type FlightKey,
  type R,
} from "@/lib/pagesToCanvas";

// Drives the "pages to canvas" slider (src/components/home/PagesToCanvas.astro).
// `t` runs from 0 (the page tool) to 1 (the canvas). The sequence: the page
// splits into canvas + dock while the page tool's chrome leaves; the
// sidebar's sub-pages fly out first and become sub-canvases; then the page,
// the database, its views and the files, one after the other; the links
// are drawn last, once everything has landed, then the collaborators arrive.
//
// Everything travels: a box keeps its frame while it moves and changes shape
// (radius, border, shadow); the only crossfade is the short swap of its face
// halfway through the flight.

const PLAY_MS = 5200;

type Els = Record<string, HTMLElement>;

function place(el: HTMLElement, r: R) {
  el.style.left = `${r.x}px`;
  el.style.top = `${r.y}px`;
  el.style.width = `${r.w}px`;
  el.style.height = `${r.h}px`;
}

function setup(root: HTMLElement) {
  const stage = root.querySelector<HTMLElement>("[data-ptc-stage]")!;
  const frame = root.querySelector<HTMLElement>("[data-ptc-frame]")!;
  const input = root.querySelector<HTMLInputElement>("[data-ptc-range]")!;
  const replay = root.querySelector<HTMLButtonElement>("[data-ptc-replay]")!;
  // Shown or not, the button keeps its place (visibility, not display), so
  // the bar beside it never changes width.
  const showReplay = (on: boolean) => {
    replay.dataset.shown = String(on);
    replay.tabIndex = on ? 0 : -1;
    replay.setAttribute("aria-hidden", String(!on));
  };

  const el: Els = {};
  stage.querySelectorAll<HTMLElement>("[data-el]").forEach((n) => {
    // Rows repeat some names (chev, page, tile): keep the first of each, rows are handled below.
    if (!n.closest("[data-row]")) el[n.dataset.el!] = n;
  });
  const rows = [...stage.querySelectorAll<HTMLElement>("[data-row]")];
  const flights = new Map<FlightKey, { box: HTMLElement; a: HTMLImageElement; b: HTMLImageElement }>();
  stage.querySelectorAll<HTMLElement>("[data-fly]").forEach((box) => {
    flights.set(box.dataset.fly as FlightKey, {
      box,
      a: box.querySelector<HTMLImageElement>('[data-face="a"]')!,
      b: box.querySelector<HTMLImageElement>('[data-face="b"]')!,
    });
  });
  const edges = [...stage.querySelectorAll<SVGGElement>("[data-edge]")].map((g) => {
    const path = g.querySelector("path")!;
    const arrow = g.querySelector("polyline")!;
    const len = path.getTotalLength();
    path.style.strokeDasharray = `${len}`;
    return { path, arrow, len };
  });

  // Fit the fixed stage to its frame. On a phone, a larger fixed scale in a
  // frame that pans sideways (the CSS lets it scroll).
  const phone = window.matchMedia("(max-width: 39.99rem)");
  const PHONE_SCALE = 0.56;
  const fit = () => {
    if (phone.matches) {
      stage.style.transform = `scale(${PHONE_SCALE})`;
      frame.style.height = `${Math.round(STAGE.h * PHONE_SCALE)}px`;
    } else {
      stage.style.transform = `scale(${frame.clientWidth / STAGE.w})`;
      frame.style.height = "";
    }
  };
  new ResizeObserver(fit).observe(frame);
  phone.addEventListener("change", fit);
  fit();

  const view = root.querySelector<HTMLElement>("[data-ptc-view]");
  if (view) {
    frame.addEventListener(
      "scroll",
      () => {
        if (frame.scrollLeft > 8) view.dataset.panned = "";
        view.toggleAttribute("data-end", frame.scrollLeft + frame.clientWidth >= frame.scrollWidth - 4);
      },
      { passive: true },
    );
  }

  function render(t: number) {
    const split = win(t, 0.06, 0.42);
    const lift = win(t, 0, 0.18);
    const tools = win(t, 0.5, 0.75);
    const presence = win(t, 0.92, 1);
    const p = win(t, 0.18, 0.55); // the sidebar re-reads itself as a canvas tree
    const fold = win(t, 0.06, 0.3);

    stage.style.background = mix([247, 247, 245], [241, 245, 249], split);

    // Sidebar header and search.
    Object.assign(el.ws.style, { left: `${lerp(12, 18, p)}px`, top: `${lerp(12, 16, p)}px`, height: `${lerp(24, 36, p)}px` });
    Object.assign(el["ws-tile"].style, {
      width: `${lerp(20, 26, p)}px`,
      height: `${lerp(20, 26, p)}px`,
      borderRadius: `${lerp(4, 8, p)}px`,
      background: mix([227, 226, 224], [124, 58, 237], p),
      fontSize: `${lerp(11, 14, p)}px`,
      color: mix([55, 53, 47], [255, 255, 255], p),
    });
    Object.assign(el["ws-name"].style, { fontSize: `${lerp(14, 15, p)}px`, fontWeight: `${Math.round(lerp(600, 800, p))}` });
    place(el.search, lerpR({ x: 8, y: 46, w: 224, h: 28 }, { x: 10, y: 62, w: 184, h: 36 }, p));
    Object.assign(el.search.style, {
      borderRadius: `${lerp(4, 8, p)}px`,
      borderColor: `rgba(15,23,42,${0.1 * p})`,
      background: `rgba(255,255,255,${0.7 * p})`,
      paddingLeft: `${lerp(8, 10, p)}px`,
      color: mix([55, 53, 47], [100, 116, 139], p),
    });
    el.kbd.style.transform = `scale(${p})`;
    el.fav.style.transform = `translateX(${-60 * fold}px) scaleY(${1 - fold})`;
    Object.assign(el.spaces.style, {
      left: `${lerp(16, 18, p)}px`,
      top: `${lerp(192, 110, p)}px`,
      fontSize: `${lerp(12, 11, p)}px`,
      fontWeight: `${Math.round(lerp(500, 800, p))}`,
      letterSpacing: `${0.06 * p}em`,
      color: mix([145, 145, 142], [100, 116, 139], p),
      textTransform: p > 0.5 ? "uppercase" : "none",
    });
    el.spaces.textContent = p > 0.5 ? "Canvases" : "Teamspaces";

    rows.forEach((node) => {
      const r = ROWS[Number(node.dataset.row)];
      if (r.b === null) {
        node.style.transform = `translateX(${-260 * fold}px)`;
        return;
      }
      Object.assign(node.style, {
        left: `${lerp(8, 10, p)}px`,
        width: `${lerp(224, 184, p)}px`,
        top: `${lerp(r.a, r.b, p)}px`,
        height: `${lerp(28, 30, p)}px`,
        borderRadius: `${lerp(4, 8, p)}px`,
        background: r.active ? mix([235, 235, 234], [255, 255, 255], p) : "transparent",
        boxShadow: r.active ? `0 1px 2px rgba(15,23,42,${0.1 * p})` : "none",
        color: mix([55, 53, 47], [51, 65, 85], p),
      });
      node.querySelector<HTMLElement>('[data-el="chev"]')!.style.transform = `rotate(${r.open ? (r.active ? -90 * p : 0) : -90}deg)`;
      node.querySelector<HTMLElement>('[data-el="page"]')!.style.transform = `scale(${1 - p})`;
      node.querySelector<HTMLElement>('[data-el="tile"]')!.style.transform = `scale(${p})`;
    });

    // The page area splits: the canvas card and the docked window.
    const frameStyle = (node: HTMLElement, r: R) => {
      place(node, r);
      node.style.borderRadius = `${16 * split}px`;
      node.style.borderColor = `rgba(226,232,240,${split})`;
    };
    frameStyle(el.canvas, lerpR(MAIN, CANVAS, split));
    frameStyle(el.dock, lerpR(MAIN, DOCK, split));
    el.dots.style.clipPath = `circle(${90 * split}% at 40% 40%)`;
    el.toolbar.style.transform = `translateY(${(1 - tools) * 90}px)`;
    el["dock-head"].style.transform = `translateY(${(split - 1) * 40}px)`;

    // The page tool's chrome leaves; the weekly sync comes back as a dock tab.
    el.topbar.style.transform = `translateY(${-50 * lift}px)`;
    el.meta.style.transform = `translateY(${-90 * lift}px)`;
    el["weekly-tab"].style.transform = `translateY(${(1 - presence) * -44}px)`;

    // Links, drawn one after the other once the nodes have landed.
    edges.forEach((e, i) => {
      const d = win(t, 0.8 + i * 0.035, 0.86 + i * 0.035);
      e.path.style.strokeDashoffset = `${e.len * (1 - d)}`;
      e.path.style.opacity = d > 0 ? "1" : "0";
      e.arrow.style.opacity = `${range(d, 0.85, 1)}`;
    });

    // The breadcrumb becomes the canvas's pill.
    const c = win(t, CRUMB.start, CRUMB.start + FLIGHT);
    place(el.crumb, lerpR(CRUMB.a, CRUMB.b, c));
    Object.assign(el.crumb.style, {
      borderRadius: `${lerp(0, 12, c)}px`,
      background: `rgba(255,255,255,${c})`,
      boxShadow: `0 1px 6px rgba(15,23,42,${0.12 * c})`,
      borderColor: `rgba(226,232,240,${c})`,
      paddingLeft: `${lerp(0, 12, c)}px`,
      fontSize: `${lerp(14, 13, c)}px`,
      color: mix([145, 145, 142], [100, 116, 139], c),
    });
    el["crumb-page"].style.fontWeight = `${Math.round(lerp(400, 700, c))}`;
    el["crumb-chev"].style.transform = `scale(${c})`;
    el["crumb-tools"].style.transform = `scale(${c})`;

    // Travelling elements.
    flights.forEach(({ box, a, b }, k) => {
      const f = FLIGHTS[k];
      const fp = win(t, f.start, f.start + FLIGHT);
      const r = lerpR(f.a, f.b, fp);
      const s = range(fp, 0.42, 0.62);
      const n = f.node ? range(fp, 0.15, 0.6) : 0;
      place(box, r);
      Object.assign(box.style, {
        borderRadius: `${lerp(3, 12, n)}px`,
        background: `rgba(255,255,255,${n})`,
        borderColor: `rgba(226,232,240,${n})`,
        boxShadow: `0 ${4 * n}px ${16 * n}px rgba(15,23,42,${0.1 * n})`,
      });
      const face = (img: HTMLImageElement, native: R, opacity: number) => {
        img.style.opacity = `${opacity}`;
        img.style.visibility = opacity <= 0.001 ? "hidden" : "visible";
        img.style.width = `${native.w}px`;
        img.style.height = `${native.h}px`;
        img.style.transform = `scale(${Math.min(1, r.w / native.w, r.h / native.h)})`;
      };
      face(a, f.a, 1 - s);
      face(b, f.b, s);
    });

    // Who else is here.
    el.people.style.transform = `scale(${presence})`;
    el["on-board"].style.transform = `scale(${presence})`;
    Object.assign(el.cursor.style, {
      left: `${lerp(900, 772, presence)}px`,
      top: `${lerp(330, 262, presence)}px`,
      transform: `scale(${presence})`,
    });
  }

  // ── Control ──────────────────────────────────────────────────────────
  let raf = 0;
  const show = (t: number) => {
    input.value = String(Math.round(t * 1000));
    input.setAttribute("aria-valuetext", `${Math.round(t * 100)} %`);
    render(t);
  };
  const stop = () => cancelAnimationFrame(raf);
  const play = () => {
    stop();
    showReplay(false);
    const from = Number(input.value) / 1000 >= 0.999 ? 0 : Number(input.value) / 1000;
    const t0 = performance.now() - from * PLAY_MS;
    const tick = (now: number) => {
      const t = Math.min(1, (now - t0) / PLAY_MS);
      show(t);
      if (t < 1) raf = requestAnimationFrame(tick);
      else showReplay(true);
    };
    raf = requestAnimationFrame(tick);
  };

  input.addEventListener("input", () => {
    stop();
    render(Number(input.value) / 1000);
    input.setAttribute("aria-valuetext", `${Math.round(Number(input.value) / 10)} %`);
    showReplay(true);
  });
  input.addEventListener("pointerdown", stop);
  replay.addEventListener("click", play);

  if (prefersReducedMotion()) {
    show(1);
    showReplay(true);
    return;
  }
  showReplay(false);
  show(0);
  // Plays once by itself, the first time most of it is on screen.
  const io = new IntersectionObserver(
    (entries) => {
      if (entries.some((e) => e.isIntersecting)) {
        io.disconnect();
        window.setTimeout(play, 400);
      }
    },
    { threshold: 0.6 },
  );
  io.observe(frame);
}

export function initPagesToCanvas(): void {
  document.querySelectorAll<HTMLElement>("[data-ptc]").forEach(setup);
}

export interface FeatureBullet {
  icon: string;
  text: string;
}

export interface FeatureStep {
  title: string;
  subtitle: string;
  bullets: FeatureBullet[];
  media: {
    id: string;
    alt: string;
  };
}

// PLACEHOLDER COPY — carried over from the previous positioning so the
// scroll mechanic can be reviewed with realistic content. Replace once the
// final copy for this section lands.
export const featureSteps: FeatureStep[] = [
  {
    title: "One canvas. Nothing hidden.",
    subtitle: "Everything in view, always",
    bullets: [
      { icon: "lucide:layout-grid", text: "Documents, tables, images, PDFs and KPIs, side by side" },
      { icon: "lucide:move", text: "Infinite pan and zoom — drag, resize, connect" },
      { icon: "lucide:search", text: "Search across everything, PDF pages included" },
    ],
    media: {
      id: "feature-canvas-nodes",
      alt: "Canvas view with several node types arranged together, one expanding into a focused window",
    },
  },
  {
    title: "Watch every step. Not just the answer.",
    subtitle: "Meet Nolë, your agent on the canvas",
    bullets: [
      { icon: "lucide:eye", text: "Every tool call and reasoning step, streamed live" },
      { icon: "lucide:at-sign", text: "@mention any node to pull it into context" },
      { icon: "lucide:users", text: "Sub-agents work in parallel, never blocking you" },
    ],
    media: {
      id: "feature-nole-agent",
      alt: "Nolë chat panel streaming a response with visible tool calls and a background sub-agent indicator",
    },
  },
  {
    title: "Don't describe the dashboard. Watch it get built.",
    subtitle: "Live apps, generated on your canvas",
    bullets: [
      { icon: "lucide:sparkles", text: "Interactive apps, wired to your own data" },
      { icon: "lucide:wrench", text: "Self-healing — errors caught and fixed, visibly" },
      { icon: "lucide:chart-line", text: "Built-in charting, no setup" },
    ],
    media: {
      id: "feature-mini-apps",
      alt: "An AI-generated mini-app rendering a live chart on the canvas, recovering automatically from an error",
    },
  },
];

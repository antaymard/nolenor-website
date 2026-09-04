import addAttachmentsVid from "@/assets/vid/add-attachments.mp4?url";
import addNodesVid from "@/assets/vid/add-nodes.mp4?url";

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
    src?: string;
  };
}

// PLACEHOLDER COPY — carried over from the previous positioning so the
// scroll mechanic can be reviewed with realistic content. Replace once the
// final copy for this section lands.
export const featureSteps: FeatureStep[] = [
  {
    title: "Capture and connect.",
    subtitle: "Start with whatever is on your mind.",
    bullets: [
      {
        icon: "lucide:layout-grid",
        text: "Documents, tables, images, PDFs and KPIs, side by side",
      },
      {
        icon: "lucide:move",
        text: "Infinite pan and zoom — drag, resize, connect",
      },
      {
        icon: "lucide:search",
        text: "Search across everything, PDF pages included",
      },
    ],
    media: {
      id: "feature-canvas-nodes",
      alt: "Canvas view with several node types arranged together, one expanding into a focused window",
      src: addNodesVid,
    },
  },
  {
    title: "Give AI the right context.",
    subtitle: "Meet Nolë, your agent on the canvas",
    bullets: [
      {
        icon: "lucide:eye",
        text: "Every tool call and reasoning step, streamed live",
      },
      {
        icon: "lucide:at-sign",
        text: "@mention any node or alt+clic on it to pull it into context",
      },
      {
        icon: "lucide:sparkles",
        text: "Close the chat, run multiple tasks in parallel, results appear live",
      },
    ],
    media: {
      id: "feature-nole-agent",
      alt: "Nolë chat panel streaming a response with visible tool calls and a background sub-agent indicator",
      src: addAttachmentsVid,
    },
  },
  {
    title: "Your thinking, augmented.",
    subtitle: "Live apps, generated on your canvas",
    bullets: [
      {
        icon: "lucide:sparkles",
        text: "Interactive apps, wired to your own data",
      },
      {
        icon: "lucide:wrench",
        text: "Self-healing — errors caught and fixed, visibly",
      },
      { icon: "lucide:chart-line", text: "Built-in charting, no setup" },
    ],
    media: {
      id: "feature-mini-apps",
      alt: "An AI-generated mini-app rendering a live chart on the canvas, recovering automatically from an error",
    },
  },
];

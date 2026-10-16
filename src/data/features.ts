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

// Two of the three gestures Nolënor gives back (lay it down, show it); the
// third, doing the work, is the reader's — it has no screen of its own.
export const featureSteps: FeatureStep[] = [
  {
    title: "Lay it down. Don't file it.",
    subtitle: "Think in loose piles. The canvas keeps up.",
    bullets: [
      {
        icon: "lucide:layout-grid",
        text: "Notes, tables, PDFs, images and links, side by side",
      },
      {
        icon: "lucide:move",
        text: "Place, move, link: no folder to pick first",
      },
      {
        icon: "lucide:search",
        text: "Everything is indexed, so the pile turns back into material",
      },
    ],
    media: {
      id: "feature-canvas-nodes",
      alt: "Canvas view with several node types arranged together, one expanding into a focused window",
      src: addNodesVid,
    },
  },
  {
    title: "Show it where to look.",
    subtitle: "Meet Nolë, the apprentice on your canvas",
    bullets: [
      {
        icon: "lucide:eye",
        text: "See each step it takes, live: what it reads, what it touches",
      },
      {
        icon: "lucide:at-sign",
        text: "@mention a node or alt+click it to hand it over",
      },
      {
        icon: "lucide:sparkles",
        text: "Close the chat and keep working; its results land next to yours",
      },
    ],
    media: {
      id: "feature-nole-agent",
      alt: "Nolë chat panel streaming a response with visible tool calls and a background sub-agent indicator",
      src: addAttachmentsVid,
    },
  },
  // {
  //   title: "Your thinking, augmented.",
  //   subtitle: "Live apps, generated on your canvas",
  //   bullets: [
  //     {
  //       icon: "lucide:sparkles",
  //       text: "Interactive apps, wired to your own data",
  //     },
  //     {
  //       icon: "lucide:wrench",
  //       text: "Self-healing errors caught and fixed, visibly",
  //     },
  //     { icon: "lucide:chart-line", text: "Built-in charting, no setup" },
  //   ],
  //   media: {
  //     id: "feature-mini-apps",
  //     alt: "An AI-generated mini-app rendering a live chart on the canvas, recovering automatically from an error",
  //   },
  // },
];

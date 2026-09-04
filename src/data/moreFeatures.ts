import historySrc from "@/assets/img/history.png?url";
import searchSrc from "@/assets/img/search.png?url";

export interface FeatureHighlight {
  title: string;
  description: string;
  media: {
    id: string;
    alt: string;
    src?: string;
  };
}

export interface FeatureNote {
  title: string;
  description: string;
}

/*
 * DRAFT COPY — written from the raw feature list, ranked by how much each
 * feature carries the page's own argument rather than by how impressive it
 * sounds on its own.
 *
 * The three highlights each answer something the problem section raised, so
 * they get a picture. The notes are real features that simply don't need
 * one — giving every feature a visual is the fastest way to make none of
 * them look important.
 *
 * Claims to confirm before launch: whether shared canvases have shipped,
 * and whether version history really is kept without a time limit.
 */
export const featureHighlights: FeatureHighlight[] = [
  {
    title: "See what the agent changed",
    description:
      "Every edit is kept, and Nolë's are recorded separately from yours. Come back a week later, read exactly what it did to a node, and take it back if it wasn't what you meant.",
    media: {
      id: "more-version-control",
      alt: "A node's version history open, with the agent's edits and the author's own listed separately down the timeline",
      src: historySrc,
    },
  },
  {
    title: "Search what you can't retype",
    description:
      "PDFs, audio and video are transcribed and indexed next to your own writing. Search a phrase you only remember hearing, and land on the node that holds it.",
    media: {
      id: "more-search",
      alt: "Search results spanning a PDF page, a transcript timestamp and a written note, all matching the same phrase",
      src: searchSrc,
    },
  },
  {
    title: "Present without leaving the canvas",
    description:
      "Save viewpoints as you work, then play them back in order. The canvas becomes the deck — nothing to export, and no second document quietly drifting out of sync.",
    media: {
      id: "more-slideshows",
      alt: "A canvas with numbered saved viewpoints, one of them zoomed to full screen as a slide",
    },
  },
];

export const featureNotes: FeatureNote[] = [
  {
    title: "Skills",
    description:
      "Teach Nolë a way of working once. It loads the skill when the task calls for it.",
  },
  {
    title: "Shared canvases",
    description: "Bring people onto a canvas, with permissions per person.",
  },
  {
    title: "Speech to text",
    description: "Talk to Nolë instead of typing. Language detected as you go.",
  },
  {
    title: "Image generation",
    description:
      "Generate images straight onto the canvas, across several models.",
  },
];

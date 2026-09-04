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
 * Claim to confirm before launch: whether version history really is kept
 * without a time limit.
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
    title: "Bring other people in",
    description:
      "Invite people onto a canvas and set what each of them can do. They land in the board you actually work in — nodes, threads and history — rather than in an export of it.",
    media: {
      id: "more-shared-canvases",
      alt: "A share panel over a canvas: two people listed at different permission levels, with a second cursor editing a node behind it",
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
    title: "Speech to text",
    description: "Talk to Nolë instead of typing. Language detected as you go.",
  },
  {
    title: "Image generation",
    description:
      "Generate images straight onto the canvas, across several models.",
  },
  {
    title: "Slideshows",
    description:
      "Save viewpoints as you work and play them back — the canvas becomes the deck.",
  },
];

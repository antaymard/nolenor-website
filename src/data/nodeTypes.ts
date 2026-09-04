import type { ImageMetadata } from "astro";
import TitleImg from "@/assets/img/Title.png";
import BlocknoteImg from "@/assets/img/Blocknote.png";
import LinkImg from "@/assets/img/Link.png";
import PDFImg from "@/assets/img/PDF.png";
import TableImg from "@/assets/img/Table.png";
import AppImg from "@/assets/img/App.png";
import ImageNodeImg from "@/assets/img/Image.png";
import AudioImg from "@/assets/img/Audio.png";

export interface NodeType {
  name: string;
  /** Lucide icon name for the badge in the card header. */
  icon: string;
  description: string;
  /**
   * In-card preview. It is cropped by the bottom of the card on purpose —
   * a peek at the node, not a full screenshot. See MEDIA_BRIEF.md.
   */
  media?: {
    id: string;
    alt: string;
    src?: ImageMetadata;
  };
  /** Node types that don't ship yet render an empty "Soon" slot instead. */
  soon?: boolean;
}

export const nodeTypes: NodeType[] = [
  {
    name: "Title",
    icon: "lucide:heading",
    description:
      "The skeleton of your canvas. Group ideas into sections so the board stays scannable the more you add.",
    media: {
      id: "node-title",
      alt: "A Title node with its formatting toolbar open, linked to two smaller labelled nodes on the canvas",
      src: TitleImg,
    },
  },
  {
    name: "Blocknote",
    icon: "lucide:file-text",
    description:
      "A full rich-text editor with headings, lists, tables, mentions, dates, callouts…",
    media: {
      id: "node-blocknote",
      alt: "A Blocknote node with its slash-command menu open on the block types: divider, table, image, video, audio, file",
      src: BlocknoteImg,
    },
  },
  {
    name: "Link",
    icon: "lucide:link",
    description:
      "Drop any URL onto the canvas and keep the source one click away, not buried in tabs.",
    media: {
      id: "node-link",
      alt: "A Link node showing a fetched page preview — thumbnail, title, description and favicon — for an external URL",
      src: LinkImg,
    },
  },
  {
    name: "PDF",
    icon: "lucide:file",
    description:
      "Store the actual document on the canvas and read it in place. No downloads, no hunting for files.",
    media: {
      id: "node-pdf",
      alt: "A PDF node rendering a market-study document in place on the canvas, charts included",
      src: PDFImg,
    },
  },
  {
    name: "Table",
    icon: "lucide:table",
    description:
      "Structured data with typed columns (text, number, date, link, select, mentions…).",
    media: {
      id: "node-table",
      alt: "A Table node with typed columns — version, status select, date, text — and one select cell open",
      src: TableImg,
    },
  },
  {
    name: "App",
    icon: "lucide:layout-dashboard",
    description:
      "A mini app in a node, reading data from the canvas to build the exact dashboard or tool you need.",
    media: {
      id: "node-app",
      alt: "An App node rendering a live cost-comparison dashboard built from canvas data, with editable inputs and a chart",
      src: AppImg,
    },
  },
  {
    name: "Image",
    icon: "lucide:image",
    description:
      "Paste a screenshot, reference or generate images. The visual sits exactly where it's being discussed.",
    media: {
      id: "node-image",
      alt: "An Image node holding a 2×2 grid of generated logo variants with the generation caption beneath",
      src: ImageNodeImg,
    },
  },
  {
    name: "Audio & Video",
    icon: "lucide:play",
    description:
      "Voice memos, interviews, talks — playable on the canvas, with loop regions to replay one passage.",
    media: {
      id: "node-media",
      alt: "An Audio node with a waveform player and a loop region, above a Video node playing on the canvas",
      src: AudioImg,
    },
  },
  {
    name: "Custom",
    icon: "lucide:shapes",
    description:
      "Design your own node type with the exact fields you need. Use it as a reusable template anywhere.",
    soon: true,
  },
];

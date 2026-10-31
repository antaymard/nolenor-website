import addAttachmentsVid from "@/assets/vid/add-attachments.mp4?url";
import addNodesVid from "@/assets/vid/add-nodes.mp4?url";
import type { Lang } from "@/i18n";

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
//
// Icons, media ids and clips are shared by both languages; only the words
// differ. Each language lists its bullets in the same order as `icons`.
const shared = [
  {
    icons: ["lucide:layout-grid", "lucide:move", "lucide:search"],
    media: { id: "feature-canvas-nodes", src: addNodesVid },
  },
  {
    icons: ["lucide:eye", "lucide:at-sign", "lucide:sparkles"],
    media: { id: "feature-nole-agent", src: addAttachmentsVid },
  },
] as const;

interface StepText {
  title: string;
  subtitle: string;
  bullets: [string, string, string];
  alt: string;
}

const text: Record<Lang, StepText[]> = {
  en: [
    {
      title: "Lay it down. Don't file it.",
      subtitle: "Think in loose piles. The canvas keeps up.",
      bullets: [
        "Notes, tables, PDFs, images and links, side by side",
        "Place, move, link: no folder to pick first",
        "Everything is indexed, so the pile turns back into material",
      ],
      alt: "Canvas view with several node types arranged together, one expanding into a focused window",
    },
    {
      title: "Show it where to look.",
      subtitle: "Meet Nolë, the apprentice on your canvas",
      bullets: [
        "See each step it takes, live: what it reads, what it touches",
        "@mention a node or alt+click it to hand it over",
        "Close the chat and keep working; its results land next to yours",
      ],
      alt: "Nolë chat panel streaming a response with visible tool calls and a background sub-agent indicator",
    },
    // A third gesture, parked (old shape: icons sat inline with the text).
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
  ],
  fr: [
    {
      title: "Posez. Ne classez pas.",
      subtitle: "Pensez en piles éparses. Le canevas suit le rythme.",
      bullets: [
        "Notes, tableaux, PDF, images et liens, côte à côte",
        "Placez, déplacez, reliez : aucun dossier à choisir d’abord",
        "Tout est indexé, si bien que la pile redevient matière",
      ],
      alt: "Vue du canevas où plusieurs types de nœuds sont disposés ensemble, l’un s’ouvrant dans une fenêtre dédiée",
    },
    {
      title: "Montrez-lui où regarder.",
      subtitle: "Voici Nolë, l’apprenti de votre canevas",
      bullets: [
        "Suivez chacune de ses étapes en direct : ce qu’il lit, ce qu’il touche",
        "@mentionnez un nœud ou faites Alt+clic dessus pour le lui confier",
        "Fermez la conversation et continuez à travailler ; ses résultats arrivent à côté des vôtres",
      ],
      alt: "Panneau de conversation de Nolë affichant une réponse en direct, avec ses appels d’outils visibles et un indicateur de sous-agent en arrière-plan",
    },
  ],
};

function build(lang: Lang): FeatureStep[] {
  return text[lang].map((step, i) => ({
    title: step.title,
    subtitle: step.subtitle,
    bullets: shared[i].icons.map((icon, j) => ({ icon, text: step.bullets[j] })),
    media: { ...shared[i].media, alt: step.alt },
  }));
}

export const featureSteps: Record<Lang, FeatureStep[]> = {
  en: build("en"),
  fr: build("fr"),
};

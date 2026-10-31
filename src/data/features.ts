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
      title: "Posez. Ne classez rien.",
      subtitle: "Pensez en vrac, le canevas suit.",
      bullets: [
        "Notes, tableaux, PDF, images et liens, côte à côte",
        "Placez, déplacez, reliez, sans passer par la case dossier",
        "Tout est indexé : le vrac redevient matière à travailler",
      ],
      alt: "Le canevas, avec plusieurs types de nœuds disposés côte à côte, dont l’un s’ouvre en grand dans une fenêtre à part",
    },
    {
      title: "Montrez-lui où regarder.",
      subtitle: "Voici Nolë, l’apprenti qui partage votre canevas",
      bullets: [
        "Chaque étape en direct : ce qu’il lit, ce qu’il touche",
        "Pour lui confier un nœud, @mentionnez-le ou faites Alt+clic dessus",
        "Fermez la conversation, poursuivez : ses résultats se posent à côté des vôtres",
      ],
      alt: "Le panneau de conversation de Nolë : une réponse s’écrit en direct, les appels d’outils sont visibles, un sous-agent tourne en arrière-plan",
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

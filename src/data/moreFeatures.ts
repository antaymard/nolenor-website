import type { Lang } from "@/i18n";
import historySrc from "@/assets/img/history.png?url";
import searchSrc from "@/assets/img/search.png?url";
import sharedSrc from "@/assets/img/shared.png?url";

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

// Media ids and images, shared by both languages.
const historyMedia = { id: "more-version-control", src: historySrc };
const searchMedia = { id: "more-search", src: searchSrc };
const sharedMedia = { id: "more-shared-canvases", src: sharedSrc };

export const featureHighlights: Record<Lang, FeatureHighlight[]> = {
  en: [
    {
      title: "See what the agent changed",
      description:
        "Every edit is kept, and Nolë's are recorded separately from yours. Come back a week later, read exactly what it did to a node, and take it back if it wasn't what you meant.",
      media: {
        ...historyMedia,
        alt: "A node's version history open, with the agent's edits and the author's own listed separately down the timeline",
      },
    },
    {
      title: "Search everything, from any format",
      description:
        "PDFs, audio and video are transcribed and indexed next to your own writing. Search a phrase you only remember hearing, and land on the node that holds it.",
      media: {
        ...searchMedia,
        alt: "Search results spanning a PDF page, a transcript timestamp and a written note, all matching the same phrase",
      },
    },
    {
      title: "Bring other people in",
      description:
        "Invite people onto a canvas and set what each of them can do. They land in the board you actually work in (nodes, threads and history) rather than in an export of it.",
      media: {
        ...sharedMedia,
        alt: "A share panel over a canvas: two people listed at different permission levels, with a second cursor editing a node behind it",
      },
    },
  ],
  fr: [
    {
      title: "Voir ce que l’agent a changé",
      description:
        "Chaque modification est conservée, et celles de Nolë sont enregistrées à part des vôtres. Revenez une semaine plus tard, lisez exactement ce qu’il a fait à un nœud, et annulez-le si ce n’était pas ce que vous vouliez.",
      media: {
        ...historyMedia,
        alt: "L’historique des versions d’un nœud, où les modifications de l’agent et celles de l’auteur sont listées séparément le long de la chronologie",
      },
    },
    {
      title: "Tout retrouver, quel que soit le format",
      description:
        "PDF, audio et vidéo sont transcrits et indexés à côté de vos propres écrits. Cherchez une phrase dont vous vous souvenez seulement l’avoir entendue, et tombez sur le nœud qui la contient.",
      media: {
        ...searchMedia,
        alt: "Des résultats de recherche couvrant une page de PDF, un horodatage de transcription et une note écrite, tous liés à la même phrase",
      },
    },
    {
      title: "Ouvrir la porte à d’autres",
      description:
        "Invitez des personnes sur un canevas et choisissez ce que chacune peut y faire. Elles arrivent dans le canevas où vous travaillez vraiment (nœuds, fils de discussion et historique), et non dans un export.",
      media: {
        ...sharedMedia,
        alt: "Un panneau de partage au-dessus d’un canevas : deux personnes avec des niveaux d’accès différents, et un second curseur qui modifie un nœud à l’arrière-plan",
      },
    },
  ],
};

export const featureNotes: Record<Lang, FeatureNote[]> = {
  en: [
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
        "Save viewpoints as you work and play them back. The canvas becomes the deck.",
    },
    {
      title: "Works without AI",
      description:
        "Switch the AI off and the canvas still works. Your work is still there. So are you.",
    },
    {
      title: "Your work stays yours.",
      description:
        "Export everything in open formats (Markdown, JSON, CSV), whenever you want. No lock-in.",
    },
  ],
  fr: [
    {
      title: "Compétences",
      description:
        "Apprenez une fois à Nolë une manière de travailler. Il charge la compétence quand la tâche l’exige.",
    },
    {
      title: "Dictée vocale",
      description: "Parlez à Nolë au lieu de taper. La langue est reconnue à la volée.",
    },
    {
      title: "Génération d’images",
      description:
        "Générez des images directement sur le canevas, avec plusieurs modèles au choix.",
    },
    {
      title: "Diaporamas",
      description:
        "Enregistrez des points de vue en travaillant, puis rejouez-les. Le canevas devient la présentation.",
    },
    {
      title: "Fonctionne sans IA",
      description:
        "Coupez l’IA, le canevas fonctionne toujours. Votre travail est toujours là. Vous aussi.",
    },
    {
      title: "Votre travail reste le vôtre.",
      description:
        "Exportez tout dans des formats ouverts (Markdown, JSON, CSV), quand vous le voulez. Rien ne vous enferme.",
    },
  ],
};

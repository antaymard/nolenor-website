import type { ImageMetadata } from "astro";
import type { Lang } from "@/i18n";
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

// The nine node types, in display order. Everything that isn't copy (icon,
// media id and image, "soon") is declared once here and shared by both
// languages; only the words below change.
const nodeKeys = [
  "title",
  "blocknote",
  "link",
  "pdf",
  "table",
  "app",
  "image",
  "media",
  "custom",
] as const;

type NodeKey = (typeof nodeKeys)[number];

const shared: Record<
  NodeKey,
  { icon: string; media?: { id: string; src?: ImageMetadata }; soon?: boolean }
> = {
  title: { icon: "lucide:heading", media: { id: "node-title", src: TitleImg } },
  blocknote: { icon: "lucide:file-text", media: { id: "node-blocknote", src: BlocknoteImg } },
  link: { icon: "lucide:link", media: { id: "node-link", src: LinkImg } },
  pdf: { icon: "lucide:file", media: { id: "node-pdf", src: PDFImg } },
  table: { icon: "lucide:table", media: { id: "node-table", src: TableImg } },
  app: { icon: "lucide:layout-dashboard", media: { id: "node-app", src: AppImg } },
  image: { icon: "lucide:image", media: { id: "node-image", src: ImageNodeImg } },
  media: { icon: "lucide:play", media: { id: "node-media", src: AudioImg } },
  custom: { icon: "lucide:shapes", soon: true },
};

interface NodeCopy {
  name: string;
  description: string;
  /** Alt text for the preview; omitted for types without one. */
  alt?: string;
}

const copy: Record<Lang, Record<NodeKey, NodeCopy>> = {
  en: {
    title: {
      name: "Title",
      description:
        "Landmarks for your canvas. Mark out areas so you always find your way back, however much you lay down.",
      alt: "A Title node with its formatting toolbar open, linked to two smaller labelled nodes on the canvas",
    },
    blocknote: {
      name: "Blocknote",
      description:
        "A full rich-text editor with headings, lists, tables, mentions, dates, callouts…",
      alt: "A Blocknote node with its slash-command menu open on the block types: divider, table, image, video, audio, file",
    },
    link: {
      name: "Link",
      description:
        "Drop any URL onto the canvas and keep the source one click away, not buried in tabs.",
      alt: "A Link node showing a fetched page preview (thumbnail, title, description and favicon) for an external URL",
    },
    pdf: {
      name: "PDF",
      description:
        "Store the actual document on the canvas and read it in place. No downloads, no hunting for files.",
      alt: "A PDF node rendering a market-study document in place on the canvas, charts included",
    },
    table: {
      name: "Table",
      description:
        "Structured data with typed columns (text, number, date, link, select, mentions…).",
      alt: "A Table node with typed columns (version, status select, date, text) and one select cell open",
    },
    app: {
      name: "App",
      description:
        "A mini app in a node, reading data from the canvas to build the exact dashboard or tool you need.",
      alt: "An App node rendering a live cost-comparison dashboard built from canvas data, with editable inputs and a chart",
    },
    image: {
      name: "Image",
      description:
        "Paste a screenshot, reference or generate images. The visual sits exactly where it's being discussed.",
      alt: "An Image node holding a 2×2 grid of generated logo variants with the generation caption beneath",
    },
    media: {
      name: "Audio & Video",
      description:
        "Voice memos, interviews, talks, playable on the canvas, with loop regions to replay one passage.",
      alt: "An Audio node with a waveform player and a loop region, above a Video node playing on the canvas",
    },
    custom: {
      name: "Custom",
      description:
        "Design your own node type with the exact fields you need. Use it as a reusable template anywhere.",
    },
  },
  fr: {
    title: {
      name: "Titre",
      description:
        "Des repères sur votre canevas. Délimitez des zones pour toujours retrouver votre chemin, quelle que soit la matière que vous y posez.",
      alt: "Un nœud Titre avec sa barre de mise en forme ouverte, relié à deux nœuds plus petits et légendés sur le canevas",
    },
    blocknote: {
      name: "Blocknote",
      description:
        "Un véritable éditeur de texte riche, avec titres, listes, tableaux, mentions, dates, encadrés…",
      alt: "Un nœud Blocknote avec son menu de commandes « / » ouvert sur les types de blocs : séparateur, tableau, image, vidéo, audio, fichier",
    },
    link: {
      name: "Lien",
      description:
        "Déposez n’importe quelle URL sur le canevas et gardez la source à un clic, au lieu de la perdre parmi vos onglets.",
      alt: "Un nœud Lien affichant l’aperçu d’une page externe (vignette, titre, description et favicon)",
    },
    pdf: {
      name: "PDF",
      description:
        "Gardez le document lui-même sur le canevas et lisez-le sur place. Rien à télécharger, aucun fichier à chercher.",
      alt: "Un nœud PDF affichant une étude de marché directement sur le canevas, graphiques compris",
    },
    table: {
      name: "Tableau",
      description:
        "Des données structurées, en colonnes typées (texte, nombre, date, lien, choix, mentions…).",
      alt: "Un nœud Tableau aux colonnes typées (version, statut à choix, date, texte), avec une cellule de choix ouverte",
    },
    app: {
      name: "App",
      description:
        "Une mini-application dans un nœud, qui lit les données du canevas pour bâtir exactement le tableau de bord ou l’outil qu’il vous faut.",
      alt: "Un nœud App affichant un tableau de bord de comparaison de coûts en direct, construit à partir des données du canevas, avec des champs modifiables et un graphique",
    },
    image: {
      name: "Image",
      description:
        "Collez une capture d’écran, une référence, ou générez des images. Le visuel se trouve exactement là où l’on en parle.",
      alt: "Un nœud Image contenant une grille 2×2 de variantes de logo générées, avec la légende de génération en dessous",
    },
    media: {
      name: "Audio et vidéo",
      description:
        "Mémos vocaux, entretiens, conférences, à écouter sur le canevas, avec des boucles pour réécouter un passage.",
      alt: "Un nœud Audio avec un lecteur à forme d’onde et une zone de boucle, au-dessus d’un nœud Vidéo en lecture sur le canevas",
    },
    custom: {
      name: "Personnalisé",
      description:
        "Concevez votre propre type de nœud, avec exactement les champs qu’il vous faut. Réutilisez-le partout comme modèle.",
    },
  },
};

function buildNodeTypes(lang: Lang): NodeType[] {
  return nodeKeys.map((key) => {
    const { icon, media, soon } = shared[key];
    const { name, description, alt } = copy[lang][key];
    return {
      name,
      icon,
      description,
      media: media && { ...media, alt: alt ?? "" },
      soon,
    };
  });
}

export const nodeTypes: Record<Lang, NodeType[]> = {
  en: buildNodeTypes("en"),
  fr: buildNodeTypes("fr"),
};

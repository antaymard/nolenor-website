import type { Lang } from "@/i18n";

export interface ProblemItem {
  title: string;
  subtitle: string;
  /** Named illustration built in src/components/visuals, or a media slot. */
  visual?: "chat-flattening" | "hidden-work" | "lost-thread";
  media?: {
    id: string;
    alt: string;
  };
}

/*
 * The operator's escalation, in order: at each step the tool takes one more
 * thing from you. The tree makes you file, the thread makes you type, the
 * agent that replaces you makes you review.
 *
 * The illustrations were drawn for the previous, chat-only framing and are
 * matched to the closest item: the endless conversation archive stands in
 * for filing, the opaque status lines for the thread, and the assistant
 * that finishes your thought for you for the agent.
 */

// Shared by both languages, in order.
const visuals: NonNullable<ProblemItem["visual"]>[] = [
  "lost-thread",
  "hidden-work",
  "chat-flattening",
];

type ProblemText = Pick<ProblemItem, "title" | "subtitle">;

const text: Record<Lang, ProblemText[]> = {
  en: [
    {
      title: "The tree makes you file.",
      subtitle:
        "Before you've understood something, you have to decide where it goes. You trim the idea to fit the structure, and lose the momentum on the way.",
    },
    {
      title: "The thread makes you type.",
      subtitle:
        "Everything has to go through a text box. You can't point at a document, link what you saw earlier, or see what the AI is looking at. You describe instead of showing.",
    },
    {
      title: "The agent makes you review.",
      subtitle:
        "It does the work before your thinking has taken shape. You no longer follow what was done, so you can't steer, so you hand over more. And you end up proofreading.",
    },
  ],
  fr: [
    {
      title: "L’arborescence vous oblige à classer.",
      subtitle:
        "Avant même d’avoir compris quelque chose, il faut décider où le ranger. Vous taillez l’idée pour qu’elle entre dans la structure, et vous perdez l’élan en chemin.",
    },
    {
      title: "Le fil vous oblige à taper.",
      subtitle:
        "Tout doit passer par une zone de texte. Impossible de désigner un document, de relier ce que vous avez vu plus tôt, ou de voir ce que l’IA regarde. Vous décrivez au lieu de montrer.",
    },
    {
      title: "L’agent vous oblige à relire.",
      subtitle:
        "Il fait le travail avant que votre pensée n’ait pris forme. Vous ne suivez plus ce qui a été fait, donc vous ne pouvez plus orienter, donc vous lui en confiez davantage. Et vous finissez par corriger ses copies.",
    },
  ],
};

export const problemItems: Record<Lang, ProblemItem[]> = {
  en: text.en.map((item, i) => ({ ...item, visual: visuals[i] })),
  fr: text.fr.map((item, i) => ({ ...item, visual: visuals[i] })),
};

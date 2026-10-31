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
        "Avant même de comprendre ce que vous tenez, il faut décider où le ranger. Vous rognez l’idée pour la faire entrer dans la case, et l’élan se perd en route.",
    },
    {
      title: "Le fil vous rive au clavier.",
      subtitle:
        "Tout passe par une zone de texte. Impossible de pointer un document, de rattacher ce que vous avez vu plus tôt ou de savoir ce que l’IA a sous les yeux. Vous décrivez, faute de pouvoir montrer.",
    },
    {
      title: "L’agent vous réduit à relire.",
      subtitle:
        "Il se met à l’ouvrage avant même que votre pensée ait pris forme. Vous ne savez plus ce qu’il a fait, donc vous ne pouvez plus le guider, donc vous lui en laissez davantage. Et vous voilà à corriger ses copies.",
    },
  ],
};

export const problemItems: Record<Lang, ProblemItem[]> = {
  en: text.en.map((item, i) => ({ ...item, visual: visuals[i] })),
  fr: text.fr.map((item, i) => ({ ...item, visual: visuals[i] })),
};

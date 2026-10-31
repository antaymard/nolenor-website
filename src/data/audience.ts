import type { Lang } from "@/i18n";

export interface AudienceList {
  /** Reads as the end of the sentence the heading starts. */
  title: string;
  items: string[];
}

/*
 * The qualification block. The second list is the point of it: saying who
 * this isn't for is what makes the first list mean anything.
 *
 * Trailing semicolons removed from the source copy — a bulleted list either
 * punctuates every line or none of them, and none reads better in a card.
 */

export const audienceFit: Record<Lang, AudienceList> = {
  en: {
    title: "It's for you if you",
    items: [
      "have a craft and want AI to amplify it, not take it over",
      "think in loose piles before you think in folders",
      "want to show the AI what you mean, not just describe it",
      "want to understand every step, and be able to take it back",
    ],
  },
  fr: {
    title: "C’est pour vous si vous",
    items: [
      "avez un métier et voulez que l’IA l’amplifie, pas qu’elle vous le prenne",
      "réfléchissez en vrac avant de ranger en dossiers",
      "préférez montrer à l’IA ce que vous avez en tête plutôt que de tout lui décrire",
      "tenez à comprendre chaque étape, et à pouvoir revenir dessus",
    ],
  },
};

export const audienceMisfit: Record<Lang, AudienceList> = {
  en: {
    title: "It may not be for you if you",
    items: [
      "want AI to hand you a finished result without you in the loop",
      "are looking for an army of agents that works through the night",
      "only need a quick chat for one-off questions",
      "prefer to file everything in folders and sub-folders",
    ],
  },
  fr: {
    title: "Ce n’est peut-être pas pour vous si vous",
    items: [
      "attendez de l’IA un travail fini, sans avoir à y mettre la main",
      "cherchez une armée d’agents qui tourne toute la nuit",
      "voulez juste un chat pour poser une question de temps en temps",
      "aimez que tout soit rangé dans des dossiers et des sous-dossiers",
    ],
  },
};

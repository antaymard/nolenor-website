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
      "avez un métier et voulez que l’IA l’amplifie, pas qu’elle s’en empare",
      "pensez en tas épars avant de penser en dossiers",
      "voulez montrer à l’IA ce que vous voulez dire, pas seulement le décrire",
      "voulez comprendre chaque étape, et pouvoir revenir en arrière",
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
      "attendez de l’IA un résultat fini, sans avoir à intervenir",
      "cherchez une armée d’agents qui travaille toute la nuit",
      "n’avez besoin que d’un chat rapide pour des questions ponctuelles",
      "préférez tout ranger dans des dossiers et des sous-dossiers",
    ],
  },
};

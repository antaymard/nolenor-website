export interface ProblemItem {
  title: string;
  subtitle: string;
  /** Named illustration built in src/components/visuals, or a media slot. */
  visual?: "chat-flattening";
  media?: {
    id: string;
    alt: string;
  };
}

export const problemItems: ProblemItem[] = [
  {
    title: "The chat turns thinking into prompting.",
    subtitle:
      "Your thoughts become a sequence of requests instead of something you can develop.",
    visual: "chat-flattening",
  },
  // SCAFFOLD — copy and visuals for items 2 and 3 are still to be defined.
  {
    title: "Item 2 — title to come.",
    subtitle: "Item 2 — subtitle to come.",
    media: {
      id: "problem-item-2",
      alt: "Problem section, second item — visual to be designed",
    },
  },
  {
    title: "Item 3 — title to come.",
    subtitle: "Item 3 — subtitle to come.",
    media: {
      id: "problem-item-3",
      alt: "Problem section, third item — visual to be designed",
    },
  },
];

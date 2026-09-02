export interface ProblemItem {
  title: string;
  subtitle: string;
  /** Named illustration built in src/components/visuals, or a media slot. */
  visual?: "chat-flattening" | "hidden-work";
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
  {
    title: "The chat hides what matters.",
    subtitle:
      "You can't see what the AI is using, missing, or remembering — making good results hard to understand and bad results hard to fix.",
    visual: "hidden-work",
  },
  // SCAFFOLD — copy and visual for item 3 are still to be defined.
  {
    title: "Item 3 — title to come.",
    subtitle: "Item 3 — subtitle to come.",
    media: {
      id: "problem-item-3",
      alt: "Problem section, third item — visual to be designed",
    },
  },
];

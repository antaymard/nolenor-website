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

export const problemItems: ProblemItem[] = [
  {
    title: "The chat turns thinking into prompting.",
    subtitle:
      "When an answer arrives before your thoughts have taken shape, you stop developing an idea and start reacting to ones.",
    visual: "chat-flattening",
  },
  {
    title: "The chat hides what matters.",
    subtitle:
      "You can't see what the AI is using, missing, or remembering — making good results hard to understand and bad results hard to fix.",
    visual: "hidden-work",
  },
  {
    // PLACEHOLDER COPY — written to the pattern of the first two items, from
    // the brief's own line ("The work is there. You just can't find it
    // anymore."). Replace once the wording is settled.
    title: "The chat buries your work.",
    subtitle:
      "An idea, a decision, a document — all of it produced inside a conversation, and none of it anywhere you can go back to.",
    visual: "lost-thread",
  },
];

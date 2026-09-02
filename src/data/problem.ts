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
      "Your thoughts become a sequence of requests instead of something you can develop.",
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
      "The work is there — an idea, a decision, a document — but it lives in a thread you can't search, revisit, or build on.",
    visual: "lost-thread",
  },
];

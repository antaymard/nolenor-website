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
export const problemItems: ProblemItem[] = [
  {
    title: "The tree makes you file.",
    subtitle:
      "Before you've understood something, you have to decide where it goes. You trim the idea to fit the structure, and lose the momentum on the way.",
    visual: "lost-thread",
  },
  {
    title: "The thread makes you type.",
    subtitle:
      "Everything has to go through a text box. You can't point at a document, link what you saw earlier, or see what the AI is looking at. You describe instead of showing.",
    visual: "hidden-work",
  },
  {
    title: "The agent makes you review.",
    subtitle:
      "It does the work before your thinking has taken shape. You no longer follow what was done, so you can't steer, so you hand over more. And you end up proofreading.",
    visual: "chat-flattening",
  },
];

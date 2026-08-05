export interface FaqEntry {
  question: string;
  answer: string;
}

export const faqEntries: FaqEntry[] = [
  {
    question: "Can I get my data out?",
    answer:
      "Yes, any time. Export a single canvas or your entire account as Markdown and JSON, zipped right in your browser — no lock-in, no waiting on a support ticket.",
  },
  {
    question: "Does Nolenor work with Claude or other AI tools?",
    answer:
      "Yes. Nolenor ships a native MCP server, so Claude Code, Claude Desktop, and any MCP-compatible client can read and edit your workspace directly, governed by scoped, revocable API tokens.",
  },
  {
    question: "Who can see my canvases?",
    answer:
      "You control it canvas by canvas: private by default, shareable by email with viewer, editor, or owner permissions, or public via a read-only link if you choose.",
  },
  {
    question: "What happens if Nolë makes a mistake?",
    answer:
      "Every change is checkpointed automatically. Restore any node to any earlier version in one click, and see exactly which conversation caused the change.",
  },
  {
    question: "Is this like Notion, or Miro, or just another chatbot?",
    answer:
      "None of those, exactly. Nolenor is a visual canvas like a whiteboard, with document editing like Notion, and an AI agent built into every node — not a separate chat window bolted on the side.",
  },
  {
    question: "What does it cost?",
    answer:
      "Nolenor is currently available as a free trial. Team pricing is on its way — reach out if you'd like to help shape it.",
  },
  {
    question: "Can Nolë run fully autonomous workflows on its own?",
    answer:
      "That's what we're building next. Today, Nolë executes tasks with you in the loop, checkpointed and visible at every step; fully autonomous multi-step pipelines are on our roadmap.",
  },
];

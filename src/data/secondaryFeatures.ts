export interface SecondaryFeature {
  icon: string;
  title: string;
  description: string;
}

// All 8 are shipped features (verified against the product codebase) —
// no "roadmap" badges needed here.
export const secondaryFeatures: SecondaryFeature[] = [
  {
    icon: "lucide:puzzle",
    title: "Custom node templates",
    description:
      "Design your own node types with a visual field editor — full feature parity with built-ins.",
  },
  {
    icon: "lucide:presentation",
    title: "Slideshows & hotspots",
    description:
      "Turn any canvas into a live presentation, built from the same nodes you work in.",
  },
  {
    icon: "lucide:search",
    title: "Full-text search",
    description: "Cmd+K search across every node — PDF pages included.",
  },
  {
    icon: "lucide:chrome",
    title: "Browser extension",
    description:
      "Chat with Nolë and capture any web page, right from your browser.",
  },
  {
    icon: "lucide:smartphone",
    title: "Mobile & offline",
    description:
      "A dedicated mobile UI and installable PWA, tablet and e-ink friendly.",
  },
  {
    icon: "lucide:mic",
    title: "Speech-to-text",
    description:
      "Talk instead of typing — word-level accurate, automatic language detection.",
  },
  {
    icon: "lucide:graduation-cap",
    title: "Skills",
    description: "Teach Nolë reusable instructions it can load on demand.",
  },
  {
    icon: "lucide:brain",
    title: "Persistent memory",
    description:
      "Nolë remembers key context across sessions, per project and per you.",
  },
];

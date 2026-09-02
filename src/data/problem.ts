export interface ProblemItem {
  caption: string;
  media: {
    id: string;
    alt: string;
  };
}

// SCAFFOLD — the three items of the problem section. Copy and visuals are
// still to be defined; each slot renders a MediaFrame placeholder until the
// animated visual we design replaces it.
export const problemItems: ProblemItem[] = [
  {
    caption: "Item 1 — visual and copy to come.",
    media: {
      id: "problem-item-1",
      alt: "Problem section, first item — visual to be designed",
    },
  },
  {
    caption: "Item 2 — visual and copy to come.",
    media: {
      id: "problem-item-2",
      alt: "Problem section, second item — visual to be designed",
    },
  },
  {
    caption: "Item 3 — visual and copy to come.",
    media: {
      id: "problem-item-3",
      alt: "Problem section, third item — visual to be designed",
    },
  },
];

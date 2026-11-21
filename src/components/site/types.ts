// Shapes shared by the site components and the page copy in src/data/pages.

export interface Card {
  title: string;
  text: string;
  eyebrow?: string;
  href?: string;
  linkLabel?: string;
}

export interface FaqItem {
  q: string;
  a: string;
}

export interface GestureStep {
  title: string;
  text: string;
  bullets: string[];
  media: { id: string; alt: string; src?: string; kind?: "video" | "image" };
}

export interface Prompt {
  context: string;
  text: string;
}

export interface SecondaryAction {
  label: string;
  href: string;
  kind?: "demo" | "link";
}

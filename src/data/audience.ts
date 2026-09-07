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

export const audienceFit: AudienceList = {
  title: "It's for you if you",
  items: [
    "work on projects that involve scattered information and evolving ideas",
    "want to connect knowledge and execution in one visual space",
    "use AI to explore, challenge and develop your thinking",
    "prefer understanding and directing the process rather than receiving a black-box answer",
  ],
};

export const audienceMisfit: AudienceList = {
  title: "It may not be for you if you",
  items: [
    "only want AI to produce a finished result without your involvement",
    "are looking for a fully autonomous autopilot that makes every decision for you",
    "prefer a simple linear chat for quick, one-off questions",
    "want to organize everything exclusively through folders and nested folders",
  ],
};

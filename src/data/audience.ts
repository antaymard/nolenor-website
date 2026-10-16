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
    "have a trade (consulting, strategy, research, science, product, design, engineering) and want AI to widen it, not do it for you",
    "work on projects where sources pile up and ideas keep moving",
    "want to see what the AI is looking at, and point it elsewhere when it's wrong",
    "would rather understand every step than receive a black-box answer",
  ],
};

export const audienceMisfit: AudienceList = {
  title: "It may not be for you if you",
  items: [
    "want AI to deliver a finished result without you in the loop",
    "are looking for an autopilot that makes the decisions for you",
    "mostly ask quick, one-off questions: a chat does that well",
    "want everything filed in folders inside folders",
  ],
};

// Central place for every external URL used across the site.
// Update these once here instead of hunting through components.

export const SITE_NAME = "Nolënor";

// The product app. Both app.nolenor.com and app.nolenor.fr answer (see
// ALLOWED_REDIRECT_ORIGINS in the product repo's convex/auth.ts); .com is
// the one the marketing site sends people to.
export const APP_URL = "https://app.nolenor.com";

// Verified real route on the product app: src/routes/signin.tsx
export const APP_SIGNIN_URL = `${APP_URL}/signin`;
export const APP_SIGNUP_URL = `${APP_URL}/signin?mode=signup`;

// Verified real route on the product app: src/routes/settings/api-tokens.tsx
export const APP_API_TOKENS_URL = `${APP_URL}/settings/api-tokens`;

// Must match astro.config.mjs `site` and the wishlist CORS allow-list.
export const SITE_URL = "https://nolenor.com";

// Production Convex deployment. Convex serves HTTP actions (the MCP
// server, the REST API, the wishlist) on its .convex.site domain;
// api.nolenor.com points at the same deployment. The /developers page
// prints it in every snippet.
export const API_ORIGIN = "https://api.nolenor.com";
export const MCP_ENDPOINT = `${API_ORIGIN}/mcp`;
export const REST_API_BASE = `${API_ORIGIN}/api/v1`;

// Contract (verified from convex/wishlist.ts + convex/http.ts in the
// product repo): POST only, JSON body { email: string; referral?: string }.
//
// IMPORTANT: the endpoint's CORS allow-list is hardcoded server-side to
// exactly nolenor.fr / www.nolenor.fr / nolenor.com / www.nolenor.com,
// checked on BOTH the POST and its OPTIONS preflight. The form therefore
// always fails on localhost and on preview deploys: expected, not a bug.
// The call goes to the .convex.site origin on purpose, the one the
// allow-list was tested against.
export const WISHLIST_ENDPOINT = "https://amicable-kudu-722.convex.site/wishlist/subscribe";

// Verified public via the GitHub API.
export const GITHUB_REPO_URL = "https://github.com/antaymard/nolenor";

// TO FILL — a contact address Antoine actually reads. Left empty, the
// pages that mention contact fall back to the GitHub link.
export const CONTACT_EMAIL = "";

// Public, read-only canvases used as live proof ("See a real canvas").
// TO FILL — paste the web-publish URL of each canvas once it exists. An
// empty string hides the matching button, so nothing links to a dead end.
// `home` is the canvas the old hero embedded; check it still reads well
// before launch.
export const PUBLIC_CANVASES = {
  home: "https://app.nolenor.com/canvas/jx7a5t991kccpbt7nzv9rp31h18e2wea",
  founders: "",
  consultants: "",
  research: "",
  personal: "",
} as const;

export type PublicCanvasKey = keyof typeof PUBLIC_CANVASES;

export const TAGLINE = {
  en: "A workshop, not a factory.",
  fr: "Un atelier, pas une usine.",
} as const;

/**
 * The sign-up link, tagged with where on the site it was clicked, so the
 * app's analytics can tell which page and which button converts.
 */
export function signupUrl(page: string, placement: string): string {
  const url = new URL(APP_SIGNUP_URL);
  url.searchParams.set("utm_source", "site");
  url.searchParams.set("utm_medium", "cta");
  url.searchParams.set("utm_content", `${page}-${placement}`);
  return url.toString();
}

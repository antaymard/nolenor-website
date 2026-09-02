// Central place for every external / placeholder URL used across the site.
// Update these once here instead of hunting through components.

export const SITE_NAME = "Nolënor";

// PLACEHOLDER — the real app is a separate deployment; URL unknown to us.
// Every "Start free trial" / "Log in" CTA points here.
export const APP_URL = "https://app.nolenor.com";

// Verified real route on the product app: src/routes/signin.tsx
export const APP_SIGNIN_URL = `${APP_URL}/signin`;

// PLACEHOLDER — must match astro.config.mjs `site` and the wishlist
// CORS allow-list below once the final marketing domain is chosen.
export const SITE_URL = "https://nolenor.com";

// PLACEHOLDER — swap <deployment> for the real Convex deployment name.
// Contract (verified from convex/wishlist.ts + convex/http.ts in the
// product repo): POST only, JSON body { email: string; referral?: string }.
//
// IMPORTANT: the endpoint's CORS allow-list is hardcoded server-side to
// exactly nolenor.fr / www.nolenor.fr / nolenor.com / www.nolenor.com,
// checked on BOTH the POST and its OPTIONS preflight. That means this
// form will always fail with an opaque network error on localhost and
// on preview deploys (Vercel/Netlify preview URLs, etc.) — that's
// expected, not a bug. It only works once deployed under an
// allow-listed origin. See src/scripts/wishlist-form.ts for the
// graceful-failure handling this requires.
export const WISHLIST_ENDPOINT =
  "https://<deployment>.convex.site/wishlist/subscribe";

// Verified public via the GitHub API.
export const GITHUB_REPO_URL = "https://github.com/antaymard/nolenor";

export const TAGLINE = "Somewhere to think, not another chat box.";

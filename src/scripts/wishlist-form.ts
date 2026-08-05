import { WISHLIST_ENDPOINT } from "@/lib/constants";

interface WishlistResponse {
  success: boolean;
  alreadySubscribed?: boolean;
  message?: string;
}

// Wires the footer "Get product updates" form to the real Convex
// /wishlist/subscribe endpoint. That endpoint's CORS allow-list only
// accepts requests from nolenor.fr/nolenor.com (see constants.ts) — on
// localhost or a preview deploy this fetch will always fail with an
// opaque network error before any response body is even readable. That
// is expected, not a bug, so failures are always shown as a calm,
// generic message rather than surfaced as a broken feature.
export function initWishlistForm(): void {
  const form = document.querySelector<HTMLFormElement>("#wishlist-form");
  const message = document.querySelector<HTMLElement>(
    "#wishlist-form-message",
  );
  if (!form || !message) return;

  form.addEventListener("submit", async (event) => {
    event.preventDefault();

    const emailInput = form.querySelector<HTMLInputElement>(
      'input[name="email"]',
    );
    const email = emailInput?.value.trim();
    if (!email) return;

    const submitButton = form.querySelector<HTMLButtonElement>(
      'button[type="submit"]',
    );
    submitButton?.setAttribute("disabled", "true");
    message.textContent = "Sending…";

    try {
      const response = await fetch(WISHLIST_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      const data = (await response.json()) as WishlistResponse;

      if (data.success) {
        message.textContent = data.alreadySubscribed
          ? "You're already on the list."
          : "You're in — thanks for subscribing.";
        form.reset();
      } else {
        message.textContent = "Something went wrong. Please try again later.";
      }
    } catch {
      message.textContent = "Something went wrong. Please try again later.";
    } finally {
      submitButton?.removeAttribute("disabled");
    }
  });
}

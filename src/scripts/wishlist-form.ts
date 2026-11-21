import { WISHLIST_ENDPOINT } from "@/lib/constants";
import { track } from "./track";

interface WishlistResponse {
  success: boolean;
  alreadySubscribed?: boolean;
  message?: string;
}

// Wires every [data-wishlist-form] (the footer one and the in-page block)
// to the Convex /wishlist/subscribe endpoint. `referral` carries the page
// and the placement, so a subscription can be traced to where it came
// from.
//
// The endpoint's CORS allow-list only accepts nolenor.fr / nolenor.com: on
// localhost or a preview deploy the fetch always fails before any response
// is readable. Expected, not a bug, so failures show a calm generic message.
export function initWishlistForm(): void {
  const forms = document.querySelectorAll<HTMLFormElement>("[data-wishlist-form]");

  forms.forEach((form) => {
    const message = form.querySelector<HTMLElement>("[data-wishlist-status]");
    if (!message) return;

    const text = {
      sending: form.dataset.msgSending ?? "Sending…",
      already: form.dataset.msgAlready ?? "You're already on the list.",
      success: form.dataset.msgSuccess ?? "You're on the list. Thank you.",
      error: form.dataset.msgError ?? "Something went wrong. Please try again later.",
    };

    form.addEventListener("submit", async (event) => {
      event.preventDefault();

      const emailInput = form.querySelector<HTMLInputElement>('input[name="email"]');
      const email = emailInput?.value.trim();
      if (!email || !emailInput?.checkValidity()) {
        emailInput?.setAttribute("aria-invalid", "true");
        emailInput?.focus();
        return;
      }
      emailInput.removeAttribute("aria-invalid");

      const submitButton = form.querySelector<HTMLButtonElement>('button[type="submit"]');
      submitButton?.setAttribute("disabled", "true");
      message.textContent = text.sending;

      const referral = `${window.location.pathname}#${form.dataset.placement ?? "form"}`;
      let result = "error";

      try {
        const response = await fetch(WISHLIST_ENDPOINT, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email, referral }),
        });
        const data = (await response.json()) as WishlistResponse;

        if (data.success) {
          result = data.alreadySubscribed ? "already" : "success";
          message.textContent = data.alreadySubscribed ? text.already : text.success;
          form.reset();
        } else {
          message.textContent = text.error;
        }
      } catch {
        message.textContent = text.error;
      } finally {
        submitButton?.removeAttribute("disabled");
        track("newsletter_submit", { placement: form.dataset.placement, result });
      }
    });
  });
}

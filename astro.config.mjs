import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import sitemap from "@astrojs/sitemap";
import icon from "astro-icon";

// PLACEHOLDER: confirm the final marketing domain before launch.
const SITE_URL = "https://nolenor.com";

export default defineConfig({
  site: SITE_URL,
  output: "static",
  // /principles was folded into the manifesto.
  redirects: {
    "/principles": "/manifesto#principles",
    "/fr/principles": "/fr/manifesto#principles",
  },
  // English at the root, French under /fr/. Keep in step with
  // src/i18n/index.ts.
  i18n: {
    defaultLocale: "en",
    locales: ["en", "fr"],
    routing: { prefixDefaultLocale: false },
  },
  integrations: [
    sitemap({
      i18n: {
        defaultLocale: "en",
        locales: { en: "en", fr: "fr" },
      },
    }),
    icon(),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});

import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import sitemap from "@astrojs/sitemap";
import icon from "astro-icon";

// PLACEHOLDER: confirm the final marketing domain before launch.
const SITE_URL = "https://nolenor.com";

export default defineConfig({
  site: SITE_URL,
  output: "static",
  integrations: [sitemap(), icon()],
  vite: {
    plugins: [tailwindcss()],
  },
});

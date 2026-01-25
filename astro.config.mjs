// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  // @TODO: add as an env var
  site: "https://lynds.dev",
  build: {
    format: "directory",
  },
  integrations: [sitemap()],
});

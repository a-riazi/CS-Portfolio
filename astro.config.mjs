import { defineConfig } from "astro/config";

// Configure for GitHub Pages static hosting
export default defineConfig({
  site: "https://a-riazi.github.io/CS-Portfolio/",
  base: "/CS-Portfolio/",
  output: "static",
});

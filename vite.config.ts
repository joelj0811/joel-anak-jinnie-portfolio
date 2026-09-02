import { sites } from "@openai/sites-vite-plugin";
import tailwindcss from "@tailwindcss/postcss";
import vinext from "vinext";
import { defineConfig } from "vite";

const isCodexSeatbeltSandbox = process.env.CODEX_SANDBOX === "seatbelt";

export default defineConfig({
  // GitHub Pages project sites are served under the repository name. Keep the
  // local preview at the domain root while publishing correctly in Actions.
  base:
    process.env.GITHUB_ACTIONS === "true"
      ? "/joel-anak-jinnie-portfolio/"
      : "/",
  css: { postcss: { plugins: [tailwindcss()] } },
  server: isCodexSeatbeltSandbox
    ? { watch: { useFsEvents: false, usePolling: true } }
    : undefined,
  plugins: [vinext(), sites()],
});

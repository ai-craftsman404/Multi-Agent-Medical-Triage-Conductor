import { defineConfig } from "vitest/config";
import path from "node:path";

export default defineConfig({
  resolve: {
    // Mirror Next.js/tsconfig `@/*` style imports in Vitest.
    alias: {
      "@": path.resolve(__dirname, "."),
    },
  },
  test: {
    // Playwright e2e specs live under tests/e2e; Vitest should not try to execute them.
    exclude: ["**/node_modules/**", "**/dist/**", "**/.next/**", "**/tests/e2e/**"],
  },
});

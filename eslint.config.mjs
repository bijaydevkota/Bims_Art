import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends(
    "next/core-web-vitals", // Core ESLint rules for Next.js
    "next/typescript" // TypeScript support
  ),
  {
    rules: {
      // Add or modify rules here
      "@typescript-eslint/no-explicit-any": "off", // Disable no-explicit-any rule
    },
  },
];

export default eslintConfig;

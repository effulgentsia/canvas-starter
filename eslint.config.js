// import { recommended as drupalCanvasRecommended } from "@drupal-canvas/eslint-config";
import storybook from "eslint-plugin-storybook";
import tseslint from "typescript-eslint";

export default [
  { ignores: ["dist", "node_modules", "storybook-static"] },
  {
    files: ["**/*.{js,jsx,ts,tsx}"],
    languageOptions: {
      parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
        ecmaFeatures: { jsx: true },
      },
    },
  },
  ...tseslint.configs.recommended,
  // ...drupalCanvasRecommended,
  ...storybook.configs["flat/recommended"],
];

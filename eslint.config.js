// import { recommended as drupalCanvasRecommended } from "@drupal-canvas/eslint-config";
import storybook from "eslint-plugin-storybook";

export default [
  { ignores: ["dist", "node_modules", "storybook-static"] },
  {
    files: ["**/*.{js,jsx}"],
    languageOptions: {
      parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
        ecmaFeatures: { jsx: true },
      },
    },
  },
  // ...drupalCanvasRecommended,
  ...storybook.configs["flat/recommended"],
];

import eslintPlugin from "@eslint/js";
import tsPlugin from "@typescript-eslint/eslint-plugin";
import tsParser from "@typescript-eslint/parser";
import nextPlugin from "eslint-plugin-next";

export default [
  eslintPlugin.configs.recommended,
  tsPlugin.configs.recommended,
  nextPlugin.configs.recommended,
  {
    languageOptions: {
      parser: tsParser,
    },
    rules: {
      "react/no-unescaped-entities": "off",
      "@typescript-eslint/no-unused-vars": "warn",
      "react/react-in-jsx-scope": "off",
    },
  },
];

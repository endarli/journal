import { defineConfig } from "eslint/config";

export default defineConfig([
  {
    files: ["**/*.ts"],
    root: true,
    extends: [
      "ts/recommended",
      "eslint:recommended",
      "plugin:eslint-plugin-react/recommended",
      "prettier",
    ],
    parser: "@typescript-eslint/parser",
    parserOptions: {
      project: "./tsconfig.json",
      sourceType: "module",
    },
    plugins: ["@typescript-eslint", "@eslint/ts", "react"],
    rules: {
      semi: [1, "always"],
      "prefer-const": "error",
      "@typescript-eslint/ban-ts-comment": "error",
      "@typescript-eslint/no-unused-vars": [
        "error",
        {
          args: "all",
          argsIgnorePattern: "^_",
          caughtErrors: "all",
          caughtErrorsIgnorePattern: "^_",
          ignoreRestSiblings: true,
        },
      ],
      quotes: ["error", "double"],
      // indent: [1, 2],
      "space-unary-ops": ["warn", { words: true, nonwords: false }],
      "sort-imports": [
        "error",
        {
          ignoreCase: false,
          ignoreDeclarationSort: false,
          ignoreMemberSort: false,
          memberSyntaxSortOrder: ["none", "all", "multiple", "single"],
        },
      ],
    },
  },
]);

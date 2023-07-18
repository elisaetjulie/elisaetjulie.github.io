module.exports = {
  parser: `@typescript-eslint/parser`,
  extends: [`plugin:prettier/recommended`],
  plugins: [`@typescript-eslint`, `unused-imports`, `prettier`, "react-hooks"],
  parserOptions: {
    ecmaVersion: 2016,
    sourceType: `module`,
    ecmaFeatures: {
      jsx: true,
    },
  },
  rules: {
    "no-console": "error",
    "unused-imports/no-unused-imports": "error",
    "react-hooks/exhaustive-deps": "error",
    "react/display-name": "off",
  },
  ignorePatterns: ["out", "dist", "cache", "lib"],
};

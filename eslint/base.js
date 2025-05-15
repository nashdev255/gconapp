const js = require("@eslint/js")

const { FlatCompat } = require("@eslint/eslintrc");
const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all
});

const tsParser = require("@typescript-eslint/parser");
const typescriptEslint = require("@typescript-eslint/eslint-plugin");

module.exports = {
  languageOptions: {
    parser: tsParser,
    ecmaVersion: "latest",
    sourceType: "module",
    parserOptions: {},
  },
  plugins: {
    "@typescript-eslint": typescriptEslint,
  },
  rules: {
  },
  extends: compat.extends(
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:tailwindcss/recommended",
    "prettier"
  ),
};

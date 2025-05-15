const {
    defineConfig,
} = require("eslint/config");

const typescriptEslint = require("@typescript-eslint/eslint-plugin");
const tsParser = require("@typescript-eslint/parser");
const js = require("@eslint/js");

const {
    FlatCompat,
} = require("@eslint/eslintrc");

const compat = new FlatCompat({
    baseDirectory: __dirname,
    recommendedConfig: js.configs.recommended,
    allConfig: js.configs.all
});

module.exports = defineConfig([{
    languageOptions: {
        globals: {},
        ecmaVersion: "latest",
        sourceType: "module",
        parserOptions: {},
        parser: tsParser,
    },

    extends: compat.extends(
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:tailwindcss/recommended",
        "prettier",
    ),

    plugins: {
        "@typescript-eslint": typescriptEslint,
    },

    rules: {
        console: ["error"],
    },
}]);

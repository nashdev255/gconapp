const {
    defineConfig,
} = require("eslint/config");

const globals = require("globals");
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
    files: ["src/**/*.{js,ts}"],
    extends: compat.extends("../eslint.config.js"),

    languageOptions: {
        globals: {
            ...globals.node,
        },
    },
}]);

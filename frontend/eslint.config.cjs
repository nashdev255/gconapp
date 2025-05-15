const {
    defineConfig,
} = require("eslint/config");

const globals = require("globals");
const react = require("eslint-plugin-react");
const js = require("@eslint/js");
const base = require("../eslint/base")

const {
    FlatCompat,
} = require("@eslint/eslintrc");

const compat = new FlatCompat({
    baseDirectory: __dirname,
    recommendedConfig: js.configs.recommended,
    allConfig: js.configs.all
});

module.exports = defineConfig([{
    ...base,
    files: ["src/**/*.{js,jsx,ts,tsx}"],
    settings: {
        react: {
            version: "detect",
        },
    },

    languageOptions: {
        ...base.languageOptions,
        globals: {
            ...globals.browser,
            ...globals.node,
        },
    },

    plugins: {
        ...base.plugins,
        react,
    },

    extends: [
        ...base.extends,
        ...compat.extends("plugin:react/recommended"),
        ...compat.extends("plugin:react/jsx-runtime")
    ],

    rules: {
        ...base.rules,
        "no-console": "error",
        'react/react-in-jsx-scope': 'off',
        "react/prop-types": "off",
        "react/jsx-uses-react": "off",
        "react/jsx-uses-vars": "warn",
    }
}]);

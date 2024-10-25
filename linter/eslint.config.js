import globals from "globals";

import js from "@eslint/js";
import esImport from "eslint-plugin-import";
import unusedImports from "eslint-plugin-unused-imports";

import ts from '@typescript-eslint/eslint-plugin';
import tsParser from "@typescript-eslint/parser";

export default [
    js.configs.recommended,
{
    ignores: ["**/eslint.config.js"],
}, {
    plugins: {
        "@typescript-eslint": ts,
        "unused-imports": unusedImports,
        'import': esImport,
    },

    languageOptions: {
        parser: tsParser,

        parserOptions: {
            project: "tsconfig.json",
            // tsconfigRootDir: __dirname,
            ecmaVersion: 'latest',
        },

        globals: {
            ...globals.node,
            ...globals.browser,
            ...globals.jest,
        },
    },

    rules: {
        ...ts.configs.recommended.rules,
        "no-undef": "off",
        "max-lines-per-function": ["error", {
            max: 80,
            skipComments: true,
        }],
        "max-depth": ["error", 3],
        "max-nested-callbacks": ["error", 3],
        "id-length": ["error", {
            min: 2,
            exceptions: ["x", "y", "t", "f", "m", "n", "d", "i", "_"],
        }],
        "no-shadow": "off",
        "no-catch-shadow": "off",
        curly: ["error", "all"],
        "@typescript-eslint/ban-ts-comment": "warn",
        "@typescript-eslint/explicit-module-boundary-types": "error",
        "@typescript-eslint/no-explicit-any": "off",
        eqeqeq: ["error", "always"],
        "import/no-default-export": "error",
        "no-unused-vars": "off",
        "@typescript-eslint/no-unused-vars": "warn",
        "@typescript-eslint/no-unused-vars": ["warn", {
            vars: "all",
            varsIgnorePattern: "^_",
            args: "after-used",
            argsIgnorePattern: "^_",
        }],
        "unused-imports/no-unused-imports": "error",
        "unused-imports/no-unused-vars": ["warn", {
            vars: "all",
            varsIgnorePattern: "^_",
            args: "after-used",
            argsIgnorePattern: "^_",
        }],
    },
}, 
{
    files: ["**/*.ts", "**/*.tsx", "**/*.js", "**/*.jsx"],
    rules: {
        "no-extra-semi": "off",
        "no-mixed-spaces-and-tabs": "off",
        "no-unexpected-multiline": "off",
    },
}];
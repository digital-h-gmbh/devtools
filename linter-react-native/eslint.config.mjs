import globals from "globals";
import { FlatCompat } from "@eslint/eslintrc";
import digitalHEsLintConfig from "@digital-h/eslint-config";
import eslintReact from "eslint-plugin-react";
import reactNativeConfig from "@react-native/eslint-config";
import typeScriptEslintPlugin from "@typescript-eslint/eslint-plugin";
import { fixupConfigRules, fixupPluginRules } from "@eslint/compat";
import js from "@eslint/js";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
});

// remove react from recommended config
delete eslintReact.configs.flat.recommended.plugins.react;
delete eslintReact.configs.flat["jsx-runtime"].plugins.react;

export default [
  ...digitalHEsLintConfig,
  eslintReact.configs.flat.recommended,
  eslintReact.configs.flat["jsx-runtime"],
  ...fixupConfigRules(compat.config(reactNativeConfig)),
  {
    ignores: [
      "**/eslint.config.{js,mjs,cjs,ts}",
      "**/__mocks__/**",
      "**/__tests__/**",
      "**/__fixtures__/**",
      "**/__snapshots__/**",
      "**/*.d.ts",
    ],
  },
  {
    languageOptions: {
      globals: {
        ...globals.serviceworker,
        ...globals.browser,
      },
    },
  },
  {
    files: ["**/*.{js,mjs,cjs,jsx,mjsx,ts,tsx,mtsx}"],
    ...eslintReact.configs.flat.recommended,
  },
  {
    files: ["**/*.{js,mjs,cjs,jsx,mjsx,ts,tsx,mtsx}"],
    languageOptions: {
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
  },
  {
    files: ["**/*.{js,mjs,cjs,jsx,mjsx,ts,tsx,mtsx}"],
    plugins: {
      "@typescript-eslint": fixupPluginRules(typeScriptEslintPlugin),
    },
  },
  {
    files: ["**/*.{js,mjs,cjs,jsx,mjsx,ts,tsx,mtsx}"],
    plugins: {
      eslintReact: fixupPluginRules(eslintReact),
    },
  },
  {
    files: ["**/*.{js,mjs,cjs,jsx,mjsx,ts,tsx,mtsx}"],
    rules: {
      "@typescript-eslint/no-unused-vars": 0,
      "no-shadow": 0,
      // Disabling due to bug with generateStyles https://github.com/Intellicode/eslint-plugin-react-native/issues/276
      "react-native/no-unused-styles": 0,
      // Disabled due to bug with eslint language server
      "react-native/no-single-element-style-arrays": 0,
      "import/order": 0,
      "@typescript-eslint/func-call-spacing": 0,
    },
  },
  {
    files: ["src/**/*.test.{ts,tsx}"],
    rules: {
      "max-lines-per-function": "off", // disables line length check
      "max-nested-callbacks": "off", // disables line length check
    },
  },
];

import digitalHEsLintConfig from "@digital-h/eslint-config";
import eslintReact from "eslint-plugin-react"
import reactNativeConfig from "@react-native/eslint-config";

export default [
  ...digitalHEsLintConfig,
  ...eslintReact.configs.recommended,
  ...reactNativeConfig.recommended,
  {
    plugins: {
      "react": eslintReact,
    },
    rules: {
      ...eslintReact.configs.recommended.rules,
      ...reactNativeConfig.configs.recommended.rules,
      "react/no-unused-prop-types": 2,
      "react/no-unused-state": 2,
      "react/prefer-stateless-function": 2,
      "react/jsx-max-depth": [2, { max: 4 }],
      "react/jsx-uses-react": 2,
      "react/jsx-uses-vars": 2,
      "max-lines": [1, { max: 175, skipBlankLines: true, skipComments: true }],
      "react-native/no-inline-styles": 2,
    },
  },

]

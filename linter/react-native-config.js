module.exports = {
  extends: [
    "@digital-h/eslint-config",
    "plugin:react/recommended",
    "@react-native",
  ],
  plugins: ["react"],
  rules: {
    "react/no-unused-prop-types": 2,
    "react/no-unused-state": 2,
    "react/prefer-stateless-function": 2,
    "react/jsx-max-depth": [2, { max: 4 }],
    "react/jsx-uses-react": 2,
    "react/jsx-uses-vars": 2,
    "max-lines": [1, { max: 175, skipBlankLines: true, skipComments: true }],
    "react-native/no-unused-styles": 2,
    "react-native/no-inline-styles": 2,
    "react-native/no-color-literals": 2,
    "react-native/no-single-element-style-arrays": 2,
  },
};

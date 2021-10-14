module.exports = {
  extends: [
    "@digital-h/eslint-config",
    "plugin:react/recommended",
    "@react-native-community",
  ],
  plugins: ["react"],
  rules: {
    "react/no-unused-prop-types": 2,
    "react/no-unused-state": 2,
    "react/prefer-stateless-function": 2,
    "react/jsx-max-depth": [2, { max: 4 }],
    "max-lines": [1, { max: 175, skipBlankLines: true, skipComments: true }],
  },
};

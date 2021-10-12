module.exports = {
  root: true,
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint", "rxjs", "prettier", "import"],
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:rxjs/recommended",
    "plugin:import/typescript",
    "prettier",
    "@react-native-community",
  ],
  rules: {
    "prettier/prettier": "error",
    "max-lines-per-function": [
      "error",
      {
        max: 80,
        skipComments: true,
      },
    ],
    "max-depth": ["error", 3],
    "max-nested-callbacks": ["error", 3],
    "id-length": ["error", { min: 2 }],
    "no-explicit-any": "off",
    "@typescript-eslint/explicit-module-boundary-types": "off",
    "no-unused-vars": ["error", { argsIgnorePattern: "^_" }],
    eqeqeq: ["error", "always"],
    "import/order": [
      "error",
      {
        groups: [
          "builtin",
          "external",
          "type",
          "internal",
          "parent",
          "sibling",
          "index",
          "object",
        ],
      },
    ],
  },
  overrides: [
    {
      // enable the rule specifically for TypeScript files
      files: ["*.ts", "*.tsx"],
      rules: {
        "@typescript-eslint/explicit-module-boundary-types": ["error"],
      },
    },
  ],
};

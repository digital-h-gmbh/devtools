module.exports = {
  root: true,
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint", "import"],
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:import/typescript",
    "prettier",
  ],
  rules: {
    "@typescript-eslint/ban-ts-ignore": "off",
    "@typescript-eslint/ban-ts-comment": "off",
    "max-lines-per-function": [
      "error",
      {
        max: 80,
        skipComments: true,
      },
    ],
    "max-depth": ["error", 3],
    "max-nested-callbacks": ["error", 3],
    "id-length": ["error", { min: 2, exceptions: ["x", "y", "t", "f", "m", "n", "d", "i", "_"] }],
    "no-shadow": "off",
    "no-catch-shadow": "off",
    "no-explicit-any": "off",
    "@typescript-eslint/no-unused-vars": "off",
    "@typescript-eslint/explicit-module-boundary-types": "off",
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
    "import/no-default-export": "error"
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

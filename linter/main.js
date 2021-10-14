module.exports = {
  root: true,
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint", "prettier", "import"],
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:import/typescript",
    "prettier",
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
    "id-length": ["error", { min: 2, exceptions: ["x", "y", "t"] }],
    "no-explicit-any": "off",
    "@typescript-eslint/explicit-module-boundary-types": "off",
    "no-unused-vars": ["error", { argsIgnorePattern: "^_" }],
    "no-unused-imports": ["error", 3],
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

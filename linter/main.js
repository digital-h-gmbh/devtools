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
    "no-unused-vars": "error",
    "id-length": ["error", { min: 4 }],
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
};

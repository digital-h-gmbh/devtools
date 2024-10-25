module.exports = {
  root: true,
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: 'ES2022',
    project: 'tsconfig.json',
    tsconfigRootDir: __dirname,
    sourceType: 'module',
  },
  plugins: ["@typescript-eslint", "import", "unused-imports"],
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "prettier",
  ],
  env: {
    node: true,
    jest: true,
  },
  ignorePatterns: ['.eslintrc.js'],
  rules: {
    "max-lines-per-function": [
      "error",
      {
        max: 80,
        skipComments: true,
      },
    ],
    "max-depth": ["error", 3],
    "max-nested-callbacks": ["error", 3],
    "id-length": [
      "error",
      { min: 2, exceptions: ["x", "y", "t", "f", "m", "n", "d", "i", "_"] },
    ],
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
    "unused-imports/no-unused-imports": "error",
    "unused-imports/no-unused-vars": [
      "warn",
      {
        vars: "all",
        varsIgnorePattern: "^_",
        args: "after-used",
        argsIgnorePattern: "^_",
      },
    ],
  },
  overrides: [
    {
      files: ["*.ts", "*.tsx", "*.js", "*.jsx"],
      rules: {
        // These are turned off to not conflict with prettier
        "no-extra-semi": "off",
        "no-mixed-spaces-and-tabs": "off",
        "no-unexpected-multiline": "off",
      },
    },
  ],
};
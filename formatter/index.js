module.exports = {
  trailingComma: "es5",
  tabWidth: 2,
  singleQuote: true,
  semi: true,
  printWidth: 120,
  useTabs: false,
  bracketSpacing: true,
  arrowParens: "avoid",
  endOfLine: "lf",
  overrides: [
    {
      files: "*.yml",
      options: {
        tabWidth: 2
      }
    }
  ],
  plugins: ["prettier-plugin-tailwindcss", "@trivago/prettier-plugin-sort-imports", "prettier-plugin-packagejson"],
  importOrderParserPlugins: ["typescript", "decorators-legacy", "jsx"],
  importOrder: ["^@digital-h/(.*)$", "^@/(.*)$", "^[./]"],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true
};
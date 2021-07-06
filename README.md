# devtools
All the tools and configs we use for daily dev work. Includes linters, formatters and more. Here you are going to find installation instructions for our company's code-style packages, the reasoning behind as well as general information to how we want to do software development.

These are the tools we use at the moment:

- [ESLint](#ESLint)
- [Prettier](#Prettier)

## ESLint

Install the configuration with:

```
npm i --save-dev eslint @digital-h/eslint-config
```

After that you can use it in your ESLint configuration file (e.g. `.eslintrc.js`):

```
{
  ...
  "extends": "@digital-h/eslint-config"
}
```

If you don't have a config yet, create one by doing `npx eslint --init`.

This allows for addition of custom rules in your config, if there is a need for it. Should there be a need to fully disable or change a rule from this configuration, please open a Pull Request.

### Supported Languages/Frameworks

Currently only general Javascript and Typescript code is linted. In the future we want to expand to React, React Native, Angular and Node.js (with express and nest.js rules).

## Prettier

Install the configuration with:

```
npm i --save-dev prettier @digital-h/prettier-config
```

After that you can use it in your package.json:

```
{
  ...
  "prettier": "@digital-h/prettier-config"
}
```

Or reference it by exporting a single string from your Prettier configuration file: `@digital-h/prettier-config`. If you want to override some rules, you have to use `.prettierrc.js` as your configuration file format and then declare the package, as well as your additional rules as follows:

```
module.exports = {
  ...require("@company/prettier-config"),
  // Below are your overrides
  semi: false,
};
```

## Collaboration

If you want to collaborate set up a PR with your code changes. Currently you have to manually publish the included packages to npm. You can do this by running:

```
# In the respective directory - Make sure you are logged in and part of the digital-h npm organization
npm version <NEW_VERSION_NUMBER>
npm run publicpublish
```
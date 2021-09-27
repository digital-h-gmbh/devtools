<p align="center">
  <img src="https://github.com/digital-h-gmbh/devtools/blob/main/devtools.png?raw=true" alt="CI status" width="100%" />
</p>                                                                                                                                            

## Quickstart

To install all the tools we provide, run the following:

```
npm install --save-dev prettier eslint @digital-h/eslint-config @digital-h/prettier-config
```

Then set up or make the necessary changes in the following two files:

ESLint configuration file, e.g. 📄 .eslintrc.js:
```
{
  ...,
  "plugins": [ ... ],
  "extends": "@digital-h/eslint-config", <---
  "rules": [...]
}
```
For TypeScript projects you might need to add tsconfig to parserOptions:
```
{
  ...,
  "plugins": [ ... ],
  "extends": "@digital-h/eslint-config",
  "parserOptions: {
    "project: [ "./tsconfig.json" ],     <---
  },
  "rules": [ ... ]
}
```

📄 package.json
```
{
  ...,
  "scripts": { ... },
  "dependencies": { ... },
  "devDependencies": { ... }
  "prettier": "@digital-h/prettier-config" <---
}
```

For more precise configuration, overrides or the reasoning behind refer to the documentation below.

## General Documentation

All the tools and configs we use for daily dev work. Includes linters, formatters and more. Here you are going to find installation instructions for our company's code-style packages, the reasoning behind as well as general information to how we want to do software development.

This documentation includes the following parts:

- [Example Setup](#Samples)
- [Tools/Packages](#Tools)
- [Editor Configuration](#Editor-Configuration)
- [Code Style](#CodeStyle)
- [How to collaborate](#Collaboration)

Regarding the tools section, these are the tools we use at the moment:

- [ESLint](#ESLint)
- [Prettier](#Prettier)
- [Jest](#Jest)
- [Husky](#Husky)

We are looking into using additional packages, feel free to add documentation and samples for it:

- Cypress
- PACT or JSON Schema for API Testing

Below you can find specific installation instructions for the tools. Please open an issue or a pull request if something is not covered or missing.

### Samples

You can refer to the `samples/` directory to find a working setup with ESLint, Prettier, Husky and Jest configured.

### Tools

#### ESLint

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

This allows for addition of custom rules in your config, if there is a need for it. Should there be a need to fully disable or change a rule from this configuration, please open a Pull Request.

##### Supported Languages/Frameworks

Currently only Typescript code is linted. In the future we want to expand to also cover React, React Native, Angular and Node.js.

#### Prettier

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
  ...require("@digital-h/prettier-config"),
  // Below are your overrides
  semi: false,
};
```

#### Jest

We are using Jest as a test framework for backend and frontend unit tests. Refer to its documentation for usage and installation. In the `samples/` directory you can find a basic test together with a npm task able to run the tests.

#### Husky

TODO

### Editor-Configuration

TODO

### CodeStyle

TODO

### Collaboration

If you want to collaborate set up a PR with your code changes. Currently you have to manually publish the included packages to npm. You can do this by running:

```
# In the respective directory - Make sure you are logged in and part of the digital-h npm organization
npm version <NEW_VERSION_NUMBER>
npm run publicpublish
```

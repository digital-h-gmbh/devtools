<p align="center">
  <img src="https://github.com/digital-h-gmbh/devtools/blob/main/devtools.png?raw=true" alt="CI status" width="100%" />
</p>

## Quickstart

To install all the tools we provide, run the following:

```
npm install --save-dev prettier eslint @digital-h/eslint-config @digital-h/prettier-config
```

If you are prompted to install additional ESLint imports after the install process, do so.

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


To setup `prettier` add the following to `package.json`:

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

- [Quickstart](#quickstart)
- [General Documentation](#general-documentation)
  - [Samples](#samples)
  - [Tools](#tools)
    - [ESLint](#eslint)
      - [Supported Languages/Frameworks](#supported-languagesframeworks)
    - [Prettier](#prettier)
    - [Jest](#jest)
    - [Husky](#husky)
  - [Editor-Configuration](#editor-configuration)
  - [CodeStyle](#codestyle)
  - [Release Process](#release-process)

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
npm i --save-dev eslint eslint-plugin-import eslint-plugin-node eslint-plugin-unused-imports @digital-h/eslint-config @eslint/js @typescript-eslint/eslint-plugin @typescript-eslint/parser globals
```

After that you can use it in your ESLint configuration file (e.g. `.eslintrc.js`):

```
{
  ...
  "extends": "@digital-h/eslint-config"
}
```

This allows for addition of custom rules in your config, if there is a need for it. Should there be a need to fully disable or change a rule from this configuration, please open a Pull Request.

For different development stacks there are different configs (e.g. for a React Native Setup). To use those specifically (they extend the standard config) add the following:

```js
// eslint.config.mjs
import digitalHEsLintConfig from '@digital-h/eslint-config-react-native';

export default [
  ...digitalHEsLintConfig,
];
```

##### Supported Languages/Frameworks

Currently only Typescript code is linted. In the future we want to expand to also cover React, React Native, Angular and Node.js.

#### Prettier

Install the configuration with:

```
npm i --save-dev prettier @trivago/prettier-plugin-sort-imports prettier-plugin-packagejson prettier-plugin-tailwindcss @digital-h/prettier-config
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

### Release Process
If you want to collaborate set up a PR with your code changes. Currently you have to manually publish the included packages to npm. You can do this by:

Make sure you are logged in in and part of the digital-h npm organization:
```
npm login
```
You can use these shared [npm credentials](https://start.1password.com/open/i?a=RJEAIJQERRDWRFWHTGL3A5Q5Q4&v=z2ab3ef6iquz67k65uiqayuga4&i=ianbdal2hatsmailrr72pvzptq&h=digitalh.1password.eu) Account: `npmjs.com`

Bump the version and make sure you are in the proper directory (e.g. /linter)
```
npm version <NEW_VERSION_NUMBER> // e.g. 3.1.6
```
After successfully updating the version the new version can published:
```
npm run publicpublish
```
Last but not least commit and push the changed files.

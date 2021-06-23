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

This allows for addition of custom rules in your config, if there is a need for it. Should there be a need to fully disable or change a rule from this configuration, please open a Pull Request.

## Prettier

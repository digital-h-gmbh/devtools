import { fixupConfigRules, fixupPluginRules } from '@eslint/compat';
import { FlatCompat } from '@eslint/eslintrc';
import js from '@eslint/js';
import eslint from '@eslint/js';
import ts from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';
import esImport from 'eslint-plugin-import';
import esNode from 'eslint-plugin-node';
import unusedImports from 'eslint-plugin-unused-imports';
import globals from 'globals';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
});

export default [
  eslint.configs.recommended,
  ...fixupConfigRules(compat.config(esNode.configs.recommended)),
  {
    ignores: ['**/eslint.config.js'],
  },
  {
    plugins: {
      '@typescript-eslint': fixupPluginRules(ts),
      'unused-imports': fixupPluginRules(unusedImports),
      import: fixupPluginRules(esImport),
    },
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        project: 'tsconfig.json',
        ecmaVersion: 'latest',
      },
      globals: {
        ...globals.node,
        ...globals.browser,
        ...globals.jest,
      },
    },
    rules: {
      ...esNode.configs.recommended.rules,
      ...eslint.configs.recommended.rules,
      ...ts.configs.recommended.rules,
      'node/no-missing-import': 'off',
      'node/no-unpublished-import': 'off',
      'node/no-extraneous-import': 'off',
      'node/no-unsupported-features/es-syntax': [
        'error',
        { version: '>=18.0.0',
          ignores: ['modules']
        },
      ],
      'node/no-unsupported-features/node-builtins': [
        'error',
        {
          version: '>=18.0.0',
        },
      ],
      'no-undef': 'off',
      'max-lines-per-function': [
        'error',
        {
          max: 80,
          skipComments: true,
        },
      ],
      'max-depth': ['error', 3],
      'max-nested-callbacks': ['error', 3],
      'id-length': [
        'error',
        {
          min: 2,
          exceptions: ['x', 'y', 't', 'f', 'm', 'n', 'd', 'i', '_'],
        },
      ],
      'no-shadow': 'off',
      'no-catch-shadow': 'off',
      curly: ['error', 'all'],
      '@typescript-eslint/ban-ts-comment': 'warn',
      '@typescript-eslint/explicit-module-boundary-types': 'error',
      '@typescript-eslint/no-explicit-any': 'off',
      eqeqeq: ['error', 'always'],
      'import/no-default-export': 'error',
      'import/no-duplicates': 'error',
      'no-useless-return': 'error',
      'no-unused-vars': 'off',
      '@typescript-eslint/no-unused-vars': [
        'warn',
        {
          vars: 'all',
          varsIgnorePattern: '^_',
          args: 'after-used',
          argsIgnorePattern: '^_',
        },
      ],
      'unused-imports/no-unused-imports': 'error',
      'unused-imports/no-unused-vars': [
        'warn',
        {
          vars: 'all',
          varsIgnorePattern: '^_',
          args: 'after-used',
          argsIgnorePattern: '^_',
        },
      ],
    },
  },
  {
    // Type-aware rules must only run on TypeScript files. They rely on type
    // information from the @typescript-eslint parser; on plain JS files (e.g.
    // when consumers lint via @babel/eslint-parser, like the react-native config)
    // these rules throw "you have used a rule which requires type information".
    files: ['**/*.ts', '**/*.tsx'],
    rules: {
      // 'warn' (not 'error') on purpose: this rule relies on type information that
      // can diverge from tsc's view (e.g. workspace packages resolving to built
      // .d.ts files), producing false positives whose autofix removes assertions
      // that are actually required. Roll it out manually rather than via bulk autofix.
      '@typescript-eslint/no-unnecessary-type-assertion': 'warn',
      '@typescript-eslint/no-redundant-type-constituents': 'error',
      '@typescript-eslint/prefer-readonly': 'error',
    },
  },
  {
    files: ['**/*.ts', '**/*.tsx', '**/*.js', '**/*.jsx'],
    rules: {
      'no-extra-semi': 'off',
      'no-mixed-spaces-and-tabs': 'off',
      'no-unexpected-multiline': 'off',
    },
  },
  {
    files: ['src/**/*.spec.{ts,js}'],
    rules: {
      'max-lines-per-function': 'off', // disables line length check
    },
  },
];

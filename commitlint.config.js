/**
 * @see https://commitlint.js.org/#/reference-rules
 */
export default {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-enum': [
      2,
      'always',
      [
        'chore',
        'ci',
        'docs',
        'feat',
        'fix',
        'perf',
        'refactor',
        'style',
        'tests',
        'revert',
        'build',
      ],
    ],
    'scope-empty': [2, 'never'],
    'scope-min-length': [2, 'always', 3],
    'subject-min-length': [2, 'always', 10],
    'subject-case': [2, 'always', 'sentence-case'],
    'body-max-line-length': [0, 'always', 200],
    'footer-max-line-length': [0, 'always', 200],
  },
};

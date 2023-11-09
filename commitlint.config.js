module.exports = {
    extends: ['@commitlint/config-conventional'],
    rules: {
      'subject': [
        2,
        'always',
        /^US\d{7}/,
        'Commit message must contain a user story starting with "US" followed by 7 digits.'
      ],
    },
  };
  
module.exports = {
    extends: ['@commitlint/config-conventional'],
    plugins: ['commitlint-plugin-jira-rules'], // Load custom plugin
    rules: {
      'jira-rules/user-story-number': [2, 'always', /^(US\d{7})$/, 'Error: User story must be in the "USxxxxxxx" format.'],
    },
  };
  
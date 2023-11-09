// module.exports = {
//     extends: ['@commitlint/config-conventional'],
//     plugins: ['commitlint-plugin-jira-rules'], // Load custom plugin
//     rules: {
//       'jira-rules/user-story-number': [2, 'always', /^(US\d{7})$/, 'Error: User story must be in the "USxxxxxxx" format.'],
//     },
//   };
  
// commitlint.config.js

module.exports = {
  extends: ['@commitlint/config-conventional'],
  plugins: ['jira-rules/user-story-number'],
  rules: {
    'jira-rules/user-story-number': [2, 'always'],
    'user-story-format': (parsed, when, value) => {
      const userStoryPattern = /^US\d{7}$/;
      const isValid = userStoryPattern.test(parsed.subject);

      if (isValid) {
        return [true];
      }

      return [false, 'Invalid user story format. User story must be in the "US1234567" format.'];
    },
  },
};

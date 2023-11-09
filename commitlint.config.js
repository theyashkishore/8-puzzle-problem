// module.exports = {
//     extends: ['@commitlint/config-conventional'],
//     plugins: ['commitlint-plugin-jira-rules'], // Load custom plugin
//     rules: {
//       'jira-rules/user-story-number': [2, 'always', /^(US\d{7})$/, 'Error: User story must be in the "USxxxxxxx" format.'],
//     },
//   };
  
// commitlint.config.js

module.exports = {
    rules: {
      'jira-rules/user-story-number': [2, 'always'],
    },
    plugins: [
      {
        rules: {
          'jira-rules/user-story-number': ({ subject }) => {
            const userStoryPattern = /^US\d{7}$/;
            if (!subject) {
              return [false, 'Subject is missing. Enter a valid commit message.'];
            }
            return [userStoryPattern.test(subject), 'Enter a valid Commit Message'];
          },
        },
      },
    ],
  };
  
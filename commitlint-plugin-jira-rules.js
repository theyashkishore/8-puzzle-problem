// commitlint-plugin-jira-rules.js
module.exports = {
    rules: {
      'user-story-number': (parsed, when, value) => {
        const regex = new RegExp(value);
        return regex.test(parsed.raw) ? [true] : [`Error: User story must be in the "USxxxxxxx" format.`];
      },
    },
  };
  
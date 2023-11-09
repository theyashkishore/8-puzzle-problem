module.exports = {  
    extends: ['@commitlint/config-conventional'],
    rules: {
      'type-enum': [2, 'always', ['userstory']], // Optional: Define allowed commit types
      'type-case': [2, 'always', 'kebab-case'], // Optional: Enforce kebab-case for commit types
      'type-empty': [2, 'never'], // Optional: Require a valid commit type
      'subject': [2, 'always', /^US\d{7}/, '9-digit user story number required'],
    }
  };
  
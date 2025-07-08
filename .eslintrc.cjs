module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:prettier/recommended", // This must be the last item.
  ],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  // custom rules
  rules: {},
};

module.exports= {
  env: {
    node: true
  },
  extends: [
    "eslint:recommended",
    "plugin:vue/vue3-recommended"
  ],
  rules: {
    "vue/attribute-hyphenation": "error",
    "vue/script-indent": ["error", 2, { "baseIndent": 0 }],
    "vue/no-side-effects-in-computed-properties": "off",
    "vue/multi-word-component-names": "off",
    "vue/valid-v-slot": ["error", { "allowModifiers": true }],
    "css.lint.unknownAtRules": "ignore",
    "scss.lint.unknownAtRules": "ignore"
  },
  "parserOptions": {
    "parser": "@typescript-eslint/parser"
  },
  "plugins": ["@typescript-eslint"]
}
import withNuxt from "./.nuxt/eslint.config.mjs"


export default withNuxt({formatters: true,
  vue: true,
  stylistic: {
    quotes: "double",
    semi: true,
    indent: 2,
  },
  rules: {
    "no-console": "warn",
    "curly": ["error", "multi-line"],
    "no-unused-vars": "warn",
    'vue/attribute-hyphenation': 'off',
  },
  ignores: ["dist", "node_modules", ".github"],
  
})

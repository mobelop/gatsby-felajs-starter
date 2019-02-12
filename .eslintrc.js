module.exports = {
  parser: 'babel-eslint',
  extends: [
    'airbnb',
    'prettier',
    'prettier/react',
    'plugin:flowtype/recommended',
    'plugin:jsx-a11y/recommended',
  ],
  plugins: ['react', 'jsx-a11y', 'import', 'prettier', 'flowtype'],
  parserOptions: {
    ecmaVersion: 8, // optional, recommended 6+
  },
}

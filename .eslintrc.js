module.exports = {
  parser: 'babel-eslint',
  extends: [
    'airbnb',
    'prettier',
    'prettier/react',
    'plugin:flowtype/recommended',
    'plugin:jsx-a11y/recommended',
  ],
  settings: {
    'import/resolver': {
      'babel-module': {
        root: ['./src'],
      },
    },
  },
  rules: {
    "react/jsx-filename-extension": [0]
  },
  plugins: ['react', 'jsx-a11y', 'import', 'prettier', 'flowtype'],
  parserOptions: {
    ecmaVersion: 8, // optional, recommended 6+
  },
}

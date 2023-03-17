module.exports = {
    root: true,
    parser: '@typescript-eslint/parser',
    parserOptions: {
        project: './tsconfig.json',
        ecmaVersion: 2021,
        sourceType: 'module',
        ecmaFeatures: {
            jsx: true,
        },
    },
    plugins: ['react', '@typescript-eslint'],
    extends: [
        'eslint:recommended',
        'plugin:react/recommended',
        'plugin:@typescript-eslint/recommended',
        'prettier',
    ],
    settings: {
        react: {
            version: 'detect',
        },
    },
    rules: {
        'react/react-in-jsx-scope': 'off',
    },
    env: {
        browser: true,
        node: true,
        es2021: true,
    },
};
module.exports = {
    singleQuote: true,
    trailingComma: 'es5',
    arrowParens: 'always',
    printWidth: 120,
    tabWidth: 4,
    semi: true,
    overrides: [
        {
            files: ['*.json'],
            options: {
                tabWidth: 2,
            },
        },
    ],
};

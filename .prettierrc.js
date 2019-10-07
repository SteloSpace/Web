module.exports = {
	singleQuote: true,
	overrides: [
		{
			files: ['**/*.vue', '**/*.js'],
			options: {
				trailingComma: 'es5',
				tabWidth: 4,
				semi: false,
				singleQuote: true,
			}
		}
	]
}

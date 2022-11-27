module.exports = {
	env: {
		browser: true,
		es2021: true,
	},
	extends: ['plugin:react/recommended', 'standard'],
	parserOptions: {
		ecmaFeatures: {
			jsx: true,
		},
		ecmaVersion: 'latest',
		sourceType: 'module',
	},
	plugins: ['react'],
	rules: {
		'space-before-function-paren': [
			'error',
			{
				anonymous: 'always',
				named: 'never',
				asyncArrow: 'always',
			},
		],
		'multiline-ternary': ['off'],
		indent: ['off'],
		'no-tabs': 'off',
		'no-mixed-spaces-and-tabs': 'off',
		quotes: [2, 'single', { avoidEscape: true, allowTemplateLiterals: true }],
		'react/react-in-jsx-scope': 'off',
		'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
		'comma-dangle': [2, 'always-multiline'],
	},
}

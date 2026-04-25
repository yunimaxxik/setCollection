import globals from 'globals'
import js from '@eslint/js'

export default [
	js.configs.recommended,
	{
		files: ['**/*.js'],
		languageOptions: {
			ecmaVersion: 'latest',
			sourceType: 'module',
			globals: {
				...globals.node,
				...globals.jest,
			},
		},
		rules: {
			// 1. Отступы: табы (эквивалент editor.insertSpaces = false)
			indent: ['error', 'tab', { SwitchCase: 1 }],

			// 2. Запрет смешивания пробелов и табов
			'no-mixed-spaces-and-tabs': 'error',

			// 3. Разрешаем использовать табы (явно отключаем правило no-tabs)
			'no-tabs': 'off',

			// 4. Кавычки: одинарные (prettier.singleQuote = true, js/ts.preferences.quoteStyle = "single")
			quotes: [
				'error',
				'single',
				{ avoidEscape: true, allowTemplateLiterals: true },
			],

			// 5. Точки с запятой: запрещены (js/ts.format.semicolons = "remove")
			semi: ['error', 'never'],

			// 6. Максимальная длина строки (editor.wordWrapColumn = 120)
			'max-len': [
				'error',
				{
					code: 120,
					tabWidth: 2,
					ignoreUrls: true,
					ignoreStrings: true,
					ignoreTemplateLiterals: true,
				},
			],

			// 7. JSX: одинарные кавычки (prettier.jsxSingleQuote = true)
			'jsx-quotes': ['error', 'prefer-single'],

			// 8. Дополнительные правила, приближающие стиль к Prettier (опционально)
			'comma-dangle': ['error', 'always-multiline'], // висящие запятые (как в Prettier по умолчанию)
			'arrow-parens': ['error', 'always'], // скобки вокруг параметров стрелок
			'object-curly-spacing': ['error', 'always'], // пробелы внутри { } → { foo: bar }
			'array-bracket-spacing': ['error', 'never'], // без пробелов в [ ] → [1, 2]
			'space-before-function-paren': [
				'error',
				{
					// пробел перед скобкой функции
					anonymous: 'always',
					named: 'never',
					asyncArrow: 'always',
				},
			],
		},
	},
	{
		ignores: ['dist/', 'node_modules/', 'coverage/'],
	},
]

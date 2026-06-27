// eslint.config.mjs
import withNuxt from './.nuxt/eslint.config.mjs'

export default withNuxt({
	rules: {
		'indent': ['error', 'tab'],
		'quotes': ['error', 'single'],
		'vue/multi-word-component-names': 'off',
		'vue/no-multiple-template-root': 'off',
		'no-multi-spaces': 'error',
    	'no-trailing-spaces': 'error',
	}
})

// https://nuxt.com/docs/api/configuration/nuxt-config
import { fileURLToPath } from 'node:url'

export default defineNuxtConfig({
	app: {
		pageTransition: { 
			name: 'page',
			mode: 'out-in',
			css: false 		
		},
	},
	modules: ['nuxt-svgo', '@nuxt/eslint', '@nuxtjs/google-fonts', '@pinia/nuxt'],
	devtools: { enabled: true },
	alias: {
		'@assets': fileURLToPath(new URL('./assets', import.meta.url)),
		'@': fileURLToPath(new URL('./', import.meta.url)),
	},
	compatibilityDate: '2025-07-15',
	css: [
		'@assets/styles/default.scss'		
	],
	vite: {
		css: {
			preprocessorOptions: {
				scss: {
					additionalData: '@use "@assets/styles/_variables.scss" as *;',
				},
			},
		},
	},
	svgo: {
		autoImportPath: false,
		defaultImport: 'component',
		dts: true,
		svgoConfig: {
			plugins: [
				{
					name: 'prefixIds',
					params: {
						prefixIds: false,
						prefixClassNames: false,
					},
				},
			],
		},
	},
	googleFonts: {
		families: {
			Poppins: [400, 500, 700]
		}
	}
})
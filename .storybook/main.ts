import { dirname, join } from 'path'
import ResolveTypeScriptPlugin from 'resolve-typescript-plugin'
import type { StorybookConfig } from '@storybook/web-components-webpack5'

export default {
	stories: [
		'../packages/**/*.stories.ts',
	],

	staticDirs: ['./public'],

	addons: [
		getPackageAbsolutePath('@storybook/addon-links'),
		{
			name: getPackageAbsolutePath('@storybook/addon-essentials'),
			options: {
				backgrounds: false,
				actions: false,
			}
		},
		getPackageAbsolutePath('@storybook/addon-webpack5-compiler-babel'),
		getPackageAbsolutePath('@storybook/addon-storysource'),
		getPackageAbsolutePath('storybook-dark-mode'),
	],

	framework: {
		name: getPackageAbsolutePath('@storybook/web-components-webpack5'),
		options: {}
	},

	webpackFinal: (config: any) => {
		config.mode = 'development'

		config.output.filename = 'main.js'
		config.optimization = {}

		const exceptBabel = config.module.rules.slice(0, -1)
		config.module.rules = [
			{
				test: /\.ts(x)?$/,
				loader: 'ts-loader',
				options: {
					compilerOptions: {
						target: 'ES2020',
						importHelpers: true,
						emitDeclarationOnly: false,
						noImplicitAny: false,
						noUnusedLocals: false,
						declaration: false,
						declarationMap: false,
						allowJs: false,
						jsx: 'react-jsx',
					}
				}
			},
			...exceptBabel
		]
		config.resolve.plugins = [
			...(config.resolve.plugins ?? []),
			new ResolveTypeScriptPlugin(),
		]

		return config
	},

	docs: {}
} as StorybookConfig

function getPackageAbsolutePath(value: string): any {
	return dirname(require.resolve(join(value, 'package.json')))
}
import { addons } from '@storybook/addons'
import { themes } from '@storybook/theming'

addons.setConfig({
	theme: {
		...themes.normal,

		brandTitle: '@a11d Web Components',
		brandUrl: 'https://a11delavar.com',
		brandTarget: '_self',

		colorPrimary: '#0077c8',
		barTextColor: '#0077c8',
	},
})
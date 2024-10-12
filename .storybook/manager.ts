import { addons } from '@storybook/manager-api'
import { themes } from '@storybook/theming'

export const theme = {
	...themes.dark,

	brandTitle: '@a11d Web Components',
	brandTarget: '_self',

	colorPrimary: '#0077c8',
	colorSecondary: '#0077c8',
	fontBase: '"Roboto", sans-serif',

	appBg: 'rgb(16, 17, 20)',
	appContentBg: 'rgb(16, 17, 20)',
	appPreviewBg: 'rgb(16, 17, 20)',
	appBorderRadius: 0,

	barTextColor: '#0077c8',
	barSelectedColor: '#0077c8',
	// barHoverColor
	barBg: 'rgb(16, 17, 20)',

	inputBg: 'rgb(16, 17, 20)',
	inputBorder: 'transparent',
	inputBorderRadius: 0,
}

addons.setConfig({
	enableShortcuts: false,
	theme: {
		...themes.dark,

		brandTitle: '@a11d Web Components',
		brandTarget: '_self',

		colorPrimary: '#0077c8',
		colorSecondary: '#0077c8',
		fontBase: '"Roboto", sans-serif',

		appBg: 'rgb(16, 17, 20)',
		appContentBg: 'rgb(16, 17, 20)',
		appPreviewBg: 'rgb(16, 17, 20)',
		appBorderRadius: 0,

		barTextColor: '#0077c8',
		barSelectedColor: '#0077c8',
		// barHoverColor
		barBg: 'rgb(16, 17, 20)',

		inputBg: 'rgb(16, 17, 20)',
		inputBorder: 'transparent',
		inputBorderRadius: 0,
	},
})
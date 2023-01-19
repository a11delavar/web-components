export const parameters = {
	docs: {
		inlineStories: true,
		source: {
			type: 'dynamic',
			language: 'html',
		}
	},
	controls: {
		expanded: true,
		matchers: {
			color: /(background|color)$/i,
			date: /Date$/,
		},
	},
}
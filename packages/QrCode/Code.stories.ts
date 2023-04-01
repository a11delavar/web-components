import { story, meta } from '../../.storybook/story.js'
import { html } from '@a11d/lit'
import p from './package.json'
import './index.js'

export default meta({
	title: 'QrCode',
	component: 'lit-qr-code',
	args: {
		value: 'Test value',
	},
	argTypes: {
		value: { control: 'text' },
	},
	parameters: {
		docs: {
			description: {
				component: p.description,
			},
		}
	}
})

export const Code = story({
	render: ({ value }) => html`<lit-qr-code color='dark' value=${value}></lit-qr-code>`
})
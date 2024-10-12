import type { Meta, StoryObj } from '@storybook/web-components'
import { html } from '@a11d/lit'
import p from './package.json'
import './index.js'

export default {
	title: 'QrCode',
	component: 'lit-qr-code',
	args: {
		value: 'Test value',
	},
	argTypes: {
		value: { control: 'text' },
	},
	package: p,
} as Meta

export const Code: StoryObj = {
	render: ({ value }) => html`<lit-qr-code color='dark' value=${value}></lit-qr-code>`
}
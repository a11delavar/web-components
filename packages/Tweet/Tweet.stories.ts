import type { Meta, StoryObj } from '@storybook/web-components'
import { html } from '@a11d/lit'
import p from './package.json'
import './index.js'

export default {
	title: 'Tweet',
	component: 'lit-tweet',
	args: { tweet: 'https://twitter.com/Twitter/status/690190664236154880' },
	argTypes: { tweet: { control: 'text' } },
	package: p,
} as Meta

export const Tweet: StoryObj = {
	render: ({ tweet }) => html`
		<lit-tweet theme='light' tweet=${tweet}></lit-tweet>
	`
}

export const Dark: StoryObj = {
	render: ({ tweet }) => html`
		<lit-tweet theme='dark' tweet=${tweet}></lit-tweet>
	`
}
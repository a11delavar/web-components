import { story, meta } from '../../.storybook/story.js'
import { html } from '@a11d/lit'
import p from './package.json'
import './index.js'

export default meta({
	title: 'Tweet',
	component: 'lit-tweet',
	args: {
		tweet: 'https://twitter.com/Twitter/status/560070183650213889',
	},
	argTypes: {
		tweet: { control: 'text' },
	},
	parameters: {
		docs: {
			description: {
				component: p.description,
			},
		}
	}
})

export const Tweet = story({
	render: ({ tweet }) => html`
		<lit-tweet theme='light' tweet=${tweet}></lit-tweet>
	`
})

export const Dark = story({
	render: () => html`
		<lit-tweet theme='dark' tweet='560070183650213889'></lit-tweet>
	`
})

export const TweetId = story({
	render: () => html`
		<lit-tweet theme='light' tweet='560070183650213889'></lit-tweet>
	`
})
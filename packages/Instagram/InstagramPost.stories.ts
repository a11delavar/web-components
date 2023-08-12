import { story, meta } from '../../.storybook/story.js'
import { html } from '@a11d/lit'
import p from './package.json'
import './index.js'

export default meta({
	title: 'InstagramPost',
	component: 'lit-instagram-post',
	args: {
		post: 'https://www.instagram.com/p/BdJRABkDbXU',
	},
	parameters: {
		docs: {
			description: {
				component: p.description,
			},
		}
	}
})

export const InstagramPost = story({
	render: ({ post }) => html`
		<lit-instagram-post post=${post}></lit-instagram-post>
	`
})
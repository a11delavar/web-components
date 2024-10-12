import type { Meta, StoryObj } from '@storybook/web-components'
import { html } from '@a11d/lit'
import p from './package.json'
import './index.js'

export default {
	title: 'InstagramPost',
	component: 'lit-instagram-post',
	args: {
		post: 'https://www.instagram.com/p/BdJRABkDbXU',
	},
	package: p,
} as Meta

export const InstagramPost: StoryObj = {
	render: ({ post }) => html`
		<lit-instagram-post post=${post}></lit-instagram-post>
	`
}
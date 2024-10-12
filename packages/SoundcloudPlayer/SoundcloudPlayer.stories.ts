import type { Meta, StoryObj } from '@storybook/web-components'
import { html } from '@a11d/lit'
import p from './package.json'
import './index.js'

export default {
	title: 'Soundcloud Player',
	component: 'lit-soundcloud-player',
	args: { url: 'https://soundcloud.com/eliterex/life-is-strange-2-soundtrack-credits' },
	argTypes: { url: { control: 'text' } },
	package: p,
} as Meta

export const SoundcloudPlayer: StoryObj = {
	render: ({ url }) => html`
		<lit-soundcloud-player url=${url}></lit-soundcloud-player>
	`
}

export const Larger: StoryObj = {
	render: ({ url }) => html`
		<lit-soundcloud-player url=${url} style='width: 500px; height: 300px'></lit-soundcloud-player>
	`
}
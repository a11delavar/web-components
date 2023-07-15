import { story, meta } from '../../.storybook/story.js'
import { html } from '@a11d/lit'
import p from './package.json'
import './index.js'

export default meta({
	title: 'MonacoEditor',
	component: 'lit-monaco-editor',
	parameters: {
		docs: {
			description: {
				component: p.description,
			},
		}
	}
})

export const Editor = story({
	render: () => html`
		<lit-monaco-editor style='height: 80vh'
			value='Hello, world!'
		></lit-monaco-editor>
	`
})

export const DiffEditor = story({
	render: () => html`
		<lit-monaco-diff-editor style='height: 80vh'
			originalValue='Hello, world!\nThis is a diff editor!'
			value='Hello, world!\nThis is a diff editor!!!'
		></lit-monaco-diff-editor>
	`
})
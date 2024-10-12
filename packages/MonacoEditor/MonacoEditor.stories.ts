import type { Meta, StoryObj } from '@storybook/web-components'
import { html } from '@a11d/lit'
import p from './package.json'
import './index.js'

export default {
	title: 'MonacoEditor',
	component: 'lit-monaco-editor',
	package: p,
} as Meta

export const Editor: StoryObj = {
	render: () => html`
		<lit-monaco-editor style='height: 80vh'
			value='Hello, world!'
		></lit-monaco-editor>
	`
}

export const DiffEditor: StoryObj = {
	render: () => html`
		<lit-monaco-diff-editor style='height: 80vh'
			originalValue='Hello, world!\nThis is a diff editor!'
			value='Hello, world!\nThis is a diff editor!!!'
		></lit-monaco-diff-editor>
	`
}
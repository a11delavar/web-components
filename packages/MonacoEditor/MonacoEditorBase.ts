import { Component, css, html, property, query } from '@a11d/lit'
import * as monaco from 'monaco-editor'
import { monacoStyles } from './monacoStyles.js'

export abstract class MonacoEditorBase extends Component {
	protected static readonly darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)')

	@property({
		updated(this: MonacoEditorBase) {
			this.updateTheme()
		}
	}) theme?: 'dark' | 'light'

	override dir = 'ltr'

	protected override initialized() {
		// @ts-expect-error - monaco-editor is not typed
		this.editor = this.instantiateEditor()
		MonacoEditorBase.darkModeMediaQuery.addEventListener('change', () => this.updateTheme())
	}

	private updateTheme() {
		const theme = this.theme === 'dark' ? 'vs-dark' : 'vs-light'
		const defaultTheme = MonacoEditorBase.darkModeMediaQuery.matches ? 'vs-dark' : 'vs-light'
		monaco.editor.setTheme(this.theme ? theme : defaultTheme)
	}

	readonly editor?: monaco.editor.IEditor
	protected abstract instantiateEditor(): monaco.editor.IEditor

	@query('#monaco-container') protected readonly mainElement!: HTMLElement

	override get template() {
		return html`
			<div id='monaco-container'></div>
		`
	}

	static override get styles() {
		return css`
			:host {
				display: block;
				height: 150px;
				width: 100%;
			}

			#monaco-container {
				width: 100%;
				height: 100%;
			}

			${monacoStyles}
		`
	}
}
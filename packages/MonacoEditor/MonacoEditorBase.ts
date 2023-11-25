import { Component, css, html, property, query } from '@a11d/lit'
import * as monaco from 'monaco-editor'
import { monacoStyles } from './monacoStyles.js'

self.MonacoEnvironment = {
	getWorkerUrl: function (_moduleId, label) {
		if (label === 'json') {
			return '/monaco/language/json/json.worker.js'
		}
		if (label === 'css' || label === 'scss' || label === 'less') {
			return '/monaco/language/css/css.worker.js'
		}
		if (label === 'html' || label === 'handlebars' || label === 'razor') {
			return '/monaco/language/html/html.worker.js'
		}
		if (label === 'typescript' || label === 'javascript') {
			return '/monaco/language/typescript/ts.worker.js'
		}
		return '/monaco/editor/editor.worker.js'
	}
}

export abstract class MonacoEditorBase extends Component {
	protected static readonly darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)')

	@property({
		updated(this: MonacoEditorBase) {
			this.updateTheme()
		}
	}) theme?: 'dark' | 'light'

	@property({
		type: Boolean,
		updated(this: MonacoEditorBase, readOnly: boolean) {
			this.editor?.updateOptions({ readOnly })
		}
	}) readOnly = false

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
import { component, event, property } from '@a11d/lit'
import { MonacoEditorBase } from './MonacoEditorBase.js'
import * as monaco from 'monaco-editor'

/**
 * @attr value
 * @attr readOnly
 * @fires change
 */
@component('lit-monaco-editor')
export class MonacoEditor extends MonacoEditorBase {
	@event() readonly change!: EventDispatcher<string>

	@property({
		bindingDefault: true,
		updated(this: MonacoEditor) {
			if (this.editor && this.value !== this.editor.getValue()) {
				this.editor.setValue(this.value)
			}
		}
	}) value = ''

	override readonly editor?: monaco.editor.IStandaloneCodeEditor

	protected override instantiateEditor() {
		const editor = monaco.editor.create(this.mainElement, {
			language: 'markdown',
			'semanticHighlighting.enabled': true,
			automaticLayout: true,
			readOnly: this.readOnly,
			minimap: {
				enabled: false,
				showSlider: 'always',
				autohide: true,
			},
			value: this.value,
			wordWrap: 'on',
			renderWhitespace: 'boundary',
			bracketPairColorization: {
				enabled: true,
			},
			scrollbar: {
				alwaysConsumeMouseWheel: false,
			},
			fontLigatures: true,
			scrollBeyondLastLine: false,
			smoothScrolling: true,
			wrappingStrategy: 'advanced',
			cursorSmoothCaretAnimation: 'on',
		})

		editor.getModel()?.onDidChangeContent(() => {
			const v = editor.getValue()
			if (this.value !== v) {
				this.value = v
				this.change.dispatch(v)
			}
		})

		return editor
	}
}

declare global {
	interface HTMLElementTagNameMap {
		'lit-monaco-editor': MonacoEditor
	}
}
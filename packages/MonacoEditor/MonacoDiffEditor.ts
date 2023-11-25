import { component, property, event } from '@a11d/lit'
import * as monaco from 'monaco-editor'
import { MonacoEditorBase } from './MonacoEditorBase.js'

/**
 * @attr originalValue
 * @attr value
 * @fires change
 */
@component('lit-monaco-diff-editor')
export class MonacoDiffEditor extends MonacoEditorBase {
	@event() readonly change!: EventDispatcher<string | undefined>

	@property() originalValue?: string
	@property() value?: string

	override readonly editor?: monaco.editor.IDiffEditor

	protected override instantiateEditor() {
		const editor = monaco.editor.createDiffEditor(this.mainElement, {
			automaticLayout: true,
			readOnly: this.readOnly,
			minimap: {
				enabled: false,
				showSlider: 'always',
				autohide: true,
			},
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

		editor.setModel({
			original: monaco.editor.createModel(this.originalValue || '', 'markdown'),
			modified: monaco.editor.createModel(this.value || '', 'markdown'),
		})

		editor.getModel()?.modified.onDidChangeContent(() => {
			const v = editor.getModel()?.modified.getValue()
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
		'lit-monaco-diff-editor': MonacoDiffEditor
	}
}
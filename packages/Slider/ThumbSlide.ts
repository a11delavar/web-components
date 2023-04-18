import { html, Component, component } from '@a11d/lit'

@component('lit-thumb-slide')
export class ThumbSlide extends Component {
	protected override get template() {
		return html`<slot></slot>`
	}
}

declare global {
	interface HTMLElementTagNameMap {
		'lit-thumb-slide': ThumbSlide
	}
}
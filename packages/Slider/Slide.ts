import { css, html, Component, component } from '@a11d/lit'

@component('lit-slide')
export class Slide extends Component {
	static override get styles() {
		return css`
			:host {
				display: flex;
				position: relative;
				overflow: hidden;
				align-items: center;
				justify-content: center;
				height: 100%;
				max-width: 100%;
				pointer-events: none;
			}
		`
	}

	protected override get template() {
		return html`
			<slot></slot>
		`
	}
}

declare global {
	interface HTMLElementTagNameMap {
		'lit-slide': Slide
	}
}
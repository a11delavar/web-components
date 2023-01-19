import { css, html, Component, component } from '@a11d/lit'

@component('lit-slide')
export class Slide extends Component {
	static override get styles() {
		return css`
			:host {
				display: flex;
				justify-content: center;
				align-items: center;
				height: 100%;
				width: 100%;
				background-size: cover !important;
				background-repeat: no-repeat !important;
				background-position: center !important;
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
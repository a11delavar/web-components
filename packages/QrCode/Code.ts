import { Component, component, css, html, property, PropertyValues, query } from '@a11d/lit'
import { SlotController } from '@3mo/slot-controller'
import * as QrCodeLib from 'qrcode'

/**
 * @element lit-qr-code
 *
 * @attr value - The value to encode in the QR code.
 * @attr color - The color of the QR code. If not set, the color will be determined by the user's system preferences.
 * @attr errorCorrectionLevel - The error correction level to use. Defaults to 'high'.
 * @attr version - The version of the QR code to generate. Defaults to undefined.
 */
@component('lit-qr-code')
export class QrCode extends Component {
	protected _ = new SlotController(this)

	@property() value?: string
	@property() color?: 'light' | 'dark'
	@property() errorCorrectionLevel: 'low' | 'medium' | 'quartile' | 'high' = 'high'
	@property({ type: Number }) version?: number

	protected get data() {
		return this.value ?? this.textContent ?? undefined
	}

	@query('canvas') protected readonly canvasElement?: HTMLCanvasElement

	static override get styles() {
		return css`
			:host {
				display: inline-flex;
			}
		`
	}

	protected override get template() {
		return html`
			<canvas></canvas>
			<slot hidden></slot>
		`
	}

	protected override updated(props: PropertyValues) {
		super.updated(props)

		if (this.data) {
			const isDark = this.color === undefined
				? window.matchMedia('(prefers-color-scheme: dark)').matches
				: this.color === 'dark'

			QrCodeLib.toCanvas(this.canvasElement, this.data, {
				margin: 0,
				color: {
					dark: isDark ? '#000000ff' : '#ffffffff',
					light: isDark ? '#ffffffff' : '#00000000',
				},
				errorCorrectionLevel: this.errorCorrectionLevel,
				version: this.version,
			})
		}
	}
}

declare global {
	interface HTMLElementTagNameMap {
		'lit-qr-code': QrCode
	}
}
import { Component, component, css, eventListener, html, property, query } from '@a11d/lit'

/**
 * @element lit-instagram-post
 *
 * @attr post - Either the URL or ID of the Instagram post to embed.
 */
@component('lit-instagram-post')
export class InstagramPost extends Component {
	@property() post?: string

	@eventListener({ target: window, type: 'message' })
	protected handleMessage(event: MessageEvent) {
		if (event.source === this.iframeElement?.contentWindow) {
			const instagramData = JSON.parse(event.data)
			if (instagramData?.type?.toLowerCase() === 'measure') {
				this.style.height = `${instagramData.details.height}px`
			}
		}
	}

	@query('iframe') protected readonly iframeElement?: HTMLIFrameElement

	protected get source() {
		if (!this.post) {
			return undefined
		}

		let url: URL
		try {
			url = new URL(this.post)
			if (url.pathname.endsWith('/embed') === false) {
				url.pathname += '/embed'
			}
		} catch (error) {
			url = new URL(`https://www.instagram.com/p/${this.post}/embed`)
		}
		return url.toString()
	}

	static override get styles() {
		return css`
			:host {
				display: inline-block;
			}

			iframe {
				width: 100%;
				height: 100%;
				border-radius: 13px;
			}
		`
	}

	protected override get template() {
		return html`
			<iframe
				scrolling='no'
				frameborder='0'
				loading='lazy'
				allowtransparency='true'
				title='Instagram Post'
				src=${this.source}
			></iframe>
		`
	}
}

declare global {
	interface HTMLElementTagNameMap {
		'lit-instagram-post': InstagramPost
	}
}
import { Component, component, css, html, property } from '@a11d/lit'

/**
 * @element lit-soundcloud-player
 *
 * @attr url - The URL of the Soundcloud track to embed.
 */
@component('lit-soundcloud-player')
export class SoundcloudPlayer extends Component {
	@property() url!: string

	protected get parameters() {
		return new URLSearchParams({
			url: this.url,
			auto_play: 'false',
			show_artwork: 'true',
			show_user: 'true',
			visual: 'true',
			buying: 'false',
			sharing: 'false',
			download: 'false',
			show_playcount: 'false',
			single_active: 'true',
			hide_related: 'true',
		})
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
				sandbox='allow-same-origin allow-scripts allow-popups'
				allow='autoplay'
				scrolling='no'
				frameborder='0'
				loading='lazy'
				allowtransparency='true'
				allowfullscreen
				title='Soundcloud Player'
				src=${this.source}
			></iframe>
		`
	}

	protected get source() {
		const url = new URL('https://w.soundcloud.com/player/')
		url.search = this.parameters.toString()
		return url.toString()
	}
}

declare global {
	interface HTMLElementTagNameMap {
		'lit-soundcloud-player': SoundcloudPlayer
	}
}
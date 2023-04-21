import { Component, component, css, html, property } from '@a11d/lit'

/**
 * @element lit-tweet
 *
 * @attr tweet - The URL or ID of the tweet to embed.
 * @attr language - The language in which to render the tweet.
 * @attr theme - The theme in which to render the tweet.
 * @attr hideConversations - Whether to hide replies.
 * @attr hideMedia - Whether to hide media.
 */
@component('lit-tweet')
export class Tweet extends Component {
	@property() tweet?: string
	@property() language = document.body.lang ?? document.documentElement.lang ?? navigator.language ?? 'en'
	@property() theme: 'light' | 'dark' = 'light'
	@property({ type: Boolean }) hideConversations = false
	@property({ type: Boolean }) hideMedia = false

	protected get tweetId() {
		return !this.tweet?.includes('status')
			? this.tweet
			: this.tweet?.match(/(?<=status\/)\d+/)?.[0]
	}

	protected get parameters() {
		return new URLSearchParams({
			dnt: 'true',
			cards: this.hideMedia ? 'hidden' : '',
			conversation: this.hideConversations ? 'none' : '',
			id: this.tweetId ?? '',
			lang: this.language,
			theme: this.theme,
			widgetsVersion: '223fc1c4%3A1596143124634',
			align: 'center',
		})
	}

	protected get source() {
		const url = new URL('https://platform.twitter.com/embed/index.html')
		url.search = this.parameters.toString()
		return url.toString()
	}

	static override get styles() {
		return css`
			:host {
				display: inline-block;
				height: 500px;
			}

			iframe {
				visibility: visible;
				display: block;
				width: 100%;
				height: 100%;
			}
		`
	}

	protected override get template() {
		return html`
			<iframe
				sandbox='allow-same-origin allow-scripts allow-popups allow-popups-to-escape-sandbox'
				scrolling='no'
				frameborder='0'
				loading='lazy'
				allowtransparency='true'
				allowfullscreen
				title='Twitter Tweet'
				src=${this.source}
			></iframe>
		`
	}
}

declare global {
	interface HTMLElementTagNameMap {
		'lit-tweet': Tweet
	}
}
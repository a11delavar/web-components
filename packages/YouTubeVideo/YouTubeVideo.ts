import { Component, component, css, html, nothing, property } from '@a11d/lit'
// import { load } from 'youtube-iframe'

/**
 * @element lit-youtube-video
 *
 * @attr videoId - The YouTube video ID
 * @attr autoplay - Whether the video should autoplay
 * @attr showClosedCaptions - Whether to show closed captions
 * @attr closedCaptionsLanguage - The language of the closed captions
 * @attr color - The color of the player controls
 * @attr hideControls - Whether to hide the player controls
 * @attr disableKeyboard - Whether to disable keyboard controls
 * @attr end - The end time of the video
 * @attr disableFullScreen - Whether to disable full screen
 * @attr interfaceLanguage - The language of the player interface
 * @attr showVideoAnnotations - Whether to show video annotations
 * @attr loop - Whether to loop the video
 * @attr modestBranding - Whether to show the YouTube logo
 * @attr hideRelated - Whether to hide related videos
 * @attr playlist - The YouTube playlist ID
 * @attr start - The start time of the video
 *
 * @fires TODO
 */
@component('lit-youtube-video')
export class YoutubeVideo extends Component {
	@property({ type: String }) videoId?: string
	@property({ type: Boolean }) autoplay?: boolean
	@property({ type: Boolean }) showClosedCaptions?: boolean
	@property({ type: String }) closedCaptionsLanguage?: string
	@property({ type: String }) color?: string
	@property({ type: Boolean }) hideControls?: boolean
	@property({ type: Boolean }) disableKeyboard?: boolean
	@property({ type: String }) end?: string
	@property({ type: Boolean }) disableFullScreen?: boolean
	@property({ type: String }) interfaceLanguage?: string
	@property({ type: Boolean }) showVideoAnnotations?: boolean
	@property({ type: Boolean }) loop?: boolean
	@property({ type: Boolean }) modestBranding?: boolean
	@property({ type: Boolean }) hideRelated?: boolean
	@property({ type: Object }) playlist?: Array<string>
	@property({ type: String }) start?: string

	protected get parameters() {
		return new Map<string, string | undefined>([
			['autoplay', this.autoplay ?? false ? '1' : '0'],
			['cc_load_policy', this.showClosedCaptions === undefined ? undefined : this.showClosedCaptions ? '1' : '0'],
			['cc_lang_pref', this.closedCaptionsLanguage],
			['color', this.color],
			['controls', this.hideControls ? '0' : '1'],
			['disablekb', this.disableKeyboard === undefined ? undefined : this.disableKeyboard ? '1' : '0'],
			['enablejsapi', '1'],
			['end', this.end],
			['fs', this.disableFullScreen === undefined ? undefined : this.disableFullScreen ? '0' : '1'],
			['hl', this.interfaceLanguage],
			['iv_load_policy', this.showVideoAnnotations === undefined ? undefined : this.showVideoAnnotations ? '1' : '3'],
			['loop', this.loop === undefined ? undefined : this.loop ? '1' : '0'],
			['modestbranding', this.modestBranding === undefined ? undefined : this.modestBranding ? '1' : '0'],
			['origin', window.location.origin],
			['playlist', this.playlist?.join(',')],
			['rel', this.hideRelated === undefined ? undefined : this.hideRelated ? '0' : '1'],
			['start', this.start],
		])
	}

	protected get permissions() {
		return [
			'accelerometer',
			'autoplay',
			'clipboard-write',
			'encrypted-media',
			'gyroscope',
			'picture-in-picture',
		]
	}

	static override get styles() {
		return css`
			:host {
				display: flex;
				justify-content: center;
				max-width: 560px;
				height: 315px;
			}

			iframe {
				width: 100%;
				height: 100%;
				aspect-ratio: 16 / 9;
			}
		`
	}

	protected override get template() {
		const parameters = [...this.parameters]
			.filter(([, value]) => value !== undefined)
			.map(([key, value]) => `${key}=${value}`)
			.join('&')
		const source = `https://www.youtube-nocookie.com/embed/${this.videoId}?${parameters}`
		const permissions = this.permissions.join('; ')
		return !this.videoId ? nothing : html`
			<iframe src=${source} frameborder='0' allow=${permissions} allowfullscreen></iframe>
		`
	}

	protected createYoutubeFrame() {
		// load(player => player)
		// TODO
	}
}

declare global {
	interface HTMLElementTagNameMap {
		'lit-youtube-video': YoutubeVideo
	}
}
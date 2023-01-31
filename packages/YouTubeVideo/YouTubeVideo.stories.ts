import { story, meta } from '../../.storybook/story.js'
import { html } from '@a11d/lit'
import p from './package.json'
import './index.js'

export default meta({
	title: 'YouTube Video',
	component: 'lit-youtube-video',
	args: {
		videoId: 'dQw4w9WgXcQ',
		autoplay: false,
		showClosedCaptions: false,
		closedCaptionsLanguage: 'en',
		color: 'red',
		hideControls: false,
		disableKeyboard: false,
		end: '0',
		disableFullScreen: false,
		interfaceLanguage: 'en',
		showVideoAnnotations: false,
		loop: false,
		modestBranding: false,
		hideRelated: false,
		playlist: '',
		start: '0',
	},
	argTypes: {
		videoId: { control: 'text' },
		autoplay: { control: 'boolean' },
		showClosedCaptions: { control: 'boolean' },
		closedCaptionsLanguage: { control: 'text' },
		color: { control: 'text' },
		hideControls: { control: 'boolean' },
		disableKeyboard: { control: 'boolean' },
		end: { control: 'text' },
		disableFullScreen: { control: 'boolean' },
		interfaceLanguage: { control: 'text' },
		showVideoAnnotations: { control: 'boolean' },
		loop: { control: 'boolean' },
		modestBranding: { control: 'boolean' },
		hideRelated: { control: 'boolean' },
		playlist: { control: 'text' },
		start: { control: 'text' },
	},
	parameters: {
		docs: {
			description: {
				component: p.description,
			},
		}
	}
})

export const Default = story({
	render: ({
		videoId,
		autoplay,
		showClosedCaptions,
		closedCaptionsLanguage,
		color,
		hideControls,
		disableKeyboard,
		end,
		disableFullScreen,
		interfaceLanguage,
		showVideoAnnotations,
		loop,
		modestBranding,
		hideRelated,
		playlist,
		start,
	}) => html`
		<lit-youtube-video
			videoId=${videoId}
			?autoplay=${autoplay}
			?showClosedCaptions=${showClosedCaptions}
			closedCaptionsLanguage=${closedCaptionsLanguage}
			color=${color}
			?hideControls=${hideControls}
			?disableKeyboard=${disableKeyboard}
			end=${end}
			?disableFullScreen=${disableFullScreen}
			interfaceLanguage=${interfaceLanguage}
			?showVideoAnnotations=${showVideoAnnotations}
			?loop=${loop}
			modestBranding=${modestBranding}
			?hideRelated=${hideRelated}
			playlist=${playlist}
			start=${start}
		></lit-youtube-video>
	`
})
import { story, meta } from '../../.storybook/story.js'
import { html } from '@a11d/lit'
import p from './package.json'
import './index.js'

export default meta({
	title: 'Slider',
	component: 'lit-slider',
	args: {
	},
	argTypes: {
	},
	parameters: {
		docs: {
			description: {
				component: p.description,
			},
		}
	}
})

const slidesBackgrounds = [
	'url("https://cdn.wallpaperhub.app/cloudcache/e/6/8/e/e/5/e68ee56be36553b1cd8f04a99ab5dca852ed2c17.jpg")',
	'url("https://cdn.wallpaperhub.app/cloudcache/b/c/0/4/b/d/bc04bdbb38ca1cefd03ebd730ae37d994fbcb99b.jpg")',
]

export const Slider = story({
	render: () => html`
		<lit-slider hasNavigation hasPagination style='height: 400px'>
			${slidesBackgrounds.map((background, index) => html`
				<lit-slide style=${`background: ${background}`}>
					<h1>Slide ${index + 1}</h1>
				</lit-slide>
			`)}
		</lit-slider>
	`
})
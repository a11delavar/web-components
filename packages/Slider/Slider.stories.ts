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
	'https://cdn.wallpaperhub.app/cloudcache/e/6/8/e/e/5/e68ee56be36553b1cd8f04a99ab5dca852ed2c17.jpg',
	'https://cdn.wallpaperhub.app/cloudcache/c/4/6/6/9/5/c466951338ea55aaf769cd36efe1f875b7769f0a.png',
	'https://images.pexels.com/photos/1366919/pexels-photo-1366919.jpeg',
	'https://cdn.wallpaperhub.app/cloudcache/e/3/9/2/8/b/e3928b0590021236e05c6781de43e8cce6dddeae.jpg',
]

const defaultSlides = html`
	${slidesBackgrounds.map((background, index) => html`
		<lit-slide>
			<img src=${background} style='height: 100%; object-fit: cover'>
			<div style='position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); color: white; font-size: 36px;'>
				<h1>Slide ${index + 1}</h1>
			</div>
		</lit-slide>
	`)}
`

const defaultThumbSlides = html`
	${slidesBackgrounds.map(background => html`
		<lit-thumb-slide>
			<img src=${background} style='height: 100%; object-fit: cover'>
		</lit-thumb-slide>
	`)}
`

export const Default = story({
	render: () => html`
		<lit-slider style='height: 400px'>
			${defaultSlides}
		</lit-slider>
	`
})

export const Navigation = story({
	render: () => html`
		<lit-slider style='height: 400px' hasNavigation>
			${defaultSlides}
		</lit-slider>
	`
})

export const Pagination = story({
	render: () => html`
		<lit-slider style='height: 400px' hasPagination>
			${defaultSlides}
		</lit-slider>
	`
})

export const XPaginationDynamic = story({
	render: () => html``
})

export const XPaginationProgress = story({
	render: () => html``
})

export const PaginationFraction = story({
	render: () => html`
		<lit-slider style='height: 400px' hasPagination paginationType='fraction'>
			${defaultSlides}
		</lit-slider>
	`
})

export const XPaginationCustom = story({
	render: () => html``
})

export const XScrollbar = story({
	render: () => html``
})

export const XVertical = story({
	render: () => html``
})

export const SpaceBetween = story({
	render: () => html`
		<lit-slider style='height: 400px' spaceBetween='50'>
			${defaultSlides}
		</lit-slider>
	`
})

export const SlidesPerView = story({
	render: () => html`
		<lit-slider style='height: 400px' slidesPerView='3' spaceBetween='20'>
			${defaultSlides}
		</lit-slider>
	`
})

export const SlidesPerViewAuto = story({
	render: () => html`
		<lit-slider style='height: 400px' slidesPerView='auto' spaceBetween='20'>
			${defaultSlides}
		</lit-slider>
	`
})

export const Centered = story({
	render: () => html`
		<lit-slider style='height: 400px' slidesPerView='auto' spaceBetween='20' centeredActiveSlides>
			${defaultSlides}
		</lit-slider>
	`
})

export const Autoplay = story({
	render: () => html`
		<lit-slider style='height: 400px' hasNavigation hasAutoplay autoplayDelay='2500'>
			${defaultSlides}
		</lit-slider>
	`
})

export const XFreeMode = story({
	render: () => html``
})

export const XGrid = story({
	render: () => html``
})

export const XSlidesPerColumn = story({
	render: () => html``
})

export const XNested = story({
	render: () => html``
})

export const GrabCursor = story({
	render: () => html`
		<lit-slider style='height: 400px' grabCursor>
			${defaultSlides}
		</lit-slider>
	`
})

export const InfiniteLoop = story({
	render: () => html`
		<lit-slider style='height: 400px' loop hasPagination>
			${defaultSlides}
		</lit-slider>
	`
})

export const XInfiniteLoopWithSlidesPerGroup = story({
	render: () => html``
})

export const XSlidesPerGroupSkip = story({
	render: () => html``
})

export const EffectFade = story({
	render: () => html`
		<lit-slider style='height: 400px' effect='fade'>
			${defaultSlides}
		</lit-slider>
	`
})

export const EffectCube = story({
	render: () => html`
		<lit-slider style='height: 400px' effect='cube'>
			${defaultSlides}
		</lit-slider>
	`
})

export const EffectCoverflow = story({
	render: () => html`
		<lit-slider style='height: 400px' effect='coverflow'>
			${defaultSlides}
		</lit-slider>
	`
})

export const EffectFlip = story({
	render: () => html`
		<lit-slider style='height: 400px' effect='flip'>
			${defaultSlides}
		</lit-slider>
	`
})

export const EffectCards = story({
	render: () => html`
		<lit-slider style='height: 400px' effect='cards'>
			${defaultSlides}
		</lit-slider>
	`
})

export const EffectCreative = story({
	render: () => html`
		<lit-slider style='height: 400px' effect='creative'>
			${defaultSlides}
		</lit-slider>
	`
})

export const XKeyboardControl = story({
	render: () => html`
		<lit-slider style='height: 400px' hasNavigation hasKeyboard keyboardPageUpDown>
			${defaultSlides}
		</lit-slider>
	`
})

export const MousewheelControl = story({
	render: () => html`
		<lit-slider style='height: 400px' >
			${defaultSlides}
		</lit-slider>
	`
})

export const XDynamicSlides = story({
	render: () => html``
})

export const XManipulation = story({
	render: () => html``
})

export const ThumbsGallery = story({
	render: () => html`
		<lit-slider style='height: 400px' hasThumb>
			${defaultSlides}
			${defaultThumbSlides}
		</lit-slider>
	`
})

export const XThumbsGalleryLoop = story({
	render: () => html``
})

export const XMultipleSwipers = story({
	render: () => html``
})

export const XHashNavigation = story({
	render: () => html``
})

export const XHistory = story({
	render: () => html``
})

export const Rtl = story({
	render: () => html`
		<lit-slider style='height: 400px' dir='rtl'>
			${defaultSlides}
		</lit-slider>
	`
})

export const XParallax = story({
	render: () => html``
})

export const XLazyLoadImages = story({
	render: () => html``
})

export const XResponsiveBreakpoints = story({
	render: () => html``
})

export const XRatioBreakpoints = story({
	render: () => html``
})

export const XAutoheight = story({
	render: () => html``
})

export const XZoom = story({
	render: () => html``
})

export const XVirtualSlides = story({
	render: () => html``
})

export const XCustomPlugin = story({
	render: () => html``
})

export const XSlideableMenu = story({
	render: () => html``
})

export const XChangeDirection = story({
	render: () => html``
})

export const XWatchSlidesVisibility = story({
	render: () => html``
})

export const Rewind = story({
	render: () => html`
		<lit-slider style='height: 400px' rewind>
			${defaultSlides}
		</lit-slider>
	`
})
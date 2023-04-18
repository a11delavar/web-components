import { css, component, property, query, Component, html, PropertyValues, event } from '@a11d/lit'
import { SlotController } from '@3mo/slot-controller'
import { swiperProperties, swiperProperty } from './swiperProperty.js'
import { swiperStyles } from './styles.min.css.js'
import * as SwiperCore from 'swiper'
import { Slide } from './Slide.js'
import { ThumbSlide } from './ThumbSlide.js'

SwiperCore.Swiper.use([
	SwiperCore.A11y,
	SwiperCore.Autoplay,
	SwiperCore.Controller,
	SwiperCore.EffectCoverflow,
	SwiperCore.EffectCube,
	SwiperCore.EffectFade,
	SwiperCore.EffectFlip,
	SwiperCore.EffectCreative,
	SwiperCore.EffectCards,
	SwiperCore.HashNavigation,
	SwiperCore.History,
	SwiperCore.Keyboard,
	SwiperCore.Lazy,
	SwiperCore.Mousewheel,
	SwiperCore.Navigation,
	SwiperCore.Pagination,
	SwiperCore.Parallax,
	SwiperCore.Scrollbar,
	SwiperCore.Thumbs,
	SwiperCore.Virtual,
	SwiperCore.Zoom,
	SwiperCore.FreeMode,
	SwiperCore.Grid,
	SwiperCore.Manipulation,
])

/**
 * @element lit-slider
 *
 * Core Properties
 * @attr preventSlideNext - Disables swiping to next slide direction (to right or bottom)
 * @attr preventSlidePrevious - Disables swiping to previous slide direction (to left or top)
 * @attr autoHeight - Adapts the slider wrapper height to the height of the currently active slide
 * @attr centerInsufficientSlides - Centers slides if the amount of slides less than `slidesPerView`. Not intended to be used `loop` mode and `grid.rows`
 * @attr centeredActiveSlides - Centers active slide, not always on the left side.
 * @attr centeredActiveSlidesBounds - Centers active slide without adding gaps at the beginning and end of slider. Required `centeredActiveSlides`. Not intended to be used with `loop` or `pagination`
 * @attr direction - Swiper direction. Can be 'horizontal' or 'vertical'
 * @attr effect - Transition effect. Can be 'slide', 'fade', 'cube', 'coverflow', 'flip' or 'creative'
 * @attr loop - Enables continuous loop mode
 * @attr loopAdditionalSlides - Addition number of slides that will be cloned after creating of loop
 * @attr loopFillGroupWithBlank - Enable and loop mode will fill groups with insufficient number of slides with blank slides. Good to be used with `slidesPerGroup` parameter
 * @attr loopAllowSlide - Allows Swiper slide prev/next transitions when transitions is already in progress (has effect when loop enabled)
 * @attr rewind - Enables "rewind" mode. Clicking "next" navigation button (or calling .slideNext()) when on last slide will slide back to the first slide. Clicking "prev" navigation button (or calling .slidePrev()) when on first slide will slide forward to the last slide.
 * @attr slidesPerGroup - Set numbers of slides to define and enable group sliding. Useful to use with slidesPerView > 1
 * @attr slidesPerGroupAuto - Skips all slides in view on .slideNext() & .slidePrev() methods calls, on Navigation "buttons" clicks and in autoplay. This is intended to be used only with slidesPerView: 'auto' and slidesPerGroup: 1
 * @attr slidesPerGroupSkip - If equals 0 (default), no slides are excluded from grouping, and the resulting behavior is the same as without this change. If slidesPerGroupSkip is equal or greater than 1 the first X slides are treated as single groups, whereas all following slides are grouped by the slidesPerGroup value.
 * @attr slidesPerView - Number of slides per view (slides visible at the same time on slider's container). If you use it with "auto" value and along with loop: true then you need to specify loopedSlides parameter with amount of slides to loop (duplicate) slidesPerView: 'auto' is currently not compatible with multirow mode, when grid.rows > 1
 * @attr spaceBetween - Distance between slides in px. If you use "margin" css property to the elements which go into Swiper in which you pass "spaceBetween" into, navigation might not work properly.
 * @attr speed - Duration of transition between slides (in ms)
 * @attr threshold - Threshold value in px. If "touch distance" will be lower than this value then swiper will not move
 * @attr touchAngle - Allowable angle (in degrees) to trigger touch move
 * @attr grabCursor - Set to true to enable grabbing cursor
 *
 * Autoplay Properties
 * @attr hasAutoplay - Enables autoplay
 * @attr autoplayDelay - Delay between transitions (in ms)
 * @attr stopOnLastSlide - Stop autoplay when it reaches last slide (has effect only if loop parameter is false)
 * @attr disableAutoplayOnInteraction - Disable autoplay after user interactions e.g. swipes
 * @attr reverseAutoplayDirection - Reverses the autoplay in reverse direction
 * @attr waitForAutoplayTransition - Waits for wrapper transition to continue. Can be disabled in case of using Virtual Translate when your slider may not have transition
 * @attr pauseAutoplayOnMouseEnter - Pause autoplay on mouse enter over Swiper container. If `disableOnInteraction` is also enabled, it will stop autoplay instead of pause.
 *
 * Pagination Properties
 * @attr hasPagination - Enables pagination
 * @attr paginationType - Type of pagination. Can be 'bullets', 'fraction', 'progressbar' or 'custom'
 * @attr dynamicPaginationBullets - Good to enable if you use bullets pagination with a lot of slides. So it will keep only few bullets visible at the same time.
 * @attr dynamicPaginationMainBullets - the number of main bullets visible when `dynamicBullets` enabled.
 * @attr showPaginationOnClick - Toggle (hide/show) pagination container visibility after click on Slider's container
 * @attr clickablePagination - If `true` then clicking on pagination button will cause transition to appropriate slide. Only for bullets pagination type
 * @attr oppositePaginationProgressBar - Makes pagination progressbar opposite to Swiper's `direction` parameter, means vertical progressbar for horizontal swiper direction and horizontal progressbar for vertical swiper direction.
 * @attr formatPaginationFractionCurrent - Format fraction pagination current number. Function receives current number, and you need to return formatted value.
 * @attr formatPaginationFractionTotal - Format fraction pagination total number. Function receives total number, and you need to return formatted value.
 *
 * Navigation Properties
 * @attr hasNavigation - Enables navigation
 * @attr showNavigationOnClick - Toggle (hide/show) navigation container visibility after click on Slider's container.
 *
 * Keyboard Properties
 * @attr hasKeyboard - Enables keyboard control
 * @attr keyboardOnlyInViewport - Set to true and swiper will be controlled only by pressing keys inside its container
 * @attr keyboardPageUpDown - Set to true to enable navigation through slides using keyboard arrows (Page Up/Down and Left/Right arrows)
 *
 * Mousewheel Properties
 * @attr hasMousewheel - Enables mousewheel control
 * @attr mousewheelForceToAxis - Set to true to force mousewheel swipes to axis. So in horizontal mode mousewheel will only work for horizontal scrolling, and in vertical mode for vertical scrolling.
 * @attr mousewheelInvert - Set to true and mousewheel will scroll in the opposite direction
 * @attr mousewheelReleaseOnEdges - Set to true if you want to release mousewheel event when swiper is on the edge positions (in the beginning or in the end)
 * @attr mousewheelThresholdDelta - Minimal mousewheel delta needed to trigger swiper slide change
 * @attr mousewheelSensitivity - Mousewheel sensitivity
 * @attr mousewheelThresholdTime - Minimal mousewheel speed required to trigger swiper slide change
 *
 * @cssprop --lit-slider-thumb-height - Height of the thumb element.
 * @cssprop --lit-slider-thumb-margin - Margin of the thumb element.
 *
 * @csspart slide - Slide element.
 * @csspart active - Active slide element.
 * @csspart pagination - Pagination element.
 * @csspart previousButton - Previous button navigation element.
 * @csspart nextButton - Next button navigation element.
 *
 * @fires slideChange - Dispatched when slide change
 */
@component('lit-slider')
export class Slider extends Component {
	@event() readonly slideChange!: EventDispatcher<number>

	// Core Properties
	@swiperProperty({ type: Boolean }) preventSlideNext = false
	@swiperProperty({ type: Boolean }) preventSlidePrevious = false
	@swiperProperty({ type: Boolean }) autoHeight = false
	@swiperProperty({ type: Boolean }) centerInsufficientSlides = false
	@swiperProperty({ type: Boolean }) centeredActiveSlides = false
	@swiperProperty({ type: Boolean }) centeredActiveSlidesBounds = false
	@swiperProperty({ type: String }) direction: 'horizontal' | 'vertical' = 'horizontal'
	@swiperProperty({ type: String }) effect: 'slide' | 'fade' | 'cube' | 'coverflow' | 'flip' | 'creative' | 'cards' = 'slide'
	@swiperProperty({ type: Boolean }) loop = false
	@swiperProperty({ type: Number }) loopAdditionalSlides = 0
	@swiperProperty({ type: Boolean }) loopFillGroupWithBlank = false
	@swiperProperty({ type: Boolean }) loopAllowSlide = false
	@swiperProperty({ type: Boolean }) rewind = false
	@swiperProperty({ type: Number }) slidesPerGroup = 1
	@swiperProperty({ type: Boolean }) slidesPerGroupAuto = false
	@swiperProperty({ type: Number }) slidesPerGroupSkip = 0
	@swiperProperty({ type: String, reflect: true }) slidesPerView: number | 'auto' = 1
	@swiperProperty({ type: Number }) spaceBetween = 0
	@swiperProperty({ type: Number }) speed = 300
	@swiperProperty({ type: Number }) threshold = 0
	@swiperProperty({ type: Number }) touchAngle = 45
	@swiperProperty({ type: Boolean }) grabCursor = false

	// Autoplay Properties
	@swiperProperty({ type: Boolean }) hasAutoplay = false
	@swiperProperty({ type: Number }) autoplayDelay = 3000
	@swiperProperty({ type: Boolean }) stopOnLastSlide = false
	@swiperProperty({ type: Boolean }) disableAutoplayOnInteraction = false
	@swiperProperty({ type: Boolean }) reverseAutoplayDirection = false
	@swiperProperty({ type: Boolean }) waitForAutoplayTransition = false
	@swiperProperty({ type: Boolean }) pauseAutoplayOnMouseEnter = false

	// Pagination Properties
	@swiperProperty({ type: Boolean }) hasPagination = false
	@swiperProperty({ type: String }) paginationType: 'bullets' | 'fraction' | 'progressbar' | 'custom' = 'bullets'
	@swiperProperty({ type: Boolean }) dynamicPaginationBullets = false
	@swiperProperty({ type: Number }) dynamicPaginationMainBullets = 1
	@swiperProperty({ type: Boolean }) showPaginationOnClick = false
	@swiperProperty({ type: Boolean }) clickablePagination = false
	@swiperProperty({ type: Boolean }) oppositePaginationProgressBar = false
	@swiperProperty({ type: Object }) formatPaginationFractionCurrent?: (number: number) => number | string
	@swiperProperty({ type: Object }) formatPaginationFractionTotal?: (number: number) => number | string

	// Navigation Properties
	@swiperProperty({ type: Boolean, reflect: true }) hasNavigation = false
	@swiperProperty({ type: Boolean }) showNavigationOnClick = false

	// Keyboard Properties
	@swiperProperty({ type: Boolean }) hasKeyboard = false
	@swiperProperty({ type: Boolean }) keyboardOnlyInViewport = false
	@swiperProperty({ type: Boolean }) keyboardPageUpDown = false

	// Mousewheel Properties
	@swiperProperty({ type: Boolean }) hasMousewheel = false
	@swiperProperty({ type: Boolean }) mousewheelForceToAxis = false
	@swiperProperty({ type: Boolean }) mousewheelInvert = false
	@swiperProperty({ type: Boolean }) mousewheelReleaseOnEdges = false
	@swiperProperty({ type: Number }) mousewheelThresholdDelta?: number
	@swiperProperty({ type: Number }) mousewheelSensitivity?: number
	@swiperProperty({ type: Number }) mousewheelThresholdTime?: number

	// TODO: FreeMode module

	// TODO: Other modules

	@property({ type: Boolean, reflect: true }) hasThumb = false

	@query('.gallery-top') protected readonly sliderElement!: HTMLElement
	@query('.gallery-top > .swiper-wrapper') protected readonly slidesContainerElement?: HTMLElement
	@query('.swiper-pagination') protected readonly paginationElement!: HTMLElement
	@query('.swiper-button-prev') protected readonly previousButtonElement!: HTMLElement
	@query('.swiper-button-next') protected readonly nextButtonElement!: HTMLElement
	@query('.gallery-thumbs') protected readonly thumbsSliderElement!: HTMLElement

	protected readonly slotController = new SlotController(this)

	get slides() {
		return [...this.children].filter((child): child is Slide => child instanceof Slide)
	}

	get thumbSlides() {
		return [...this.children].filter((child): child is ThumbSlide => child instanceof ThumbSlide)
	}

	protected override initialized() {
		this.initializeSlider()
	}

	protected override updated(props: PropertyValues) {
		super.updated(props)
		this.updateSlider(props)
	}

	protected slider?: SwiperCore.Swiper
	protected thumbsSlider?: SwiperCore.Swiper

	protected initializeSlider() {
		this.thumbsSlider = new SwiperCore.Swiper(this.thumbsSliderElement, {
			spaceBetween: 10,
			slidesPerView: Math.min(Math.max(4, this.slides.length), 8),
			watchSlidesProgress: true,
		})
		this.slider = new SwiperCore.Swiper(this.sliderElement, this.parameters)
	}

	protected updateSlider(props: PropertyValues) {
		const hasChanged = [...props].some(([key]) => swiperProperties.has(key as string))
		if (this.slider && hasChanged) {
			this.slider.params = {
				...this.slider.originalParams,
				...this.parameters,
			}
		}
		this.slider?.update()
		this.slider?.pagination.render()
		this.slider?.pagination.update()
		this.thumbsSlider?.update()
		// this.slider.changeDirection(this.direction)
		const direction = getComputedStyle(this).direction
		this.slider?.changeLanguageDirection(direction === 'rtl' ? 'rtl' : 'ltr')
	}

	get parameters(): SwiperCore.SwiperOptions {
		return {
			allowSlideNext: this.preventSlideNext === false,
			allowSlidePrev: this.preventSlidePrevious === false,
			autoHeight: this.autoHeight,
			centerInsufficientSlides: this.centerInsufficientSlides,
			centeredSlides: this.centeredActiveSlides,
			centeredSlidesBounds: this.centeredActiveSlidesBounds,
			direction: this.direction,
			loop: this.loop,
			loopAdditionalSlides: this.loopAdditionalSlides,
			loopFillGroupWithBlank: this.loopFillGroupWithBlank,
			loopPreventsSlide: this.loopAllowSlide === false,
			rewind: this.rewind,
			slidesPerGroup: this.slidesPerGroup,
			slidesPerGroupAuto: this.slidesPerGroupAuto,
			slidesPerGroupSkip: this.slidesPerGroupSkip,
			slidesPerView: this.slidesPerView === 'auto' ? 'auto' : Number(this.slidesPerView),
			spaceBetween: this.spaceBetween,
			speed: this.speed,
			effect: this.effect,
			grabCursor: this.grabCursor,
			threshold: this.threshold,
			touchAngle: this.touchAngle,
			autoplay: !this.hasAutoplay ? false : {
				delay: this.autoplayDelay,
				disableOnInteraction: this.disableAutoplayOnInteraction,
				reverseDirection: this.reverseAutoplayDirection,
				waitForTransition: this.waitForAutoplayTransition,
				stopOnLastSlide: this.stopOnLastSlide,
				pauseOnMouseEnter: this.pauseAutoplayOnMouseEnter,
			},
			thumbs: !this.hasThumb ? undefined : {
				...(typeof this.slider?.params.thumbs !== 'object' ? {} : this.slider?.params.thumbs),
				swiper: this.thumbsSlider,
			},
			pagination: !this.hasPagination ? false : {
				...(typeof this.slider?.params.pagination !== 'object' ? {} : this.slider?.params.pagination),
				el: this.paginationElement,
				type: this.paginationType,
				dynamicBullets: this.dynamicPaginationBullets,
				dynamicMainBullets: this.dynamicPaginationMainBullets,
				hideOnClick: this.showPaginationOnClick === false,
				clickable: this.clickablePagination,
				progressbarOpposite: this.oppositePaginationProgressBar,
				formatFractionCurrent: this.formatPaginationFractionCurrent ?? (value => value),
				formatFractionTotal: this.formatPaginationFractionTotal ?? (value => value),
			},
			navigation: !this.hasNavigation ? false : {
				...(typeof this.slider?.params.navigation !== 'object' ? {} : this.slider?.params.navigation),
				prevEl: this.previousButtonElement,
				nextEl: this.nextButtonElement,
				hideOnClick: this.showNavigationOnClick === false,
			},
			keyboard: this.hasKeyboard ? undefined : {
				...(typeof this.slider?.params.keyboard !== 'object' ? {} : this.slider?.params.keyboard),
				enabled: this.hasKeyboard,
				onlyInViewport: this.keyboardOnlyInViewport,
				pageUpDown: this.keyboardPageUpDown,
			},
			mousewheel: !this.hasMousewheel ? false : {
				forceToAxis: this.mousewheelForceToAxis,
				invert: this.mousewheelInvert,
				releaseOnEdges: this.mousewheelReleaseOnEdges,
				thresholdDelta: this.mousewheelThresholdDelta,
				sensitivity: this.mousewheelSensitivity,
				thresholdTime: this.mousewheelThresholdTime,
			},
			on: {
				activeIndexChange: (swiper) => {
					this.slideChange.dispatch(swiper.activeIndex)
					this.requestUpdate()
				},
				click: (swiper, event) => {
					this.slides[swiper.clickedIndex]?.dispatchEvent(new MouseEvent('click', event))
				}
			}
		}
	}

	static override get styles() {
		return css`
			${swiperStyles}

			:host {
				display: block;
				--swiper-theme-color: white;
				--swiper-navigation-color: white;
			}

			.swiper-button-prev, .swiper-button-next {
				visibility: hidden;
			}

			:host([hasNavigation]) .swiper-button-prev, :host([hasNavigation]) .swiper-button-next {
				visibility: visible;
			}

			.swiper-pagination {
				visibility: hidden;
			}

			:host([hasPagination]) .swiper-pagination {
				visibility: visible;
			}

			.gallery-top {
				height: 100%;
			}

			:host([hasThumb]) .gallery-top {
				height: calc(100% - var(--lit-slider-thumb-height, 100px) - var(--lit-slider-thumb-margin, 10px));
				transition: height 0.3s ease;
			}

			:host(:not([hasThumb])) .gallery-thumbs {
				display: none;
			}

			.gallery-thumbs {
				margin-top: var(--lit-slider-thumb-margin, 10px);
				height: var(--lit-slider-thumb-height, 100px);
				transition: height 0.3s ease;
			}

			.gallery-thumbs .swiper-wrapper {
				justify-content: center;
			}

			.gallery-thumbs .swiper-slide {
				height: 100%;
				display: inline-flex;
				width: auto !important;
				opacity: 0.25;
				cursor: pointer;
			}

			.gallery-thumbs .swiper-slide-thumb-active {
				opacity: 1;
			}

			:host([slidesPerView=auto]) .swiper-slide {
				width: auto !important;
			}
		`
	}

	protected override get template() {
		return html`
			<div class='swiper gallery-top'>
				<div class='swiper-wrapper'>
					${this.slides.map((slide, index) => this.getSlideTemplate(slide, index))}
				</div>
				${this.paginationTemplate}
				${this.navigationTemplate}
			</div>
			${this.thumbsSliderTemplate}
		`
	}

	protected getSlideTemplate(slide: Slide, index: number) {
		if (this.slider?.activeIndex === index ?? false) {
			slide.setAttribute('active', '')
		} else {
			slide.removeAttribute('active')
		}
		const slotName = `slide-${index + 1}`
		slide.slot = slotName
		return html`
			<div class='swiper-slide'>
				<slot name=${slotName}></slot>
			</div>
		`
	}

	protected get paginationTemplate() {
		return html`
			<div part='pagination' class='swiper-pagination'></div>
		`
	}

	protected get navigationTemplate() {
		return html`
			<div part='previousButton' class='swiper-button-prev'></div>
			<div part='nextButton' class='swiper-button-next'></div>
		`
	}

	protected get thumbsSliderTemplate() {
		return html`
			<div class='swiper-container gallery-thumbs'>
				<div class='swiper-wrapper'>
					${this.thumbSlides.map((slide, index) => this.getThumbSlideTemplate(slide, index))}
				</div>
			</div>
		`
	}

	protected getThumbSlideTemplate(slide: ThumbSlide, index: number) {
		const slotName = `thumb-slide-${index + 1}`
		slide.slot = slotName
		return html`
			<div class='swiper-slide gallery-thumb' @click=${() => this.slider?.slideTo(index)}>
				<slot name=${slotName}></slot>
			</div>
		`
	}
}

declare global {
	interface HTMLElementTagNameMap {
		'lit-slider': Slider
	}
}
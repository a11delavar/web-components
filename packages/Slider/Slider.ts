import { css, component, property, query, Component, html } from '@a11d/lit'
import { Slide } from './Slide.js'
import { swiperStyles } from './styles.min.css.js'
import * as SwiperCore from 'swiper'
import type { PaginationOptions } from 'swiper/types/modules/pagination'
import { SlotController } from '@3mo/slot-controller'


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
 * @attr watchSlidesProgress - Enables to watch progress of each slide's transition. This can be used to implement different effects or to synchronize multiple sliders
 *
 * Autoplay Properties
 * @attr autoplay - Enables autoplay
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
 * @csspart slide - Slide element.
 * @csspart active - Active slide element.
 * @csspart pagination - Pagination element.
 * @csspart previousButton - Previous button navigation element.
 * @csspart nextButton - Next button navigation element.
 */
@component('lit-slider')
export class Slider extends Component {
	// TODO Events

	// Core Properties
	@property({ type: Boolean, reflect: true }) preventSlideNext = false
	@property({ type: Boolean, reflect: true }) preventSlidePrevious = false
	@property({ type: Boolean, reflect: true }) autoHeight = false
	@property({ type: Boolean, reflect: true }) centerInsufficientSlides = false
	@property({ type: Boolean, reflect: true }) centeredActiveSlides = false
	@property({ type: Boolean, reflect: true }) centeredActiveSlidesBounds = false
	@property({ type: String, reflect: true }) direction: SwiperCore.SwiperOptions['direction'] = 'horizontal'
	@property({ type: String, reflect: true }) effect: SwiperCore.SwiperOptions['effect'] = 'slide'
	@property({ type: Boolean, reflect: true }) loop = false
	@property({ type: Number, reflect: true }) loopAdditionalSlides = 0
	@property({ type: Boolean, reflect: true }) loopFillGroupWithBlank = false
	@property({ type: Boolean, reflect: true }) loopAllowSlide = false
	@property({ type: Boolean, reflect: true }) rewind = false
	@property({ type: Number, reflect: true }) slidesPerGroup = 1
	@property({ type: Boolean, reflect: true }) slidesPerGroupAuto = false
	@property({ type: Number, reflect: true }) slidesPerGroupSkip = 0
	@property({ type: String, reflect: true }) slidesPerView: SwiperCore.SwiperOptions['slidesPerView'] = 1
	@property({ type: Number, reflect: true }) spaceBetween = 0
	@property({ type: Number, reflect: true }) speed = 300
	@property({ type: Number, reflect: true }) threshold = 0
	@property({ type: Number, reflect: true }) touchAngle = 45
	@property({ type: Boolean, reflect: true }) watchSlidesProgress = true

	// Autoplay Properties
	@property({ type: Boolean, reflect: true }) autoplay = false
	@property({ type: Number, reflect: true }) autoplayDelay = 3000
	@property({ type: Boolean, reflect: true }) stopOnLastSlide = false
	@property({ type: Boolean, reflect: true }) disableAutoplayOnInteraction = false
	@property({ type: Boolean, reflect: true }) reverseAutoplayDirection = false
	@property({ type: Boolean, reflect: true }) waitForAutoplayTransition = false
	@property({ type: Boolean, reflect: true }) pauseAutoplayOnMouseEnter = false

	// Pagination Properties
	@property({ type: Boolean, reflect: true }) hasPagination = false
	@property({ type: String, reflect: true }) paginationType: PaginationOptions['type'] = 'bullets'
	@property({ type: Boolean, reflect: true }) dynamicPaginationBullets: PaginationOptions['dynamicBullets'] = false
	@property({ type: Number, reflect: true }) dynamicPaginationMainBullets: PaginationOptions['dynamicMainBullets'] = 1
	@property({ type: Boolean, reflect: true }) showPaginationOnClick: PaginationOptions['hideOnClick'] = false
	@property({ type: Boolean, reflect: true }) clickablePagination: PaginationOptions['clickable'] = false
	@property({ type: Boolean, reflect: true }) oppositePaginationProgressBar: PaginationOptions['progressbarOpposite'] = false
	@property({ type: Object }) formatPaginationFractionCurrent?: PaginationOptions['formatFractionCurrent']
	@property({ type: Object }) formatPaginationFractionTotal?: PaginationOptions['formatFractionTotal']

	@property({ type: Boolean, reflect: true }) hasNavigation = false
	// TODO: Navigation Properties

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

	protected override initialized() {
		this.initializeSlider()
	}

	protected override updated() {
		this.updateSlider()
	}

	protected slider?: SwiperCore.Swiper
	protected thumbsSlider?: SwiperCore.Swiper

	protected initializeSlider() {
		this.thumbsSlider = new SwiperCore.Swiper(this.thumbsSliderElement, {
			spaceBetween: 10,
			slidesPerView: Math.min(Math.max(4, this.slides.length), 8),
			watchSlidesProgress: true,
		})
		this.slider = new SwiperCore.Swiper(this.sliderElement, {
			navigation: {
				prevEl: this.previousButtonElement,
				nextEl: this.nextButtonElement,
				hideOnClick: true,
			},
			pagination: {
				el: this.paginationElement,
			},
			thumbs: {
				swiper: this.thumbsSlider,
			},
			on: {
				activeIndexChange: () => this.requestUpdate()
			}
		})
	}

	protected updateSlider() {
		if (this.slider) {
			this.slider.params = {
				...this.slider.params,
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
				threshold: this.threshold,
				touchAngle: this.touchAngle,
				watchSlidesProgress: this.watchSlidesProgress,
				autoplay: typeof this.slider.params.autoplay === 'boolean' || typeof this.slider.params.autoplay === 'undefined' ? undefined : {
					...this.slider.params.autoplay,
					delay: this.autoplayDelay,
					disableOnInteraction: this.disableAutoplayOnInteraction,
					reverseDirection: this.reverseAutoplayDirection,
					waitForTransition: this.waitForAutoplayTransition,
					stopOnLastSlide: this.stopOnLastSlide,
					pauseOnMouseEnter: this.pauseAutoplayOnMouseEnter,
				},
				pagination: typeof this.slider.params.pagination === 'boolean' ? false : {
					...this.slider.params.pagination,
					type: this.paginationType,
					dynamicBullets: this.dynamicPaginationBullets,
					dynamicMainBullets: this.dynamicPaginationMainBullets,
					hideOnClick: this.showPaginationOnClick === false,
					clickable: this.clickablePagination,
					progressbarOpposite: this.oppositePaginationProgressBar,
					formatFractionCurrent: this.formatPaginationFractionCurrent ?? this.slider.params.pagination?.formatFractionCurrent,
					formatFractionTotal: this.formatPaginationFractionTotal ?? this.slider.params.pagination?.formatFractionTotal,
				},
			}
			this.slider.update()
			this.slider.pagination.render()
			this.slider.pagination.update()
			this.thumbsSlider?.update()
			this.slider.allowSlideNext = this.preventSlideNext === false
			this.slider.allowSlidePrev = this.preventSlidePrevious === false
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
				height: calc(100% - var(--swiper-thumb-height, 100px) - var(--swiper-thumb-margin, 10px));
			}

			:host(:not([hasThumb])) .gallery-thumbs {
				display: none;
			}

			.gallery-thumbs {
				margin-top: var(--thumbs-margin-top, 10px);
				height: var(--swiper-thumb-height, 100px);
			}

			.gallery-thumbs .swiper-slide {
				height: 100%;
				opacity: 0.25;
				transition: 200ms;
				cursor: pointer;
				background-position: center !important;
				background-repeat: no-repeat !important;
				background-size: cover !important;
			}

			.gallery-thumbs .swiper-slide-thumb-active {
				opacity: 1;
			}
		`
	}

	protected override get template() {
		return html`
			<div class='swiper-container gallery-top'>
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
			slide.part.add('active')
		} else {
			slide.part.remove('active')
		}
		const slotName = `slide-${index + 1}`
		slide.slot = slotName
		return html`
			<div class='swiper-slide'>
				<slot name=${slotName} style='display: block; height: 100%;'></slot>
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
					${this.slides.map((slide, index) => html`
						<div style='background: ${slide.style.background}' class='swiper-slide gallery-thumb'
							@click=${() => this.slider?.slideTo(index)}
						></div>
					`)}
				</div>
			</div>
		`
	}
}

declare global {
	interface HTMLElementTagNameMap {
		'lit-slider': Slider
	}
}
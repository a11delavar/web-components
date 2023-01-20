import { component } from '@a11d/lit'
import { Chart } from './Chart.js'

@component('lit-chart-bubble')
export class ChartBubble<TData, TLabel = string> extends Chart<'bubble', TData, TLabel> {
	override readonly type = 'bubble'
}

declare global {
	interface HTMLElementTagNameMap {
		'lit-chart-bubble': ChartBubble<unknown>
	}
}
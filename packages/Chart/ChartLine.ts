import { component } from '@a11d/lit'
import { Chart } from './Chart.js'

@component('lit-chart-line')
export class ChartLine<TData, TLabel = string> extends Chart<'line', TData, TLabel> {
	override readonly type = 'line'
}

declare global {
	interface HTMLElementTagNameMap {
		'lit-chart-line': ChartLine<unknown>
	}
}
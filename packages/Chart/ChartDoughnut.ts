import { component } from '@a11d/lit'
import { Chart } from './Chart.js'

@component('lit-chart-doughnut')
export class ChartDoughnut<TData, TLabel = string> extends Chart<'doughnut', TData, TLabel> {
	override readonly type = 'doughnut'
}

declare global {
	interface HTMLElementTagNameMap {
		'lit-chart-doughnut': ChartDoughnut<unknown>
	}
}
import { component } from '@a11d/lit'
import { Chart } from './Chart.js'

@component('lit-chart-pie')
export class ChartPie<TData, TLabel = string> extends Chart<'pie', TData, TLabel> {
	override readonly type = 'pie'
}

declare global {
	interface HTMLElementTagNameMap {
		'lit-chart-pie': ChartPie<unknown>
	}
}
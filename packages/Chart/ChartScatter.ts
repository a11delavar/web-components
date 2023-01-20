import { component } from '@a11d/lit'
import { Chart } from './Chart.js'

@component('lit-chart-scatter')
export class ChartScatter<TData, TLabel = string> extends Chart<'scatter', TData, TLabel> {
	override readonly type = 'scatter'
}

declare global {
	interface HTMLElementTagNameMap {
		'lit-chart-scatter': ChartScatter<unknown>
	}
}
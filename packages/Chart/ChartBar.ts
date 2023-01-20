import { component } from '@a11d/lit'
import { Chart } from './Chart.js'

@component('lit-chart-bar')
export class ChartBar<TData, TLabel = string> extends Chart<'bar', TData, TLabel> {
	override readonly type = 'bar'
}

declare global {
	interface HTMLElementTagNameMap {
		'lit-chart-bar': ChartBar<unknown>
	}
}
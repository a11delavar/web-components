import { component } from '@a11d/lit'
import { Chart } from './Chart.js'

@component('lit-chart-polar-area')
export class ChartPolarArea<TData, TLabel = string> extends Chart<'polarArea', TData, TLabel> {
	override readonly type = 'polarArea'
}

declare global {
	interface HTMLElementTagNameMap {
		'lit-chart-polar-area': ChartPolarArea<unknown>
	}
}
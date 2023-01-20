import { component } from '@a11d/lit'
import { Chart } from './Chart.js'

@component('lit-chart-radar')
export class ChartRadar<TData, TLabel = string> extends Chart<'radar', TData, TLabel> {
	override readonly type = 'radar'
}

declare global {
	interface HTMLElementTagNameMap {
		'lit-chart-radar': ChartRadar<unknown>
	}
}
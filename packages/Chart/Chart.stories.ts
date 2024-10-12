import { html } from '@a11d/lit'
import type { Meta, StoryObj } from '@storybook/web-components'
import p from './package.json'
import './index.js'
import type { ChartDataset } from 'chart.js/'

export default {
	title: 'Chart',
	component: 'lit-chart',
	package: p,
} as Meta

const labels = ['1', '2', '3', '4']

const dataSets: Array<ChartDataset> = [
	{
		label: 'Increasing',
		data: [1, 2, 3, 4],
		borderColor: 'teal',
	},
	{
		label: 'Decreasing',
		data: [4, 3, 2, 1],
		borderColor: 'red',
	},
]

// const dataSets2: Array<ChartDataset> = [
// 	{
// 		label: 'Increasing',
// 		data: [1, 2, 3, 4],
// 		borderColor: 'teal',
// 	},
// 	{
// 		label: 'Decreasing',
// 		data: [4, 3, 2, 1],
// 		borderColor: 'red',
// 	},
// ]

export const Doughnut: StoryObj = {
	render: () => html`<lit-chart-doughnut .labels=${labels} .dataSets=${dataSets}></lit-chart-doughnut>`
}

export const Line: StoryObj = {
	render: () => html`<lit-chart-line .labels=${labels} .dataSets=${dataSets}></lit-chart-line>`
}

export const Bar: StoryObj = {
	render: () => html`<lit-chart-bar .labels=${labels} .dataSets=${dataSets}></lit-chart-bar>`
}

export const Bubble: StoryObj = {
	render: () => html`<lit-chart-bubble .labels=${labels} .dataSets=${dataSets}></lit-chart-bubble>`
}

export const Pie: StoryObj = {
	render: () => html`<lit-chart-pie .labels=${labels} .dataSets=${dataSets}></lit-chart-pie>`
}

export const PolarArea: StoryObj = {
	render: () => html`<lit-chart-polar-area .labels=${labels} .dataSets=${dataSets}></lit-chart-polar-area>`
}

export const Radar: StoryObj = {
	render: () => html`<lit-chart-radar .labels=${labels} .dataSets=${dataSets}></lit-chart-radar>`
}

export const Scatter: StoryObj = {
	render: () => html`<lit-chart-scatter .labels=${labels} .dataSets=${dataSets}></lit-chart-scatter>`
}
import { build } from 'esbuild'
import { cpSync } from 'fs'

const workerEntryPoints = [
	'vs/language/json/json.worker.js',
	'vs/language/css/css.worker.js',
	'vs/language/html/html.worker.js',
	'vs/language/typescript/ts.worker.js',
	'vs/editor/editor.worker.js'
]

const fontPath = './node_modules/@a11d/lit-monaco-editor/dist/codicon.ttf'

/**
 * An ESBuild build script for the Monaco Editor
 * which imports the worker files and the font file into the "monaco" sub-directory in the output directory
 *
 * @param {{ outdir: string }} parameters
 * @returns {Promise<void>}
 */
export default function buildMonaco(parameters) {
	const { outdir } = parameters
	cpSync(fontPath, `${outdir}/monaco/codicon.ttf`, { recursive: true })

	return build({
		entryPoints: workerEntryPoints.map(entry => `./node_modules/monaco-editor/esm/${entry}`),
		bundle: true,
		format: 'iife',
		outdir: `${outdir}/monaco`,
	})
}
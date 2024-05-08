import './group.js'

if ('groupToMap' in Array.prototype === false) {
	(Array.prototype as any).groupToMap = function (keySelector: any) {
		return new Map(Object.entries(this.group(keySelector))) as any
	}
}

declare global {
	interface Array<T> {
		groupToMap<TKey extends keyof T, TValue extends T[TKey] & (string | symbol)>(keySelector: (item: T) => TValue): Map<TValue, Array<T>>
	}
}
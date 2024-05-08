if ('group' in Array.prototype === false) {
	(Array.prototype as any).group = function (keySelector: any) {
		return this.reduce((storage: any, item: any) => {
			const group = keySelector(item);
			(storage[group] ||= []).push(item)
			return storage
		}, {})
	}
}

declare global {
	interface Array<T> {
		group<TKey extends keyof T, TValue extends T[TKey] & (string | number | symbol)>(keySelector: (item: T) => TValue): Record<TValue, Array<T>>
	}
}

export { }
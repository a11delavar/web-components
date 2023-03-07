if ('group' in Array.prototype === false) {
	Array.prototype.group = function (keySelector) {
		return this.reduce((storage, item) => {
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
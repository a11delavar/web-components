import { property, ReactiveElement } from '@a11d/lit'

export const swiperProperties = new Set<string>()

export const swiperProperty = (...parameters: Parameters<typeof property>) => {
	return (prototype: ReactiveElement, propertyKey: string) => {
		swiperProperties.add(propertyKey)
		return property(...parameters)(prototype, propertyKey)
	}
}
import './group.js'

describe('Array.prototype.group', () => {
	const data = [
		{ id: 1, name: 'John' },
		{ id: 2, name: 'Jane' },
		{ id: 3, name: 'John' },
		{ id: 4, name: 'Jane' },
		{ id: 5, name: 'John' },
	]

	it('should group with standard key selector', () => {
		const result = data.group(x => x.name)

		expect(result).toEqual({
			John: [
				{ id: 1, name: 'John' },
				{ id: 3, name: 'John' },
				{ id: 5, name: 'John' },
			],
			Jane: [
				{ id: 2, name: 'Jane' },
				{ id: 4, name: 'Jane' },
			],
		})
	})

	it('should group with custom key selector', () => {
		const result = data.group(x => x.name + x.id)

		expect(result).toEqual({
			John1: [{ id: 1, name: 'John' }],
			Jane2: [{ id: 2, name: 'Jane' }],
			John3: [{ id: 3, name: 'John' }],
			Jane4: [{ id: 4, name: 'Jane' }],
			John5: [{ id: 5, name: 'John' }],
		})
	})
})
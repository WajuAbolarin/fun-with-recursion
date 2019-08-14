const { snakeCase } = require('../src/utils/snakeCase')
describe('Snake Case', () => {
	test('Returns a string, given a String as input', () => {
		expect(typeof snakeCase('hi')).toBe('string')
	})
	test('Converts an input string to snakeCase', () => {
		expect(snakeCase('someVariable')).toBe('some_variable')
	})
})

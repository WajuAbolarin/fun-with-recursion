const { camelCase } = require('./../src/utils/camelCase')
describe('Camel Case', () => {
	test('Returns a string, given a String as input', () => {
		expect(typeof camelCase('hi')).toBe('string')
	})
	test('Converts an input_string to camelCase', () => {
		expect(camelCase('some_variable')).toBe('someVariable')
		expect(camelCase('a_variable')).toBe('aVariable')
	})

	test('Doesn\'t remove useful _ ', () => {
		expect(camelCase('_some_variable')).toBe('_someVariable')
	})
})

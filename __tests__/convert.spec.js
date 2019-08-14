const { convert, convertTo } = require('../src/convert')
const { camelCase, snakeCase } = require('../src/utils')

describe('Converter', () => {
	test('given an object, proper response', () => {
		expect(
			convert({ my_name: 'Waju', a_prop: { b_prop: 'prop value' } }, camelCase)
		).toEqual({ myName: 'Waju', aProp: { bProp: 'prop value' } })

		expect(
			convert(
				{
					myName: 'Waju',
					aProp: {
						bProp: 'prop value',
						cProp: { dProp: 'someProp', e_prop: null }
					}
				},
				snakeCase
			)
		).toEqual({
			my_name: 'Waju',
			a_prop: {
				b_prop: 'prop value',
				c_prop: { d_prop: 'someProp', e_prop: null }
			}
		})

		expect(convert({ myName: 'Waju' }, snakeCase)).toEqual({ my_name: 'Waju' })
		expect(convert({ name: 'Waju' }, snakeCase)).toEqual({ name: 'Waju' })
	})
	test.only('Curried version', () => {
		const toSnake = convertTo(snakeCase)
		expect(convert({ myName: 'Waju' }, snakeCase)).toEqual(
			toSnake({ myName: 'Waju' })
		)
	})
})

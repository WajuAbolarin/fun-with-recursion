const snakeCase = str =>
	str.replace(
		/[A-Z]/g,
		(letter, index) => `${index !== 0 ? '_' : ''}${letter.toLowerCase()}`
	)

module.exports = { snakeCase }

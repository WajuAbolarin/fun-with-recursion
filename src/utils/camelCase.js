const camelCase = str =>
	str.replace(/_[\w]/g, (match, index) =>
		index !== 0 ? match.toUpperCase().replace('_', '') : match
	)

module.exports = { camelCase }

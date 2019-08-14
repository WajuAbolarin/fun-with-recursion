const convert = (obj, fn) => {
	if (!obj || obj.constructor.name !== 'Object') {
		return obj
	}
	let val = {}
	Object.entries(obj).forEach(([key, value]) => {
		val[fn(key)] = convert(value, fn)
	})
	return val
}
const curry = fn => {
	const arity = fn.length

	return function $curry(...args) {
		if (args.length < arity) {
			return $curry.bind(null, ...args)
		}
		return fn.call(null, ...args)
	}
}
const convertTo = fn => obj => convert(obj, fn)
module.exports = { convert, convertTo }

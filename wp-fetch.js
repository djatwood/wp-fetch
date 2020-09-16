const defaultInit = {
	method: 'POST',
	credentials: 'same-origin',
	headers: {
		'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8'
	}
}

export function WPFetch(init, host = "") {
	init = Object.assign(defaultInit, init)
	return fetch(host + '/wp-admin/admin-ajax.php?', init)
}

export function objToURL(obj) {
	let list = []
	for (const k of Object.keys(obj)) {
		key = encodeURIComponent(k)
		value = encodeURIComponent(obj[k])
		list.push(`${key}=${value}`)
	}

	return list.join("&")
}
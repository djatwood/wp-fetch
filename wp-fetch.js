class WpFetch {
	constructor(body = {}, data = {}, fetch = true) {
		this.body = body
		this.data = data
		this.url = '/wp-admin/admin-ajax.php?'
		this.init = {
			method: 'POST',
			credentials: 'same-origin',
			headers: {
				'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8'
			}
		}

		if (fetch) this.fetch()
	}

	check(response) {
		return response.json().then(json => {
			if (response.ok && json['success']) return json['data']

			const error = json['success'] === false ? JSON.stringify(json['data']) :
				`${response.status} (${response.statusText})`

			return Promise.reject(new Error(`WpFetch ${error}`))
		})
	}

	fetch() {
		this.init.body = Object.entries(this.body).map(
			([key, val]) => `${encodeURIComponent(key)}=${encodeURIComponent(val)}`
		).join('&') + encodeURI(`&${JSON.stringify(this.data)}`)

		fetch(this.url, this.init)
			.then(this.check)
			.then(response => this.success ? this.success(response) : false)
			.catch(error_message => this.error ? this.error(error_message) : console.error(error_message))
	}
}
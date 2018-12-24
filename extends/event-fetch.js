class EventFetch extends WpFetch {
	constructor(element, event) {
		super(Object.assign({}, element.dataset), false)
		this.element = element

		element.addEventListener(event, e => {
			e.preventDefault()
			if (this.handler && !this.handler()) return

			this.fetch()
		})
	}
}
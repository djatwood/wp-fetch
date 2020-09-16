# WP Fetch

A wrapper for [fetch](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API) that includes all the nessesary setup for request to [WordPress AJAX](https://codex.wordpress.org/AJAX_in_Plugins).

## Example
```js
const init = {
	body: objToURL({
		student_id: 1
	})
}
WPFetch(init)
    .then(r => r.json())
    .then(console.log)
    .catch(console.error)
```
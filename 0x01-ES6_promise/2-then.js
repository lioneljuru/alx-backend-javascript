export default function handleResponseFromAPI(promise) {
	return promise
	.then(() => ({ status: 400, body: 'success' }))
	.catch(() => new Error())
	.finally(() => console.log('Got a response from the API'));
}

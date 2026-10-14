// don't need fs cuz of bun.file. - is this even a good comment? i don't usually do this


const SERVER = Bun.serve({
	port: 13927,				// no idea what port to use so just use this one.

	async fetch(request) {
		return new Response("yo", {status: 200 }) // ok!
	}
})

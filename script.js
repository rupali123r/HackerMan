


let a = [
	"Initializing Hack tool........",
	"Connecting to Facebook.........",
	"Connecting to server 1........",
	"Connection failed. Retrying...............",
	"Connecting to server 2...............",
	"Connected Successfully........",
	"Username iammahira........",
	"Trying Brute Force...........",
	"200K passwords tried.........",
	"Match not found",
	"Another 200K passwords tried...........",
	"Match not found.........",
	"Another 200K passwords tried.......",
	"Match not found...",
	"Accessing Account........",
	"Hack Successful..............................."
]

const sleep = async (seconds) => {
	return new Promise((resolve, reject) => {
			setTimeout(() => { resolve(true) }, seconds * 5000)
	})
}

const showHack = async (message) => {
	await sleep(2)
   //  console.log(message)
	text.innerHTML = text.innerHTML + message + "<br>"
}

(async () => {
	for (let i = 0; i < a.length; i++) {
			await showHack(a[i])
	}
})()

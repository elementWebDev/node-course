const geocode = require("./utils/geocode")
const forecast = require("./utils/forecast")

//
// Goal: Use both destructuring and property shorthand in weather app
//
// 1. Use destructuring in app.js, forecast.js, and geocode.js
// 2. Use property shorthand in forecast.js and geocode.js
// 3. Test your work and ensure app still works

const userLocation = process.argv[2]

if (!userLocation) {
	console.log("Please provide a location")
} else {
	geocode(process.argv[2], (error, data) => {
		if (error) {
			return console.log(error)
		}
		forecast(data.latitude, data.longitude, (error, forecastData) => {
			if (error) {
				return console.log(error)
			}
			console.log(data.location)
			console.log(forecastData)
		})
	})
}

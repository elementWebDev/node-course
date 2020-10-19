const geocode = require("./utils/geocode")
const forecast = require("./utils/forecast")

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

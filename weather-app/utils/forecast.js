const request = require("request")

const forecast = (latitude, longitude, callback) => {
	const url =
		"http://api.weatherstack.com/current?access_key=e2e260996b1cb4ae50acbcf5faca050b&query=" +
		latitude +
		"," +
		longitude +
		"&units=f"

	request({ url: url, json: true }, (error, response) => {
		if (error) {
			callback("Unable to connect to weather service!", undefined)
		} else if (response.body.error) {
			callback("Unable to find location", undefined)
		} else {
			callback(
				undefined,
				response.body.current.weather_descriptions[0] +
					". It is currently " +
					response.body.current.temperature +
					" degrees. It feels like " +
					response.body.current.feelslike +
					" degrees"
			)
		}
	})
}

module.exports = forecast
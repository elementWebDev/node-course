const request = require("request")

const forecast = (latitude, longitude, callback) => {
	const url =
		"http://api.weatherstack.com/current?access_key=e2e260996b1cb4ae50acbcf5faca050b&query=" +
		latitude +
		"," +
		longitude +
		"&units=f"

	request({ url, json: true }, (error, { body }) => {
		if (error) {
			callback("Unable to connect to weather service!", undefined)
		} else if (body.error) {
			callback("Unable to find location", undefined)
		} else {
			callback(
				undefined,
				body.current.weather_descriptions[0] +
					". It is currently " +
					body.current.temperature +
					" degrees. It feels like " +
					body.current.feelslike +
					" degrees"
			)
		}
	})
}

module.exports = forecast

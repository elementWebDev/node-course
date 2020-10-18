const geocode = require("./utils/geocode")
const forecast = require("./utils/forecast")

//
// Goal: Accept location via command line argument
//
// 1. Access the command line argument without using yargs
//  /*	 console.log(process.argv[2])	*/

// 2. Use the string value as the input for geocode
// 3. Only geocode if a location was provided
// 4. Test your work with a couple locations

//	if (process.argv[2]) {
// 		... geocode()
//	} else {
// 		console.log('Please provide a location')
//	}

geocode("La Pine, Oregon", (error, data) => {
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

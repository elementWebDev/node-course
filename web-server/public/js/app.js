console.log('Client side javascript file is loaded!')


fetch("http://localhost:3000/weather?address=boston").then((response) => {
    response.json().then((weather) => {
        if (weather.error) {
            console.log(weather.error)
        } else {
            console.log(weather)
            console.log(weather.location)
            console.log(weather.forecast)
        }
    })
})

// fetch api (browser api) - not accessible in back-end

// fetch("http://puzzle.mead.io/puzzle").then((response) => {
// 	response.json().then((data) => {
// 		console.log(data)
// 	})
// })


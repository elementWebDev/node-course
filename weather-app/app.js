const request = require('request')

const url = 'http://api.weatherstack.com/current?access_key=e2e260996b1cb4ae50acbcf5faca050b&query=37.8267,-122.4233&units=f'

request({ url: url, json: true }, (error, response) => {
    // console.log(response.body.current);
    console.log(response.body.current.weather_descriptions[0] + '. It is currently ' + response.body.current.temperature + ' degrees. It feels like ' + response.body.current.feelslike + ' degrees.');
})

//
// Goal: Print a small forecast to the user
//
// 1. Print: "It is currently 9 degrees out. It feels like 5 degrees out."
// 2. Test your work!

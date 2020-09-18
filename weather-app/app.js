const request = require('request')

const url = 'http://api.weatherstack.com/current?access_key=e2e260996b1cb4ae50acbcf5faca050b&query=37.8267,-122.4233'

request({ url: url }, (error, response) => {
    const data = JSON.parse(response.body)
    console.log(data.current)
})

const request = require('request')

const forecast = (address, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=e2e260996b1cb4ae50acbcf5faca050b&query=' + encodeURIComponent(address) + '&units=f'

    request({ url: url, json: true }, (error, response) => {
        if (error) {
            callback('Unable to connect to weather service!')
        } else if (response.body.error) {
            callback('Unable to find location')

        } else {
            callback(undefined, response.body.current.weather_descriptions[0] +
                '. It is currently ' + response.body.current.temperature +
                ' degrees. It feels like ' + response.body.current.feelslike +
                ' degrees')
        }
    })
}

module.exports = forecast

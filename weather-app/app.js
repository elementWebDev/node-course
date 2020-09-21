const request = require('request')

const url = 'http://api.weatherstack.com/current?access_key=e2e260996b1cb4ae50acbcf5faca050b&query=37.8267,-122.4233&units=f'

request({ url: url, json: true }, (error, response) => {
    // console.log(response.body.current);
    console.log(response.body.current.weather_descriptions[0] +
        '. It is currently ' + response.body.current.temperature +
        ' degrees. It feels like ' + response.body.current.feelslike + ' degrees.');
})

// Geocoding
// Address -> Lat/Long -> Weather

const geoUrl = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoiZWxlbWVudHdlYmRldiIsImEiOiJja2Y4bzFwemcwZTkyMnlvdG12a2RyZXZtIn0.rw_54GGCAxlnhDZ2IA6QKA&limit=1'

request({ url: geoUrl, json: true }, (error, response) => {
    console.log('latitude: ' + response.body.features[0].center[1] + ' longitude: ' + response.body.features[0].center[0])
})

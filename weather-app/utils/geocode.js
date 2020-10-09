const request = require('request')

const geocode = (address, callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address) + '.json?access_token=pk.eyJ1IjoiZWxlbWVudHdlYmRldiIsImEiOiJja2Y4bzFwemcwZTkyMnlvdG12a2RyZXZtIn0.rw_54GGCAxlnhDZ2IA6QKA&limit=1'

    request({ url: url, json: true }, (error, response) => {
        if (error) {
            callback('Unable to connect to location services!', undefined)
        } else if (response.body.features.length === 0) {
            callback('Unable to find location. Try another search.', undefined)
        } else {
            callback(undefined, {
                latitude: response.body.features[0].center[1],
                longitude: response.body.features[0].center[0],
                location: response.body.features[0].place_name
            })
        }
    })
}

module.exports = geocode



// const geocodeUrl = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoiZWxlbWVudHdlYmRldiIsImEiOiJja2Y4bzFwemcwZTkyMnlvdG12a2RyZXZtIn0.rw_54GGCAxlnhDZ2IA6QKA&limit=1'

// request({ url: geocodeUrl, json: true }, (error, response) => {
//     if (error) {
//         console.log('Unable to connect to location services')
//     } else if (response.body.features.length === 0) {
//         console.log('No matching results, please try another search.')

//     } else {
//         const latitude = response.body.features[0].center[1]
//         const longitude = response.body.features[0].center[0]
//         console.log(latitude + ', ' + longitude)
//     }
// })

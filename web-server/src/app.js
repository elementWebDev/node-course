const express = require('express')

const app = express()

// Send HTML
app.get('', (req, res) => {
    res.send('<h1>Weather</h1>')
})

// Send JSON data
// Can also send array of objects
app.get('/help', (req, res) => {
    res.send({
        name: 'Ivan',
        age: 40
    })
})

//
// Goal: Update routes
//
// 1. Setup about route to render a title with HTML
// 2. Setup a weather route to send back JSON
//  - Object with forecast and location strings
// 3. Test work by visiting both in the browser

app.get('/about', (req, res) => {
    res.send('<h1>About</h1>')
})

app.get('/weather', (req, res) => {
    res.send({
        forecast: 'Partly Cloudy with slight chance of rain.',
        location: 'Toronto, Canada'
    })
})

// listen to common development port
app.listen(3000, () => {
    console.log('Server is up on port 3000.')
})

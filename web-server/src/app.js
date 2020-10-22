const path = require('path')
const express = require('express')

const app = express()

const publicDirectoryPath = path.join(__dirname, "../public")

// customize server
app.use(express.static(publicDirectoryPath))

// Send JSON data
// Can also send array of objects


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

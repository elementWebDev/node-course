const path = require('path')
const express = require('express')

const app = express()

const publicDirectoryPath = path.join(__dirname, "../public")

// customize server
app.use(express.static(publicDirectoryPath))

// which templating engine to use
app.set('view engine', 'hbs')

// render index template
app.get('', (req, res) => {
    res.render('index', {
        title: 'Weather',
        name: 'Ivan Huddleston'
    })
})

app.get('/about', (req, res) => {
    res.render('about', {
        title: 'About Me',
        name: 'Ivan Huddleston'
    })
})

app.get('/help', (req, res) => {
    res.render('help', {
        title: 'Help',
        msg: 'We\'re here to help!'
    })
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

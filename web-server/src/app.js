const path = require('path')
const express = require('express')
const hbs = require('hbs')

const app = express()

// Define paths for Express config
const publicDirectoryPath = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname, '../templates/partials')

// Setup handlebars engine and views location
app.set('view engine', 'hbs')
app.set('views', viewsPath)
hbs.registerPartials(partialsPath)

// Setup static directory to serve
app.use(express.static(publicDirectoryPath))

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
        name: 'Ivan Huddleston',
        msg: 'We\'re here to help!'
    })
})

app.get('/weather', (req, res) => {
    if (!req.query.address) {
        return res.send({
            error: 'You must provide a search term'
        })
    }

    res.send({
        forecast: 'Partly Cloudy with slight chance of rain.',
        location: 'Toronto, Canada',
        address: req.query.address
    })
})

app.get('/products', (req, res) => {
    if (!req.query.search) {
        return res.send({
            error: 'You must provide a search term'
        })
    }

    console.log(req.query.search)
    res.send({
        products: []
    })
})

// 404 errors
app.get('/help/*', (req, res) => {
    res.render('404', {
        title: 'Help 404',
        errorMsg: 'Help article not found.',
        name: 'Ivan Huddleston'
    })
})

app.get('*', (req, res) => {
    res.render('404', {
        title: '404',
        errorMsg: 'Page not found.',
        name: 'Ivan Huddleston'
    })
})

// listen to common development port
app.listen(3000, () => {
    console.log('Server is up on port 3000.')
})

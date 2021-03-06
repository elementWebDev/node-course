const path = require('path')
const express = require('express')
const hbs = require('hbs')
const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')

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

// Render routes
app.get('', (req, res) => {
    res.render('index', {
        title: 'Weather',
        name: 'Ivan Huddleston'
    })
})

app.get('/about', (req, res) => {
    res.render('about', {
        title: 'About',
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
        res.send({
            error: 'Please provide a location'
        })
    } else {

        geocode(req.query.address, (error, { latitude, longitude, location } = {}) => {
			if (error) {
				return res.send({ error })
			}
			forecast(latitude, longitude, (error, forecastData) => {
				if (error) {
					return res.send({ error })
				}
				res.send({
                    forecast: forecastData,
                    location,
                    address: req.query.address
                })
			})
		})
    }
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

// Error Pages / Templates
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

// Listen to common development port
app.listen(3000, () => {
    console.log('Server is up on port 3000.')
})

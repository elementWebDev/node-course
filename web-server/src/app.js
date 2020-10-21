const express = require('express')

const app = express()

// What to do once getting to a specified route
app.get('', (req, res) => {
    res.send('Hello express!')
})

app.get('/help', (req, res) => {
    res.send('Help page')
})

app.get('/about', (req, res) => {
    res.send('About page')
})

app.get('/weather', (req, res) => {
    res.send('Current Weather')
})

// listen to common development port
app.listen(3000, () => {
    console.log('Server is up on port 3000.')
})

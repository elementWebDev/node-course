console.log('Client side javascript file is loaded!')

const weatherForm = document.querySelector('form')
const search = document.querySelector('input')

weatherForm.addEventListener('submit', (e) => {
    // prevent auto page reload
    e.preventDefault()

    const location = search.value

    fetch('http://localhost:3000/weather?address=' + location).then((response) => {
        response.json().then((weather) => {
            if (weather.error) {
                console.log(weather.error)
            } else {
                console.log(weather.location)
                console.log(weather.forecast)
            }
        })
    })
})

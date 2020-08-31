const fs = require('fs')
const book = {
    title: 'Bible',
    author: 'Heavenly Father'
}

// Convert object to JSON which requires string
const bookJSON = JSON.stringify(book)
console.log(bookJSON)

// Convert JSON string back to object
// which allows us to access the properties
const parsedData = JSON.parse(bookJSON)
console.log(parsedData.author)


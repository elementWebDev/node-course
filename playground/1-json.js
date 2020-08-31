const fs = require('fs')

// const book = {
//     title: 'Bible',
//     author: 'Heavenly Father'
// }

// const bookJSON = JSON.stringify(book)
// fs.writeFileSync('1-json.json', bookJSON)

// const dataBuffer = fs.readFileSync('1-json.json')
// const dataJSON = dataBuffer.toString()
// const data = JSON.parse(dataJSON)
// console.log(data.title)

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

//
// Challenge: Work with JSON and the file system
//
// 1. Load and parse the JSON data
// 2. Change the name and age property using your info
// 3. Stringify the changed object and overwrite the original data
// 4. Test your work by viewing the data in the JSON file




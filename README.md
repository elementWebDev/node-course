# Node Course

This is my code from the [The Complete Node.js Developer Course (3rd Edition)](https://www.udemy.com/course/the-complete-nodejs-developer-course-2/)

[Instructors Code on GitHub](https://github.com/andrewjmead/node-course-v3-code)

## 9. Importing Node.js Core Modules

```js
// load file system module, which needs to be stored in a variable
const fs = require('fs')

// fs.writeFileSync(file, data[, options])
// creates the file notes.txt and inserts data
fs.writeFileSync('notes.txt', 'This message and file was created by Node.js')

//
// Challenge: Append a message to notes.txt
//
// 1. Use appendFileSync to append to the file
// 2. Run the script
// 3. Check your work by opening the file and viewing the appended text

// fs.appendFileSync(path, data[, options])
fs.appendFileSync('notes.txt', ' This was appended to the file.')
```

## 10. Importing Your Own Files

How do you access a variable from another file?

`module.exports = variableName`

```nodejs
//
// Challenge: Define and use a function in a new file
//
// 1. Create a new file called notes.js
// 2. Create getNotes function that returns "Your notes..."
// 3. Export getNotes function
// 4. From app.js, load in and call the function printing message to console

// const add = require('./utils.js')
// const sum = add(4, -2)
// console.log(sum)

const getNotes = require('./notes.js')

const msg = getNotes()

console.log(msg)
```

# Node Course

This is my code from the [The Complete Node.js Developer Course (3rd Edition)](https://www.udemy.com/course/the-complete-nodejs-developer-course-2/)

[Instructors Code on GitHub](https://github.com/andrewjmead/node-course-v3-code)

[Node Course Guide (PDF)](file:///C:/Users/ewDev/Documents/udemy/The%20Complete%20Node.js%20Developer%20Course/PDF-Guide-Node-Andrew-Mead-v3.pdf)

Please note: **All npm packages with specific versions are used to follow along with the course.**

---

## Section 3: Node.js Module System (Notes App)

### 9. Importing Node.js Core Modules

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

### 10. Importing Your Own Files

How do you access a variable from another file? (files have their own scope)

`module.exports = variableName`

```js
//
// Challenge: Define and use a function in a new file
//
// 1. Create a new file called notes.js
// 2. Create getNotes function that returns "Your notes..."
// 3. Export getNotes function
// 4. From app.js, load in and call the function printing message to console
```

`app.js`

```js
const getNotes = require('./notes.js')

const msg = getNotes()

console.log(msg)
```

`notes.js`

```js
const getNotes = function () {
  return 'Your notes...'
}

module.exports = getNotes
```

### 11. Importing npm Modules

```js
const validator = require('validator') // npm module import
const getNotes = require('./notes.js') // local file - requires relative path

const msg = getNotes()
console.log(msg)


console.log(validator.isURL('https://example.com'))
```

### 12. Printing in Color

If you have a **package.json** file and no **node_modules** folder, simply use `npm install` (no package name argument) to install those modules.

```js
//
// Challenge: Use the chalk library in your project
//
// 1. Install version 2.4.1 of chalk
// 2. Load chalk into app.js
// 3. Use it to print the string "Success!" to the console in green
// 4. Test your work
//
// Bonus: Use docs to mess around with other styles. Make text bold and inversed.

const chalk = require('chalk')
const getNotes = require('./notes.js')

const msg = getNotes()
console.log(msg)


console.log(chalk.green.bold.inverse('Success!'))
```

### 13. Global npm Modules and nodemon

`nodemon` - monitors a file on save and automatically runs in the terminal

To install globally use `-g` flag

```sh
npm i nodemon@1.18.5 -g
```

## Section 4: File System and Command Line Args (Notes App)

### 14. Section Intro: File System and Command Line Args 1

Now throughout this section the focus is going to be on two main topics.

The first is the file system and the second our command line arguments the file system is going to allow us to store the user's note data and command line arguments are going to allow us to get input from the user.

### 15. Getting Input from Users

```js
// argv - arguement vector
console.log(process.argv[2])
// dumps all arguments to terminal


/*
the first two are always present:
1. executable path for node
2. current file path
[
  'C:\\Program Files\\nodejs\\node.exe',
  'C:\\Users\\ewDev\\Documents\\udemy\\node-course\\notes-app\\app.js',
  'Ivan'
]
*/
```

In the terminal we can use the third argument as a **command**:

```powershell
node app.js add
```

for example to add a user

app.js

```js
const command = process.argv[2]

console.log(process.argv)

if (command === 'add') {
  console.log('Adding note!')
} else if (command === 'remove') {
  console.log('Removing note!')
}
```

```bash
$ node app.js add --title="This is my title"
[
  'C:\\Program Files\\nodejs\\node.exe',
  'C:\\Users\\ewDev\\Documents\\udemy\\node-course\\notes-app\\app.js',
  'add',
  '--title=This is my title'
]
Adding note!
```

---

### 18. Storing Data with JSON

In this lesson, you’ll learn how to work with JSON. **JSON**, which stands for **JavaScript Object Notation**, is a lightweight data format. JSON makes it easy to store or transfer data. You’ll be using it in this application to store users notes in the file system.

#### Working with JSON

Since JSON is nothing more than a string, it can be used to store data in a text file or transfer data via an HTTP requests between two machines.

JavaScript provides two methods for working with JSON. The first is `JSON.stringify` and the second is `JSON.parse`.

`JSON.stringify` converts a JavaScript object into a JSON string, while `JSON.parse` converts a JSON string into a JavaScript object.

```javascript
constbook = {title:'Holy Bible', author:'Heavenly Father'}

// Covert JavaScript object into JSON string
constbookJSON =JSON.stringify(book)

// Covert JSON string into object
const bookObject = JSON.parse(bookJSON)
console.log(bookObject.title) // Print: Ego is the Enemy
```

JSON looks similar to a JavaScript object, but there are some differences. The most obvious is that all properties are wrapped in double-quotes. Single-quotes can’t be used here, as JSON only supports double-quotes. You can see this in the example JSON below.

`{"name":"Gunther","planet":"Earth","age":54}`

```javascript
const fs = require('fs')
const book = {
    title: 'Bible',
    author: 'Heavenly Father'
}

// Convert object to JSON which requires string
const bookJSON = JSON.stringify(book)
console.log(bookJSON)


// Convert JSON string back to object,
// which allows us to access the object properties

const parsedData = JSON.parse(bookJSON)
console.log(parsedData.author)
```

```javascript
const fs = require('fs')
// const book = {
//     title: 'Bible',
//     author: 'Heavenly Father'
// }

// const bookJSON = JSON.stringify(book)
// fs.writeFileSync('1-json.json', bookJSON)

const dataBuffer = fs.readFileSync('1-json.json')
console.log(dataBuffer) // output: <Buffer 7b 22 74 69 74 6c 65 22 3a 22 42 69 62 6c 65 22 2c 22 61 75 74 68 6f 72 22 3a 22 48 65 61 76 65 6e 6c 79 20 46 61 74 68 65 72 22 7d>
```

```javascript
// read file
const dataBuffer = fs.readFileSync('1-json.json')
// convert data to string
const dataJSON = dataBuffer.toString()
// parse data into object
const data = JSON.parse(dataJSON)
// accessed property
console.log(data.title)
```
![editor state](/img/editor-state-1.png)
Now we can work with data from a JSON object

<!-- left off: 11:29 -->

...

See:

local file:
[A PDF Reference for The Complete Node.js Dev Course v3.0](file:///C:/Users/ewDev/Documents/udemy/The%20Complete%20Node.js%20Developer%20Course/PDF-Guide-Node-Andrew-Mead-v3.pdf)

[A PDF Reference for The Complete Node.js Dev Course v3.0](https://github.com/elementWebDev/node-course/blob/master/Node-Course-v3.pdf)



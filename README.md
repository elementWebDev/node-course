# Node Course

[Instructors Code on GitHub](https://github.com/andrewjmead/node-course-v3-code)

## 9. Importing Node.js Core Modules

```js
const fs = require('fs')

// fs.writeFileSync('notes.txt', 'My name is Ivan.')

// fs.appendFileSync('notes.txt', 'I live in Oregon.') // I did not include space



//
// Challenge: Append a message to notes.txt
//
// 1. Use appendFileSync to append to the file
// 2. Run the script
// 3. Check your work by opening the file and viewing the appended text

fs.appendFileSync('notes.txt', ' I live in Oregon.')

//
// Output inside notes.txt:
// My name is Ivan. I live in Oregon.
//
```

## 10. Importing Your Own Files

How do you access a variable from another file?

`module.exports = variableName`

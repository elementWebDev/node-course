const fs = require('fs')

const chalk = require('chalk')

const getNotes = function () {
  return 'Your notes...'
}

// Add note
const addNote = function (title, body) {
    const notes = loadNotes()
    const duplicateNotes = notes.filter(function (note) {
        return note.title === title
    })
    // Check for duplicates
    if (duplicateNotes.length === 0) {
        notes.push({
            title: title,
            body: body
        })
        saveNotes(notes)
        console.log(chalk.green.inverse('New note added!'))
    } else {
        console.log(chalk.red.inverse('Note title taken!'))
    }
}

// Remove Note
const removeNote = function (title) {
    const notes = loadNotes()
    const notesToKeep = notes.filter(function (note) {
        return note.title !== title
    })

    if (notes.length > notesToKeep.length) {
        console.log(chalk.green.inverse('Note removed!'))
        saveNotes(notesToKeep)
    } else {
        console.log(chalk.red.inverse('No note found!'))
    }
}

// Save notes to file
const saveNotes = function (notes) {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)
}

// Load notes from file
const loadNotes = function () {
    try {
        // Convert file to string, then parse for use as object
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    } catch (e) {
        // If error found return empty array
        return []
    }
}

// Export variables to be used in other files
module.exports = {
    getNotes: getNotes,
    addNote: addNote,
    removeNote: removeNote
}

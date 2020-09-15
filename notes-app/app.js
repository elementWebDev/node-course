const chalk = require('chalk')
const yargs = require('yargs')
const notes = require('./notes.js')

//
// Goal: Wire up read command
//
// 1. Setup --title option for read command
// 2. Create readNote in notes.js
//  - Search for note by title
//  - Find note and print title (styled) and body (plain)
// - No note found? Print error in red
// 3. Have the command handler call the function
// 4. Test your work by running a couple commands

// Customize yargs
yargs.version('1.1.0')

// Create add command
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string' // default is boolean
        },
        body: {
            describe: 'Body text',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        notes.addNote(argv.title, argv.body)
    }
}),

// Create remove command
yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        notes.removeNote(argv.title)
    }
})

// Create list command
yargs.command({
    command: 'list',
    describe: 'List notes',
    handler(argv) {
        notes.listNotes(argv.title)
    }
})

// Create read command
yargs.command({
    command: 'read',
    describe: 'Read notes',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        notes.readNote(argv.title)
    }
})

yargs.parse()

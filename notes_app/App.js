const validator = require('validator')
const chalker = require('chalk')
const notes = require('./Notes_App')

console.log('After loading module')
const yargs = require('yargs')
const list_notes = require('./Notes_App')

// Remove notes command
yargs.command({
	command: 'list',
	describe: 'lists all Notes',
	// Function for your command
	handler(argv) {
		console.log(list_notes())
	}
})

// Create add command
yargs.command({
	command: 'add',
	describe: 'Add New Note',
	builder: {
		Title: {
			describe: 'Note for Title ',
			demandOption: true, // Required
			type: 'string'	
		},
		Body: {
			describe: 'Note for Body',
			demandOption: true,
			type: 'string'
		}
	},
	// Function for your command
	handler(argv) {
		console.log(notes.add_notes(argv.Title,argv.Body))
	}
})

// Remove notes command
yargs.command({
	command: 'remove',
	describe: 'Remvoe Note',
	builder: {
		Title: {
			describe: 'Note for Title',
			demandOption: true, // Required
			type: 'string'	
		}	
    },

	// Function for your command
	handler(argv) {
		console.log(notes.remove_notes(argv.Title))
	}
})


//set above changes to save
yargs.parse()
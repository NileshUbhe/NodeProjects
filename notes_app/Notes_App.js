const fs = require('fs') ;
const { listeners } = require('process');
const { json } = require('stream/consumers');

// const userBuffer = fs.readFileSync ('message.txt');
// const userJsonObj = userBuffer.toString();
// console.log(userJsonObj)
// const Users = JSON.parse(userJsonObj);
// Users[0].name = 'Nilesh';
// console.log(Users)
// fs.writeFileSync('message.txt',JSON.stringify(Users))

const list_notes = function list_notes()
{
    console.log('Call from list notes')
    try
    {
    const notes_buffer = fs.readFileSync('notes.txt') ;
    const notesjson = JSON.parse(notes_buffer.toString());
    return notesjson
    }
    catch(e)
    {
        return []
    }


}

const add_notes = function add_notes(title,body)
{
    console.log('Add notes function')
    const note = {
        'name':title,
        'body':body 
    }
    const notes_collection = list_notes() ;
    notes_collection.push(note)
    fs.writeFileSync('notes.txt',JSON.stringify(notes_collection))
}

const remove_notes = function remove_notes(title)
{
    const notes = list_notes();
    const notestokeep = notes.filter((note) => note.name !== title)
    fs.writeFileSync('notes.txt',JSON.stringify(notestokeep))
    console.log('Removed note '+  title)
}
 
module.exports = {
    add_notes: add_notes,
    list_notes: list_notes,
    remove_notes:remove_notes
}

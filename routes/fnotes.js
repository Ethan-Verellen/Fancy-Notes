const fnotes = require('express').Router();
const { readFromFile, writeToFile, readAndAppend } = require('../helpers/fsUtils');
const { v4:uuidv4 }=require('uuid');

fnotes.get('/', (req, res) => {
    readFromFile('./db/db.json').then((data)=>res.json(JSON.parse(data)));
});

fnotes.post('/', (req, res) => {

    const { title, text } = req.body;

    if (title && text) {
        const newNote = {
        title,
        text,
        id: uuidv4(),
        };

        readAndAppend(newNote, './db/db.json');
        res.json(`New note added`);
    } else {
        res.error('Error in making the note')
    }

});

module.exports = fnotes;
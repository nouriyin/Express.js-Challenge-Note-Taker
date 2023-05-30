const notes = require('express').Router();
const { readFromFile, readAndAppend } = require('../helpers/fsUtils');
const { v4: uuidv4 } = require('uuid');

notes.get('/', (req, res) => {
    readFromFile('./db/db.json').then((data) => res.json(JSON.parse(data)));
});

notes.post('/', (req, res) => {
    console.log(req.body);

    const { title, text } = req.body;

    if (req.body) {
        const newNote = {
           title,
           text,
            id: uuidv4(),
        };

        const data= readAndAppend(newNote, './db/tips.json');
        res.json(data);
    } else {
        res.error('Error in adding note');
    }
});

module.exports = notes;
let notes = require("../db/db.json");

module.exports = function(app) {

    var path = require('path')

    app.get('/api/notes', (req, res) => {
        console.log("Notes", notes);
        res.json(notes)
    })
    
     app.post('/api/notes', (req, res) => {
         console.log('stuff from the form', req.body)
         req.body.id = notes.length + 1
         notes.push(req.body)
         res.json(notes)
         
     })

    app.delete('/api/notes/:id', (req, res) => {
        console.log('delete stuff from the form', req.params)

        const newNotes = []

        for (let i = 0; i < notes.length; i++) {
          if(notes[i].id != parseInt(req.params.id) ) {
            newNotes.push(notes[i])
          }
        }

        notes = newNotes
        console.log('notes after we overwrote it!!', notes)

        res.json(notes)
    })


}

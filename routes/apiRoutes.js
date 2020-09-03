const fs = require("fs");
const { v4: uuidv4 } = require('uuid');

let savedNote = [];

fs.readFile("../db/db.json", (err, data) => {
    if (err) throw err;
    res.json(JSON.parse(data));
});

editNote = () => {
    fs.writeFile("../db/db.json", JSON.stringify(savedNote), (err) => {
        if (err) throw err;
    });
}



module.exports = function (app) {

    app.get("/api/notes", (req, res) => {
        res.json(savedNote);
      });
}
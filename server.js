const express = require("express");

const app = express();
const PORT = process.env.PORT  || 6060



app.listen(PORT, function () {
    console.log('App listening on PORT ' + PORT);
});
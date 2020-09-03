// Dependencies
const express = require("express");

// Creating "express" server and setting inital port
const app = express();
const PORT = process.env.PORT  || 6060

// Sets up express app to handle parsing of data
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

// require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);


//Listener
app.listen(PORT, function () {
    console.log('App listening on PORT ' + PORT);
});
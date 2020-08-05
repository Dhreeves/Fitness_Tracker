
//jshint esversion:6

const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");
const path = require("path");

const PORT = process.env.PORT || 5000;
const app = express();

app.use(morgan("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

var MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost/workout';
mongoose.connect(MONGODB_URI, {
    useUnifiedTopology: true,
    useNewUrlParser: true,

});

require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);



app.listen(PORT, () => {
    console.log(`App listening on Port ${PORT}`);
});




// import files and packages up here
const express = require('express');
const topSpots = require('./data');
const morgan = require('morgan');

// create your express server below
const app = express();

// add your routes and middleware below
app.use(morgan('dev'));


app.get('/', function(req, res) {
    res.status(200).send('Is this this on?');
});

app.get('/data', function(req, res) {
    res.json(topSpots);
})

// finally export the express application
module.exports = app;
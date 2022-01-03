const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const Languages = require('../models/languages');

mongoose.connect('mongodb://localhost:27017/indo-aryan', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
    console.log("Database connected");
});

const app = express();

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.send('home');
});


app.get('/search/:english', async (req, res,) => {
    Languages.findOne({ english: req.params.english }, function (err, result) {
        if (err) {
            console.log(err);
        }
        else {
            res.send(result);
        }
    });
});

app.get('/top/:english', async (req, res,) => {
    const result = await Languages.find({ english: { $regex: req.params.english } }).limit(5);
    console.log(result);
    res.send( result );
});

app.listen(3001, () => {
    console.log('Serving on port 3001')
})
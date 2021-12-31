const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const Languages = require('./models/languages');

mongoose.connect('mongodb://localhost:27017/indo-aryan-test', {
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
    res.render('home');
});

app.get('/add-loop', async (req, res,) => {
    let English = require('./words/english.js').english;
    let Hindi = require('./words/hindi.js').hindi;
    for (let i = 0; i < 1000; i++) {
        const languages = new Languages({
            english: English[i],
            hindi: Hindi[i]
        });
        await languages.save();
        console.log(languages);
    }
});

app.get('/search/:english', async (req, res,) => {
    Languages.findOne({ english: req.params.english }, function (err, result) {
        if (err) {
            console.log(err);
        }
        else {
            res.render('home', { result });
            console.log(result);
        }
    });
});

app.get('/top-5-search/:english', async (req, res,) => {
    const languages = await Languages.find({ english: { $regex: req.params.english } }).limit(5);
    console.log(languages);
});

app.listen(3000, () => {
    console.log('Serving on port 3000')
})
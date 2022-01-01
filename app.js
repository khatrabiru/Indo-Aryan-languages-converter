const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const Languages = require('./models/languages');

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
    res.render('home');
});

app.get('/add-loop', async (req, res,) => {
    let English = require('./words/english.js').english;
    let Hindi = require('./words/hindi.js').hindi;
    let Nepali = require('./words/nepali.js').nepali;
    let Urdu = require('./words/urdu.js').urdu;
    let Bengali = require('./words/bengali.js').bengali;
    let Gujarati = require('./words/gujarati.js').gujarati;
    let Marathi = require('./words/marathi.js').marathi;
    let Punjabi = require('./words/punjabi.js').punjabi;

    // console.log(English.length);
    // console.log(Hindi.length);
    // console.log(Nepali.length);
    // console.log(Bengali.length);
    // console.log(Punjabi.length);
    // console.log(Gujarati.length);
    // console.log(Marathi.length);
    // console.log(Urdu.length);


    for (let i = 0; i < English.length; i++) {
        const languages = new Languages({
            english: English[i],
            hindi: Hindi[i],
            urdu: Urdu[i],
            bengali: Bengali[i],
            punjabi: Punjabi[i],
            marathi: Marathi[i],
            gujarati: Gujarati[i],
            nepali: Nepali[i]
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
    // res.render('home', { result });
    console.log(languages);
});

app.listen(3000, () => {
    console.log('Serving on port 3000')
})
if (process.env.NODE_ENV !== "production") {
    require('dotenv').config();
}

const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const Languages = require('./models/languages');
const dbUrl = String(process.env.DB_URL);
// const dbUrl = 'mongodb://localhost:27017/indo-aryan';

mongoose.connect(dbUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true
},
    () => {
        console.log('Connected to MongoDB');
    }
);

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
    console.log("Database connected");
});

const app = express();

app.set('view engine', 'ejs');

// Add headers before the routes are defined
app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', '*');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});

app.get('/', (req, res) => {
    res.send('home');
});


app.get('/search/:word', async (req, res,) => {
    const word = String(req.params.word).toLowerCase();
    Languages.findOne({
        $or: [
            { english: { $regex: word } },
            { hindi: { $regex: word } },
            { urdu: { $regex: word } },
            { bengali: { $regex: word } },
            { punjabi: { $regex: word } },
            { marathi: { $regex: word } },
            { gujarati: { $regex: word } },
            { nepali: { $regex: word } }
        ]
    }, function (err, result) {
        if (err) {
            console.log(err);
        }
        else {
            res.send(result);
        }
    });

});

app.get('/top/:english', async (req, res,) => {
    const word = String(req.params.english).toLowerCase();
    const result = await Languages.find({
        $or: [
            { english: { $regex: word } },
            { hindi: { $regex: word } },
            { urdu: { $regex: word } },
            { bengali: { $regex: word } },
            { punjabi: { $regex: word } },
            { marathi: { $regex: word } },
            { gujarati: { $regex: word } },
            { nepali: { $regex: word } }
        ]
    }).limit(5);
    res.send(result);
});

const port = process.env.PORT || 3001;

app.listen(port, () => {
    console.log(`Serving on port ${port}`)
})